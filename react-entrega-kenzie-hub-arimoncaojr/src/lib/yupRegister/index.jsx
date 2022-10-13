import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Nome não preenchido"),
  email: yup.string().email("Email inválido").required("Email não preenchido"),
  password: yup
    .string()
    .required("Senha não preenchida")
    .matches(
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[$*&@#()!`'<>"~/?}[_{|;:=+^%,.}])[0-9a-zA-Z$*&@#`()!`'<>_"~/?}{|;:[=+^%,.}]{8,}$/,
      "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"
    ),
  confirmPass: yup.string().oneOf([yup.ref("password")], "Senha não é igual"),
  bio: yup.string().required("Bio não preenchida"),
  contact: yup.string().required("Contato não preenchido"),
  course_module: yup.string().required("Módulo não selecionado"),
});
