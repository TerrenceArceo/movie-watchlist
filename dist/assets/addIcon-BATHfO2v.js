(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const A of t.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&o(A)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEySURBVHgBpVM7TsNAEH2zQRh3RqJwg7AlJOigpExOQK7ADbgBzg3IMeh8g3AEl1BhOne4jCPiYWaRLcfaJFbyCnt/bz5vZgg9BOH1GExTIvMo28geMmdMyAAzK4uPvPueWmIQBfC9F2I8YweY8YqqmpVlXrYGlEze6QJE9xgCjahaTdSIsQfieTDZupW3nnB0GYS3EYG/nI5A8X+YW+8nJ0CddKTYQCPYeXgDdyrrqSGiOxwIrRSJde6FFfdL1cCVrsGR0Ahy+V+5Ln+KTytOP8oWjMxIh6U41DtxpmUcS14Lt4O9ZYyNCPZOhLnTgxC3khlzFduKWHt+AjssAyGtLPOQ6HKkn2VZLM8uLt/M+teX7cNurkRbrZ42hqkLrbWR7mTtd0bTZN/MdQoapZpy9/0fVGR8sjtucj0AAAAASUVORK5CYII=";export{i as a};