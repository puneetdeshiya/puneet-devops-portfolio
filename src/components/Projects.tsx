import {projects} from "../data/projects";


function Projects(){

return (

<section
id="projects"
className="
py-24
bg-slate-900
">


<div className="
max-w-7xl
mx-auto
px-6
">


<h2 className="
text-4xl
gradient-text
font-bold
mb-10
">

Projects

</h2>



<div className="
grid
md:grid-cols-3
gap-6
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
"

>


<h3 className="
text-xl
font-bold
text-orange-400
">

{project.title}

</h3>


<p className="
text-gray-300
mt-3
">

{project.description}

</p>


<div className="
flex
flex-wrap
gap-2
mt-4
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
text-sm
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