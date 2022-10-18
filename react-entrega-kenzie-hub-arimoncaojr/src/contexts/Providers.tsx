import { AuthProvider } from "./AuthContext";
import { ModalProvider } from "./ModalCreateContext";
import { ModalEditProvider } from "./ModalEditContext";

interface IProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: IProvidersProps) => {
  return (
    <AuthProvider>
      <ModalProvider>
        <ModalEditProvider>{children}</ModalEditProvider>
      </ModalProvider>
    </AuthProvider>
  );
};
