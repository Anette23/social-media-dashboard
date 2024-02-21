const Header = ({ toggleDarkMode }) => {
  return (
    <header className="bg-veryPaleBlue dark:bg-veryDarkBlue min-h-[20rem] lg:min-h-[15rem] col-span-12 lg:flex lg:flex-row justify-between pt-10 px-10 lg:px-20 xl:px-52 ">
      <article className="border-b-[1px] lg:border-0 border-darkGrayishBlue dark:border-desaturatedBlue">
        <h1 className="text-veryDarkBlueText dark:text-white font-bold text-2xl ">
          Social Media Dashboard
        </h1>
        <h2 className="pb-8 lg:pb-0 text-lg">Total Followers: 23,004</h2>
      </article>
      <article className="flex justify-between pt-8 lg:pb-0 lg:pt-8 lg:gap-6">
        <h3 className="text-lg lg:dark:text-white">Dark Mode</h3>
        <input
          className=" h-[1.9rem] w-14 appearance-none rounded-full bg-lightToggle after:absolute after:z-[2] after:mt-[.3rem] after:ml-[0.4rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-lightGrayishBlue  after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-lightToggle checked:after:absolute checked:after:z-[2] checked:after:mt-[5px] checked:after:ml-[1.8rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary  checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer
          hover:bg-gradient-to-r from-[hsl(210,78%,56%)] to-[hsl(146,68%,55%)] dark:after:bg-veryDarkBlue 
           dark:bg-gradient-to-r from-[hsl(210,78%,56%)] to-[hsl(146,68%,55%)] dark:after:bg-veryDarkBlue dark:checked:bg-toggleDark dark:checked:after:bg-yellow-400 "
          type="checkbox"
          role="switch"
          defaultChecked="true"
          onClick={toggleDarkMode}
        />
      </article>
    </header>
  );
};

export default Header;
