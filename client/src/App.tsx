import useDocumentTitle from "@/hooks/useDocumentTitle";

import { HomePage } from "./page";

function App() {
  useDocumentTitle("Home Page");

  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
