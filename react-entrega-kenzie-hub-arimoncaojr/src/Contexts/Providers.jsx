import { LoginProvider } from "./LoginContext";
import { RegisterProvider } from "./RegisterContext";
import { DashboardProvider } from "./DashboardContext";

export const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <RegisterProvider>
        <DashboardProvider>{children}</DashboardProvider>
      </RegisterProvider>
    </LoginProvider>
  );
};
