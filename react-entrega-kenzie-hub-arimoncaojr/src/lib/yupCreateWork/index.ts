import * as yup from "yup";

export const schema = yup.object({
  title: yup.string().required("Nome não preenchido"),
  description: yup.string().required("Descrição não preenchida"),
  deploy_url: yup.string().required("Url do projeto não preenchida"),
});
