# Project screenshots

Drop a PNG or JPG here named after the project slug, e.g.:

    gta-roofing-estimates.png
    trayce.png
    nhl-props-model.png
    nfl-predictions.png
    microcontroller-casino.png

Slugs are defined in `content/projects.ts`. The path is already wired up for the
projects listed above — adding the file is all that's needed; no code change.

To add an image for a project not listed, set `image` and `imageAlt` on its entry
in `content/projects.ts`.

Guidance:
- 16:9 works best (the card and case-study frames both use that ratio).
- 1600x900 or larger. They're served through next/image, so they get optimized.
- Show the product doing its job, not a logo or a landing page.
