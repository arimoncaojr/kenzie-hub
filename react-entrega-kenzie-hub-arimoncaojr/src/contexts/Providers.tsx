import { AuthProvider } from "./AuthContext";
import { ModalProvider } from "./ModalCreateContext";
import { ModalEditProvider } from "./ModalEditContext";
import { ModalWorksProvider } from "./ModalWorks";

interface IProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: IProvidersProps) => {
  return (
    <AuthProvider>
      <ModalProvider>
        <ModalEditProvider>
          <ModalWorksProvider>{children}</ModalWorksProvider>
        </ModalEditProvider>
      </ModalProvider>
    </AuthProvider>
  );
};
