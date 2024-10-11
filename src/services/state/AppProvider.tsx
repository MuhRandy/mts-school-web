import { Children } from "../../utils/type";
import { AppStatusProvider } from "./AppStatusContext";
import { NewsProvider } from "./NewsContext";

export function AppProvider({ children }: Children) {
  return (
    <AppStatusProvider>
      <NewsProvider>{children}</NewsProvider>
    </AppStatusProvider>
  );
}
