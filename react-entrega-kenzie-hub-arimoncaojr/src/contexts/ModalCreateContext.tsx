import { useState, createContext } from "react";
import {
  IModalContext,
  IModalContextProps,
  IInfos,
} from "../interfaces/IModalContext";
import { toast } from "react-toastify";
import { Api } from "../services/api";

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider = ({ children }: IModalContextProps) => {
  const token: string | null = localStorage.getItem("@kenzieHub:Token");
  const [modal, showModal] = useState(false);
  const [loading, setLoading] = useState(false);

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
