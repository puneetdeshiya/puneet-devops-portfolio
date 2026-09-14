import {experiences} from "../data/experience";


function Experience(){

return (

<section className="
py-20
sm:py-24
bg-slate-950
">


<div className="
max-w-5xl
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

Professional Experience

</h2>



{

experiences.map(exp=>(


<div
key={exp.company}
className="
glass
rounded-2xl
p-6
mb-6
border-l-4
border-orange-500
"
>


<h3 className="
text-xl
sm:text-2xl
font-bold
">

{exp.role}

</h3>


<p className="
text-orange-400
">

{exp.company}
</p>


<p className="
text-gray-400
">

{exp.duration}

</p>


<ul className="
mt-4
space-y-2
text-gray-300
">

{
exp.points.map(p=>(

<li key={p}>
• {p}
</li>

))
}

</ul>


</div>


))

}


</div>

</section>

)

}


export default Experience;