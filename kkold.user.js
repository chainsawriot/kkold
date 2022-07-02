// ==UserScript==
// @name         kkold
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Apply the old Koi Koi face without messing up other BGA games
// @author       Chung-hong Chan
// @match        https://boardgamearena.com/*/koikoi*
// @resource     customCSS https://raw.githubusercontent.com/chainsawriot/kkold/master/BGA-Koi-Koi.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    var cssTxt = GM_getResourceText("customCSS");
    GM_addStyle(cssTxt);
    console.debug('done: add CSS');
    // Your code here...
})();
