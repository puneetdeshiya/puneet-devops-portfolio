import {
useState
}
from "react";
import type { FormEvent } from "react";


import emailjs from "@emailjs/browser";


function Contact(){

const [sent,setSent]=useState(false);
const [error,setError]=useState(false);
const [sending,setSending]=useState(false);



function sendEmail(e:FormEvent<HTMLFormElement>){

e.preventDefault();
setError(false);
setSending(true);
const form = e.currentTarget;


emailjs.sendForm(

"service_2ds2qrk",

"template_5pv7nt8",

form,

"Pr4SVy4ZJbaZwKndC"

)
.then(()=>{

setSent(true);
form.reset();
}).catch(()=>{
setError(true);
}).finally(()=>{
setSending(false);
});


}



return (

<section

id="contact"

className="
py-20
sm:py-24
bg-slate-950
">


<div className="
max-w-4xl
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

Contact Me

</h2>



<form

onSubmit={sendEmail}

className="
glass
rounded-3xl
p-5
sm:p-8
space-y-5
"

>


<input

name="user_name"

placeholder="Name"

required

className="
w-full
bg-white/10
rounded-xl
p-4
outline-none
"

/>


<input

name="user_email"

type="email"

placeholder="Email"

required

className="
w-full
bg-white/10
rounded-xl
p-4
outline-none
"

/>


<input

name="subject"

placeholder="Subject"

required

className="
w-full
bg-white/10
rounded-xl
p-4
outline-none
"

/>


<textarea

name="message"

placeholder="Message"

rows={6}

required

className="
w-full
bg-white/10
rounded-xl
p-4
outline-none
"

/>



<button
type="submit"
disabled={sending}

className="
bg-orange-500
text-black
font-bold
px-8
py-3
rounded-xl
w-full
sm:w-auto
"

>

{sending ? "Sending..." : "Send Message"}

</button>


{
sent &&

<p className="
text-green-400
">

Message sent successfully!

</p>

}

{error &&

<p className="text-red-400">

Unable to send the message. Please try again later.

</p>

}



</form>



</div>


</section>

)

}


export default Contact;
