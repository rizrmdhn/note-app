import useDocumentTitle from "@/hooks/useDocumentTitle";

import { LoginPage } from "./page";

function App() {
  useDocumentTitle("App");

  return (
    <>
      <LoginPage />
    </>
  );
}

export default App;
