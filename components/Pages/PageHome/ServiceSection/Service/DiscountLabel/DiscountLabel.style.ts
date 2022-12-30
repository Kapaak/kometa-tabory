import { motion } from "framer-motion";
import styled from "styled-components";

export const Label = styled(motion.span)`
  position: absolute;
  top: -5rem;
  left: 2rem;
  transform: translateY(50%);
  padding: 1.4rem 2rem;
  border-radius: 4rem;
  background-color: var(--col1);
  z-index: 2;
`;
