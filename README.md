# Stimulus Training Example

## 👀 Description

This project is intended as an exercise project to get familiar with using [Stimulus](https://stimulus.hotwired.dev/). The project is built within an Astro framework, though the `html` and `js` written here would be similar to most other frameworks.

## 🎉 Getting Started

- The DOM markup for the page can be found at `src/pages/index.astro`
- The Stimulus Controller scaffolding and comments can be found at `src/scripts/controllers/password-validation_controller.js`
- Reference the [Stimuls Docs](https://stimulus.hotwired.dev/reference/controllers) as necessary or view a completed solution in the [solution](https://github.com/ekfuhrmann/stimulus-training/tree/solution) branch of this project.

## ✅ Objective

Using stimulus, add the following form validation:

- Validate the length of the password field (8-32 characters)
- Validate that the password has at least 1 uppercase character
- Validate that the password has at least 1 number
- Validate that the password has at least 1 special character
- Validate that the password and password confirmation fields match when filled
- The form `submit` button should be `disabled` until all fields validate.

![pw](https://github.com/ekfuhrmann/stimulus-training/assets/8878152/8ff8aaba-fced-4c77-8342-a664a69b1232)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
