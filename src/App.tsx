import React from "react";

import { Container, Content, TextArea } from "./styles";

import GlobalStyle from "./styles/Global";

import perfil from "./assets/perfil.png";

const App: React.FC = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
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
      <Content variants={container}>
        <img src={perfil} alt="perfil" />

        <TextArea variants={item}>
          <p>Em breve meu novo blog sobre Desenvolvimento web e Robótica.</p>
        </TextArea>
      </Content>
    </Container>
  );
};

export default App;
