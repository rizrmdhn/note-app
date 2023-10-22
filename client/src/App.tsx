import useDocumentTitle from "@/hooks/useDocumentTitle";
import Header from "@/components/header";
import LeftMenu from "@/components/LeftMenu";

function App() {
  useDocumentTitle("App");
  return (
    <>
      <Header />
      <LeftMenu />
    </>
  );
}

export default App;
