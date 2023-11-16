import useDocumentTitle from "@/hooks/useDocumentTitle";

import { AboutUsPage } from "./page";

function App() {
  useDocumentTitle("Notes - About Us");

  return (
    <>
      <AboutUsPage />
    </>
  );
}

export default App;
