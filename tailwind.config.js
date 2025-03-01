/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#0D0E10",
        devOrange: "#FFBE33",
        devOrangeDark: "#E69C00",
        devBlack: "#0C0C0C",
        devWhiteGrey: "#F1F2F3",
        devWHiteBlue: "#F7F7FD",
        devWhitePurple: "#E0DEF7",
        devBlue: "#0B5ED7",
        devGray: "#343A40",
        devGreen: "#198754",
        devRed: "#DC3545",
        statusPending: "#FFC107",
        statusPaid: "#28A745",
        statusCanceled: "#DC3545",
        statusDelivered: "#17A2B8"
      },
      fontFamily: {
        "open-sans-medium": ["open-sans-medium", "serif"],
        "open-sans-regular": ["open-sans-regular", "serif"],
        "open-sans-bold": ["open-sans-bold", "serif"],
        "open-sans-semibold": ["open-sans-semibold", "serif"],
        "dancing-script-medium": ["dancing-script-medium", "serif"],
        "dancing-script-semibold": ["dancing-script-semibold", "serif"],
        "dancing-script-regular": ["dancing-script-regular", "serif"],
        "dancing-script-bold": ["dancing-script-bold", "serif"],
      },
    },
  },
  plugins: [],
};
