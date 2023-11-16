import useDocumentTitle from "@/hooks/useDocumentTitle";

import { RegisterPage } from "./page";

function App() {
  useDocumentTitle("App");

  return (
    <>
      <RegisterPage />
    </>
  );
}

export default App;
