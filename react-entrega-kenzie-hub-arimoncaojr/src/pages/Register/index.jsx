import {
  Container,
  Form,
  LinkeStyle as Link,
  Input,
  Label,
  Select,
  IconEyeOff,
  IconEye,
  Span,
} from "../../styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Api } from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";

const schema = yup.object({
  name: yup.string().required("Nome não preenchido"),
  email: yup.string().email("Email inválido").required("Email não preenchido"),
  password: yup
    .string()
    .required("Senha não preenchida")
    .matches(
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[$*&@#()!`'<>"~/?}[_{|;:=+^%,.}])[0-9a-zA-Z$*&@#`()!`'<>_"~/?}{|;:[=+^%,.}]{8,}$/,
      "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"
    ),
  confirmPass: yup.string().oneOf([yup.ref("password")], "Senha não é igual"),
  bio: yup.string().required("Bio não preenchida"),
  contact: yup.string().required("Contato não preenchido"),
  course_module: yup.string().required("Módulo não selecionado"),
});

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (user) => {
    Api.post("/users", { ...user })
      .then((res) => {
        toast.success("Cadastro efetuado com sucesso!");
        reset();
      })
      .catch((err) => {
        err && toast.error("E-mail já cadastrado!");
      });
  };
  const [showPass, setShowPass] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);

  return (
    <Container>
      <div className="div-logo-back">
        <h1>Kenzie Hub</h1>
        <Link register to="/login">
          Voltar
        </Link>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)} register>
        <h2>Crie sua conta</h2>
        <Span register>Rápido e grátis, vamos nessa!</Span>

        <div>
          <Label
            htmlFor="name"
            colorText={errors.name ? "var(--color-error)" : "var(--grey0)"}
          >
            {errors.name ? errors.name.message : "Nome"}
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Digite aqui seu nome"
            borderColor={errors.name ? "var(--color-error)" : "transparent"}
            borderFocus={errors.name ? "var(--color-error)" : "var(--grey0)"}
            {...register("name")}
          />
          <Label
            htmlFor="email"
            colorText={errors.email ? "var(--color-error)" : "var(--grey0)"}
          >
            {errors.email ? errors.email.message : "Email"}
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Digite aqui seu email"
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
            placeholder="Digite aqui sua senha"
            borderColor={errors.password ? "var(--color-error)" : "transparent"}
            borderFocus={
              errors.password ? "var(--color-error)" : "var(--grey0)"
            }
            {...register("password")}
          />
          <>
            {showPass ? (
              <IconEyeOff
                bottom={"unset"}
                marginBotton={"1.2rem"}
                marginTop={"13.5rem"}
                top={"0"}
                onClick={() => setShowPass(!showPass)}
              />
            ) : (
              <IconEye
                bottom={"unset"}
                marginBotton={"1.2rem"}
                marginTop={"13.5rem"}
                top={"0"}
                onClick={() => setShowPass(!showPass)}
              />
            )}
          </>
          <Label
            htmlFor="confirmPass"
            colorText={
              errors.confirmPass ? "var(--color-error)" : "var(--grey0)"
            }
          >
            {errors.confirmPass
              ? errors.confirmPass.message
              : "Confirmar senha"}
          </Label>
          <Input
            id="confirmPass"
            type={showConfirmPass ? "password" : "text"}
            placeholder="Digite novamente sua senha"
            borderColor={
              errors.confirmPass ? "var(--color-error)" : "transparent"
            }
            borderFocus={
              errors.confirmPass ? "var(--color-error)" : "var(--grey0)"
            }
            {...register("confirmPass")}
          />
          <>
            {showConfirmPass ? (
              <IconEyeOff
                bottom={"0"}
                marginBotton={"17rem"}
                top={"unset"}
                onClick={() => setShowConfirmPass(!showConfirmPass)}
              />
            ) : (
              <IconEye
                bottom={"0"}
                marginBotton={"17rem"}
                top={"unset"}
                onClick={() => setShowConfirmPass(!showConfirmPass)}
              />
            )}
          </>
          <Label
            htmlFor="bio"
            colorText={errors.bio ? "var(--color-error)" : "var(--grey0)"}
          >
            {errors.bio ? errors.bio.message : "Bio"}
          </Label>
          <Input
            id="bio"
            type="text"
            placeholder="Fale sobre você"
            borderColor={errors.bio ? "var(--color-error)" : "transparent"}
            borderFocus={errors.bio ? "var(--color-error)" : "var(--grey0)"}
            {...register("bio")}
          />
          <Label
            htmlFor="contact"
            colorText={errors.contact ? "var(--color-error)" : "var(--grey0)"}
          >
            {errors.contact ? errors.contact.message : "Contato"}
          </Label>
          <Input
            id="contact"
            type="text"
            placeholder="Opção de contato"
            borderColor={errors.contact ? "var(--color-error)" : "transparent"}
            borderFocus={errors.contact ? "var(--color-error)" : "var(--grey0)"}
            {...register("contact")}
          />
          <Label
            htmlFor="course_module"
            colorText={
              errors.course_module ? "var(--color-error)" : "var(--grey0)"
            }
          >
            {errors.course_module
              ? errors.course_module.message
              : "Selecionar módulo"}
          </Label>
          <Select
            name=""
            id="course_module"
            borderColor={
              errors.course_module ? "var(--color-error)" : "transparent"
            }
            borderFocus={
              errors.course_module ? "var(--color-error)" : "var(--grey0)"
            }
            {...register("course_module")}
          >
            <option value="">Selecione</option>
            <option value="Primeiro Módulo">Primeiro Módulo</option>
            <option value="Segundo Módulo">Segundo Módulo</option>
            <option value="Terceiro Módulo">Terceiro Módulo</option>
            <option value="Quarto Módulo">Quarto Módulo</option>
            <option value="Quinto Módulo">Quinto Módulo</option>
            <option value="Sexto Módulo">Sexto Módulo</option>
          </Select>
        </div>
        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
};
