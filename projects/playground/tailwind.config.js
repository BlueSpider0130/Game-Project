/** @type {import('tailwindcss').Config} */
module.exports = {
    content: {
        relative: true,
        files: ['./src/**/*.{ts,html}', '../shared-lib/**/*.{ts,html}'],
    },
    theme: {
        extend: {},
    },
    plugins: [],
};
