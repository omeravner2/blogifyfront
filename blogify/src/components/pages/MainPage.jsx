import React from "react";
import { Box, Button, List, ListItem } from "@mui/material";

import Navbar from "./Navbar.jsx";
import PostsList from "./PostsList.jsx";
import { useEffect, useState } from "react";

export default function MainPage(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const isauthenticated = !!localStorage.getItem("userid");
  const params = new URLSearchParams();
  params.append("userid", localStorage.getItem("userid"));
  const url = props.url;
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchdata = async () => {
    setLoading(true);
    try {
      let response = await fetch(url + `?page=${currentPage}&` + params, {
        mode: "cors",
      });
      response = await response.json();
      setPosts([...posts, ...response.posts]);
      setProfile(response.user_profile);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchdata();
  }, [currentPage]);

  localStorage.setItem("profile_picture", profile?.profile_picture);
  return (
    <>
      {isauthenticated ? (
        <>
          <Navbar />
          {posts ? <PostsList post_list={posts} /> : null}
          <Box textAlign="center">
            <Button onClick={handleLoadMore} sx={{ color: "#7B7D7D" }}>
              Load More
            </Button>
          </Box>
        </>
      ) : (
        <p color="black">something</p>
      )}
    </>
  );
}
