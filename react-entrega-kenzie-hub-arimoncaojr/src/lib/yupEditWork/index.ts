import * as yup from "yup";

export const schema = yup.object({
  title: yup.string(),
  description: yup.string(),
  deploy_url: yup.string(),
});
