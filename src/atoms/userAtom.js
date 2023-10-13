import { atom } from "recoil";

const userAtom = atom({
  key: "userAtom",
  default: localStorage.getItem("email"),
});

export default userAtom;
