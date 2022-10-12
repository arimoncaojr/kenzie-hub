import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../services/api";
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
          window.localStorage.clear();
          navigate("/login");
        });
  }, [token, navigate, userInfo.techs]);

  return (
    <DashboardContext.Provider
      value={{
        userInfo,
        token,
        navigate,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
