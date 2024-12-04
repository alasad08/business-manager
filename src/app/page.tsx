// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto my-4">
        <div className="grid grid-cols-4 grid-rows-1 gap-8">
          <div className="p-4 bg-zinc-900 rounded text-white ring-1 ring-white/10">
            <p className="mb-1 text-sm text-gray-300">All time</p>
            <p className="text-3xl text-orange-300">৳ 8,590</p>
            <div className="flex mt-1">
              <p className="text-lg text-gray-200">Total Asset</p>
              <p className="text-base text-green-400 my-auto ml-auto">
                ৳1,180 in cash
              </p>
            </div>
          </div>

          <div className="p-4 bg-zinc-900 rounded text-white ring-1 ring-white/10">
            <p className="mb-1 text-sm text-gray-300">This month</p>
            <p className="text-3xl text-red-400">৳ 5,750</p>
            <div className="flex mt-1">
              <p className="text-lg text-gray-200">Spend</p>
              <p className="text-base text-gray-200 my-auto ml-auto">
                ৳191.66 per day
              </p>
            </div>
          </div>

          <div className="p-4 bg-zinc-900 rounded text-white ring-1 ring-white/10">
            <p className="mb-1 text-sm text-gray-300">December, 2024</p>
            <p className="text-3xl text-green-400">৳ 2,360</p>
            <div className="flex mt-1">
              <p className="text-lg text-gray-200">Revenue</p>
              <p className="text-base text-gray-200 my-auto ml-auto">
                ৳78.66 per day
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
