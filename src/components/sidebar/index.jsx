import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SelfyImage from "../../assets/images/selfy.PNG";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <img className="selfy-img" src={SelfyImage} alt="selfy-img" />
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES </span>
        <ul className="sidebar-list">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebar-list-item">{c.name}</li>
            </Link>
          ))}
        </ul>
        <span className="sidebar-title">Follow Us</span>
        <div className="sidebar-social">
          <i className="sidebar-icon fab fa-facebook-square"></i>
          <i className="sidebar-icon fab fa-instagram-square"></i>
          <i className="sidebar-icon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
