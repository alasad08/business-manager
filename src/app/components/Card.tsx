export default function Card() {
  const points = [
    { x: 10, y: Math.random() * 50 + 10 },
    { x: 30, y: Math.random() * 50 + 10 },
    { x: 50, y: Math.random() * 50 + 10 },
    { x: 70, y: Math.random() * 50 + 10 },
    { x: 90, y: Math.random() * 50 + 10 },
    { x: 110, y: Math.random() * 50 + 10 },
    { x: 130, y: Math.random() * 50 + 10 },
  ];

  const getSmoothPath = (points: { x: number; y: number }[]) => {
    if (points.length < 2) return "";
    let path = `M ${points[0].x},${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      const controlX = (curr.x + next.x) / 2;
      path += ` Q ${curr.x},${curr.y} ${controlX},${(curr.y + next.y) / 2}`;
    }
    path += ` T ${points[points.length - 1].x},${points[points.length - 1].y}`;
    return path;
  };

  const smoothPath = getSmoothPath(points);

  return (
    <>
      <div className="rounded-lg bg-zinc-900 p-4 text-white ring-1 ring-white/15">
        <div className="flex">
          <div className="">
            <p className="mb-1 text-sm text-gray-300">Total Expense</p>
            <div className="mt-1 flex gap-2">
              <p className="text-White mt-auto text-3xl">৳ 8,590</p>
              <p className="mt-auto text-sm text-green-400">
                <span className="font-bold">↑</span> 49%
              </p>
            </div>
          </div>
          <div className="ml-auto max-w-[120px] flex-grow px-2">
            <svg
              viewBox="0 0 120 60"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-500"
            >
              {/* Smooth line */}
              <path
                d={smoothPath}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
