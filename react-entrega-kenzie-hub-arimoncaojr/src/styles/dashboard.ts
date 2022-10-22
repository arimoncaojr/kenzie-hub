import styled from "styled-components";
import { Link } from "react-router-dom";
import { TrashFill } from "@styled-icons/bootstrap/TrashFill";

export const IconTrash = styled(TrashFill)`
  color: var(--grey0);
  width: 0.823rem;
  height: 0.75rem;
  cursor: pointer;
  :hover {
    color: var(--grey1);
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

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

  .div-btn-tech {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: var(--grey3);
      border: none;
      border-radius: var(--border-radius-default);
      color: var(--grey0);
      font-size: var(--font-title1);
      width: 2.031rem;
      height: 2rem;

      :hover {
        background-color: var(--grey2);
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    background-color: var(--grey3);
    border-radius: var(--border-radius-default);
    padding-bottom: 20px;
    padding-top: 20px;

    p {
      color: var(--grey0);
      text-align: center;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 95%;
      height: 3.063rem;
      background-color: var(--grey4);
      border-radius: var(--border-radius-default);
      margin-top: 6px;
      cursor: pointer;

      :hover {
        background-color: var(--grey2);
      }

      h3 {
        font-size: var(--font-title3);
        font-weight: var(--font-weight1);
        color: var(--grey0);
        margin-left: 1rem;
      }
      div {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-right: 1rem;
      }
      p {
        font-size: var(--font-text3);
        color: var(--grey1);
      }
    }
  }
`;

export const P = styled.p`
  color: var(--grey0);
`;

export const H2 = styled.h2`
  color: var(--grey0);
  font-size: var(--font-title1);
  font-weight: var(--font-weight1);
`;

export const H3 = styled.h3`
  color: var(--grey0);
  font-size: var(--font-title3);
  font-weight: var(--font-weight2);
`;
