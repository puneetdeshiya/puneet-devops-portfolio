import {motion} from "framer-motion";
import {awsServices} from "../data/aws";


function AWSCloud(){

return (

<section className="
py-20
sm:py-24
bg-black
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

AWS Services

</h2>


<div className="
grid
sm:grid-cols-2
md:grid-cols-4
gap-5
">


{

awsServices.map(service=>(

<motion.div

whileHover={{
y:-10
}}

key={service.name}

className="
glass
rounded-xl
p-5
"

>


<h3 className="
text-orange-400
font-bold
text-xl
">

{service.name}

</h3>


<p className="
text-gray-400
mt-2
text-sm
">

{service.desc}

</p>


</motion.div>

))

}


</div>

</div>

</section>

)

}


export default AWSCloud;