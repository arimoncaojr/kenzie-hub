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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const schema = yup.object({
  email: yup.string().email("Email inválido").required("Email não preenchido"),
  password: yup.string().required("Senha não preenchida"),
});

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(true);
  const token = localStorage.getItem("@kenzieHub:Token");

  const onSubmit = (user) => {
    Api.post("/sessions", { ...user })
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("@kenzieHub:ID", res.data.user.id);
        window.localStorage.setItem("@kenzieHub:Token", res.data.token);
        window.localStorage.setItem("@kenzieHub:User", res.data.user.name);
        toast.success("Login bem sucedido!");
        setTimeout(() => {
          navigate(`/dashboard/${res.data.user.name}/${res.data.user.id}`);
        }, 2000);
      })
      .catch((err) => err && toast.error("Login ou Senha inválidos!"));
  };

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
