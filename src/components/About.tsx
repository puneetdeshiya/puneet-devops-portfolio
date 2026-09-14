import {
motion
}
from "framer-motion";


function About(){


return (

<section

id="about"

className="
py-20
sm:py-24
bg-slate-950
"

>


<div className="
max-w-6xl
mx-auto
px-4
sm:px-6
"

>


<motion.h2

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

className="
text-3xl
sm:text-4xl
font-bold
gradient-text
mb-6
sm:mb-8
"

>

About Me

</motion.h2>




<motion.div

whileInView={{
opacity:1,
y:0
}}

initial={{
opacity:0,
y:40
}}

className="
glass
rounded-3xl
p-5
sm:p-8
text-base
sm:text-lg
text-gray-300
leading-relaxed
"

>


I am a Senior DevOps Engineer and AWS Cloud
Engineer with 8+ years of experience building,
automating and securing modern cloud platforms.


<br/>
<br/>


My expertise includes AWS architecture,
Kubernetes orchestration, Infrastructure as Code,
CI/CD automation, GitOps workflows,
monitoring and enterprise-scale production systems.


<br/>
<br/>


I specialize in designing highly available,
scalable and secure environments using tools
like Terraform, Docker, Jenkins, GitHub Actions,
ArgoCD, Helm, Prometheus and Grafana.


<br/>
<br/>


I focus on automation, reliability engineering,
cloud optimization and helping teams deliver
software faster through modern DevOps practices.


</motion.div>


</div>


</section>

);

}


export default About;