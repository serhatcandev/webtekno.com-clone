import "./header.css";
import WebteknoLogo from "../../images/webtekno-logo-white.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { GoTriangleDown } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export const Header = () => {
  return (
    <section className="header">
      <div className="header-left">
        <GiHamburgerMenu size={20} className="hamburger" />
        <img src={WebteknoLogo} alt="webtekno-logo" className="wt-logo" />
        <ul className="active">
          <li className="active">Anasayfa</li>
          <li>Haber</li>
          <li>Video</li>
          <li>Kategoriler</li>
          <GoTriangleDown size={14} />
        </ul>
      </div>
      <div className="header-right">
        <GoSearch className="search-icon" />
        <div className="user-login">
          <FaUser className="user-icon" />
          <span>Giriş Yap</span>
        </div>
        <FaHeart className="fav-icon" />
      </div>
    </section>   

















































































































































  );
};
