'use client';
import Navbar from '@/app/components/navbar';
import { Box, Container, Heading, Link, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import Section from '@/app/components/section';
import Paragraph from '@/app/components/paragraph';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '@/app/components/bio';

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
                                Herbert Xie
                            </Heading>
                            <p>xiegudong45(Developer)</p>
                        </Box>
                    </Box>
                    <Section delay={0.1}>
                        <Heading as="h3" variant="section-title">Work</Heading>
                        <Paragraph>
                            Herbert is a software engineer and has a full passion to build digital services.
                            <NextLink href="/works/inkdrop">
                                <Link>Inkdrop</Link>
                            </NextLink>
                        </Paragraph>
                        <Box alignItems="center" my={4}>
                            <NextLink href="/works">
                                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">My Portfolio</Button>
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
                            Completed Master Degree from the University of Washington, Seattle.
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
