import {
Github,
Linkedin,
Mail,
ArrowUp
}
from "lucide-react";


function Footer(){


return (

<footer className="
bg-black
py-10
border-t
border-white/10
">


<div className="
max-w-6xl
mx-auto
px-4
sm:px-6
text-center
">


<div className="
flex
justify-center
gap-6
mb-6
">


<a
href="https://github.com/puneetdeshiya"
target="_blank"
rel="noreferrer"
aria-label="GitHub profile"
>
<Github/>
</a>


<a
href="https://www.linkedin.com/in/puneet-deshiya-64907677"
target="_blank"
rel="noreferrer"
aria-label="LinkedIn profile"
>
<Linkedin/>
</a>


<a href="mailto:puneetdeshiya@yahoo.com" aria-label="Email Puneet">
<Mail/>
</a>


</div>



<p className="
text-gray-400
">

© {new Date().getFullYear()}
 Puneet Kumar Deshiya.
 All Rights Reserved.

</p>



<a

href="#home"

className="
inline-flex
mt-5
text-orange-400
"

>

<ArrowUp/>

</a>


</div>


</footer>

)

}


export default Footer;
