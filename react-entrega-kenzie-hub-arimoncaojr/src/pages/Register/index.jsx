import { useContext } from "react";
import { RegisterContext } from "../../Contexts/RegisterContext";
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
  H1Register,
} from "../../styles";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    navigate,
    showPass,
    setShowPass,
    showConfirmPass,
    setShowConfirmPass,
    token,
  } = useContext(RegisterContext);
  return (
    <>
      {!token ? (
        <Container>
          <div className="div-logo-back">
            <H1Register>Kenzie Hub</H1Register>
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
                borderFocus={
                  errors.name ? "var(--color-error)" : "var(--grey0)"
                }
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
                placeholder="Digite aqui sua senha"
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
                      bottom={"unset"}
                      marginBotton={"1.2rem"}
                      marginTop={
                        errors.password && errors.password.message.length > 20
                          ? "14.3rem"
                          : "13.4rem"
                      }
                      top={"0"}
                      onMouseEnter={() => setShowPass(!showPass)}
                    />
                    <IconEyeOff
                      mobile
                      bottom={"unset"}
                      marginBotton={"1.2rem"}
                      marginTop={
                        errors.password && errors.password.message.length > 20
                          ? "14.3rem"
                          : "13.4rem"
                      }
                      top={"0"}
                      onClick={() => setShowPass(!showPass)}
                    />
                  </>
                ) : (
                  <>
                    <IconEye
                      bottom={"unset"}
                      marginBotton={"1.2rem"}
                      marginTop={
                        errors.password && errors.password.message.length > 20
                          ? "14.3rem"
                          : "13.4rem"
                      }
                      top={"0"}
                      onMouseLeave={() => setShowPass(!showPass)}
                    />
                    <IconEye
                      mobile
                      bottom={"unset"}
                      marginBotton={"1.2rem"}
                      marginTop={
                        errors.password && errors.password.message.length > 20
                          ? "14.3rem"
                          : "13.4rem"
                      }
                      top={"0"}
                      onClick={() => setShowPass(!showPass)}
                    />
                  </>
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
                  <>
                    <IconEyeOff
                      bottom={"0"}
                      marginBotton={"17.2rem"}
                      top={"unset"}
                      onMouseEnter={() => setShowConfirmPass(!showConfirmPass)}
                    />
                    <IconEyeOff
                      mobile
                      bottom={"0"}
                      marginBotton={"17.2rem"}
                      top={"unset"}
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                    />
                  </>
                ) : (
                  <>
                    <IconEye
                      bottom={"0"}
                      marginBotton={"17.2rem"}
                      top={"unset"}
                      onMouseLeave={() => setShowConfirmPass(!showConfirmPass)}
                    />
                    <IconEye
                      mobile
                      bottom={"0"}
                      marginBotton={"17.2rem"}
                      top={"unset"}
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                    />
                  </>
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
                colorText={
                  errors.contact ? "var(--color-error)" : "var(--grey0)"
                }
              >
                {errors.contact ? errors.contact.message : "Contato"}
              </Label>
              <Input
                id="contact"
                type="text"
                placeholder="Opção de contato"
                borderColor={
                  errors.contact ? "var(--color-error)" : "transparent"
                }
                borderFocus={
                  errors.contact ? "var(--color-error)" : "var(--grey0)"
                }
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
      ) : (
        setTimeout(() => {
          navigate(`/dashboard`);
        }, 100)
      )}
    </>
  );
};
