import useDocumentTitle from "@/hooks/useDocumentTitle";
import Header from "@/components/Header";
import LeftMenu from "@/components/LeftMenu";
import Tiptap from "./components/TipTap";

function App() {
  useDocumentTitle("App");

  return (
    <>
      <Header />
      <LeftMenu />
      <Tiptap />
    </>
  );
}

export default App;
