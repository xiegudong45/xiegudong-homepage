'use client';
import Navbar from '@/app/components/navbar';
import { Box, ChakraProvider, Container, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Navbar path={router} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Container>
          <Box borderRadius="lg" bg="red" p={3} mb={6}>
            Hello, I&apos;m a full-stack developer based in China!
          </Box>
          <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Shenghao Xie
              </Heading>
              <p>xiegudong45(Developer)</p>
            </Box>
          </Box>
        </Container>
      </main>
    </>
  );
}
