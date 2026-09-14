import {motion} from "framer-motion";
import {skillGroups} from "../data/skills";


function Skills(){

return (

<section
id="skills"
className="
py-20
sm:py-24
bg-slate-900
"
>

<div className="
max-w-7xl
mx-auto
px-4
sm:px-6
">

<h2 className="
text-3xl
sm:text-4xl
font-bold
gradient-text
mb-8
sm:mb-10
">

Technical Skills

</h2>


<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-4
sm:gap-6
">


{
skillGroups.map(group=>(

<motion.div

whileHover={{
scale:1.05
}}

className="
glass
rounded-2xl
p-6
"

key={group.title}

>

<h3 className="
text-xl
text-orange-400
mb-4
">

{group.title}

</h3>


<div className="
flex
flex-wrap
gap-2
">

{
group.skills.map(skill=>(

<span

key={skill}

className="
px-3
py-2
bg-white/10
rounded-lg
text-sm
"

>

{skill}

</span>

))

}

</div>

</motion.div>

))

}


</div>

</div>

</section>

)

}


export default Skills;