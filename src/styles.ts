import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.ul)`
  width: 500px;
  height: 500px;
  display: grid;
  overflow: hidden;
  margin: 0;
  list-style: none;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
`;

export const Item = styled(motion.li)`
  background: white;
  border-radius: 100%;

  display: flex;

  align-items: center;
  justify-content: center;

  img {
    width: 235px;
    height: 235px;

    border-radius: 50%;
  }
`;
