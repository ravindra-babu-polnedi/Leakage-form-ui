import "./index.css";
import { MdFactory } from "react-icons/md";
import { HiMiniHome } from "react-icons/hi2";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { SiStagetimer } from "react-icons/si";
import { CgPerformance } from "react-icons/cg";
import { RiSettings3Fill } from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md";
import { TbArrowBigRightFilled } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";
import { IoLogoIonic } from "react-icons/io";

const data = [
  {
    text: "Plant Overview",
    icon: <MdFactory className="icon-style" />,
  },
  { text: "Central Dashboard", icon: <HiMiniHome className="icon-style" /> },
  {
    text: "DWM Metrics",
    icon: <TbBrandGoogleAnalytics className="icon-style" />,
  },
  { text: "Availability", icon: <SiStagetimer className="icon-style" /> },
  { text: "Performance", icon: <CgPerformance className="icon-style" /> },
  {
    text: "Quality",
    icon: <RiSettings3Fill className="icon-style" />,
  },
  { text: "Alerts", icon: <MdNotificationsActive className="icon-style" /> },
  { text: "Leakage Form", icon: <TbArrowBigRightFilled className="icon-style" /> },
  { text: "DWM Form", icon: <TbArrowBigRightFilled className="icon-style" /> },
  { text: "Work Order", icon: <TbArrowBigRightFilled className="icon-style" /> },
  {
    text: "Track Work Order",
    icon: <TbArrowBigRightFilled className="icon-style" />,
  },
  { text: "Machine Comparision", icon: <TbArrowBigRightFilled className="icon-style" /> },
  { text: "Machine Management", icon: <TbArrowBigRightFilled className="icon-style" /> },
];
const Navigation = () => {
  return (
    <div className="nav-container">
      <div>
        <div>
          <div className="top-container">
            <div className="nav-top-div"><IoLogoIonic className="icon-style2"/></div>
              <div>your logo</div>
          </div>
          <ul className="nav-list-style">
            {data.map((item) => {
              return (
                <li
                  key={item.text}
                  className={`nav-list-item ${
                    item.text === "Payments" ? "selected" : ""
                  }`}
                >
                  <div>{item.icon}</div>
                  <div className={`item-text`}>{item.text}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={`nav-list-item nav-bottom-div`}>
        <div><IoLogOutOutline className="icon-style" /></div>
        <div className={`item-text`}>Log Out</div>
      </div>
  </div>
  );
};

export default Navigation;
