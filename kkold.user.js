// ==UserScript==
// @name         kkold
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Apply the old Koi Koi face without messing up other BGA games
// @author       Chung-hong Chan
// @match        https://boardgamearena.com/*/koikoi*
// @resource     customCSS https://gist.githubusercontent.com/gingerbeardman/119034acc7dd376692c21bfe01c4aebc/raw/47d963e617e8f3fbffadcb38fbe17aa1cdd490f0/BGA-Koi-Koi.css
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
