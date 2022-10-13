import { Api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("@kenzieHub:Token");

  const login = (user) => {
    setLoading(true);
    Api.post("/sessions", { ...user })
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("@kenzieHub:Token", res.data.token);
        toast.success("Login bem sucedido!");
        navigate(`/dashboard`, { replace: true });
        res && setLoading(false);
      })
      .catch((err) => {
        toast.error("Login ou Senha inválidos!");
        err && setLoading(false);
      });
  };

  const signUp = (user) => {
    setLoading(true);
    Api.post("/users", { ...user })
      .then((res) => {
        toast.success("Cadastro efetuado com sucesso!");
        navigate("/login");
        res && setLoading(false);
      })
      .catch((err) => {
        toast.error("E-mail já cadastrado!");
        err && setLoading(false);
      });
  };

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
    <AuthContext.Provider
      value={{
        userInfo,
        token,
        signUp,
        login,
        showPass,
        setShowPass,
        showConfirmPass,
        setShowConfirmPass,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
