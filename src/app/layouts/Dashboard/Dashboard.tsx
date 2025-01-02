import Card from "@/app/components/Card";
import ShareHolderCard from "@/app/components/ShareHolder";

const Dashboard = () => {
  return (
    <main className="flex-grow pr-2 text-zinc-100">
      <div className="pt-14"></div>

      <div className="Dashboard grid gap-4 rounded bg-zinc-900 p-4">
        <div className="Overview flex">
          <h1 className="py-2 text-2xl font-semibold">Overview</h1>
          <div className="Options ml-auto flex gap-2">
            <a href="" className="Download">
              D
            </a>
            <a href="" className="TimeSpan">
              7d
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
          <ShareHolderCard />
          <ShareHolderCard />
          <ShareHolderCard />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
