import React, { useState, createContext } from "react";
import { toast } from "react-toastify";
import { Api } from "../services/api";

interface IModalEditContextProps {
  children: React.ReactNode;
}

interface IModalEditContext {
  modalEdit: boolean;
  showModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  nameTech: string;
  setNameTech: React.Dispatch<React.SetStateAction<string>>;
  setIdTech: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  loadingDelete: boolean;
  editTech: (newInfo: INewInfos) => void;
  deleteTech: () => void;
}

export interface INewInfos {
  status: string;
}

export const ModalEditContext = createContext<IModalEditContext>(
  {} as IModalEditContext
);

export const ModalEditProvider = ({ children }: IModalEditContextProps) => {
  const token = localStorage.getItem("@kenzieHub:Token");
  const [modalEdit, showModalEdit] = useState<boolean>(false);
  const [nameTech, setNameTech] = useState<string>("");
  const [idTech, setIdTech] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);

  const editTech = (newInfo: INewInfos) => {
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
      setLoadingDelete(false);
    });
  }

  return (
    <ModalEditContext.Provider
      value={{
        nameTech,
        setNameTech,
        modalEdit,
        showModalEdit,
        deleteTech,
        editTech,
        setIdTech,
        loading,
        loadingDelete,
      }}
    >
      {children}
    </ModalEditContext.Provider>
  );
};
