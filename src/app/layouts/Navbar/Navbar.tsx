const Navbar = () => {
  return (
    <>
      <div className="bg-zinc-900 p-2 fixed w-full">
        <div className="container flex gap-8 mx-auto">
          <div className="Brand text-xl my-auto text-zinc-100">Quail</div>
          <div className="Search w-full my-auto">
            <input
              type="text"
              className="bg-zinc-800 p-2 px-4 rounded w-full"
              placeholder="Search..."
            />
          </div>
          <div className="Profile">
            <p className="size-10 bg-purple-500 rounded-full flex">
              <span className="m-auto text-xl text-white font-medium">S</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
