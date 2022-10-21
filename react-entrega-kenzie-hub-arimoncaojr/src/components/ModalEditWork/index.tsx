import {
  ContainerModal,
  Label,
  Input,
  ButtonEditInfo,
  TextArea,
} from "../../styles/modal";
import { IInfosWorksEdit } from "../../contexts/ModalWorksEdit";
import { ModalWorksEditContext } from "../../contexts/ModalWorksEdit";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../lib/yupEditWork";

export const ModalEditWork = () => {
  const {
    showModalWorksEdit,
    loading,
    loadingDelete,
    editWork,
    deleteWork,
    nameWork,
    descriptionWork,
    urlWork,
  } = useContext(ModalWorksEditContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IInfosWorksEdit>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: nameWork,
      description: descriptionWork,
      deploy_url: urlWork,
    },
  });

  return (
    <ContainerModal>
      <div className="modal">
        <div className="closeDiv">
          <h4>Projeto Detalhes</h4>
          <button
            className="closeModalEdit"
            onClick={() => {
              showModalWorksEdit(false);
              reset();
            }}
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(editWork)}>
          <Label colorText={"var(--grey0)"} htmlFor="title">
            Nome do Projeto
          </Label>
          <Input
            type="text"
            id="title"
            borderColor={"transparent"}
            borderFocus={"var(--grey0)"}
            {...register("title")}
          />
          <Label colorText={"var(--grey0)"} htmlFor="description">
            Descrição do Projeto
          </Label>
          <TextArea
            id="description"
            borderColor={"transparent"}
            borderFocus={"var(--grey0)"}
            {...register("description")}
          >
            {descriptionWork}
          </TextArea>
          <Label
            colorText={
              errors.deploy_url ? "var(--color-error)" : "var(--grey0)"
            }
            htmlFor="deploy_url"
          >
            {errors.deploy_url ? errors.deploy_url.message : "Url do Projeto"}
          </Label>
          <Input
            id="deploy_url"
            type="url"
            borderColor={
              errors.deploy_url ? "var(--color-error)" : "transparent"
            }
            borderFocus={
              errors.deploy_url ? "var(--color-error)" : "var(--grey0)"
            }
            {...register("deploy_url")}
          />
          <div className="divBtns">
            <ButtonEditInfo
              hoverBtn={"var(--color-primary-focus)"}
              cursorPointer={"pointer"}
              backgroundColor={"var(--color-primary)"}
              type="submit"
            >
              {loading ? <div className="loading"></div> : "Salvar Alterações"}
            </ButtonEditInfo>
            <button
              className="btnDeleteTech"
              type="button"
              onClick={() => deleteWork()}
            >
              {loadingDelete ? <div className="loading"></div> : "Excluir"}
            </button>
          </div>
        </form>
      </div>
    </ContainerModal>
  );
};
