import {motion} from "framer-motion";


const achievements=[

{
number:"8+",
label:"Years Experience"
},

{
number:"100+",
label:"Servers Managed"
},

{
number:"50+",
label:"CI/CD Pipelines"
},

{
number:"200+",
label:"Deployments"
},

{
number:"99.99%",
label:"Production Uptime"
},

{
number:"30+",
label:"AWS Services"
}

];


function Achievements(){


return (

<section className="
py-20
sm:py-24
bg-slate-900
">


<div className="
max-w-6xl
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

Achievements

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

achievements.map(item=>(


<motion.div

initial={{
opacity:0,
scale:.8
}}

whileInView={{
opacity:1,
scale:1
}}

whileHover={{
scale:1.08
}}

key={item.label}

className="
glass
rounded-2xl
p-8
text-center
"

>


<h3 className="
text-3xl
sm:text-4xl
font-bold
text-orange-400
">

{item.number}

</h3>


<p className="
text-gray-300
mt-3
">

{item.label}

</p>


</motion.div>


))

}


</div>


</div>


</section>

)

}


export default Achievements;