//import BgImage from "./bg_image.jpeg";
const Home = () => {
    return (
        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/bg_image3.jpeg'})`}} className="flex items-center justify-center w-full flex-col bg-cover bg-no-repeat">
            <div style={{height: "50vh"}}className="flex items-center justify-center w-full to-blue-500">
            </div>     
            <div style={{height: "50vh"}} className="flex items-center justify-center w-full to-blue-500 h-full">
                <div className="flex items-center justify-between -translate-y-20">
                    <button>Sign Up</button>
                    <button>Get Started</button>
                </div>
            </div>            
        </div>
    )
}

export default Home;