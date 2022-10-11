import { useState, createContext } from "react";
import { toast } from "react-toastify";
import { Api } from "../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  status: yup.string().required("Status não selecionado"),
});

console.log();
export const ModalEditContext = createContext();

export const ModalEditProvider = ({ children }) => {
  const token = localStorage.getItem("@kenzieHub:Token");
  const [modalEdit, showModalEdit] = useState(false);
  const [nameTech, setNameTech] = useState("");
  const [idTech, setIdTech] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const editTech = (newInfo) => {
    Api.put(
      `/users/techs/${idTech}`,
      { ...newInfo },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((res) => {
        toast.success("Status editado com sucesso!");
        showModalEdit(false);
        reset();
      })
      .catch((err) => err && toast.error("Ops, algo deu errado!"));
  };

  function deleteTech() {
    Api.delete(`/users/techs/${idTech}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(() => {
      toast.success("Tecnologia deletada com sucesso!");
      showModalEdit(false);
      reset();
    });
  }

  return (
    <ModalEditContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        nameTech,
        setNameTech,
        modalEdit,
        showModalEdit,
        deleteTech,
        editTech,
        setIdTech,
        getValues,
        reset,
      }}
    >
      {children}
    </ModalEditContext.Provider>
  );
};
