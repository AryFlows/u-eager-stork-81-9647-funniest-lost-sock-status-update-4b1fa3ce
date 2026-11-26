import { mkdirSync, writeFileSync } from "node:fs";

// A lost sock files its status update: one line, 120 characters at most.
const line = "Day 47 behind the fridge: the dust bunnies crowned me their king. I miss my pair, but honestly, the crown fits.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line);
