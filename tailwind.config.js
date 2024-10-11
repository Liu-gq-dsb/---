/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // 确保包括根目录下的 index.html 文件
    "./src/**/*.{js,ts,jsx,tsx,vue}", // 确保包括 src 目录下所有 .js, .ts, .jsx, .tsx, .vue 文件
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
