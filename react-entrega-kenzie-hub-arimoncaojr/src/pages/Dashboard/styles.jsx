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

export const ContainerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  .modal {
    display: flex;
    flex-direction: column;
    width: 23.063rem;
    height: 21.375rem;
    background-color: var(--grey3);
    border-radius: 4px 4px 0px 0px;

    .closeDiv {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 10rem;
      height: 3.125rem;
      background-color: var(--grey2);
      border-radius: 4px 4px 0px 0px;

      h4 {
        font-size: var(--font-text3);
        color: var(--grey0);
        font-weight: var(--font-weight1);
      }

      button {
        border: transparent;
        background-color: transparent;
        color: var(--grey1);
        font-size: 1rem;
        font-weight: var(--font-weight2);

        :hover {
          color: var(--grey0);
        }
      }
    }

    form {
      display: flex;
      margin: 0 auto;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;

      button {
        width: var(--btn-login-width);
        height: var(--btn-login-height);
        color: var(--grey0);
        border: transparent;
        border-radius: var(--border-radius-default);
        background-color: var(--color-primary);
        max-width: 100%;

        :hover {
          background-color: var(--color-primary-focus);
        }
      }
    }
  }
`;

export const Label = styled.label`
  font-size: var(--font-text2);
  color: ${(props) => props.colorText};
`;

export const Input = styled.input`
  width: var(--input-login-width);
  height: var(--input-login-height);
  border: 1px solid ${(props) => props.borderColor};
  background-color: var(--grey2);
  border-radius: var(--border-radius-default);
  color: var(--grey0);
  outline: none;
  max-width: 100%;

  :focus {
    border: 1px solid ${(props) => props.borderFocus};
  }
`;

export const Select = styled.select`
  width: var(--input-login-width);
  height: var(--input-login-height);
  border: 1px solid ${(props) => props.borderColor};
  background-color: var(--grey2);
  border-radius: var(--border-radius-default);
  color: var(--grey0);
  outline: none;
  max-width: 100%;

  :focus {
    border: 1px solid ${(props) => props.borderFocus};
  }
`;
