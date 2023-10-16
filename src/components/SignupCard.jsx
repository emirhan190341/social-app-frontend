import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useSetRecoilState } from "recoil";
import authScreenAtom from "../atoms/authAtom";
import { useNavigate } from "react-router-dom";
import userAtom from "../atoms/userAtom";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const setAuthScreen = useSetRecoilState(authScreenAtom);

  const setUser = useSetRecoilState(userAtom);

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const toast = useToast();

  const handleSignup = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          name: name,
          email: email,
          password: password,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.email || data.username || data.password || data.name) {
        const error = data.email || data.username || data.password || data.name;
        toast({
          title: "Error",
          description: error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      //Kullanici bilgileri + token
      localStorage.setItem("tokenKey", data.token);
      localStorage.setItem("email", email);
      localStorage.setItem("user-threads", JSON.stringify(data));
      setUser(data);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.dark")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Full name</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={useColorModeValue("gray.600", "gray.700")}
                color={"white"}
                _hover={{
                  bg: useColorModeValue("gray.700", "gray.800"),
                }}
                onClick={handleSignup}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"} onClick={() => setAuthScreen("login")}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
