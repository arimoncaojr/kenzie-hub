import { AuthProvider } from "./AuthContext";
import { ModalProvider } from "./ModalCreateContext";
import { ModalEditProvider } from "./ModalEditContext";
import { ModalWorksProvider } from "./ModalWorks";
import { ModalWorksEditProvider } from "./ModalWorksEdit";

interface IProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: IProvidersProps) => {
  return (
    <AuthProvider>
      <ModalProvider>
        <ModalEditProvider>
          <ModalWorksProvider>
            <ModalWorksEditProvider>{children}</ModalWorksEditProvider>
          </ModalWorksProvider>
        </ModalEditProvider>
      </ModalProvider>
    </AuthProvider>
  );
};
