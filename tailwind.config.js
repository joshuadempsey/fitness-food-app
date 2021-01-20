// Colors
const colors = require("tailwindcss/colors");

module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
            red: colors.red,
            yellow: colors.amber,
            blue: colors.blue,
            pink: colors.pink,
            gray: colors.trueGray,
            teal: colors.teal,
            cyan: colors.cyan,
            green: colors.green
        },

        fontFamily: {
            oleo: ["Oleo Script", "system-ui", "sans-serif"],
            mont: ["Montserrat", "system-ui", "serif"]
        },
        variants: {},
        plugins: []
    }
};