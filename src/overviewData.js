import facebook from "./assets/img/icon-facebook.svg";
import twitter from "./assets/img/icon-twitter.svg";
import instagram from "./assets/img/icon-instagram.svg";
import youtube from "./assets/img/icon-youtube.svg";
import iconUp from "./assets/img/icon-up.svg";
import iconDown from "./assets/img/icon-down.svg";

const overviewData = [
  {
    id: 1,
    name: "Page Views",
    social: facebook,
    number: "87",
    iconUp: iconUp,
    todayChange: 3,
  },
  {
    id: 2,
    name: "Likes",
    social: facebook,
    number: "52",
    iconDown: iconDown,
    todayChange: -2,
  },

  {
    id: 3,
    name: "Likes",
    social: instagram,
    number: "5462",
    iconUp: iconUp,
    todayChange: 2257,
  },

  {
    id: 4,
    name: "Profile Views",
    social: instagram,
    number: "52k",
    iconUp: iconUp,
    todayChange: 1375,
  },
  {
    id: 5,
    name: "Retweets",
    social: twitter,
    number: "117",
    iconUp: iconUp,
    todayChange: 303,
  },
  {
    id: 6,
    name: "Likes",
    social: twitter,
    number: "507",
    iconUp: iconUp,
    todayChange: 1553,
  },
  {
    id: 7,
    name: "Likes",
    social: youtube,
    number: "107",
    iconDown: iconDown,
    todayChange: -19,
  },
  {
    id: 8,
    name: "Total Views",
    social: youtube,
    number: "1407",
    iconDown: iconDown,
    todayChange: -12,
  },
];

export default overviewData;
