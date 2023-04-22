const React = require('react');

// @ts-ignore
exports.onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <script
            key="darkmode"
        dangerouslySetInnerHTML={{
            __html: 'function getSavedTheme(){if("undefined"!=typeof window){let e=window.localStorage||localStorage;return e.getItem("theme")}}const darkTheme="theme-dark";function loadSavedTheme(){if("undefined"!=typeof window){let e=getSavedTheme();e===darkTheme?document.documentElement.classList.add(darkTheme):document.documentElement.classList.remove(darkTheme)}}loadSavedTheme();',
        }}
    />,
]);
};