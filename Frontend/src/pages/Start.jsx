import { Link } from "react-router-dom"

function Start() {
    return (
        <div>
            <div className="h-screen bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] pt-5 w-ful flex justify-between flex-col">
                <img className="w-16 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <div className="bg-white pb-7 py-4 px-4">
                    <h2 className="text-[30px] font-bold">Get Started with Uber</h2>
                    <Link to='/login' className="flex items-center justify-center w-full  bg-black text-white py-3 rounded-2xl mt-5">Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Start
