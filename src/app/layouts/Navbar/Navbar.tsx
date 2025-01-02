import { MdNotifications, MdNotificationsNone } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full bg-zinc-950 p-2 text-white">
        <div className="mx-auto flex gap-8">
          <div className="Brand flex gap-4 text-xl text-white">
            <div className="my-auto">
              <span>Quail</span>
            </div>

            <div className="my-auto">
              <HiOutlineMenuAlt2 />
            </div>
          </div>
          <div className="Search relative flex w-full text-white">
            <div className="absolute p-2.5">
              <FiSearch className="my-auto text-xl text-zinc-400" />
            </div>
            <input
              type="text"
              className="w-full rounded bg-zinc-900 p-2 px-4 pl-10"
              placeholder="Search..."
            />
          </div>
          <div className="Profile flex gap-4 text-white">
            <div className="flex text-xl">
              <MdNotificationsNone className="m-auto" />
            </div>
            <div className="flex size-10 rounded-xl bg-purple-500">
              <span className="m-auto text-xl font-medium text-white">S</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
