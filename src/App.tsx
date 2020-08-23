import React from "react";

import { Container, Item } from "./styles";

import GlobalStyle from "./styles/Global";

import michel from "./assets/michel.png";
import cecilia from "./assets/cecilia.png";
import felipe from "./assets/felipe.png";
import tax from "./assets/tax.png";

const App: React.FC = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Container variants={container} initial="hidden" animate="visible">
      <GlobalStyle />
      <Item variants={item}>
        <img src={michel} alt="micheel" />
      </Item>
      <Item variants={item}>
        <img src={tax} alt="micheel" />
      </Item>
      <Item variants={item}>
        <img src={felipe} alt="micheel" />
      </Item>
      <Item variants={item}>
        <img src={cecilia} alt="micheel" />
      </Item>
    </Container>
  );
};

export default App;
