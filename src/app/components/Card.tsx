export default function Card() {
  return (
    <>
      <div className="rounded bg-zinc-900 p-4 text-white ring-1 ring-white/10">
        <p className="mb-1 text-xs text-gray-300">All time</p>
        <p className="text-3xl text-orange-300">৳ 8,590</p>
        <div className="mt-1 flex">
          <p className="text-base text-gray-200">Total Asset</p>
          <p className="my-auto ml-auto text-sm text-green-400">
            ৳1,180 in cash
          </p>
        </div>
      </div>
    </>
  );
}
