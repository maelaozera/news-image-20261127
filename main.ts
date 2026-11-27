// news-image-20261127: copy the day's news image to the output directory.
// The entry is a single pre-rendered image (entry.png) summarising the
// world news of Friday 27 November 2026. This program only copies it, so
// both runs produce byte-identical output. Node 22, standard library only.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`entry image not found: ${source}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Verify the copy is complete: it must be the same size as the source
// and within the competition's 1 MiB limit for the image.
const copiedBytes = statSync(target).size;
const sourceBytes = statSync(source).size;
if (copiedBytes !== sourceBytes) {
  throw new Error(`copy incomplete: ${copiedBytes} of ${sourceBytes} bytes`);
}
if (copiedBytes > 1048576) {
  throw new Error(`entry image exceeds 1 MiB: ${copiedBytes} bytes`);
}
console.log(`Wrote ${target} (${copiedBytes} bytes)`);
