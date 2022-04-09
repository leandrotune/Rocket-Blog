import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 100%;

  display: flex;
  justify-content: center;
  margin: 0;

  input {
    width: 200px;
    height: 100%;
    border: 0;
    background: var(--dark-bg);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    outline: 0;
    padding-left: 18px;
    font-size: 16px;
    color: var(--white);
  }

  button {
    width: 60px;
    background: var(--button-bg);
    border: 0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
