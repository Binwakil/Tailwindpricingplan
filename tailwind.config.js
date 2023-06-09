/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'folder-bg': "url('/admin/imgs/folder.png')",
        'upload-bg': "url('/admin/imgs/uploadbg.svg')",
      },
      colors: {
        text_primary: "#696D70",
        primary: "#004181",
        // primarylight: "#004181",
       secondary: "#2B1A82",
      //  secondarylight: "#004181",
      colorBlack: "#071625"
      
      }
    },
  },
  plugins: [

  ],
}
