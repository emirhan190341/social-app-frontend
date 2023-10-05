import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import UserPage from "./pages/UserPage";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Container maxW={"620px"}>
        <Header />


        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
        {/* <Footer /> */}
      </Container>
    </>
  );
}

export default App;
