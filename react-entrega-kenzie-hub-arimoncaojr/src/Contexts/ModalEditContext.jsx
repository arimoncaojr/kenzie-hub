import { useState, createContext } from "react";
import { toast } from "react-toastify";
import { Api } from "../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../lib/yupEditTech";

export const ModalEditContext = createContext();

export const ModalEditProvider = ({ children }) => {
  const token = localStorage.getItem("@kenzieHub:Token");
  const [modalEdit, showModalEdit] = useState(false);
  const [nameTech, setNameTech] = useState("");
  const [idTech, setIdTech] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const editTech = (newInfo) => {
    setLoading(true);
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
        res && setLoading(false);
      })
      .catch((err) => {
        toast.error("Ops, algo deu errado!");
        err && setLoading(false);
      });
  };

  function deleteTech() {
    setLoadingDelete(true);
    Api.delete(`/users/techs/${idTech}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(() => {
      toast.success("Tecnologia deletada com sucesso!");
      showModalEdit(false);
      reset();
      setLoadingDelete(false);
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
        loading,
        loadingDelete,
      }}
    >
      {children}
    </ModalEditContext.Provider>
  );
};
