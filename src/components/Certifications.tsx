import {motion} from "framer-motion";


const certifications=[

"AWS Solutions Architect Associate",

"AWS DevOps Engineer Professional",

"Certified Kubernetes Administrator (CKA)",

"HashiCorp Terraform Associate",

"Red Hat Certified Engineer (RHCE)",

"Microsoft Azure Administrator"

];


function Certifications(){

return (

<section className="
py-24
bg-black
">


<div className="
max-w-6xl
mx-auto
px-6
">


<h2 className="
text-4xl
font-bold
gradient-text
mb-10
">

Certifications

</h2>


<div className="
grid
md:grid-cols-3
gap-6
">


{

certifications.map((cert)=>(


<motion.div

whileHover={{
scale:1.05
}}

key={cert}

className="
glass
rounded-2xl
p-6
text-center
"

>


<div className="
text-orange-400
text-4xl
mb-4
">

🏆

</div>


<h3 className="
font-semibold
">

{cert}

</h3>


<p className="
text-gray-400
mt-3
text-sm
">

Professional certification

</p>


</motion.div>


))

}


</div>


</div>

</section>

)

}


export default Certifications;
