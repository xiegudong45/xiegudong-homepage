import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === "transition";
  }
})

const Section = ({
  children, delay = 0
}) => (
  <StyledDiv
    initial={{ y: 10, capacity: 0 }}
    animate={{ y: 0, capacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >{children}</StyledDiv>
)

export default Section;