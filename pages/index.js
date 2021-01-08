import { useAuth } from '@/lib/auth';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { LogoIcon } from '@/components/icons/icons';

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Heading>
        <title>Fast Feedback</title>
      </Heading>

      <LogoIcon boxSize='64px' mr={8} />
      {auth.user ? (
        <Button as="a" href="/dashboard">
          View Dashboard
        </Button>
      ) : (
          <Button mt={4} size="sm" onClick={(e) => auth.signInWithGithub()}>
            Sign In
          </Button>
        )}
    </Flex>
  );
}

export default Home