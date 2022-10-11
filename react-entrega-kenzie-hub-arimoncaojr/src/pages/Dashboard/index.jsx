import {
  Container,
  LinkStyle as Link,
  DivUser,
  DivInfos,
  H2,
  H3,
  IconTrash,
} from "./styles";
import { DashboardContext } from "../../contexts/DashboardContext";
import { ModalContext } from "../../contexts/ModalCreateContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ModalCreate } from "../../components/ModalCreate";
export const Dashboard = () => {
  const { userInfo, token, deleteTech } = useContext(DashboardContext);
  const { modal, showModal } = useContext(ModalContext);
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
          {modal && <ModalCreate />}
        </Container>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};
