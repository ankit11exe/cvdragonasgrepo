import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();

    const handleNavigate = ()=>{
        navigate("/dashboard");
    };

    return(
        <div className="flex h-screen w-screen overflow-hidden">
            <div className="w-1/2 h-screen relative bg-cover bg-center rounded-2xl overflow-hidden" style={{ backgroundImage: "url('/assets/cover.jpg')"}}>
                <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-10">
                    <h1 className="text-left font-bold text-white text-4xl mb-2">Welcome to Ladnun Yogshem Varsh 2026</h1>
                    <p className="text-white text-sm text-left">Discover the heart of Jain heritage in Ladnun. <br /> Connect, explore, and cherish every sacred moment.</p>

                </div>
            </div>

            <div className="w-1/2 flex items-center justify-center bg-white">
                <div className="bg-white p-10 rounded-lg shadow-lg w-3/4 max-w-md">
                    <h1 className="text-yellow-500 font-bold text-2xl mb-2">Jai Jinendra!</h1>
                    <h1 className="text-black font-semibold text-2xl mb-4">Welcome to Jain Vishva Bharti!</h1>
                    <p className="text-gray-400 text-sm mb-6">Enter your mobile number to access your account</p>
                    <div className="mb-4">
                        <input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" type="tel" pattern="[0-9]{10}" minLength="10" maxLength="10" placeholder="Mobile Number" required/>
                    </div>
                    <button onClick={handleNavigate} className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">Sign In</button>
                    <p className="text-center text-yellow-500 text-sm mt-4 cursor-pointer hover:underline">Forget password?</p>
                </div>
            </div>

        </div>
    );
}