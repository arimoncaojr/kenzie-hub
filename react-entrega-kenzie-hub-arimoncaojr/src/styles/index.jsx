import styled from "styled-components";
import { EyeOff } from "@styled-icons/heroicons-solid/EyeOff";
import { Eye } from "@styled-icons/heroicons-solid/Eye";
import { Link } from "react-router-dom";

export const IconEyeOff = styled(EyeOff)`
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

  :hover {
    color: var(--grey1);
  }
`;

export const IconEye = styled(Eye)`
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

  :hover {
    color: var(--grey1);
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
  height: 100vh;
  background: var(--grey4);

  @media (max-width: 768px) {
    height: 100%;
  }

  .div-logo-back {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: var(--card-register-width);
    @media (max-width: 768px) {
      margin-top: 2rem;
      max-width: 100%;
    }
  }
  h1 {
    color: var(--color-primary);
    font-size: var(--font-title1);
    font-weight: var(--font-weight1);
  }
`;
export const Form = styled.form`
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
export const Label = styled.label`
  font-size: var(--font-text2);
  max-width: var(--input-login-width);
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

export const LinkeStyle = styled(Link)`
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
export const Span = styled.span`
  color: var(--grey1);
  font-size: var(--font-text1);
  font-weight: ${(props) =>
    props.register ? "var(--font-weight3)" : "var(--font-weight2)"};
`;
