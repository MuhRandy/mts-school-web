import { createContext, Dispatch, useContext, useReducer } from "react";
import { initialState } from "../../utils/context";
import { Children } from "../../utils/type";

type AppStatus = {
  isAuth: boolean;
  isLoading: boolean;
  renderCount: number;
  wantToLogin: boolean;
};

type AppStatusAction =
  | {
      type: "changed_is_loading";
      isLoading: boolean;
    }
  | {
      type: "changed_is_auth";
      isAuth: boolean;
    }
  | {
      type: "changed_want_to_login";
      wantToLogin: boolean;
    }
  | {
      type: "incremented_render_count";
    }
  | Record<string, never>;

export const AppStatusContext = createContext<AppStatus>(initialState);
export const AppStatusDispatchContext = createContext<
  Dispatch<AppStatusAction>
>(() => {});

export function useAppStatusContext() {
  return useContext(AppStatusContext);
}
export function useAppStatusDispatchContext() {
  return useContext(AppStatusDispatchContext);
}

export function AppStatusProvider({ children }: Children) {
  const [appStatus, dispatch] = useReducer(appStatusReducer, initialAppStatus);

  return (
    <AppStatusContext.Provider value={appStatus}>
      <AppStatusDispatchContext.Provider value={dispatch}>
        {children}
      </AppStatusDispatchContext.Provider>
    </AppStatusContext.Provider>
  );
}

const appStatusReducer = (appStatus: AppStatus, action: AppStatusAction) => {
  const { renderCount } = appStatus;

  switch (action.type) {
    case "incremented_render_count":
      return {
        ...appStatus,
        renderCount: renderCount + 1,
      };

    case "changed_is_auth":
      return {
        ...appStatus,
        isAuth: action.isAuth,
      };

    case "changed_is_loading":
      return {
        ...appStatus,
        isLoading: action.isLoading,
      };

    case "changed_want_to_login":
      return {
        ...appStatus,
        wantToLogin: action.wantToLogin,
      };

    default:
      throw new Error(`No such action: ${action}`);
  }
};

const initialAppStatus: AppStatus = {
  isAuth: Boolean(localStorage.getItem("IS_AUTH")),
  isLoading: false,
  renderCount: 0,
  wantToLogin: false,
};
