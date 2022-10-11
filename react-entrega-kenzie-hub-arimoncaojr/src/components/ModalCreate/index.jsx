import {
  ContainerModal,
  Label,
  Input,
  Select,
} from "../../pages/Dashboard/styles";
import { ModalContext } from "../../contexts/ModalCreateContext";
import { useContext } from "react";
export const ModalCreate = () => {
  const { showModal, reset, handleSubmit, submitTechInfo, errors, register } =
    useContext(ModalContext);
  return (
    <ContainerModal>
      <div className="modal">
        <div className="closeDiv">
          <h4>Cadastrar Tecnologia</h4>
          <button
            onClick={() => {
              showModal(false);
              reset();
            }}
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(submitTechInfo)} action="">
          <Label
            htmlFor="title"
            colorText={errors.title ? "var(--color-error)" : "var(--grey0)"}
          >
            {errors.title ? errors.title.message : "Nome"}
          </Label>
          <Input
            type="text"
            id="title"
            placeholder="Digite aqui sua Tecnologia"
            borderColor={errors.title ? "var(--color-error)" : "transparent"}
            borderFocus={errors.title ? "var(--color-error)" : "var(--grey0)"}
            {...register("title")}
          />
          <Label
            htmlFor="status"
            colorText={errors.status ? "var(--color-error)" : "var(--grey0)"}
          >
            {errors.status ? errors.status.message : "Selecionar status"}
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
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </ContainerModal>
  );
};