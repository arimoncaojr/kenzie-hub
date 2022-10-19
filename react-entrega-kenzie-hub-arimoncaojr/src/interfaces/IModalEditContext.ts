import React from "react";

export interface INewInfos {
  status: string;
}

export interface IModalEditContextProps {
  children: React.ReactNode;
}

export interface IModalEditContext {
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
