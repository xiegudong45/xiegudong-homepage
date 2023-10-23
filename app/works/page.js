'use client';
import MoveFlow from '@/public/moveflow.png';
import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react';
import { WorkGridItem } from '../components/grid-item';
import Section from '../components/section';

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mt={4} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
          <WorkGridItem id="move-flow" title="MoveFlow" thumbnail={MoveFlow}>
            A revolutionary crypto asset streaming protocol built on Move
            ecosystem.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
