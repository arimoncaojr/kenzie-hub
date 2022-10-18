import { Api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import React, { useState, createContext, useEffect } from "react";

interface IAuthContextProps {
  children: React.ReactNode;
}

interface ITechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface IWorks {
  title?: string;
  description?: string;
  deploy_url?: string;
}

interface IUserInfo {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITechs[];
  works: IWorks[];
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
}

export interface ISignUp {
  email: string;
  password: string;
  confirmPass: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface ILogin {
  email: string;
  password: string;
}

interface IAuthContext {
  userInfo: IUserInfo;
  showPass: boolean;
  setShowPass: React.Dispatch<React.SetStateAction<boolean>>;
  showConfirmPass: boolean;
  setShowConfirmPass: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  token: string | null;
  login: (user: ILogin) => void;
  signUp: (user: ISignUp) => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthContextProps) => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);
  const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo);
  const [loading, setLoading] = useState(false);
  const token: string | null = localStorage.getItem("@kenzieHub:Token");
  console.log(userInfo);

  const login = (user: ILogin) => {
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

  const signUp = (user: ISignUp) => {
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
      Api.get<IUserInfo>("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          setUserInfo(res.data);
        })
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
