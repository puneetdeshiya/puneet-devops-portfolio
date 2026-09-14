import {projects} from "../data/projects";


function Projects(){

return (

<section
id="projects"
className="
py-20
sm:py-24
bg-slate-900
">


<div className="
max-w-7xl
mx-auto
px-4
sm:px-6
">


<h2 className="
text-3xl
sm:text-4xl
gradient-text
font-bold
mb-8
sm:mb-10
">

Projects

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

projects.map(project=>(


<div

key={project.title}

className="
glass
rounded-2xl
p-6
hover:-translate-y-2
transition
border
border-white/10
"

>


<div className="
inline-flex
items-center
rounded-full
border
border-orange-400/40
bg-orange-500/10
px-3
py-1
text-xs
font-medium
text-orange-300
">

{project.category}

</div>


<h3 className="
text-xl
font-bold
text-orange-400
mt-4
">

{project.title}

</h3>


<p className="
text-gray-300
mt-3
">

{project.description}

</p>


<p className="
mt-4
text-sm
text-gray-400
border-l-2
border-orange-500
pl-3
">

{project.outcome}

</p>


<div className="
flex
flex-wrap
gap-2
mt-5
">

{

project.tech.map(t=>(

<span
key={t}
className="
bg-white/10
px-3
py-1
rounded-full
text-xs
sm:text-sm
text-gray-200
"
>

{t}

</span>

))

}

</div>


</div>


))

}


</div>

</div>

</section>

)

}


export default Projects;