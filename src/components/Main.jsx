import Card from "./Card";
import OverviewCard from "./OverviewCard";

const Main = () => {
  return (
    <main className="bg-white dark:bg-veryDarkBlueBG min-h-screen  col-span-12">
      <div className="px-10 lg:px-20 xl:px-52 lg:grid grid-cols-4 lg:gap-8 mt-[-4rem] lg:mt-[-5rem]">
        <Card />
      </div>
      <section className="pt-10 px-10 lg:px-20 xl:px-52">
        <h1 className="text-darkGrayishBlue mb-6">Overview - Today</h1>
        <div className="lg:grid grid-cols-4 lg:gap-10">
          <OverviewCard />
        </div>
      </section>
    </main>
  );
};

export default Main;
