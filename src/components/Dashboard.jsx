import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
const DashboardCard = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () =>{ 
    setDarkMode(!darkMode)
  }
  return (
    <div className={`${darkMode ? "dark" : ""} grid grid-cols-1 lg:grid-cols-12`}>
      <Header toggleDarkMode={toggleDarkMode}/>
      <Main />
    </div>
  );
};

export default DashboardCard;
