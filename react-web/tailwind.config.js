/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
            '2xl': '6rem',
        },
        half_white: 0x02ffffff,
        hero_btn: {
            padding: 5,
            margin: 5,
            borderWidth: 1,
            borderColor: 0xeeffff,
            backgroundColor: 0xff3333
        },
        extend: {

            spacing: {
                '5px': '5px',
            },
            margin: {
                '5px': '5px',
            }
        }
    },
    plugins: [],
}

