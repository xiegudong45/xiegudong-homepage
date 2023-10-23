'use client';
import { BioSection, BioYear } from '@/app/components/bio';
import { GithubIcon } from '@/app/components/icons/github';
import { LinkedInIcon } from '@/app/components/icons/linkedin';
import Navbar from '@/app/components/navbar';
import Paragraph from '@/app/components/paragraph';
import Section from '@/app/components/section';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  useColorMode
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { colorMode } = useColorMode();
  return (
    <>
      <Navbar path={router} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Container>
          <Box borderRadius="lg" bg="#C1D8C3" p={3} mb={6}>
            Hello, I&apos;m a full-stack developer based in China!
          </Box>
          <Box display={{ md: 'flex' }} gap={2}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Herbert Xie
              </Heading>
              <p>xiegudong45(Developer)</p>
            </Box>
            <Box display={{ md: 'flex' }}>
              <GithubIcon
                fill={`${colorMode === 'light' ? '#000000' : '#FFFFFF'}`}
              />
              <LinkedInIcon
                fill={`${colorMode === 'light' ? '#000000' : '#FFFFFF'}`}
              />
            </Box>
          </Box>
          <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
              Work
            </Heading>
            <Paragraph>
              Herbert is a software engineer and has a full passion to build
              digital services.
            </Paragraph>
            <Box alignItems="center" my={4}>
              <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  My Portfolio
                </Button>
              </NextLink>
            </Box>
          </Section>
          <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
              Bio
            </Heading>
            <BioSection>
              <BioYear>1994</BioYear>
              Born in Shanghai, China.
            </BioSection>
            <BioSection>
              <BioYear>2019</BioYear>
              Completed Master Degree from the University of Washington,
              Seattle.
            </BioSection>
            <BioSection>
              <BioYear>2020 to present</BioYear>
              Works as a software engineer at Bytedance.
            </BioSection>
          </Section>
        </Container>
      </main>
    </>
  );
}
