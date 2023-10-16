import React, { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import useShowToast from "../hooks/useShowToast";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const [user, setUser] = useState(null);

  const { userId } = useParams();

  const showToast = useShowToast();

  useEffect(() => {
    const getUser = async () => {
      console.log(localStorage.getItem("tokenKey"));
      try {
        const res = await fetch(`http://localhost:8080/v1/api/user/${userId}`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("tokenKey"),
          },
        });
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setUser(data);
      } catch (error) {
        showToast("Error", "lala", "error");
      }
    };
    getUser();
  }, [userId, showToast]);

  if (!user) return null;

  return (
    <>
      <UserHeader user={user} />
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
