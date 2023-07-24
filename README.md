## Site URL's (Try it Yourself!)

- **https://solderq35.github.io**
- **https://jeff-huang.vercel.app/**

## About

Lightweight, mobile-friendly portfolio site based on [this template](https://github.com/mmeurer00/react-navbar-tailwindcss) from Maxine Meurer.

I've made modifications to the navbar and added a projects page.

## Files to Edit / Resume Tips

- Edit the file in `public/resume.pdf` to be your own resume
  - If you need a resume format, see: https://www.overleaf.com/read/jxnmjmzktxrh (make your own copy on Overleaf)
- Edit `src/Pages/index.js` to cover your own personal details
- Edit `src/Pages/contact.js` to cover your own social media profiles (Linkedin, Github, etc)
- Edit `src/Pages/projects.js` to match your own personal projects
- Edit `src/Navigation/Navbar.js` to have your social media links etc.
- You may want to make further edits to the styling or add pages, use your imagination! In general, see:
  - https://tailwindcss.com/
  - https://react.dev/learn

## Site Setup

It probably doesn't matter, but just in case, I am on nodeJS version `16.20.0` (run `node -v` in terminal to check). You can change nodeJS versions easily with [nvm for Unix](https://github.com/nvm-sh/nvm) or [nvm for Windows](https://github.com/coreybutler/nvm-windows)

`npm install`

- Installs dependencies

`npm start`

- Runs the app in the development mode, launches at [http://localhost:3000](http://localhost:3000)

`npm run prettier`

- Formats code

## Deployment

Host on a frontend webhost of your choice. In this case I'm using Github Pages and Vercel.

- For Github Pages, see the `.github/workflows/gh-pages.yaml` file
- For Vercel, I just used the default settings (output directory in `build`)
  - For some reason, the `gh-pages` branch (the branch for actual deployment onto Github Pages) also triggers Vercel Preview deployments
    - Please ignore this, the "failed" preview deployment for `gh-pages` branch doesn't mean anything. Due to how I configured the github actions workflow file, by the time `gh-pages` branch has deployed, the app is production ready and preview deployments are redundant
    - See: https://github.com/solderq35/solderq35.github.io/pull/13 and https://github.com/solderq35/solderq35.github.io/pull/15
