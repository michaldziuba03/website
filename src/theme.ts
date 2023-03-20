export function getSavedTheme() {
    const ls = window.localStorage || localStorage;
    return ls.getItem('theme');
}

export function saveTheme(theme: string) {
    const ls = window.localStorage || localStorage;
    ls.setItem('theme', theme);
}

export function removeTheme(theme: string) {
    const ls = window.localStorage || localStorage;
    ls.removeItem('theme');
}

const darkTheme = 'theme-dark';

export function loadSavedTheme() {
    const theme = getSavedTheme();

    if (theme === darkTheme) {
        document.documentElement.classList.add(darkTheme);
    } else {
        document.documentElement.classList.remove(darkTheme);
    }
}

export function changeTheme() {
    const rootClasses = document.documentElement.classList;

    if (rootClasses.contains(darkTheme)) {
        rootClasses.remove(darkTheme);
        removeTheme(darkTheme);

        return 'theme-light';
    } else {
        rootClasses.add(darkTheme);
        saveTheme(darkTheme);

        return darkTheme;
    }
}
