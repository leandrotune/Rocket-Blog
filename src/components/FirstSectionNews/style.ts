import styled from "styled-components";

export const Container = styled.section`
  max-width: 1120px;
  margin: 80px auto;
`;

export const Content = styled.div`
  width: 1120px;

  display: flex;
  justify-content: space-between;

  .sectionInformative {
    width: 42%;

    h1 {
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      font-size: 32px;
      color: var(--button-bg);
      margin-bottom: 38px;
    }

    p {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      color: var(--light-purple);
    }
  }

  .sectionVisualNews {
    width: 50X%;
  }
`;
