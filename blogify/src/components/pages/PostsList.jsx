import React from "react";
import { useEffect, useState } from "react";
import { List, ListItem, darkScrollbar } from "@mui/material";
import Post from "./Post.jsx";

export default function PostsList(props) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <List
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {props.post_list?.map((post) => (
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
    </>
  );
}
