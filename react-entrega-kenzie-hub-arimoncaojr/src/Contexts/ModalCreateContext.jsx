import { useState, createContext } from "react";
import { toast } from "react-toastify";
import { Api } from "../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  title: yup.string().required("Nome não preenchido"),
  status: yup.string().required("Status não selecionado"),
});

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const token = localStorage.getItem("@kenzieHub:Token");
  const [modal, showModal] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitTechInfo = (infos) => {
    Api.post(
      "/users/techs",
      { ...infos },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((res) => {
        toast.success("Tecnologia criada com sucesso!");
        showModal(false);
        reset();
      })
      .catch((err) => {
        err && toast.error("Tecnologia com mesmo nome já criada!");
      });
  };

  return (
    <ModalContext.Provider
      value={{
        modal,
        showModal,
        submitTechInfo,
        register,
        handleSubmit,
        errors,
        reset,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
