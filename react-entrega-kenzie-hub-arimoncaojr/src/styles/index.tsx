import styled from "styled-components";
import { EyeOff } from "@styled-icons/heroicons-solid/EyeOff";
import { Eye } from "@styled-icons/heroicons-solid/Eye";
import { Link } from "react-router-dom";

interface IStyledProps {
  bottom?: string;
  top?: string;
  marginBotton?: string;
  marginTop?: string;
  mobile?: boolean;
  register?: boolean;
  colorText?: string;
  borderColor?: string;
  borderFocus?: string;
}

export const IconEyeOff = styled(EyeOff)<IStyledProps>`
  color: var(--grey0);
  width: 0.875rem;
  height: 1.375;
  position: absolute;
  bottom: ${(props) => props.bottom};
  top: ${(props) => props.top};
  right: 0;
  margin-right: 1rem;
  margin-bottom: ${(props) => props.marginBotton};
  margin-top: ${(props) => props.marginTop};
  cursor: pointer;
  display: ${(props) => (props.mobile ? "none" : "block")};

  @media (max-width: 1366px) {
    display: ${(props) => (props.mobile ? "block" : "none")};
  }
`;

export const IconEye = styled(Eye)<IStyledProps>`
  color: var(--grey0);
  width: 0.875rem;
  height: 1.375;
  position: absolute;
  bottom: ${(props) => props.bottom};
  top: ${(props) => props.top};
  right: 0;
  margin-right: 1rem;
  margin-bottom: ${(props) => props.marginBotton};
  margin-top: ${(props) => props.marginTop};
  cursor: pointer;

  display: ${(props) => (props.mobile ? "none" : "block")};

  @media (max-width: 1366px) {
    display: ${(props) => (props.mobile ? "block" : "none")};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 100%;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    height: 100%;
  }

  .div-logo-back {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: var(--card-register-width);
    max-width: 100%;
    margin-top: 10px;
  }

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
`;
export const H1Login = styled.h1`
  color: var(--color-primary);
  font-size: var(--font-title1);
  font-weight: var(--font-weight1);
  margin-top: 10rem;
  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;

export const H1Register = styled.h1`
  color: var(--color-primary);
  font-size: var(--font-title1);
  font-weight: var(--font-weight1);
`;
export const Form = styled.form<IStyledProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--grey3);
  width: var(--card-login-width);
  height: ${(props) =>
    props.register
      ? "var(--card-register-height)"
      : "var(--card-login-height)"};
  border-radius: var(--border-radius-default);
  gap: 2rem;
  max-width: 100%;
  h2 {
    color: var(--grey0);
    font-size: var(--font-title2);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    position: relative;
    max-width: 100%;
  }

  button {
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
`;
export const Label = styled.label<IStyledProps>`
  font-size: var(--font-text2);
  max-width: var(--input-login-width);
  color: ${(props) => props.colorText};
`;
export const Input = styled.input<IStyledProps>`
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

export const LinkeStyle = styled(Link)<IStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--grey0);
  width: ${(props) =>
    props.register ? "var(--btn-back-width)" : "var(--btn-login-width)"};
  height: ${(props) =>
    props.register ? "var(--btn-back-height)" : "var(--btn-login-height)"};
  border: transparent;
  border-radius: var(--border-radius-default);
  background-color: ${(props) =>
    props.register ? "var(--grey3)" : "var(--grey1)"};
  max-width: 100%;
  font-size: ${(props) => (props.register ? "var(--font-text3)" : "1rem")};
  :hover {
    background-color: var(--grey2);
  }
`;

export const Select = styled.select<IStyledProps>`
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
export const Span = styled.span<IStyledProps>`
  color: var(--grey1);
  font-size: var(--font-text1);
  font-weight: ${(props) =>
    props.register ? "var(--font-weight3)" : "var(--font-weight2)"};
`;
