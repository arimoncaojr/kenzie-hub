import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../services/api";
import { Container, LinkStyle as Link, DivUser, DivInfos } from "./styles";
export const Dashboard = () => {
  const [userInfo, setUserInfo] = useState([]);
  const token = localStorage.getItem("@kenzieHub:Token");
  const navigate = useNavigate();

  useEffect(() => {
    Api.get("/profile", { headers: { Authorization: `token ${token}` } })
      .then((res) => setUserInfo(res.data))
      .catch((err) => {
        console.log(err);
        window.localStorage.clear();
        navigate("/login");
      });
  }, [token, navigate]);

  return (
    <>
      {token && (
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
              <h2>Olá, {userInfo.name}</h2>
              <span>{userInfo.course_module}</span>
            </DivUser>
          </div>
          <DivInfos>
            <h2>Quen pena! Estamos em desenvolvimento :(</h2>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades!
            </p>
          </DivInfos>
        </Container>
      )}
    </>
  );
};
