import * as yup from "yup";

export const schema = yup.object({
  title: yup.string().required("Nome não preenchido"),
  status: yup.string().required("Status não selecionado"),
});
