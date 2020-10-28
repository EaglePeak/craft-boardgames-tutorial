const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.postCss('source/css/app.css', 'web/css/app.css', [
  tailwindcss('tailwind.config.js')
]
);