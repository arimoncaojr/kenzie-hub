import * as yup from "yup";

export const schema = yup.object({
  status: yup.string().required("Status não selecionado"),
});
