import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1000px;
  height: 100%;
  margin: 20px auto 0;
  border-radius: 4px;
  background: #fff;
  flex-direction: column;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30%;
  padding: 20px;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 250px;
    width: 325px;
    border-radius: 50%;

    @media (max-width: 700px) {
      height: 200px;
      width: 200px;
      border-radius: 50%;
      margin: 5px auto;
    }
  }

  aside {
    width: 100%;
    margin-left: 16px;
    h1 {
      margin-bottom: 4px;
      text-align: right;
    }

    p {
      margin-top: 12px;
      font-size: 20px;
    }
  }
`;

export const Parag = styled.p`
  text-align: right;
  color: #9c9a9a;
`;

export const About = styled.p`
  margin-top: 12px;
  text-align: justify;
  color: #545454;
`;
export const Curriculum = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 50px;
  margin-top: 20px;
  border-radius: 4px;

  h1 {
    text-align: center;
    font-size: 22px;
    margin: 0 auto 30px;
  }
`;

export const Experience = styled.table`
  width: 100%;
  margin: 0 auto 50px;

  tbody tr td {
    padding: 12px;
    border-bottom: 1px solied #eee;
    margin-top: 200px;
  }

  strong {
    color: #333;
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 12px;
  }
`;

export const Know = styled.ul`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  list-style: none;

  @media (max-width: 940px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  h1 {
    margin-top: 30px;
  }

  li {
    padding: 2px;
    img {
      height: 110px;
      width: 150px;
      display: block;
      text-align: center;
    }
    span {
      margin-top: 5px;
      display: block;
      text-align: center;
      font-weight: bold;
    }
  }
`;

export const Title = styled.h1`
  margin-top: 300px;
`;
