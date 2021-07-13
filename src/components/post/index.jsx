import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  const PF = "http://localhost:5000/uploads/"
  return (
    <div className="post">
      {post.postPic && (
        <img src={PF + post.postPic} alt="postimg" className="post-img" />
      )}
      <div className="post-info">
        <div className="post-cats">
          {post.categories.map((c) => (
            <span className="post-cat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">

        <span className="post-title">{post.title}</span>
        </Link>
        <hr />
        <span className="post-date">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="post-desc">{post.desc}</p>
    </div>
  );
}
