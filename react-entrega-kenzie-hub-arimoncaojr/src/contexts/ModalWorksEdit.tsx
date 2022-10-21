import React, { useState, createContext } from "react";
import { toast } from "react-toastify";
import { Api } from "../services/api";

interface IModalWorksEditContextProps {
  children: React.ReactNode;
}

interface IModalWorksEditContext {
  modalWorksEdit: boolean;
  showModalWorksEdit: React.Dispatch<React.SetStateAction<boolean>>;
  nameWork: string;
  setNameWork: React.Dispatch<React.SetStateAction<string>>;
  descriptionWork: string;
  setDescriptionWork: React.Dispatch<React.SetStateAction<string>>;
  urlWork: string;
  setUrlWork: React.Dispatch<React.SetStateAction<string>>;
  setIdWork: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  loadingDelete: boolean;
  editWork: (newInfo: IInfosWorksEdit) => void;
  deleteWork: () => void;
}

export interface IInfosWorksEdit {
  title?: string;
  description?: string;
  deploy_url?: string;
}

export const ModalWorksEditContext = createContext<IModalWorksEditContext>(
  {} as IModalWorksEditContext
);

export const ModalWorksEditProvider = ({
  children,
}: IModalWorksEditContextProps) => {
  const token = localStorage.getItem("@kenzieHub:Token");

  const [modalWorksEdit, showModalWorksEdit] = useState<boolean>(false);
  const [nameWork, setNameWork] = useState<string>("");
  const [descriptionWork, setDescriptionWork] = useState<string>("");
  const [urlWork, setUrlWork] = useState<string>("");
  const [idWork, setIdWork] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);

  const editWork = (newInfo: IInfosWorksEdit) => {
    setLoading(true);

    Api.put(
      `/users/works/${idWork}`,
      { ...newInfo },
      { headers: { Authorization: `Bearer ${token}` } }
    )
      .then((res) => {
        toast.success("Projeto editado com sucesso!");
        showModalWorksEdit(false);
        res && setLoading(false);
      })
      .catch((err) => {
        toast.error("Ops, algo deu errado!");
        err && setLoading(false);
      });
  };

  function deleteWork() {
    setLoadingDelete(true);
    Api.delete(`/users/works/${idWork}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(() => {
      toast.success("Projeto deletado com sucesso!");
      showModalWorksEdit(false);
      setLoadingDelete(false);
    });
  }

  return (
    <ModalWorksEditContext.Provider
      value={{
        modalWorksEdit,
        showModalWorksEdit,
        nameWork,
        setNameWork,
        descriptionWork,
        setDescriptionWork,
        urlWork,
        setUrlWork,
        setIdWork,
        loading,
        loadingDelete,
        editWork,
        deleteWork,
      }}
    >
      {children}
    </ModalWorksEditContext.Provider>
  );
};
