/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                purple: "#512051",
                purpleLight: "#927B91",
                pinkLight: "#F7F2F7",
                red: "#EE69A4",
            },
            fontSize: {
                "4xl": ["2.5rem", {
                    lineHeight: "2rem",
                    letterSpacing: "0.089rem",
                }],
            },
        },
    },
    plugins: [],
}
