'use client';
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text
} from '@chakra-ui/react';
import NextLink from 'next/link';

export default function NotFound({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Container zIndex={1}>
      <Heading as="h1">Not Found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6}>
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  );
}
