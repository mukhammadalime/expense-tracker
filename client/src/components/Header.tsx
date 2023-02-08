import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";

const Header = () => {
  return (
    <div className="header flex">
      <LeaderboardIcon fontSize="large" />

      <div className="flex align-items-center gap-6 cursor">
        <CalendarTodayIcon fontSize="large" />
        <h2 className="white">Current Month</h2>
      </div>

      <div className="flex align-items-center gap-6">
        <SettingsIcon fontSize="large" />

        <img
          className="header__avatar cursor"
          src="/images/default.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
