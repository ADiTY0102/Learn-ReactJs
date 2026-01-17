import { MapPinned } from "lucide-react";

const UserCard = (props) => {
    return (
        <div className="h-105 w-80 bg-white shadow-lg p-4 m-3">
            <div className="flex items-center justify-between h-12">
                <h4 className={`${props.status === "available" ? "bg-green-500" : "bg-gray-500"} text-white rounded-full font-bold text-xs px-2 py-1 m-1`}>
                    {props.status === "available" ? "available" : "unavailable"}
                </h4>
                <h4 className="text-sm text-gray-500">${props.rate}/hr</h4>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img
                    className="h-40 w-40 rounded-full object-cover"
                    src={props.image}
                    alt="profile pic"
                />
                <h2 className="font-semibold text-lg font-sans">{props.userName}</h2>
                <h4 className="font-light text-xs">{props.role}</h4>
                <p className="flex items-center gap-1 text-xs text-blue-600">
                    <MapPinned size={14} className="text-green-500" />
                    {props.tag}
                </p>
            </div>
            <div className="flex flex-wrap justify-center mt-4 text-sm font-semibold">
                <button className="bg-white-200 border text-black-900 rounded-full px-4 py-1 m-1">{props.skills[0]}</button>
                <button className="bg-white-200 border text-black-900 rounded-full px-4 py-1 m-1">{props.skills[1]}</button>
                <button className="bg-white-200 border text-black-900 rounded-full px-4 py-1 m-1">{props.skills[2]}</button>
                <button className="bg-blue-400 text-black-900 rounded-full px-4 py-1 m-1">{props.skills[3]}</button>
                <p className="mt-2 text-xs text-[10px] text-center text-gray-600">
                    {props.description}
                </p>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center">
                <hr className="w-30" />
                <button className="bg-white hover:bg-sky-500 hover:text-white hover:mt-0 w-80 h-9.5 text-black font-semibold text-[15px] px-4 py-1">VIEW PROFILE</button>
            </div>
        </div>
    );
};

export default UserCard;
