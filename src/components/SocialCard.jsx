import facebook from "../assets/img/icon-facebook.svg";
import twitter from "../assets/img/icon-twitter.svg";
import instagram from "../assets/img/icon-instagram.svg";
import youtube from "../assets/img/icon-youtube.svg";
import iconUp from "../assets/img/icon-up.svg";
import iconDown from "../assets/img/icon-down.svg";

const SocialCard = ({ socialMedia }) => {
  let icon, username, followers, todayChange;

  switch (socialMedia) {
    case "facebook":
      icon = facebook;
      username = "@nathanf";
      followers = 1987;
      todayChange = 12;
      break;
    case "twitter":
      icon = twitter;
      username = "@nathanf";
      followers = 1044;
      todayChange = 99;
      break;
    case "instagram":
      icon = instagram;
      username = "@realnathanf";
      followers = "11k";
      todayChange = 1099;
      break;
    case "youtube":
      icon = youtube;
      username = "Nathan F.";
      followers = 8239;
      todayChange = -144;
      break;
    default:
      break;
  }

  return (
    <article
      className={`card card-${socialMedia} bg-veryPaleBlue hover:bg-lightGrayishBlue dark:bg-darkDesaturatedBlue   hover:dark:bg-desaturatedBlue cursor-pointer flex flex-col items-center p-8 mb-6 rounded-lg relative`}
    >
      <a href={`#${username}`} className="flex gap-3 mb-6 text-darkGrayishBlue font-bold">
        <img src={icon} alt={socialMedia} />
        {username}
      </a>
      <p className="text-5xl dark:text-white font-bold mb-4">{followers}</p>
      <p className="mb-6 text-darkGrayishBlue tracking-[0.5rem]">{socialMedia === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS"}</p>
      <div className="flex gap-2 items-center">
        <img
          src={todayChange > 0 ? iconUp : iconDown}
          alt={todayChange > 0 ? "Up" : "Down"}
          className="h-[8px]"
        />
        <small
          className={
            todayChange > 0
              ? "text-limeGreen font-bold"
              : "text-brightRed font-bold"
          }
        >
          {todayChange} Today
        </small>
      </div>
    </article>
  );
};

export default SocialCard;
