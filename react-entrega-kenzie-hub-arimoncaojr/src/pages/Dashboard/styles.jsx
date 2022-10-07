import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--grey4);

  header {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 4.5rem;
    border-bottom: 1px solid var(--grey2);

    .div-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;

      h1 {
        font-size: var(--font-title1);
        font-weight: var(--font-weight1);
        color: var(--color-primary);
      }
    }
  }

  .div-user {
    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid var(--grey2);
  }

  h2 {
    color: var(--grey0);
    font-size: var(--font-title1);
    font-weight: var(--font-weight1);
  }
`;

export const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: var(--btn-logout-width);
  height: var(--btn-logout-height);
  color: var(--grey0);
  border: transparent;
  border-radius: var(--border-radius-default);
  background-color: var(--grey3);
  max-width: 100%;
  font-size: var(--font-text3);
  :hover {
    background-color: var(--grey2);
  }
`;

export const DivUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 7.375rem;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
  }
  span {
    font-size: var(--font-text3);
    color: var(--grey1);
  }
`;

export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2.313rem;
  gap: 1rem;
  width: 80%;

  p {
    color: var(--grey0);
  }
`;
