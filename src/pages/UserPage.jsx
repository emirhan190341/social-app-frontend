import React from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={481}
        postImg="/post1.jpg"
        postTitle="Let's talk about threads."
      />
      <UserPost
        likes={451}
        replies={12}
        postImg="/post1.jpg"
        postTitle="I love this guy."
      />
      <UserPost
        likes={321}
        replies={989}
        postImg="/post1.jpg"
        postTitle="What A Page!"
      />

      <UserPost likes={321} replies={989} postTitle="Hello everyone!" />
    </>
  );
};

export default UserPage;
