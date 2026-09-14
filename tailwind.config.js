/** @type {import('tailwindcss').Config} */

export default {

content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}"
],

theme: {

extend: {

colors: {

aws: "#FF9900",

darkblue:"#020617"

},

animation: {

"float":
"float 6s ease-in-out infinite",

"pulse-slow":
"pulse 4s infinite"

},

keyframes: {

float: {

"0%,100%":{
transform:"translateY(0)"
},

"50%":{
transform:"translateY(-20px)"
}

}

},

backgroundImage: {

"hero-gradient":
"linear-gradient(135deg,#020617,#0f172a,#001f3f)"

}

}

},

plugins: []

};