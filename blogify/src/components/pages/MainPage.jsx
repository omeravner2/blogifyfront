import React from "react";
import { List, ListItem } from "@mui/material";
import Post from "./Post.jsx";
import Navbar from "./Navbar.jsx";
import PostsList from "./PostsList.jsx";
import { useEffect, useState } from "react";

export default function MainPage(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const isauthenticated = !!localStorage.getItem("userid");
  const params = new URLSearchParams();
  params.append("userid", localStorage.getItem("userid"));
  const url = props.url;
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      let response = await fetch(url + `?page=${currentPage}&` + params, {
        mode: "cors",
      });
      response = await response.json();
      setData(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  localStorage.setItem(
    "profile_picture",
    data[0]?.user_profile.profile_picture
  );
  return (
    <>
      {isauthenticated ? (
        <>
          <Navbar />
          <PostsList post_list={data[0]?.posts} />
        </>
      ) : (
        <p color="black">something</p>
      )}
    </>
  );
}
