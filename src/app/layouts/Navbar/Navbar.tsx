const Navbar = () => {
  return (
    <>
      <div className="fixed w-full bg-zinc-950 p-2">
        <div className="container mx-auto flex gap-8">
          <div className="Brand my-auto text-xl text-zinc-100">Quail</div>
          <div className="Search my-auto w-full">
            <input
              type="text"
              className="w-full rounded bg-zinc-900 p-2 px-4"
              placeholder="Search..."
            />
          </div>
          <div className="Profile">
            <p className="flex size-10 rounded-xl bg-purple-500">
              <span className="m-auto text-xl font-medium text-white">S</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
