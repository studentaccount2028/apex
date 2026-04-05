const fs = require('fs');

function clean(text) {
    if (!text) return "";
    return text
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/[\u201C\u201D]/g, '"')
        .replace(/[\u2013\u2014]/g, "-")
        .replace(/\r/g, "")
        .trim();
}

function parseModule(block) {
    const data = { hook: "", terms: [], sections: [], quiz: [] };

    // 1. HOOK
    const hookMatch = block.match(/l-hook block[^\n]*\n"([\s\S]*?)"/);
    if (hookMatch) data.hook = clean(hookMatch[1]);

    // 2. TERMS
    const termsBlock = block.match(/Module Terms\nTerm\nDefinition\n([\s\S]*?)(?=\nSection \d)/);
    if (termsBlock) {
        const lines = termsBlock[1].split('\n').filter(l => l.trim());
        for (let i = 0; i + 1 < lines.length; i += 2) {
            const w = clean(lines[i]);
            const d = clean(lines[i + 1]);
            if (w && d) data.terms.push({ w, d });
        }
    }

    // 3. SECTIONS
    const sectionRegex = /Section \d+\.\d+\s*[—-]\s*(.*?)\n([\s\S]*?)(?=(?:Section \d+\.\d+|Module \d+ (?:Quiz|Mini Case)|MODULE \d+|$))/g;
    let match;
    while ((match = sectionRegex.exec(block)) !== null) {
        const h = clean(match[1]);
        const raw = match[2];
        const body = clean(raw
            .replace(/^Situation\n/gm, "")
            .replace(/^Teaching Content[:\s]*/gm, "")
            .replace(/^l-formula block:\n/gm, "")
            .replace(/^l-callout block: Label: (.*?)\n/gm, "[$1]\n")
            .replace(/^l-example block: Label: (.*?)\n/gm, "[EXAMPLE: $1]\n")
            .replace(/^l-list:\n/gm, "")
        );
        if (h && body.length > 5) {
            data.sections.push({ h, body });
        }
    }

    // 4. MINI CASE — append to last section
    const miniCase = block.match(/Module \d+ Mini Case\n([\s\S]*?)(?=MODULE \d+|$)/);
    if (miniCase && data.sections.length > 0) {
        const caseBody = clean(miniCase[1]
            .replace(/^l-example block: Label: (.*?)\n/gm, "[EXAMPLE: $1]\n")
            .replace(/^l-formula block:\n/gm, "")
        );
        data.sections[data.sections.length - 1].body += "\n\n" + caseBody;
    }

    // 5. QUIZ — options are on ONE line separated by "A) B) C) D)"
    const quizBlock = block.match(/Module \d+ Quiz\n([\s\S]*?)(?=MODULE \d+|$)/);
    if (quizBlock) {
        const quizText = quizBlock[1];
        const ansMap = { A: 0, B: 1, C: 2, D: 3 };

        // Split into individual question blocks
        const qBlocks = quizText.split(/\nQuestion \d+/).filter(b => b.trim());

        qBlocks.forEach(qb => {
            // Question text is everything before the options line
            // Options line starts with "A)"
            const optLineMatch = qb.match(/^([\s\S]*?)\nA\) ([\s\S]*?)\nAnswer:\s*([A-D])[\s\-|]+([\s\S]*?)$/);
            if (!optLineMatch) return;

            const qText = clean(optLineMatch[1].replace(/^[^:]+:\s*/, ""));
            const optsRaw = optLineMatch[2];
            const ansLetter = optLineMatch[3];
            const exp = clean(optLineMatch[4]);

            // Split options: "Strong performance... B) Revenue growth... C) No concern... D) This is..."
            const opts = [];
            const optParts = optsRaw.split(/\s+[B-D]\)\s+/);
            // First part is A's text, rest are B, C, D
            optParts.forEach(o => opts.push(clean(o)));

            if (qText && opts.length === 4) {
                data.quiz.push({ q: qText, opts, ans: ansMap[ansLetter], exp });
            }
        });
    }

    // 6. PATTERN DRILLS — fs_m5
    const drillBlock = block.match(/Section \d+\.\d+ — Rapid-Fire Pattern Drills\n([\s\S]*?)(?=MODULE \d+|$)/);
    if (drillBlock) {
        const drillText = drillBlock[1];
        const drillRegex = /Drill \d+: ([\s\S]*?)\nModel Answer: ([\s\S]*?)(?=\nDrill \d+|$)/g;
        let dMatch;
        while ((dMatch = drillRegex.exec(drillText)) !== null) {
            data.quiz.push({ q: clean(dMatch[1]), opts: [], ans: 0, exp: clean(dMatch[2]) });
        }
    }

    // 7. CASE QUESTIONS — fs_m6
    const caseBlock = block.match(/PART A: STATEMENT READING\n([\s\S]*?)(?=PART B:|MODULE \d+|$)/);
    if (caseBlock) {
        const caseText = caseBlock[1];
        const caseRegex = /Q\d+ — (.*?)\nGuided answer framework:\n([\s\S]*?)(?=Q\d+|$)/g;
        let cMatch;
        while ((cMatch = caseRegex.exec(caseText)) !== null) {
            data.quiz.push({ q: clean(cMatch[1]), opts: [], ans: 0, exp: clean(cMatch[2]) });
        }
    }

    return data;
}

try {
    const raw = fs.readFileSync('source.txt', 'utf8');
    const blocks = raw.split(/(?=\nMODULE \d+ — )/);
    const output = {};

    blocks.forEach(block => {
        const idMatch = block.match(/Lesson ID:\s*(\w+)/);
        if (!idMatch) return;
        const id = idMatch[1];
        let parsed = parseModule(block);

        // Strip appendix from fs_m7
        if (id === 'fs_m7') {
            parsed.sections = parsed.sections.map(s => ({
                ...s,
                body: s.body.split('\nAPPENDIX')[0].trim()
            }));
        }

        output[id] = parsed;
    });

    const outputName = process.argv[2] || 'output.json';
fs.writeFileSync(outputName, JSON.stringify(output, null, 2));
console.log(`SUCCESS: ${Object.keys(output).length} modules written to ${outputName}`);
console.log('IDs:', Object.keys(output).join(', '));

} catch (err) {
    console.error("ERROR:", err.message);
}