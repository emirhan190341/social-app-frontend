import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import UserPage from "./pages/UserPage";
import { Container } from "@chakra-ui/react";
import AuthPage from "./pages/AuthPage";
import userAtom from "./atoms/userAtom";
import { useRecoilValue } from "recoil";
import LogoutButton from "./pages/LogoutButton";
import UpdateProfilePage from "./pages/UpdateProfilePage";

function App() {
  const user = useRecoilValue(userAtom);
  console.log(user);
  return (
    <>
      <Container maxW={"620px"}>
        <Header />

        <Routes>
          <Route
            path="/"
            element={user ? <HomePage /> : <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={!user ? <AuthPage /> : <Navigate to="/" />}
          />
          <Route
            path="/update"
            element={user ? <UpdateProfilePage /> : <Navigate to="/auth" />}
          />
          <Route path="/:userId/post/:postId" element={<PostPage />} />
          <Route path="/:userId" element={<UserPage />} />
        </Routes>

        {user && <LogoutButton />}

        {/* <Footer /> */}
      </Container>
    </>
  );
}

export default App;
