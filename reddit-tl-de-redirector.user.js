// ==UserScript==
// @name         Reddit TL-DE Redirector
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Leitet Reddit-Seiten von ?tl=de zu ?show=original um.
// @author       Dein Name
// @match        *://www.reddit.com/*
// @icon         https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png
// @grant        none
// @updateURL    https://github.com/DeinBenutzername/DeinRepository/raw/main/reddit-tl-de-redirector.user.js
// @downloadURL  https://github.com/DeinBenutzername/DeinRepository/raw/main/reddit-tl-de-redirector.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Überprüfen, ob die URL ein '?tl=XX' (beliebige Sprache) enthält
    const urlParams = new URLSearchParams(window.location.search);

    // Prüfen, ob der Parameter 'tl' existiert
    if (urlParams.has('tl')) {
        // Alte URL
        let currentUrl = window.location.href;

        // Entferne den 'tl' Parameter und füge '?show=original' hinzu
        let newUrl = currentUrl.replace(/(\?|&)tl=[^&]+/, '$1show=original');

        // Weiterleiten zur neuen URL
        window.location.replace(newUrl);
    }
})();
