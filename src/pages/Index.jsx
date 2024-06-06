import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (session) {
      logout();
    } else {
      navigate("/login");
    }
  };
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Your New React App</Heading>
        <Text fontSize="xl">This is your starting point. Customize it as you wish!</Text>
        <Button leftIcon={<FaRocket />} colorScheme="teal" size="lg" mt={6} onClick={handleAuthAction}>
          {session ? "Logout" : "Login"}
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;