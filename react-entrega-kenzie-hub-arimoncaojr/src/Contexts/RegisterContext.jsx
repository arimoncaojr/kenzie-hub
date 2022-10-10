import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Api } from "../services/api";
import { toast } from "react-toastify";
import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  name: yup.string().required("Nome não preenchido"),
  email: yup.string().email("Email inválido").required("Email não preenchido"),
  password: yup
    .string()
    .required("Senha não preenchida")
    .matches(
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[$*&@#()!`'<>"~/?}[_{|;:=+^%,.}])[0-9a-zA-Z$*&@#`()!`'<>_"~/?}{|;:[=+^%,.}]{8,}$/,
      "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"
    ),
  confirmPass: yup.string().oneOf([yup.ref("password")], "Senha não é igual"),
  bio: yup.string().required("Bio não preenchida"),
  contact: yup.string().required("Contato não preenchido"),
  course_module: yup.string().required("Módulo não selecionado"),
});

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [showPass, setShowPass] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("@kenzieHub:Token");

  const onSubmit = (user) => {
    Api.post("/users", { ...user })
      .then((res) => {
        toast.success("Cadastro efetuado com sucesso!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((err) => {
        err && toast.error("E-mail já cadastrado!");
      });
  };

  return (
    <RegisterContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        onSubmit,
        navigate,
        showPass,
        setShowPass,
        showConfirmPass,
        setShowConfirmPass,
        token,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
