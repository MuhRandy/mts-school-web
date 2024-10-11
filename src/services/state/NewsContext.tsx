import { createContext, useContext, useEffect, useState } from "react";
import { Children } from "../../utils/type";
import { getNews } from "../GetDataService";
import {
  useAppStatusContext,
  useAppStatusDispatchContext,
} from "./AppStatusContext";

export const NewsContext = createContext<unknown[]>([]);

export function useNewsContext() {
  return useContext(NewsContext);
}

export function NewsProvider({ children }: Children) {
  const { renderCount } = useAppStatusContext();
  const dispatch = useAppStatusDispatchContext();

  function changeIsLoading(newIsloading: boolean) {
    dispatch({
      type: "changed_is_loading",
      isLoading: newIsloading,
    });
  }

  const [news, setNews] = useState<unknown[]>([]);

  useEffect(() => {
    getNews(changeIsLoading, setNews);
  }, [renderCount]);

  return <NewsContext.Provider value={news}>{children}</NewsContext.Provider>;
}
