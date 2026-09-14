import { motion } from "framer-motion";


export default function Navbar(){

return (

<motion.nav
initial={{y:-50}}
animate={{y:0}}
className="
fixed
top-0
w-full
z-50
bg-black/50
backdrop-blur-lg
border-b
border-white/10
"
>

<div className="
max-w-7xl
mx-auto
px-6
py-4
flex
justify-between
items-center
">

<a href="#home" className="text-xl font-bold text-orange-400" aria-label="Go to homepage">
puneet.cloud
</a>


<div className="space-x-6 text-gray-300">

<a href="#about">About</a>

<a href="#skills">Skills</a>

<a href="#projects">Projects</a>

<a href="#contact">Contact</a>

</div>


</div>

</motion.nav>

)

}
