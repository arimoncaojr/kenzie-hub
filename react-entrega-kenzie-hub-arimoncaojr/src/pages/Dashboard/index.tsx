import {
  Container,
  LinkStyle as Link,
  DivUser,
  DivInfos,
  H2,
  H3,
} from "../../styles/dashboard";
import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalCreateContext";
import { ModalEditContext } from "../../contexts/ModalEditContext";
import { ModalWorksContext } from "../../contexts/ModalWorks";
import { ModalWorksEditContext } from "../../contexts/ModalWorksEdit";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ModalCreate } from "../../components/ModalCreate";
import { ModalEdit } from "../../components/ModalEdit";
import { toast } from "react-toastify";
import { ModalWorkCreate } from "../../components/ModalWorks";
import { ModalEditWork } from "../../components/ModalEditWork";
export const Dashboard = () => {
  const { userInfo, token } = useContext(AuthContext);
  const { modal, showModal } = useContext(ModalContext);
  const { setNameTech, modalEdit, showModalEdit, setIdTech } =
    useContext(ModalEditContext);
  const { modalWorks, showModalWorks } = useContext(ModalWorksContext);
  const {
    setNameWork,
    setDescriptionWork,
    setUrlWork,
    setIdWork,
    showModalWorksEdit,
    modalWorksEdit,
  } = useContext(ModalWorksEditContext);

  function btnModalEdit(name: string) {
    setNameTech(name);
    showModalEdit(true);
  }

  function btnModalWorkEdit(name: string, description: string, url: string) {
    setNameWork(name);
    setDescriptionWork(description);
    setUrlWork(url);
    showModalWorksEdit(true);
  }

  return (
    <>
      {token ? (
        <Container>
          <header>
            <div className="div-header">
              <h1>Kenzie Hub</h1>
              <Link
                to={"/login"}
                onClick={() => {
                  window.localStorage.clear();
                  toast.success("Logout feito com sucesso!");
                }}
              >
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
                {userInfo.techs.length > 0 ? (
                  userInfo.techs.map((element) => (
                    <li
                      key={element.id}
                      onClick={() => {
                        btnModalEdit(element.title);
                        setIdTech(element.id);
                      }}
                    >
                      <h3>{element.title}</h3>
                      <div>
                        <p>{element.status}</p>
                      </div>
                    </li>
                  ))
                ) : (
                  <p>Você não possui Tecnologias cadastradas.</p>
                )}
              </ul>
            )}
            <div className="div-btn-tech">
              <H3>Projetos Concluídos</H3>
              <button onClick={() => showModalWorks(true)}>+</button>
            </div>
            {userInfo.works && (
              <ul>
                {userInfo.works.length > 0 ? (
                  userInfo.works.map((element) => (
                    <li
                      key={element.id}
                      onClick={() => {
                        btnModalWorkEdit(
                          element.title,
                          element.description,
                          element.deploy_url
                        );
                        setIdWork(element.id);
                      }}
                    >
                      <h3>{element.title}</h3>
                    </li>
                  ))
                ) : (
                  <p>Você não possui Projetos publicados.</p>
                )}
              </ul>
            )}
          </DivInfos>
          {modal && <ModalCreate />}
          {modalEdit && <ModalEdit />}
          {modalWorks && <ModalWorkCreate />}
          {modalWorksEdit && <ModalEditWork />}
        </Container>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};
