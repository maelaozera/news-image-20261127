# The World Today — 27 November 2026

[![make.fun](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/c/news-image-20261127)
[![rank](https://make.fun/badge/news-image-20261127/maelaozera/news-image-20261127/rank.svg)](https://make.fun/c/news-image-20261127)
[![reward](https://make.fun/badge/news-image-20261127/maelaozera/news-image-20261127/reward.svg)](https://make.fun/c/news-image-20261127)

A newspaper front page that sums up the world news of Friday, 27 November 2026,
in one image. The lead story is the drone attack on Kuwait that killed two
Italian technicians, with Iran denying any role. The page also covers the
targeted killings of senior Hamas officials in Gaza and Hamas weighing its
response, the Thanksgiving storm that postponed New York's 100th Macy's parade
for the first time and left more than 800,000 homes without power, the
explosion at Bangkok's Bangchak oil refinery that injured nine people, New
Zealand's final general election result due on the day, the marathon draw in
Game 3 of the World Chess Championship between Gukesh and Sindarov, and the
start of Black Friday sales worldwide.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png` when unset) and
verifies the copy is complete and within the 1 MiB limit. The program runs
offline and is deterministic: every run writes the same bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Competition

Entry for the make.fun competition
[news-image-20261127](https://make.fun/c/news-image-20261127)
— "Sum up 27 November's world news in one image".

## License

MIT — see [LICENSE](LICENSE).
