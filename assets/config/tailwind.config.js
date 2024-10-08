/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./themes/**/layouts/**/*.html",
        "./content/**/layouts/**/*.html",
        "./layouts/**/*.html",
        "./content/**/*.html",
        "./content/**/*.md"
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'avenir next', 'avenir', 'segoe ui', 'helvetica neue', 'helvetica', 'Cantarell', 'Ubuntu', 'roboto', 'noto', 'arial', 'sans-serif'],
            },
            screens: {
                'xs': '448px',
                '2xs': '360px',
              },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.full-viewport-width': {
                    marginLeft: 'calc(50% - 50vw)',
                    marginRight: 'calc(50% - 50vw)',
                    width: '100vw'
                },
            })
        },
    ],
    variants: ['group-hover'],
    // purge: {
    //   content: ["./hugo_stats.json"],
    //   defaultExtractor: (content) => {
    //     let els = JSON.parse(content).htmlElements;
    //     return els.tags.concat(els.classes, els.ids);
    //   },
    // },
}
