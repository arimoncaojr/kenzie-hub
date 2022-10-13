import { AuthProvider } from "./AuthContext";
import { ModalProvider } from "./ModalCreateContext";
import { ModalEditProvider } from "./ModalEditContext";

export const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <ModalProvider>
        <ModalEditProvider>{children}</ModalEditProvider>
      </ModalProvider>
    </AuthProvider>
  );
};
