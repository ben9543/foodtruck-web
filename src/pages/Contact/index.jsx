import Card from "../../components/Card";
import PROFILE from "./profile.jpeg";

const Contact = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Card title="Developer">
                <div className="my-6 h-20 w-20 rounded-full overflow-hidden">
                    <img src={PROFILE} alt="None" className="object-cover h-full w-full"/>
                </div>
                <div className="grid grid-cols-2 gap-2 font-bold">
                    <p>Name</p><p>Ben Kweon</p>
                    <p>LinkedIn</p><a className="text-sky-600 underline" href="https://www.linkedin.com/in/sunbeom-kweon-84624a199/">Sunbeom (Ben) Kweon</a>
                    <p>GitHub</p><a className="text-sky-600 underline" href="https://github.com/ben9543">ben9543</a>
                    <p>Instagram</p><a className="text-sky-600 underline" href="https://www.instagram.com/_____bennnn/">_____bennnn</a>
                    <p>College</p><p>CSULB</p>
                    <p>Major</p><p>Computer Science</p>
                </div>
                
            </Card>
        </div>
    )
}
export default Contact;