import React from "react";

interface ITechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface IWorks {
  title?: string;
  description?: string;
  deploy_url?: string;
}

export interface IUserInfo {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITechs[];
  works: IWorks[];
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
}

export interface IRegister {
  email: string;
  password: string;
  confirmPass: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IAuthContextProps {
  children: React.ReactNode;
}

export interface IAuthContext {
  userInfo: IUserInfo;
  showPass: boolean;
  setShowPass: React.Dispatch<React.SetStateAction<boolean>>;
  showConfirmPass: boolean;
  setShowConfirmPass: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  token: string | null;
  login: (user: ILogin) => void;
  signUp: (user: IRegister) => void;
}
