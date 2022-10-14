import { useState, createContext } from "react";
import { toast } from "react-toastify";
import { Api } from "../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../lib/yupCreateTech";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const token = localStorage.getItem("@kenzieHub:Token");
  const [modal, showModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitTechInfo = (infos) => {
    setLoading(true);
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
        res && setLoading(false);
      })
      .catch((err) => {
        toast.error("Tecnologia com mesmo nome já criada!");
        err && setLoading(false);
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
        loading,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
