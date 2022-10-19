import React from "react";

export interface IInfos {
  title: string;
  status: string;
}

export interface IModalContextProps {
  children: React.ReactNode;
}

export interface IModalContext {
  modal: boolean;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  submitTechInfo: (infos: IInfos) => void;
}
