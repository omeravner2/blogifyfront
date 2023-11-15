import React from "react";
import { useEffect, useState } from "react";
import { List, ListItem, darkScrollbar } from "@mui/material";
import Post from "./Post.jsx";

export default function PostsList(props) {
  const url = props.url;
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    return fetch(url, { mode: "cors" })
      .then((response) => response.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <List
        sx={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {data?.map((post) => (
          <ListItem>
            {
              <Post
                title={post.title}
                content={post.content}
                userid={post.author}
                likes={post.likes_count}
                date={post.created_on}
                photo={post.photo}
                profile={post.profile_picture}
                username={post.username}
                postid={post.id}
              />
            }
          </ListItem>
        ))}
      </List>
    </div>
  );
}
