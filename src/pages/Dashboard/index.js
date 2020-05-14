import React from "react";

import {
  Container,
  Profile,
  Parag,
  About,
  Curriculum,
  Experience,
  Know,
  Title,
} from "./styles";

import adonis from "../../assets/adonis.svg";
import css from "../../assets/css3-logo.png";
import express from "../../assets/expressjs.png";
import github from "../../assets/github-logo.png";
import html from "../../assets/html.png";
import illustrator from "../../assets/illustrator.svg";
import javascript from "../../assets/js.png";
import mongo from "../../assets/mongoLogo.png";
import mysql from "../../assets/mysql-logo.png";
import native from "../../assets/react-native.png";
import nextjs from "../../assets/nextjs.png";
import photoshop from "../../assets/photoshop-cc.svg";
import sass from "../../assets/sass.png";
import styledComponents from "../../assets/styled.png";
import trello from "../../assets/trello.svg";
import vegas from "../../assets/vegas.png";
import postgresql from "../../assets/postgres.png";
import perfil from "../../assets/perfil.jpg";
import reactLogo from "../../assets/react.png";
import nodeLogo from "../../assets/nodejs.png";
import docker from "../../assets/docker.png";

function Dashboard() {
  return (
    <Container>
      <Profile>
        <img src={perfil} alt="Pedro Henrique" />
        <aside>
          <h1>Pedro Henrique da Silva Martins</h1>
          <Parag>Natal, Rio Grande do Norte, Brazil</Parag>
          <About>
            Atualmente estudo na Universisade Federal do Rio Grande do Norte
            (UFRN), onde tive a oportunidade de aprender e crescer com auxílio
            dos professores e colegas do Laboratório de Róbotica e Automação
            (LAR). Assim pude me envolver em projetos que buscavam solucionar
            problemas cotidianos por meio da tecnologia. Nossos principais
            projetos envolveram Internet das coisa e Indústria 4.0 e sempre
            estivemos focados em encontrar a melhor solução e deixá-la da forma
            mais acessível possível.
          </About>
        </aside>
      </Profile>

      <Curriculum>
        <h1>-------- Experiências --------</h1>

        <Experience>
          <tbody>
            <tr>
              <td>
                <strong>
                  Universidade Fedral do Rio Grande do Norte - UFRN
                </strong>
                <span>Bacharelado em Ciência e Tecnologia</span>
              </td>

              <td>
                <span>Graduação</span>
                <span>2018 - ...</span>
              </td>
            </tr>

            <tr>
              <td>
                <strong>Laboratórios Natalnet</strong>
                <span>Laboratório de Automação e Robótica - LAR</span>
              </td>

              <td>
                <span>Bolsista</span>
                <span>2020 - ...</span>
              </td>
            </tr>

            <tr>
              <td>
                <strong>Colégio Nossa Senhora de Fátima</strong>
                <span>Escola de ensino fundamental de Natal, RN</span>
              </td>

              <td>
                <span>Full Stack Developer</span>
                <span>2019 - ...</span>
              </td>
            </tr>

            <tr>
              <td>
                <strong>Laboratório de Automação e Robótica - LAR</strong>
                <span>Um Robô por Aluno</span>
              </td>

              <td>
                <span>Voluntário</span>
                <span>2019 - ...</span>
              </td>
            </tr>
          </tbody>
        </Experience>

        <Title>-------- Conhecimentos --------</Title>
        <Know>
          <li>
            <img src={reactLogo} alt="react" />
            <span>React Js</span>
          </li>
          <li>
            <img src={nodeLogo} alt="react" />
            <span>Node Js</span>
          </li>
          <li>
            <img src={adonis} alt="react" />
            <span>Adonis Js</span>
          </li>
          <li>
            <img src={css} alt="react" />
            <span>CSS 3</span>
          </li>
          <li>
            <img src={docker} alt="react" />
            <span>Docker</span>
          </li>
          <li>
            <img src={express} alt="react" />
            <span>Express Js</span>
          </li>
          <li>
            <img src={github} alt="react" />
            <span>Github</span>
          </li>
          <li>
            <img src={html} alt="react" />
            <span>HTML 5</span>
          </li>
          <li>
            <img src={illustrator} alt="react" />
            <span>Adobe Illustrator</span>
          </li>
          <li>
            <img src={javascript} alt="react" />
            <span>Javascript</span>
          </li>
          <li>
            <img src={mongo} alt="react" />
            <span>MongoDB</span>
          </li>
          <li>
            <img src={mysql} alt="react" />
            <span>MySQL</span>
          </li>
          <li>
            <img src={native} alt="react" />
            <span>React Native</span>
          </li>
          <li>
            <img src={nextjs} alt="react" />
            <span>Next Js</span>
          </li>
          <li>
            <img src={photoshop} alt="react" />
            <span>Adobe Photoshop</span>
          </li>
          <li>
            <img src={postgresql} alt="react" />
            <span>PostgreSQL</span>
          </li>
          <li>
            <img src={sass} alt="react" />
            <span>Sass</span>
          </li>
          <li>
            <img src={styledComponents} alt="react" />
            <span>Styled Components</span>
          </li>
          <li>
            <img src={trello} alt="react" />
            <span>Trello</span>
          </li>
          <li>
            <img src={vegas} alt="react" />
            <span>Sony Vegas</span>
          </li>
        </Know>
      </Curriculum>
    </Container>
  );
}

export default Dashboard;
