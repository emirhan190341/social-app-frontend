import { Button } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";

const LogoutButton = () => {
  const setUser = useSetRecoilState(userAtom);

  // const handleLogout = async () => {
  //   try {
  //     const res = await fetch("http://localhost:8080/api/v1/auth/logout", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const data = await res.json();
  //     console.log(data);
  //     localStorage.removeItem("tokenKey");
  //     localStorage.removeItem("email");
  //     setUser(null);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/v1/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tokenKey"),
        },
      });
      console.log(res);

      if (res.status === 200) {
        localStorage.removeItem("tokenKey");
        localStorage.removeItem("email");
        setUser(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      position={"fixed"}
      top={"30px"}
      right={"30px"}
      size={"sm"}
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
