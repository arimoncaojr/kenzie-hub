import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  title: yup.string().required("Nome não preenchido"),
  status: yup.string().required("Status não selecionado"),
});

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState([]);
  const token = localStorage.getItem("@kenzieHub:Token");
  const navigate = useNavigate();
  const [modal, showModal] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    token &&
      Api.get("/profile", { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => setUserInfo(res.data))
        .catch((err) => {
          console.log(err);
          window.localStorage.clear();
          navigate("/login");
        });
  }, [token, navigate, userInfo.techs]);

  function deleteTech(id) {
    Api.delete(`/users/techs/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(() => toast.success("Tecnologia deletada com sucesso!"));
  }

  const submitTechInfo = (infos) => {
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
        reset();
      })
      .catch((err) => {
        err && toast.error("Tecnologia com mesmo nome já criada!");
      });
  };

  return (
    <DashboardContext.Provider
      value={{
        userInfo,
        token,
        deleteTech,
        modal,
        showModal,
        submitTechInfo,
        register,
        handleSubmit,
        errors,
        reset,
        navigate,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
