import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 445px;
  height: 420px;
  margin: 0;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;

  display: flex;

  @media (max-width: 700px) {
    width: 250px;
    height: 380px;
  }
`;

export const Content = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 235px;
    height: 235px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin-bottom: 36px;
  }

  @media (max-width: 700px) {
    img {
      width: 200px;
      height: 200px;
    }
  }
`;

export const TextArea = styled(motion.div)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 12px;
    font-weight: 700;
    color: #fff;
    font-size: 38px;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 700px) {
    p {
      max-width: 235px;
      font-size: 28px;
      text-align: center;
    }
  }
`;
