import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 880px;
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

    img {
      height: 250px;
      width: 250px;
      border-radius: 50%;
    }

    aside {
      width: 60%;
      margin-left: 32px;
      h1 {
        margin-bottom: 4px;
        text-align: right;
      }
      
      
      p {
        margin-top: 12px;
      }
      
    }
    
    
    
    `

export const Parag = styled.p`
  text-align: right;
  color: #9c9a9a;
`

export const About = styled.p`

  margin-top: 12px;
  text-align: justify;
  color: #545454;

`
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
`


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
  grid-gap: 5px;
  list-style: none;

  h1 {
    margin-top: 30px;
  }

  li {
    padding: 20px;
    img {
      height: 100px;
      display: block;
      text-align: center;
    }
    span {
      display: block;
      text-align: center;
      
    }
  }

`

export const Title = styled.h1`
  margin-top: 300px;
`
