import { AcessFlow } from "pages/accessFlow/acessFlow";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { selectUsers } from "@store/slices/usersSlice";
import { useSelector } from "react-redux";
import { HomePage } from "pages/home";

function App() {
  const user = useSelector(selectUsers);

  return (
    <>
      {user !== null ?
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
          </Routes>
        </BrowserRouter>

        : <AcessFlow />
      }
    </>
  )
}

export default App
