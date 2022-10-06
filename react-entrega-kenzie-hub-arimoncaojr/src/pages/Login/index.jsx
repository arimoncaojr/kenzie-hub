import {
  Container,
  Form,
  IconEyeOff,
  LinkeStyle as Link,
  Input,
  Label,
  IconEye,
} from "./styles";
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

  const onSubmit = (user) => {
    Api.post("/sessions", { ...user })
      .then((res) => {
        console.log(res.data);
        window.localStorage.clear();
        window.localStorage.setItem("authID", res.data.user.id);
        window.localStorage.setItem("authToken", res.data.token);
        toast.success("Login bem sucedido!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      })
      .catch((err) => err && toast.error("Login ou Senha inválidos!"));
  };

  return (
    <Container>
      <h1>Kenzie Hub</h1>
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
            borderColor={errors.email ? "var(--color-error)" : "transparent"}
            borderFocus={errors.email ? "var(--color-error)" : "var(--grey0)"}
            {...register("email")}
          />
          <Label
            htmlFor="password"
            colorText={errors.password ? "var(--color-error)" : "var(--grey0)"}
          >
            {errors.password ? errors.password.message : "Senha"}
          </Label>
          <Input
            id="password"
            type={showPass ? "password" : "text"}
            placeholder="Digite sua Senha"
            borderColor={errors.password ? "var(--color-error)" : "transparent"}
            borderFocus={
              errors.password ? "var(--color-error)" : "var(--grey0)"
            }
            {...register("password")}
          />
          <>
            {showPass ? (
              <IconEyeOff onClick={() => setShowPass(!showPass)} />
            ) : (
              <IconEye onClick={() => setShowPass(!showPass)} />
            )}
          </>
        </div>
        <button type="submit">Entrar</button>
        <span>Ainda não possui uma conta?</span>
        <Link to="/register">Cadastre-se</Link>
      </Form>
    </Container>
  );
};
