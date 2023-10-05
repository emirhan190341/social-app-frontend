import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const PostPage = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function getPostData() {
      const response = await fetch("http://localhost:8080/v1/api/post");
      const body = await response.json();
      setPostList(body);
      console.log(body);
    }
    getPostData();
  }, []);

  return (
    <>
      <UnorderedList>
        {postList.map((post) => (
          <ListItem>{post.title} {post.text}</ListItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default PostPage;
