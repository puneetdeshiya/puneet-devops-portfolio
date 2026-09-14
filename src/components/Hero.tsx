import {
motion
}
from "framer-motion";


import {
Cloud,
Server,
Database,
Cpu
}
from "lucide-react";


function Hero(){

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;


return (

<section

id="home"

className="
min-h-screen
flex
items-center
relative
overflow-hidden
bg-hero-gradient
"

>


<div className="
absolute
inset-0
opacity-30
"

>


<div className="
absolute
top-32
left-20
w-72
h-72
bg-orange-500
rounded-full
blur-3xl
animate-pulse
"/>


<div className="
absolute
right-20
bottom-20
w-96
h-96
bg-blue-600
rounded-full
blur-3xl
animate-pulse
"/>


</div>



<div className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-10
items-center
relative
z-10
">


<motion.div

initial={{
opacity:0,
x:-60
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:0.8
}}

>


<p className="
text-orange-400
font-semibold
mb-4
">

Senior DevOps Engineer

</p>


<h1 className="
text-5xl
md:text-7xl
font-bold
leading-tight
">

Puneet Kumar

<span className="
gradient-text
">

 Deshiya

</span>

</h1>


<h2 className="
text-2xl
mt-5
text-gray-300
">

AWS Cloud Engineer
<br/>

Platform Engineer

</h2>


<p className="
mt-6
text-gray-400
max-w-xl
">

8+ years of experience designing,
automating and managing enterprise
cloud infrastructure, Kubernetes platforms,
CI/CD pipelines and highly available systems.

</p>



<div className="
flex
gap-5
mt-8
flex-wrap
">


<a

href={resumeUrl}
download="Puneet-Deshiya-Resume.pdf"

className="
px-6
py-3
rounded-xl
bg-orange-500
text-black
font-semibold
hover:bg-orange-400
transition
"

>

Download Resume

</a>



<a

href="#contact"

className="
px-6
py-3
rounded-xl
border
border-white/30
hover:bg-white/10
transition
"

>

Contact Me

</a>


</div>


</motion.div>




<motion.div


initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:1
}}

className="
relative
flex
justify-center
"


>


<div className="
w-72
h-72
rounded-full
glass
flex
items-center
justify-center
animate-float
"


>


<div className="
text-center
"

>

<Cloud
size={80}
className="
text-orange-400
mx-auto
"

/>

<p className="
mt-5
text-xl
">

AWS Cloud

</p>

</div>


</div>


<div className="
absolute
top-0
right-0
flex
gap-3
"

>

<Server
className="text-blue-400"
/>

<Database
className="text-green-400"
/>

<Cpu
className="text-orange-400"
/>

</div>



</motion.div>



</div>


</section>

);

}


export default Hero;
