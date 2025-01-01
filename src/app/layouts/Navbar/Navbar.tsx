const Navbar = () => {
  return (
    <>
      <div className="bg-white p-4 fixed w-full">
        <div className="container flex gap-8 mx-auto">
          <div className="Brand text-xl my-auto">Quail</div>
          <div className="Search w-full my-auto">
            <input
              type="text"
              className="bg-gray-100 p-2 px-4 rounded w-full"
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
