import styled from "styled-components";

export const Container = styled.section`
  max-width: 1120px;
  margin: 80px auto;
`;

export const Content = styled.div`
  width: 1120px;

  display: flex;
  justify-content: space-between;

  .sectionFeaturedNews {
    max-width: 42%;

    h1 {
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      font-size: 32px;
      color: var(--button-bg);
      margin-bottom: 38px;
    }

    p {
      max-width: 85%;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      color: var(--light-purple);
      margin-bottom: 20px;
    }

    a {
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      text-transform: capitalize;
      color: var(--button-bg);

      display: inline-block;
      text-decoration: none;
    }
  }
`;
