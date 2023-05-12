if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // User prefers dark color scheme
    document.getElementById('logo-dark').style.display = 'inline';
} else {
    // User prefers light color scheme
    document.getElementById('logo-light').style.display = 'inline';
}
