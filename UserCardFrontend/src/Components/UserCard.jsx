import { MapPinned } from "lucide-react";

const UserCard = () => {
    return (
        <div className="h-105 w-80 bg-white shadow-lg p-4 m-3">
            <div className="flex items-center justify-between h-12">
                <h4 className="bg-green-500 text-white rounded-full font-bold text-xs px-2 py-1 m-1">
                    available
                </h4>
                <h4 className="text-sm text-gray-500">$20/hr</h4>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img
                    className="h-40 w-40 rounded-full object-cover"
                    src="https://i.pinimg.com/1200x/17/c0/d1/17c0d1bfcef18ad4a83d5b5b95f328df.jpg"
                    alt="Aditya Binjagermath"
                />
                <h2 className="font-semibold text-lg font-sans">Aditya Binjagermath</h2>
                <h4 className="font-light text-xs">UI/UX Designer</h4>
                <p className="flex items-center gap-1 text-xs text-blue-600">
                    <MapPinned size={14} className="text-green-500" />
                    Freelancer
                </p>
            </div>
            <div className="flex flex-wrap justify-center mt-4 text-sm font-semibold">
                <button className="bg-white-200 border text-black-900 rounded-full px-4 py-1 m-1">UI</button>
                <button className="bg-white-200 border text-black-900 rounded-full px-4 py-1 m-1">UX</button>
                <button className="bg-white-200 border text-black-900 rounded-full px-4 py-1 m-1">frontend</button>
                <button className="bg-blue-400 text-black-900 rounded-full px-4 py-1 m-1">+4</button>
                <p className="mt-2 text-xs text-[10px] text-center text-gray-600">
                    Aditya is a 22 years UI/UX designer, passionate about creating intuitive and engaging user experiences.
                </p>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center">
               <hr className="w-30"/>
               <button className="bg-white hover:bg-sky-500 hover:text-white hover:mt-0 w-80 h-9.5 text-black font-semibold text-[15px] px-4 py-1">VIEW PROFILE</button>
            </div>
        </div>
    );
};

export default UserCard;
