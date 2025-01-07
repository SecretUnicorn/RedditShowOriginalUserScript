// ==UserScript==
// @name         Reddit TL to ORIGINAL Redirector
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @description  Checks if reddit shows you a translated version and automaticly redirect you to show the original post
// @author       SecretUnicorn
// @match        *://www.reddit.com/*
// @icon         https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png
// @grant        none
// @updateURL    https://github.com/SecretUnicorn/RedditShowOriginalUserScript/raw/main/reddit-tl-redirector.user.js
// @downloadURL  https://github.com/SecretUnicorn/RedditShowOriginalUserScript/raw/main/reddit-tl-redirector.user.js
// ==/UserScript==

(function() {
    'use strict';

    
    const urlParams = new URLSearchParams(window.location.search);

    // Check if URL contains '?tl=XX'
    if (urlParams.has('tl')) {
        let currentUrl = window.location.href;

        // Remove 'tl' parameter and add '?show=original'
        let newUrl = currentUrl.replace(/(\?|&)tl=[^&]+/, '$1show=original');

        // Redirect to new url
        window.location.replace(newUrl);
    }
})();
