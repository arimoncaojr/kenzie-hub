import {
  ContainerModal,
  Label,
  Input,
  Select,
  ButtonEditInfo,
} from "../../styles/modal";
import { ModalEditContext } from "../../contexts/ModalEditContext";
import { INewInfos } from "../../interfaces/IModalEditContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../lib/yupEditTech";

export const ModalEdit = () => {
  const {
    nameTech,
    showModalEdit,
    editTech,
    deleteTech,
    loading,
    loadingDelete,
  } = useContext(ModalEditContext);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<INewInfos>({ resolver: yupResolver(schema) });

  const value = getValues("status");
  return (
    <ContainerModal>
      <div className="modal">
        <div className="closeDiv">
          <h4>Tecnologia Detalhes</h4>
          <button
            className="closeModalEdit"
            onClick={() => {
              showModalEdit(false);
              reset();
            }}
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(editTech)}>
          <Label colorText={"var(--grey0)"} htmlFor="title">
            Nome do projeto
          </Label>
          <Input
            noEdit
            borderColor={"transparent"}
            borderFocus={"transparent"}
            value={nameTech}
            readonly
          />
          <Label
            colorText={errors.status ? "var(--color-error)" : "var(--grey0)"}
            htmlFor="status"
          >
            {errors.status ? errors.status.message : "Status"}
          </Label>
          <Select
            id="status"
            borderColor={errors.status ? "var(--color-error)" : "transparent"}
            borderFocus={errors.status ? "var(--color-error)" : "var(--grey0)"}
            {...register("status")}
          >
            <option value="">Selecione</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <div className="divBtns">
            <ButtonEditInfo
              hoverBtn={
                !value
                  ? "var(--color-primary-negative)"
                  : "var(--color-primary-focus)"
              }
              cursorPointer={!value ? "unset" : "pointer"}
              backgroundColor={
                !value
                  ? "var(--color-primary-negative)"
                  : "var(--color-primary)"
              }
              className="btnEditInfo"
              type="submit"
            >
              {loading ? <div className="loading"></div> : "Salvar Alterações"}
            </ButtonEditInfo>
            <button
              className="btnDeleteTech"
              type="button"
              onClick={() => deleteTech()}
            >
              {loadingDelete ? <div className="loading"></div> : "Excluir"}
            </button>
          </div>
        </form>
      </div>
    </ContainerModal>
  );
};
