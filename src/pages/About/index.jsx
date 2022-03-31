const About = () => {
    return (
        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/bg_image3.jpeg'})`}} className="flex items-center justify-center w-full flex-col bg-cover bg-no-repeat">
            {/* Desktop */}
            <section className="hidden lg:grid grid-cols-4 grid-rows-3 h-screen w-full p-4 gap-4 mt-12">
                {/* 1. Title */}
                <div className="flex items-center justify-center w-full h-full rounded bg-gray-100 p-2 shadow border transition-all hover:shadow-xl hover:-translate-y-1 col-span-4 row-span-1">
                    <h1 className="text-3xl">ABOUT</h1>
                </div>     
                {/* 2. Login & Sign Up */}
                <div className="block w-full h-full rounded bg-gray-100 p-2 shadow border transition-all hover:shadow-xl hover:-translate-y-1 col-span-2 row-span-2">
                    <div className="mt-2 mb-6 text-2xl">
                        <h3>Sign Up</h3>
                    </div>
                    <div className="font-bold">
                        <ol className="list-decimal list-inside">
                            <li className="mb-2">The user will need to choose between foodtrucker owner or user.</li>
                            <li className="mb-2">Once the user sign up, user can go to 'Map' menu. You can either use 'Get Started' button </li>
                            <li className="mb-2">Normal user mode will not populate the user location.</li>
                            <li className="mb-2">Foodtruck mode will populate the current user location.</li>
                        </ol>
                    </div>
                </div>
                {/* 3. Map */}
                <div className="block w-full h-full rounded bg-gray-100 p-2 shadow border transition-all hover:shadow-xl hover:-translate-y-1 col-span-2 row-span-1">
                    <div className="mt-2 mb-6 text-2xl">
                        <h3 >Map</h3>
                    </div>
                    <div className="font-bold">
                        <ol className="list-decimal list-inside">
                            <li className="mb-2">The foodtruck location will be remained as "offline" even though the foodtruck user logged in.</li>
                            <li className="mb-2">The foodtruck user will need to go to "Map" menu in order to make his/hers location as "online".</li>
                            <li className="mb-2">As long as user keeps the page, </li>
                        </ol>
                    </div>
                </div> 
                
                {/* 4. Comming soon */}
                <div className="overflow-hidden flex items-center justify-center w-full h-full rounded bg-gray-100 shadow border transition-all hover:shadow-xl hover:-translate-y-1 col-span-1 row-span-1">
                    <h3>Coming Soon ...</h3>
                </div> 

                {/* 5. Coming soon */}
                <div className="w-full h-full flex items-center justify-center rounded bg-gray-100 p-2 shadow border transition-all hover:shadow-xl hover:-translate-y-1 col-span-1 row-span-1">
                    <h3>Coming Soon ...</h3>
                </div> 
            </section>   
            {/* Mobile */}
            <section className="flex flex-col lg:hidden h-auto w-full items-center justify-center mt-16 px-2">
                {/* 1. Title */}
                <div className="flex items-center justify-center w-full h-36 rounded bg-gray-100 p-2 shadow border transition-all hover:shadow-xl mb-2">
                    <h1 className="text-3xl">ABOUT</h1>
                </div> 
                {/* 2. Login & Sign Up */}
                <div className="mb-2 block w-full h-full rounded bg-gray-100 p-2 shadow border transition-all hover:shadow-xl ">
                    <div className="mt-2 mb-6 text-2xl">
                        <h3>Sign Up</h3>
                    </div>
                    <div className="font-bold">
                        <ol className="list-decimal list-inside">
                            <li className="mb-2">The user will need to choose between foodtrucker owner or user.</li>
                            <li className="mb-2">Once the user sign up, user can go to 'Map' menu. You can either use 'Get Started' button </li>
                            <li className="mb-2">Normal user mode will not populate the user location.</li>
                            <li className="mb-2">Foodtruck mode will populate the current user location.</li>
                        </ol>
                    </div>
                </div>
                {/* 3. Map */}
                <div className="mb-2 block w-full h-full rounded bg-gray-100 p-2 shadow border transition-all hover:shadow-xl ">
                    <div className="mt-2 mb-6 text-2xl">
                        <h3 >Map</h3>
                    </div>
                    <div className="font-bold">
                        <ol className="list-decimal list-inside">
                            <li className="mb-2">The foodtruck location will be remained as "offline" even though the foodtruck user logged in.</li>
                            <li className="mb-2">The foodtruck user will need to go to "Map" menu in order to make his/hers location as "online".</li>
                            <li className="mb-2">As long as user keeps the page, </li>
                        </ol>
                    </div>
                </div> 
                
                {/* 4. Comming soon */}
                <div className="overflow-hidden flex items-center justify-center w-full h-full rounded bg-gray-100 shadow border transition-all hover:shadow-xl h-48 mb-2 ">
                    <h3>Coming Soon ...</h3>
                </div> 

                {/* 5. Coming soon */}
                <div className="w-full h-full flex items-center justify-center rounded bg-gray-100 p-2 shadow border transition-all hover:shadow-xl h-48">
                    <h3>Coming Soon ...</h3>
                </div> 
            </section>          
        </div>
    )
}
export default About;