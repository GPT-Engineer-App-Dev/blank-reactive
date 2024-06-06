import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Private = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Private Page</Heading>
        <Text fontSize="xl">This page is accessible only to authenticated users.</Text>
      </VStack>
    </Container>
  );
};

export default Private;