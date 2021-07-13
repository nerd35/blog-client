import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./singlepost.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SinglePost() {
  const location = useLocation();

  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        {post.postPic && (
          <img
            src={post.postPic}
            alt="singlepostimg"
            className="single-post-img"
          />
        )}
        <h1 className="single-post-title">
          {post.title}
          <div className="single-post-action">
            <i className="single-post-icon far fa-edit"></i>
            <i className="single-post-icon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="single-post-info">
          <span className="single-author-name">
            Author: 
            <Link to={`/?user=${post.username}`} className="link">
            <b>{post.username}</b>
            </Link>
          </span>
          <span className="single-post-date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="single-post-desc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}
