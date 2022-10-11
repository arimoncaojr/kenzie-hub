import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState, createContext } from "react";

const schema = yup.object({
  email: yup.string().email("Email inválido").required("Email não preenchido"),
  password: yup.string().required("Senha não preenchida"),
});

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(true);
  const token = localStorage.getItem("@kenzieHub:Token");

  const onSubmit = (user) => {
    Api.post("/sessions", { ...user })
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("@kenzieHub:ID", res.data.user.id);
        window.localStorage.setItem("@kenzieHub:Token", res.data.token);
        window.localStorage.setItem("@kenzieHub:User", res.data.user.name);
        toast.success("Login bem sucedido!");
        navigate(`/dashboard/${res.data.user.name}/${res.data.user.id}`);
      })
      .catch((err) => err && toast.error("Login ou Senha inválidos!"));
  };

  return (
    <LoginContext.Provider
      value={{
        register,
        handleSubmit,
        showPass,
        setShowPass,
        token,
        errors,
        onSubmit,
        navigate,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
