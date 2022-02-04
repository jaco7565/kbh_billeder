module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F0ECE3",
        kasse: "#DFD3C3",
        knap: "#F58840",
        hover: "#F8AC79",
      },
      fontFamily: {
        stix: "STIX Two Text, serif",
        underskrift: "PT Sans Narrow', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
