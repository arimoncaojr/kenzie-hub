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
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ModalCreate } from "../../components/ModalCreate";
import { ModalEdit } from "../../components/ModalEdit";
import { toast } from "react-toastify";
export const Dashboard = () => {
  const { userInfo, token, loading } = useContext(AuthContext);
  const { modal, showModal } = useContext(ModalContext);
  const { setNameTech, modalEdit, showModalEdit, setIdTech } =
    useContext(ModalEditContext);

  function btnModalEdit(name) {
    setNameTech(name);
    showModalEdit(true);
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
                  loading(true);
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
                {userInfo.techs.map((element) => (
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
                ))}
              </ul>
            )}
          </DivInfos>
          {modal && <ModalCreate />}
          {modalEdit && <ModalEdit />}
        </Container>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};
