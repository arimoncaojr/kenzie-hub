import { useState, createContext } from "react";
import { toast } from "react-toastify";
import { Api } from "../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  status: yup.string().required("Status não selecionado"),
});

export const ModalEditContext = createContext();

export const ModalEditProvider = ({ children }) => {
  const token = localStorage.getItem("@kenzieHub:Token");
  const [modalEdit, showModalEdit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const editTech = (id, newInfo) => {
    Api.put(
      `/users/tech/${id}`,
      { newInfo },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((res) => {
        toast.success("Status editado com sucesso!");
        showModalEdit(false);
      })
      .catch((err) => err && toast.error("Ops, algo deu errado!"));
  };

  return (
    <ModalEditContext.Provider value={{ register, handleSubmit, errors }}>
      {children}
    </ModalEditContext.Provider>
  );
};
