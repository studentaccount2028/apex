const fs = require('fs');
const path = require('path');

function clean(text) {
    if (!text) return "";
    return text
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/[\u201C\u201D]/g, '"')
        .replace(/[\u2013\u2014]/g, "-")
        .replace(/\r/g, "")
        .trim();
}

function cleanBody(raw) {
    return clean(raw
        .replace(/^Situation\n/gm, "")
        .replace(/^Teaching Content[:\s]*/gm, "")
        .replace(/^l-formula block:\n/gm, "")
        .replace(/^l-callout block: Label: (.*?)\n/gm, "[$1]\n")
        .replace(/^l-example block: Label: (.*?)\n/gm, "[EXAMPLE: $1]\n")
        .replace(/^l-table block:\n/gm, "")
        .replace(/^l-table:\n/gm, "")
        .replace(/^l-list:\n/gm, "")
    );
}

function parseLesson(block) {
    const data = { hook: "", terms: [], sections: [], quiz: [] };

    // 1. HOOK
    const hookMatch = block.match(/l-hook block[^\n]*\n"([\s\S]*?)"/);
    if (hookMatch) data.hook = clean(hookMatch[1]);

    // 2. TERMS (per-lesson terms block)
    const termsBlock = block.match(/Lesson Terms\nTerm\nDefinition\n([\s\S]*?)(?=\n\nSection \d)/);
    if (termsBlock) {
        const lines = termsBlock[1].split('\n').filter(l => l.trim());
        for (let i = 0; i + 1 < lines.length; i += 2) {
            const w = clean(lines[i]);
            const d = clean(lines[i + 1]);
            if (w && d) data.terms.push({ w, d });
        }
    }

    // 3. SECTIONS — split on section headers to avoid $ lookahead issues with m flag
    // First isolate content before quiz
    const quizStartIdx = block.search(/^Lesson \d+ Quiz/m);
    const contentBlock = quizStartIdx > -1 ? block.slice(0, quizStartIdx) : block;

    const sectionPieces = contentBlock.split(/^(?=Section \d+\.\d+ — )/m);
    for (const piece of sectionPieces) {
        const headerMatch = piece.match(/^Section \d+\.\d+ — (.+)\n([\s\S]*)/);
        if (!headerMatch) continue;
        const h = clean(headerMatch[1]);
        const body = cleanBody(headerMatch[2]);
        if (h && body.length > 5) {
            data.sections.push({ h, body });
        }
    }

    // 4. QUIZ — extract only the quiz block (not trailing file content)
    const quizText = quizStartIdx > -1 ? block.slice(quizStartIdx) : '';
    if (quizText) {
        const ansMap = { A: 0, B: 1, C: 2, D: 3 };

        // Split into individual question blocks on "Question N" markers
        const qBlocks = quizText.split(/\nQuestion \d+[^:]*:/).filter(b => b.trim());

        qBlocks.forEach(qb => {
            const parts = qb.match(/^([\s\S]*?)\nA\) (.*?)\nAnswer:\s*([A-D])\s*\|?\s*(?:Explanation:\s*)?(.*?)(?=\n\n|\nQuestion \d+|$)/s);
            if (!parts) return;

            const qText = clean(parts[1]);
            const optsRaw = parts[2];
            const ansLetter = parts[3];
            const exp = clean(parts[4]);

            // Split options: A text, then B) C) D) markers
            const opts = [];
            const optParts = optsRaw.split(/\s+[B-D]\)\s+/);
            optParts.forEach(o => opts.push(clean(o)));

            if (qText && opts.length === 4) {
                data.quiz.push({ q: qText, opts, ans: ansMap[ansLetter], exp });
            }
        });
    }

    return data;
}

try {
    const srcDir = path.join(__dirname, '..', 'source');
    const outDir = path.join(__dirname, '..', 'data');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

    const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.txt'));
    if (files.length === 0) {
        console.error("No .txt files found in source/");
        process.exit(1);
    }

    const outputName = process.argv[2] || 'module_ib.json';
    const output = {};

    for (const file of files) {
        const raw = fs.readFileSync(path.join(srcDir, file), 'utf8');

        // Split on LESSON headers
        const lessonBlocks = raw.split(/(?=^LESSON \d+ — )/m).filter(b => b.trim());

        for (const block of lessonBlocks) {
            const idMatch = block.match(/Lesson ID:\s*(\w+)/);
            if (!idMatch) continue;
            const id = idMatch[1];
            output[id] = parseLesson(block);
        }

        console.log(`Parsed: ${file}`);
    }

    const outPath = path.join(outDir, outputName);
    fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
    console.log(`\nSUCCESS: ${Object.keys(output).length} lessons written to data/${outputName}`);
    console.log('IDs:', Object.keys(output).join(', '));

} catch (err) {
    console.error("ERROR:", err.message);
}
