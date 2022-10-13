import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { schema } from "../../lib/yupLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Navigate } from "react-router-dom";
import {
  Container,
  Form,
  IconEyeOff,
  LinkeStyle as Link,
  Input,
  Label,
  IconEye,
  Span,
  H1Login,
} from "../../styles";

export const LoginPage = () => {
  const { showPass, setShowPass, token, login, loading } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      {!token ? (
        <Container>
          <H1Login>Kenzie Hub</H1Login>
          <Form onSubmit={handleSubmit(login)}>
            <h2>Login</h2>
            <div>
              <Label
                colorText={errors.email ? "var(--color-error)" : "var(--grey0)"}
                htmlFor="email"
              >
                {errors.email ? errors.email.message : "Email"}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu Email"
                borderColor={
                  errors.email ? "var(--color-error)" : "transparent"
                }
                borderFocus={
                  errors.email ? "var(--color-error)" : "var(--grey0)"
                }
                {...register("email")}
              />
              <Label
                htmlFor="password"
                colorText={
                  errors.password ? "var(--color-error)" : "var(--grey0)"
                }
              >
                {errors.password ? errors.password.message : "Senha"}
              </Label>
              <Input
                id="password"
                type={showPass ? "password" : "text"}
                placeholder="Digite sua Senha"
                borderColor={
                  errors.password ? "var(--color-error)" : "transparent"
                }
                borderFocus={
                  errors.password ? "var(--color-error)" : "var(--grey0)"
                }
                {...register("password")}
              />
              <>
                {showPass ? (
                  <>
                    <IconEyeOff
                      bottom={"0"}
                      marginBotton={"1.2rem"}
                      marginTop={"unset"}
                      top={"unset"}
                      onMouseEnter={() => setShowPass(!showPass)}
                    />
                    <IconEyeOff
                      mobile
                      bottom={"0"}
                      marginBotton={"1.2rem"}
                      marginTop={"unset"}
                      top={"unset"}
                      onClick={() => setShowPass(!showPass)}
                    />
                  </>
                ) : (
                  <>
                    <IconEye
                      bottom={"0"}
                      marginBotton={"1.2rem"}
                      marginTop={"unset"}
                      top={"unset"}
                      onMouseLeave={() => setShowPass(!showPass)}
                    />
                    <IconEye
                      mobile
                      bottom={"0"}
                      marginBotton={"1.2rem"}
                      marginTop={"unset"}
                      top={"unset"}
                      onClick={() => setShowPass(!showPass)}
                    />
                  </>
                )}
              </>
            </div>
            <button type="submit">
              {loading ? <div className="loading"></div> : "Entrar"}
            </button>
            <Span>Ainda não possui uma conta?</Span>
            <Link to="/register">Cadastre-se</Link>
          </Form>
        </Container>
      ) : (
        <Navigate to="/dashboard" />
      )}
    </>
  );
};
