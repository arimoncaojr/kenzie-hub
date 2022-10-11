import {
  ContainerModal,
  Label,
  Input,
  Select,
  ButtonEditInfo,
} from "../../styles/modal";
import { ModalEditContext } from "../../contexts/ModalEditContext";
import { useContext } from "react";

export const ModalEdit = () => {
  const {
    register,
    handleSubmit,
    errors,
    nameTech,
    showModalEdit,
    editTech,
    deleteTech,
    getValues,
    reset,
  } = useContext(ModalEditContext);
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
            name=""
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
              cursorPointer={!value ? "unset" : "pointer"}
              backgroundColor={
                !value
                  ? "var(--color-primary-negative)"
                  : "var(--color-primary)"
              }
              className="btnEditInfo"
              type="submit"
            >
              Salvar Alterações
            </ButtonEditInfo>
            <button
              className="btnDeleteTech"
              type="button"
              onClick={() => deleteTech()}
            >
              Excluir
            </button>
          </div>
        </form>
      </div>
    </ContainerModal>
  );
};
