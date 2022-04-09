import styled from "styled-components";

export const Container = styled.nav`
  margin: auto;
  max-width: 1200px;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  ul {
    display: flex;
    flex-direction: row;

    li {
      font-size: 18px;
      padding-right: 25px;
      text-transform: capitalize;
      list-style: none;

      a {
        text-decoration: none;
        color: var(--white);
      }

      :hover {
        font-weight: bold;
        border-left: 3px solid var(--green);
        padding-left: 2.5px;
      }
    }
  }
`;
