// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto my-4">
        <div className="grid grid-cols-4 grid-rows-1 gap-8">
          <div className="p-4 bg-slate-900 rounded text-white">
            <p className="mb-1 text-sm text-gray-300">All time</p>
            <p className="text-3xl text-white">৳ 8,590</p>
            <p className="mt-1 text-lg text-gray-200">Total Asset</p>
          </div>

          <div className="p-4 bg-slate-900 rounded text-white">
            <p className="mb-1 text-sm text-gray-300">This month</p>
            <p className="text-3xl text-red-400">৳ 5,750</p>
            <p className="mt-1 text-lg text-gray-200">Spend</p>
          </div>

          <div className="p-4 bg-slate-900 rounded text-white">
            <p className="mb-1 text-sm text-gray-300">December, 2024</p>
            <p className="text-3xl text-green-400">৳ 2,360</p>
            <div className="flex mt-1">
              <p className="text-lg text-gray-200">Earned</p>
              <p className="text-base text-gray-200 my-auto ml-auto">
                ৳1,180 per head
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
