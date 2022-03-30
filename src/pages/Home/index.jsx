//import BgImage from "./bg_image.jpeg";
import { useDispatch, useSelector } from 'react-redux';
import { authPage, mapPage } from "../../redux/slices/pageSlice";
const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const LoggedInButton = () => {
        return (
            <>
            <button className="py-2 px-6 border rounded bg-gray-200/10 transition-all hover:bg-gray-200 hover:text-gray-900">
                <p>Learn More</p>
            </button>
            <button onClick={()=>dispatch(mapPage())} className="py-2 px-6 border rounded bg-gray-200/10 transition-all hover:bg-gray-200 hover:text-gray-900">
                <p>Go to map</p>
            </button>
            </>
        )
    }
    const LoggedOutButton = () => {
        return (
            <>
            <button className="py-2 px-6 border rounded bg-gray-200/10 transition-all hover:bg-gray-200 hover:text-gray-900">
                <p>Learn More</p>
            </button>
            <button onClick={()=>dispatch(authPage())} className="py-2 px-6 border rounded bg-gray-200/10 transition-all hover:bg-gray-200 hover:text-gray-900">
                <p>Get Started</p>
            </button>
            </>
        )
    }
    return (
        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/bg_image3.jpeg'})`}} className="flex items-center justify-center w-full flex-col bg-cover bg-no-repeat">
            <div style={{height: "80vh"}}className="flex items-center justify-center w-full to-blue-500">
                <h1 className="text-4xl">
                    {
                        user.loggedIn?
                        `Welcome back!`
                            :
                        "Welcome to Foodtruck Hacker!"
                    }
                </h1>
            </div>     
            <div style={{height: "20vh"}} className="flex items-center justify-center w-full to-blue-500 h-full">
                <div className="flex items-center justify-between -translate-y-40 w-96 text-lg text-gray-200">
                    {
                        user.loggedIn?
                        <LoggedInButton/>
                            :
                        <LoggedOutButton/>
                    }
                </div>
            </div>            
        </div>
    )
}

export default Home;