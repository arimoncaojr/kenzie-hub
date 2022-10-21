import React, { useState, createContext } from "react";
import { toast } from "react-toastify";
import { Api } from "../services/api";

interface IModalContextProps {
  children: React.ReactNode;
}

interface IModalContext {
  modal: boolean;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  submitTechInfo: (infos: IInfos) => void;
}

export interface IInfos {
  title: string;
  status: string;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider = ({ children }: IModalContextProps) => {
  const token: string | null = localStorage.getItem("@kenzieHub:Token");

  const [modal, showModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const submitTechInfo = (infos: IInfos) => {
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
        loading,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
