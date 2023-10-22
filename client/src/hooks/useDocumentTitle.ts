import { useRef, useEffect } from "react";

function useDocumentTitle(title: string, prevailOnUnmount = false): void {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    };
  }, []);
}

export default useDocumentTitle;
