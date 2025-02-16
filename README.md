<br />
<p align="center">
  <a href="https://github.com/evokelektrique/refused">
    <img src="./src/resources/images/96.png?raw=true" alt="Logo" width="96" height="96">
  </a>

  <h3 align="center">Refused</h3>

  <p align="center">
    Just another AdBlock but only for your favorite persian websites
    <br />
    <br />
    <a href="https://chrome.google.com/webstore/detail/refused/omeglkgaklnjheplmjmmcgodhcnjckdf" title="Download for Chrome">Chrome</a>
    &nbsp;-&nbsp;
    <a href="https://addons.mozilla.org/en-US/firefox/addon/refused/" title="Download for Firefox">Firefox</a>
    &nbsp;-&nbsp;  
    <a href="https://github.com/evokelektrique/refused/issues">Report Bug</a>
  </p>
</p>

<br />
<br />

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#requirments">Requirments</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#support">Support</a></li>
  </ol>
</details>


<!-- GETTING STARTED -->
## Getting Started

In this section, explanations are written in the following cases.

### Requirments
- Firefox & Firefox Android >= 48
- NodeJS (Only for testing and building from source code)

### Installation
- [Chrome](https://chrome.google.com/webstore/detail/refused/omeglkgaklnjheplmjmmcgodhcnjckdf)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/refused/)
- [Manually from latest release](https://github.com/evokelektrique/refused/releases/)

Or you can self install it your self by following instructions explained below
1. Clone the repo
   ```sh
   git clone https://github.com/evokelektrique/refused.git
   ```
2. Install required NodeJS packages
   ```sh
   npm install
   ```
3. Build with
   ```sh
   npx mix
   ```
   Or you can add `--production` argument to minify the codes
4. Load extension on Firefox by opening the `about:debugging` url and by clicking on the `Load Temporary Add-on` button and then select the `manifest.json` file located in the root of `./build` folder

## Dependencies
In this section, A list of Libraries & Frameworks used in the development process of this project mentioned below.
* [webextension-polyfill](https://github.com/mozilla/webextension-polyfill)
* [laravel-mix](https://laravel-mix.com)
* [sass-loader](https://www.npmjs.com/package/sass-loader)
* [sass](https://www.npmjs.com/package/sass)
* [resolve-url-loader](https://www.npmjs.com/package/resolve-url-loader)
* [vazir-font](https://github.com/rastikerdar/vazir-font)
* [Dexie.js](https://github.com/dfahlander/Dexie.js)
  
<!-- Support -->
## Support
If you have any questions you can file an issue [here](https://github.com/evokelektrique/refused/issues) and if you liked this project, please leave a star ⭐
