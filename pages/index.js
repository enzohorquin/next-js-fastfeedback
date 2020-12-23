import { useAuth } from '@/lib/auth';
import { Button, Heading, Text, Code } from "@chakra-ui/react";

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <main>
        <Heading>
          Fast Feedback!
        </Heading>
        {!auth.user && <Button onClick={(e) => auth.signInWithGithub()}> Sign In</Button>}
        <Text>Current user: <Code>{auth?.user?.email}</Code></Text>
        {auth?.user && <Button onClick={(e) => auth.signout()}> Sign Out</Button>}
      </main>
    </div>
  )
}
