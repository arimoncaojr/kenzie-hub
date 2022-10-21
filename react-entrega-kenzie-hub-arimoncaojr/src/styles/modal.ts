import styled from "styled-components";

interface IStyledProps {
  colorText?: string;
  borderColor?: string;
  borderFocus?: string;
  noEdit?: boolean;
  backgroundColor?: string;
  cursorPointer?: string;
  hoverBtn?: string;
  readonly?: boolean;
}

export const ContainerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  .loading {
    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: var(--color-primary-focus);
    height: 1rem;
    width: 1rem;

    @keyframes is-rotating {
      to {
        transform: rotate(1turn);
      }
    }
  }

  .modal {
    display: flex;
    flex-direction: column;
    width: 23.063rem;
    background-color: var(--grey3);
    border-radius: 4px;
    padding-bottom: 20px;
    max-width: 100%;

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

      .closeModalCreate,
      .closeModalEdit {
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

      .btnRegisterTech {
        display: flex;
        align-items: center;
        justify-content: center;
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

      .divBtns {
        display: flex;
        align-items: center;
        gap: 1.7rem;
      }

      .btnDeleteTech {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 6.125rem;
        height: 3rem;
        border: transparent;
        border-radius: var(--border-radius-default);
        background-color: var(--grey1);
        color: var(--grey0);
        max-width: 100%;

        :hover {
          background-color: var(--grey2);
        }
      }
    }
  }
`;

export const Label = styled.label<IStyledProps>`
  font-size: var(--font-text2);
  color: ${(props) => props.colorText};
`;

export const Input = styled.input<IStyledProps>`
  width: var(--input-login-width);
  height: var(--input-login-height);
  border: 1px solid ${(props) => props.borderColor};
  background-color: var(--grey2);
  border-radius: var(--border-radius-default);
  color: ${(props) => (props.noEdit ? "var(--grey1)" : "var(--grey0)")};
  outline: none;
  max-width: 100%;

  :focus {
    border: 1px solid ${(props) => props.borderFocus};
  }
`;

export const Select = styled.select<IStyledProps>`
  width: var(--input-login-width);
  height: var(--input-login-height);
  border: 1px solid ${(props) => props.borderColor};
  background-color: var(--grey2);
  border-radius: var(--border-radius-default);
  color: var(--grey1);
  outline: none;
  max-width: 100%;

  :focus {
    border: 1px solid ${(props) => props.borderFocus};
  }
`;

export const ButtonEditInfo = styled.button<IStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.75rem;
  height: 3rem;
  color: var(--grey0);
  border: transparent;
  border-radius: var(--border-radius-default);
  background-color: ${(props) => props.backgroundColor};
  max-width: 100%;

  cursor: ${(props) => props.cursorPointer};

  :hover {
    background-color: ${(props) => props.hoverBtn};
  }
`;
