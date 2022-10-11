import { LoginProvider } from "./LoginContext";
import { RegisterProvider } from "./RegisterContext";
import { DashboardProvider } from "./DashboardContext";
import { ModalProvider } from "./ModalCreateContext";

export const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <RegisterProvider>
        <DashboardProvider>
          <ModalProvider>{children}</ModalProvider>
        </DashboardProvider>
      </RegisterProvider>
    </LoginProvider>
  );
};
