const ShareHolderCard = () => {
  const shareHolders = [
    { id: 1, name: "Abrar", ammount: 1300 },
    { id: 2, name: "Riyadh", ammount: 1400 },
    { id: 3, name: "Srabon", ammount: 850 },
  ];

  // Calculate the total amount
  const totalAmount = shareHolders.reduce(
    (total, shareHolder) => total + shareHolder.ammount,
    0,
  );

  return (
    <>
      <div className="rounded bg-zinc-900 p-4 text-zinc-200">
        <h2 className="mb-2 text-xl">Share Holders</h2>
        <ul>
          {shareHolders.map((shareHolder) => {
            // Calculate the percentage
            const percentage = (
              (shareHolder.ammount / totalAmount) *
              100
            ).toFixed(2);

            return (
              <li
                key={shareHolder.id}
                className="my-2 flex rounded bg-zinc-800 p-2"
              >
                {shareHolder.name}: ৳{shareHolder.ammount}{" "}
                <span className="ml-auto">{percentage}%</span>
              </li>
            );
          })}
        </ul>
        <p className="text-base">Total: ৳{totalAmount}</p>
      </div>
    </>
  );
};

export default ShareHolderCard;
