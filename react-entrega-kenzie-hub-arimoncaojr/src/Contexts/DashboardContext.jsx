import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../services/api";
import { toast } from "react-toastify";
export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState([]);
  const token = localStorage.getItem("@kenzieHub:Token");
  const navigate = useNavigate();

  useEffect(() => {
    token &&
      Api.get("/profile", { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => setUserInfo(res.data))
        .catch((err) => {
          console.log(err);
          window.localStorage.clear();
          navigate("/login");
        });
  }, [token, navigate, userInfo.techs]);

  function deleteTech(id) {
    Api.delete(`/users/techs/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(() => toast.success("Tecnologia deletada com sucesso!"));
  }

  return (
    <DashboardContext.Provider
      value={{
        userInfo,
        token,
        navigate,
        deleteTech,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
