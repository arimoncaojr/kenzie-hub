import { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext";
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
  const {
    register,
    handleSubmit,
    showPass,
    setShowPass,
    token,
    errors,
    onSubmit,
    navigate,
  } = useContext(LoginContext);
  return (
    <>
      {!token ? (
        <Container>
          <H1Login>Kenzie Hub</H1Login>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
            <button type="submit">Entrar</button>
            <Span>Ainda não possui uma conta?</Span>
            <Link to="/register">Cadastre-se</Link>
          </Form>
        </Container>
      ) : (
        setTimeout(() => {
          navigate(`/dashboard`);
        }, 100)
      )}
    </>
  );
};
