import React from 'react';

import { 
  Container,
  Profile,
  Parag,
  About,
  Curriculum,
  Experience,
  Know,
  Title
} from './styles';

import perfil from '../../assets/perfil.jpg'
import reactLogo from '../../assets/react.png'

function Dashboard() {
  return <Container>
    <Profile>
      <img src={perfil} alt="Pedro Henrique" />
      <aside>
        <h1>Pedro Henrique da Silva Martins</h1>
        <Parag>Natal, Rio Grande do Norte, Brazil</Parag>
        <About>Atualmente estudo na Universisade Federal do Rio Grande do Norte (UFRN), onde tive a oportunidade de aprender e crescer com auxílio dos professores e colegas do Laboratório TEAM. Assim pude me envolver em projetos que buscavam solucionar problemas cotidianos por meio da tecnologia.

        Nossos principais projetos envolveram Internet das coisa e Indústria 4.0 e sempre estivemos focados em encontrar a melhor solução e deixá-la da forma mais acessível possível</About>
      </aside>
    </Profile>

    <Curriculum>
      <h1>--------    Experiências    --------</h1>
      <Experience>



        <tbody>
        <tr>

          <td>
            <strong>Universidade Fedral do Rio Grande do Norte - UFRN</strong>
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

        <Title>--------   Conhecimentos   --------</Title>
      <Know>
        <li>
          <img src={reactLogo} alt="react"/>
          <span>React Js</span>
        </li>
        <li>
          <img src={reactLogo} alt="react"/>
          <span>react</span>
        </li>
        <li>
          <img src={reactLogo} alt="react"/>
          <span>react</span>
        </li>
        <li>
          <img src={reactLogo} alt="react"/>
          <span>react</span>
        </li>
        <li>
          <img src={reactLogo} alt="react"/>
          <span>react</span>
        </li>
        <li>
          <img src={reactLogo} alt="react"/>
          <span>react</span>
        </li>
        <li>
          <img src={reactLogo} alt="react"/>
          <span>react</span>
        </li>
        <li>
          <img src={reactLogo} alt="react"/>
          <span>react</span>
        </li>
        <li>
          <img src={reactLogo} alt="react"/>
          <span>react</span>
        </li>
        <li>
          <img src={reactLogo} alt="react"/>
          <span>react</span>
        </li>
      </Know>
    </Curriculum>



  </Container>;
}

export default Dashboard;