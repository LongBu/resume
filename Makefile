# Define variables
PIPENV = pipenv
PYTHON = $(PIPENV) run python
RENDER_SCRIPT = render.py
LATEX ?= docker run --rm -v "$(CURDIR):/data" fbenz/pdflatex pdflatex

.PHONY: all render pdf yamllint

all: pdf

# Render the resume
render:
	npm run build:icons
	$(PYTHON) $(RENDER_SCRIPT)
	npm run build:css

# Generate PDF files
pdf: render
	$(LATEX) resume.tex
	mv resume.pdf "Long, Jeff - Resume.pdf"

# Lint YAML files
yamllint:
	$(PIPENV) run yamllint resume_common.yaml

