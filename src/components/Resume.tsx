function Resume(){

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

return (

<section className="
py-24
bg-black
">


<div className="
max-w-5xl
mx-auto
px-6
text-center
">


<h2 className="
text-4xl
gradient-text
font-bold
mb-6
">

Resume

</h2>


<p className="
text-gray-400
mb-8
">

Download my professional resume
containing DevOps experience,
cloud architecture skills and
technology expertise.

</p>



<a
href={resumeUrl}
download="Puneet-Deshiya-Resume.pdf"
className="
inline-block
px-8
py-4
rounded-xl
bg-orange-500
text-black
font-bold
hover:bg-orange-400
transition
">

Download Resume PDF

</a>



</div>


</section>

)

}


export default Resume;
