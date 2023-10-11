import { Button } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";

const LogoutButton = () => {
    const setUser = useSetRecoilState(userAtom)
    const handleLogout = async() => {
        try {
            localStorage.removeItem("user-threads");
            //fetch
            setUser(null)
        }catch(error) {
            console.log(error);
        }
    }
  return (
    <Button position={"fixed"} top={"30px"} right={"30px"} size={"sm"} onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
