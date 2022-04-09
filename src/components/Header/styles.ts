import styled from "styled-components";

export const Container = styled.nav`
  margin: auto;
  max-width: 1120px;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    flex-direction: row;

    li {
      font-family: "Roboto", sans-serif;
      font-weight: 400;

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
