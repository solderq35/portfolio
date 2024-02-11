## Site URL's (Try it Yourself!)

- **https://solderq35.github.io**
- **https://jeff-huang.vercel.app/**
- **https://jeffhuang.dev/**

## About

Lightweight, mobile-friendly portfolio site based on [this template](https://github.com/mmeurer00/react-navbar-tailwindcss) from Maxine Meurer.

I've made modifications to the navbar and added a projects page.

## Files to Edit / Resume Tips

- Edit the file in `public/resume.pdf` to be your own resume
  - If you need a resume format, see: https://www.overleaf.com/read/jxnmjmzktxrh (make your own copy on Overleaf)
- Edit `src/Pages/index.js` to match your portfolio and projects. This is the main / default landing page of your site, so focus effort here
- Edit `src/Pages/contact.js` to cover your own social media profiles (Linkedin, Github, etc)
  - React SVG Icons: https://reactsvgicons.com/
- Edit `src/Navigation/Navbar.js` to have your social media links etc.
- You may want to make further edits to the styling or add pages, use your imagination! In general, see:
  - https://tailwindcss.com/
  - https://react.dev/learn

## Site Setup

It probably doesn't matter, but just in case, I am on nodeJS version `18` (run `node -v` in terminal to check). You can change nodeJS versions easily with [nvm for Unix](https://github.com/nvm-sh/nvm) or [nvm for Windows](https://github.com/coreybutler/nvm-windows)

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
  - To prevent deployments to GitHub Pages (`gh-pages` branch) from triggering Vercel preview deployments (if applicable), set these settings in Vercel Project Settings > Git:
    - Go to "Ignored Build Step", then enter `bash -c 'if [[ $VERCEL_GIT_COMMIT_REF != "gh-pages" ]]; then exit 1; fi'`
    - More info:
      - https://github.com/vercel/vercel/issues/3166#issuecomment-1508928585
      - https://vercel.com/guides/how-do-i-use-the-ignored-build-step-field-on-vercel

## Domain Hosting

- Optional step to get a shorter domain that rolls off the tongue better
- There are definitely other options, this is just what I went with for [jeffhuang.dev](https://jeffhuang.dev/):
  - CloudFare for registering (buying) the domain, managing DNS, handling SSL
  - Vercel for handling the build and deploy steps of the CI / CD pipeline
  - Documentation:
    - Registering domain on Cloudfare: https://developers.cloudflare.com/registrar/get-started/register-domain/
    - Connecting Cloudfare domain to Vercel: https://vercel.com/docs/integrations/cloudflare
      - I picked option 1, use Cloudfare DNS
      - Also useful: https://foxglove.dev/blog/how-to-configure-vercel-with-cloudflare
    - General custom domain advice for Vercel: https://vercel.com/docs/projects/domains/add-a-domain
- Alternatively, here is some documentation for [setting up custom domains with GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)
