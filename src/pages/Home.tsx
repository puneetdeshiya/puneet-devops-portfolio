import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Achievements from "../components/Achievements";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


function Home(){

return (

<div className="bg-black text-white">

<Navbar />

<Hero />

<About />

<Skills />

<Experience />

<Projects />

<Certifications />

<Achievements />

<Resume />

<Contact />

<Footer />

</div>

)

}

export default Home;