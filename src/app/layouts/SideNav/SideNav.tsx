import {
  MdSpaceDashboard,
  MdShoppingCart,
  MdOutlineSettings,
} from "react-icons/md";

const SideNav = () => {
  return (
    <main>
      <div className="sticky top-0 -z-10 h-dvh bg-zinc-950 p-2 text-zinc-100">
        <div className="pt-12"></div>
        <ul className="flex flex-col gap-2 text-lg">
          <li className="flex size-12 rounded-lg bg-zinc-900">
            <span className="m-auto">
              <MdSpaceDashboard />
            </span>
          </li>
          <li className="flex size-12 rounded-lg">
            <span className="m-auto">
              <MdShoppingCart />
            </span>
          </li>
          <li className="flex size-12 rounded-lg">
            <span className="m-auto">
              <MdOutlineSettings />
            </span>
          </li>
          <li className="flex size-12 rounded-lg bg-zinc-900">
            <span className="m-auto">D</span>
          </li>
          <li className="absolute bottom-0 mb-2 flex size-12 rounded-lg bg-zinc-900">
            <span className="m-auto">D</span>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default SideNav;
