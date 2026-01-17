const UserCard = () => {
  return (
    <div className="h-90 w-60 bg-white shadow-lg p-4 m-3">
      <div className="flex items-center justify-between h-12">
        <h4 className="bg-green-500 text-white rounded-full font-bold text-xs p-1 m-1">
          available
        </h4>
        <h4 className="text-sm text-black-500">$20/hr</h4>
      </div>
      <div className="middle-part flex items-center flex-col justify-center">
        <img className="h-40 w-40 rounded-full" src="https://i.pinimg.com/1200x/17/c0/d1/17c0d1bfcef18ad4a83d5b5b95f328df.jpg" alt="" />
        <h2 className="font-semibold text-base font-sans">Lord Adii</h2>
        <p className="font-thin text-xs">UI/UX Designer</p>
      </div>
    </div>
  );
};

export default UserCard;
