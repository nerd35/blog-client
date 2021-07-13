import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";
import "./topbar.css";

const TopBar = () => {
  const {user, dispatch} = useContext(Context);

  const handleLogout = () => {
dispatch({type: "LOGOUT"})
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="top-social-icon fab fa-facebook-square"></i>
        <i className="top-social-icon fab fa-instagram-square"></i>
        <i className="top-social-icon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="top-list-item"><Link to="/" className="link">HOME</Link></li>
          <li className="top-list-item"><Link to="/" className="link">ABOUT</Link></li>
          <li className="top-list-item"><Link to="/" className="link">CONTACT</Link></li>
          <li className="top-list-item"><Link to="/create" className="link">CREATE</Link></li>
          <li className="top-list-item" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (

            <img
              className="top-img"
              src={user.profilePic}
              alt=""
            />
          ): (
            <ul className="topList">
            <li className="top-list-item"><Link to="/login" className="link">LOGIN</Link></li>
            <li className="top-list-item"><Link to="/register" className="link">REGISTER</Link></li>
            </ul>
          )
        }
        <i className="top-search-icon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
