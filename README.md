# React Resume for GitHub Pages

Ever thought about making your own resume website? Turned off by unnecessarily complicated templates? Enjoy bragging about how your site is
built with fancy technologies like React despite probably not needing to be? Then boy do I have good news for you!

This template sets up a basic resume website on top of [GitHub Pages](https://pages.github.com/) with a number of handy features:

* Responsive design
    * Multi-column on wider browsers
    * One column on smaller browsers and mobile devices
* Extensible
* Tastefully colorable
* Native and toggleable dark mode support
* Printable - finally time to throw away that Google Doc resume!
* Screen-reader friendly

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Example

You can check out an example site at https://mattlevin.io/react-resume/.

## Getting started

Getting your own resume site set up is quick and easy:

1. Clone/fork this repo. You'll need your new repo to have a name matching the `<your_github_username>.github.io` format 
in order for GitHub Pages to work.
2. Update the following fields in `package.json`:
    * `homepage` should match your GitHub Pages URL (`https://<your_github_username>.github.io` by default)
    * `name`, typically the name of your repo
3. Replace `Your Name` with your name in the `<title>` braces in `public/index.html` 
3. Update `src/data.json` with your resume
4. Run `npm run deploy` to deploy the site! 
    * Note that it'll deploy using a separate `gh-pages` branch in your repo

## Customization

* The app supports light color theming. You can set your own color choices 
    by editing the CSS variables at the top of `src/App.css`

* In general, if a resume field seems optional, it likely is
    * And if it's not, open a pull request making it optional!

* All list properties are uncapped. If you have 15 different jobs you want to list, 
the only thing stopping you is you (and reasonable page lengths)
    * Skills specifically support nested items, in case you want to get specific about your qualifications

* Theme switching is enabled by default. Alternatively, you can set `THEME_SWITCHER_MODE` 
    in `App.tsx` to `LIGHT_ONLY` or `DARK_ONLY` to force a particular theme
    * This could definitely be exported to a config file, but it didn't seem worth the effort
        for a single property

## Available scripts

In the project directory, you can run (among other commands):

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Deploys the app to the `gh-pages` branch in your GitHub repo, creating one 
if the branch doesn't exist. 