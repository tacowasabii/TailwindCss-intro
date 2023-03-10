const Promocode = () => {
  return (
    <div className="border-2 rounded-3xl border-custom-gray bg-white p-5 mb-3">
      <div className="font-fredoka font-semibold font-24 text-custom-purple">
        Promocode
      </div>
      <div className="flex">
        <div className="xl:w-full w-full mt-4 md:w-full sm:w-full">
          <div className="relative">
            <input
              type="text"
              className="bg-custom h-10 w-full border-0 px-4 rounded-full focus:outline-none hover:cursor-pointer"
            />
            <button className="rounded-full bg-orange-400 absolute top-0 right-0 text-sm h-10 px-3 text-black font-bold">
              Ok
            </button>
          </div>
        </div>
      </div>
      <div className="font-poppins text-custom-purple text-xs mt-2">
        <span className="text-custom-red-2 underline">Sign In</span>{" "}
        <span className="text-custom-purple">to see all rewards</span> .
      </div>
    </div>
  );
};

export default Promocode;
