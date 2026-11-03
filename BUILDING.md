# Building the résumé

Edit `resume_common.yaml` for résumé content and the `.j2` files for presentation.

Install Python 3.15 and a Python 3.15 compatible Pipenv (verified with
Pipenv 2026.10.5). Install the locked Python dependencies with `pipenv sync`
and frontend build dependencies with `npm ci`. Run `make render` to copy the selected Lucide icons, render the
HTML, Markdown, and LaTeX outputs, and compile the Tailwind stylesheet.

The generated `assets/resume.css` and icon files are checked in so the page can
be opened directly without a build step or CDN connection. After changing
Tailwind classes, regenerate the CSS with `npm run build:css`. After updating
Lucide, regenerate icons with `npm run build:icons` and render the page again.

Run `make pdf` (or `make`) to render all outputs and then generate the downloadable
PDF with Docker. With Tectonic installed locally, use `make pdf LATEX=tectonic`.
PDF generation waits for rendering even when running `make -j`.
The PDF contact line uses `pdf_location`, followed by a normal nonbreaking space
and the email address.
