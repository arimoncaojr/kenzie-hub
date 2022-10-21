import React, { useState, createContext } from "react";
import { toast } from "react-toastify";
import { Api } from "../services/api";

interface IModalWorksProps {
  children: React.ReactNode;
}

interface IModalWorksContext {
  modalWorks: boolean;
  showModalWorks: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  submitWorkInfo: (infos: IInfosWorks) => void;
}

export interface IInfosWorks {
  title: string;
  description: string;
  deploy_url: string;
}

export const ModalWorksContext = createContext<IModalWorksContext>(
  {} as IModalWorksContext
);

export const ModalWorksProvider = ({ children }: IModalWorksProps) => {
  const token: string | null = localStorage.getItem("@kenzieHub:Token");

  const [modalWorks, showModalWorks] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const submitWorkInfo = (infos: IInfosWorks) => {
    setLoading(true);

    Api.post(
      "/users/works",
      { ...infos },
      { headers: { Authorization: `Bearer ${token}` } }
    )
      .then((res) => {
        toast.success("Projeto publicado com sucesso!");
        showModalWorks(false);
        res && setLoading(false);
      })
      .catch((err) => {
        toast.error("Projeto com o mesmo nome já publicado!");
        err && setLoading(false);
      });
  };

  return (
    <ModalWorksContext.Provider
      value={{ modalWorks, showModalWorks, submitWorkInfo, loading }}
    >
      {children}
    </ModalWorksContext.Provider>
  );
};
