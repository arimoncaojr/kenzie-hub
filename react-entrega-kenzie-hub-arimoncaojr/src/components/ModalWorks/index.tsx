import { ModalWorksContext } from "../../contexts/ModalWorks";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../lib/yupCreateWork";
import { IInfosWorks } from "../../contexts/ModalWorks";
import { ContainerModal, Label, Input, TextArea } from "../../styles/modal";

export const ModalWorkCreate = () => {
  const { showModalWorks, submitWorkInfo, loading } =
    useContext(ModalWorksContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IInfosWorks>({
    resolver: yupResolver(schema),
    defaultValues: {
      deploy_url: "https://",
    },
  });

  return (
    <ContainerModal>
      <div className="modal">
        <div className="closeDiv">
          <h4>Publicar Projeto</h4>
          <button
            className="closeModalCreate"
            onClick={() => {
              showModalWorks(false);
              reset();
            }}
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(submitWorkInfo)}>
          <Label
            htmlFor="title"
            colorText={errors.title ? "var(--color-error)" : "var(--grey0)"}
          >
            {errors.title ? errors.title.message : "Nome"}
          </Label>
          <Input
            id="title"
            placeholder="Digite aqui o nome do Projeto"
            borderColor={errors.title ? "var(--color-error)" : "transparent"}
            borderFocus={errors.title ? "var(--color-error)" : "var(--grey0)"}
            {...register("title")}
          />
          <Label
            htmlFor="description"
            colorText={
              errors.description ? "var(--color-error)" : "var(--grey0)"
            }
          >
            {errors.description ? errors.description.message : "Descrição"}
          </Label>
          <TextArea
            id="description"
            placeholder="Digite aqui a descrição do projeto"
            borderColor={
              errors.description ? "var(--color-error)" : "transparent"
            }
            borderFocus={
              errors.description ? "var(--color-error)" : "var(--grey0)"
            }
            {...register("description")}
          ></TextArea>
          <Label
            htmlFor="deploy_url"
            colorText={
              errors.deploy_url ? "var(--color-error)" : "var(--grey0)"
            }
          >
            {errors.deploy_url ? errors.deploy_url.message : "URL"}
          </Label>
          <Input
            id="deploy_url"
            placeholder="Digite aqui a URL do projeto"
            borderColor={
              errors.deploy_url ? "var(--color-error)" : "transparent"
            }
            borderFocus={
              errors.deploy_url ? "var(--color-error)" : "var(--grey0)"
            }
            {...register("deploy_url")}
          />
          <button className="btnRegisterTech" type="submit">
            {loading ? <div className="loading"></div> : "Publicar Projeto"}
          </button>
        </form>
      </div>
    </ContainerModal>
  );
};
