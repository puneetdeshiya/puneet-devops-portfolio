import {motion} from "framer-motion";
import {skillGroups} from "../data/skills";


function Skills(){

return (

<section
id="skills"
className="
py-24
bg-slate-900
"
>

<div className="
max-w-7xl
mx-auto
px-6
">

<h2 className="
text-4xl
font-bold
gradient-text
mb-10
">

Technical Skills

</h2>


<div className="
grid
md:grid-cols-3
gap-6
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