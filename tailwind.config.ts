import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Основной зелёный взят с иконки приложения (≈ #2F9C36).
        // 600 темнее — для кнопок с белым текстом (контраст ≥ 4.5:1).
        brand: {
          50: "#EEF8EF",
          100: "#D9F0DB",
          200: "#B3E0B7",
          400: "#4DB254",
          500: "#2F9C36",
          600: "#278530",
          700: "#1F6C27",
        },
        // Синий цвет значка верификации (≈ #0690F9).
        verified: "#0690F9",
        ink: "#111111",
        surface: {
          DEFAULT: "#F2F4F2",
          border: "#E3E7E3",
        },
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      fontFamily: {
        // Системные шрифты: не требуют скачивания, хорошо читаются на Android.
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      spacing: {
        "safe-b": "env(safe-area-inset-bottom, 0px)",
      },
    },
  },
  plugins: [],
};

export default config;
