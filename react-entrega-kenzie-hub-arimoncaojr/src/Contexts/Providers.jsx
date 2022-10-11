import { LoginProvider } from "./LoginContext";
import { RegisterProvider } from "./RegisterContext";
import { DashboardProvider } from "./DashboardContext";
import { ModalProvider } from "./ModalCreateContext";
import { ModalEditProvider } from "./ModalEditContext";

export const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <RegisterProvider>
        <DashboardProvider>
          <ModalProvider>
            <ModalEditProvider>{children}</ModalEditProvider>
          </ModalProvider>
        </DashboardProvider>
      </RegisterProvider>
    </LoginProvider>
  );
};
