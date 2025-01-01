const SideNav = () => {
  return (
    <main>
      <div className="sticky top-0 -z-10 h-dvh bg-zinc-950 p-2 text-zinc-100">
        <div className="pt-12"></div>
        <ul className="flex flex-col gap-2">
          <li className="flex size-12 rounded-lg bg-zinc-900">
            <span className="m-auto">D</span>
          </li>
          <li className="flex size-12 rounded-lg bg-zinc-900">
            <span className="m-auto">D</span>
          </li>
          <li className="flex size-12 rounded-lg bg-zinc-900">
            <span className="m-auto">D</span>
          </li>
          <li className="flex size-12 rounded-lg bg-zinc-900">
            <span className="m-auto">D</span>
          </li>
          <li className="flex size-12 rounded-lg bg-zinc-900">
            <span className="m-auto">D</span>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default SideNav;
