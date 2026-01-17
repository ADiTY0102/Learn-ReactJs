import { MapPinned } from "lucide-react";

const UserCard = (props) => {
  return (
    <div className="w-80 h-[520px] bg-white shadow-lg p-4 m-3 flex flex-col">
      
      {/* Header */}
      <div className="flex items-center justify-between h-12">
        <h4
          className={`${
            props.status === "avaliable"
              ? "bg-green-500"
              : "bg-gray-300"
          } text-white rounded-full font-bold text-xs px-2 py-1`}
        >
          {props.status === "avaliable" ? "avaliable" : "unavaliable"}
        </h4>
        <h4 className="text-sm text-gray-500">${props.rate}/hr</h4>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center mt-2">
        <img
          className="h-40 w-40 rounded-full object-cover"
          src={props.image}
          alt="profile pic"
        />
        <h2 className="font-semibold text-lg">{props.userName}</h2>
        <h4 className="font-light text-xs">{props.role}</h4>
        <p className="flex items-center gap-1 text-xs text-blue-600">
          <MapPinned size={14} className="text-green-500" />
          {props.tag}
        </p>
      </div>

      {/* Skills + Description */}
      <div className="flex flex-wrap justify-center mt-4 text-sm font-semibold text-center">
        {props.skills.slice(0, 3).map((skill, i) => (
          <button
            key={i}
            className="border rounded-full px-4 py-1 m-1"
          >
            {skill}
          </button>
        ))}
        <button className="bg-blue-400 rounded-full px-4 py-1 m-1">
          +9
        </button>

        <p className="mt-3 text-[10px] text-gray-600 px-2">
          {props.description}
        </p>
      </div>

      {/* Footer (STICKED) */}
      <div className="mt-auto flex flex-col items-center">
        <hr className="w-1/2 my-3" />
        <button
          className="
            w-full h-10
            font-semibold text-[15px]
            transition-colors duration-300
            hover:bg-sky-500 hover:text-white
          "
        >
          VIEW PROFILE
        </button>
      </div>
    </div>
  );
};

export default UserCard;
