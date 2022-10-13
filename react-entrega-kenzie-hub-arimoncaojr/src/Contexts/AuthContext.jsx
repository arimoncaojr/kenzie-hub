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
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("@kenzieHub:Token");

  const login = (user) => {
    Api.post("/sessions", { ...user })
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("@kenzieHub:Token", res.data.token);
        toast.success("Login bem sucedido!");
        navigate(`/dashboard`, { replace: true });
        setLoading(true);
      })
      .catch(
        (err) => toast.error("Login ou Senha inválidos!"),
        setLoading(false),
        setTimeout(() => {
          setLoading(true);
        }, 1000)
      );
  };

  const signUp = (user) => {
    Api.post("/users", { ...user })
      .then((res) => {
        toast.success("Cadastro efetuado com sucesso!");
        navigate("/login");
      })
      .catch((err) => {
        err && toast.error("E-mail já cadastrado!");
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
