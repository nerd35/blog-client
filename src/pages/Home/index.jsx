import React, { useEffect, useState } from "react";
import { Header, Posts, SideBar } from "../../components";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  const {search} = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data)
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
}
