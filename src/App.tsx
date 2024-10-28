import { AcessFlow } from "pages/accessFlow/acessFlow";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { selectUsers } from "@store/slices/usersSlice";
import { useSelector } from "react-redux";
import { HomePage } from "pages/home";
import { GlobalSection } from "pages/projectData/styles";

function App() {
  const user = useSelector(selectUsers);

  return <>
    {
      user ?

        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/projectData" element={<GlobalSection />} />
          </Routes>
        </BrowserRouter> :

        <AcessFlow />
    }
  </>
}

export default App;
