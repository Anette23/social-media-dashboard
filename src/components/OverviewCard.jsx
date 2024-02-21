import overviewData from "../overviewData";

const OverviewCard = () => {
  return (
    <>
      {overviewData.map(
        ({ id, name, number, social,  todayChange, iconUp, iconDown }) => (
          <article key={id} className="py-9 px-8 rounded-lg bg-veryPaleBlue hover:bg-lightGrayishBlue dark:bg-darkDesaturatedBlue   hover:dark:bg-desaturatedBlue cursor-pointer mb-8">
            <div className="flex justify-between mb-12">
              <p className="text-darkGrayishBlue font-bold text-lg">{name}</p>
              <img src={social} alt={social} className="h-7"/>
            </div>
            <div className="flex justify-between">
              <p className="dark:text-white font-bold text-4xl">{number}</p>
              <div className="flex items-center gap-2">
              <img
          src={todayChange > 0 ? iconUp : iconDown}
          alt={todayChange > 0 ? "Up" : "Down"}
          className="h-[8px]"
        />
        <small className={todayChange >= 0 ? "text-limeGreen font-bold" : "text-brightRed font-bold"}>
                {Math.abs(todayChange)}%
              </small>
              </div>
            </div>
          </article>
        )
      )}
    </>
  );
};

export default OverviewCard;
