export default function Card() {
  return (
    <>
      <div className="p-4 bg-zinc-900 rounded text-white ring-1 ring-white/10">
        <p className="mb-1 text-xs text-gray-300">All time</p>
        <p className="text-3xl text-orange-300">৳ 8,590</p>
        <div className="flex mt-1">
          <p className="text-base text-gray-200">Total Asset</p>
          <p className="text-sm text-green-400 my-auto ml-auto">
            ৳1,180 in cash
          </p>
        </div>
      </div>
    </>
  );
}
