import {
  Container,
  LinkStyle as Link,
  DivUser,
  DivInfos,
  H2,
  H3,
  IconTrash,
  ContainerModal,
  Label,
  Input,
  Select,
} from "./styles";
import { DashboardContext } from "../../contexts/DashboardContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
export const Dashboard = () => {
  const {
    userInfo,
    token,
    deleteTech,
    modal,
    showModal,
    submitTechInfo,
    register,
    handleSubmit,
    errors,
    reset,
  } = useContext(DashboardContext);

  return (
    <>
      {token ? (
        <Container>
          <header>
            <div className="div-header">
              <h1>Kenzie Hub</h1>
              <Link to={"/login"} onClick={() => window.localStorage.clear()}>
                Sair
              </Link>
            </div>
          </header>
          <div className="div-user">
            <DivUser>
              <H2>Olá, {userInfo.name}</H2>
              <span>{userInfo.course_module}</span>
            </DivUser>
          </div>
          <DivInfos>
            <div className="div-btn-tech">
              <H3>Tecnologias</H3>
              <button onClick={() => showModal(true)}>+</button>
            </div>
            {userInfo.techs && (
              <ul>
                {userInfo.techs.map((element) => (
                  <li key={element.id}>
                    <h3>{element.title}</h3>
                    <div>
                      <p>{element.status}</p>
                      <IconTrash onClick={() => deleteTech(element.id)} />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </DivInfos>
          {modal && (
            <ContainerModal>
              <div className="modal">
                <div className="closeDiv">
                  <h4>Cadastrar Tecnologia</h4>
                  <button
                    onClick={() => {
                      showModal(false);
                      reset();
                    }}
                  >
                    X
                  </button>
                </div>
                <form onSubmit={handleSubmit(submitTechInfo)} action="">
                  <Label
                    htmlFor="title"
                    colorText={
                      errors.title ? "var(--color-error)" : "var(--grey0)"
                    }
                  >
                    {errors.title ? errors.title.message : "Nome"}
                  </Label>
                  <Input
                    type="text"
                    id="title"
                    placeholder="Digite aqui sua Tecnologia"
                    borderColor={
                      errors.title ? "var(--color-error)" : "transparent"
                    }
                    borderFocus={
                      errors.title ? "var(--color-error)" : "var(--grey0)"
                    }
                    {...register("title")}
                  />
                  <Label
                    htmlFor="status"
                    colorText={
                      errors.status ? "var(--color-error)" : "var(--grey0)"
                    }
                  >
                    {errors.status
                      ? errors.status.message
                      : "Selecionar status"}
                  </Label>
                  <Select
                    name=""
                    id="status"
                    borderColor={
                      errors.status ? "var(--color-error)" : "transparent"
                    }
                    borderFocus={
                      errors.status ? "var(--color-error)" : "var(--grey0)"
                    }
                    {...register("status")}
                  >
                    <option value="">Selecione</option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                  </Select>
                  <button type="submit">Cadastrar Tecnologia</button>
                </form>
              </div>
            </ContainerModal>
          )}
        </Container>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};
