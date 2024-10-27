import { AcessFlow } from "pages/accessFlow/acessFlow";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { selectUsers } from "@store/slices/usersSlice";
import { useSelector } from "react-redux";
import { HomePage } from "pages/home";
import { FullLoading } from "components/fullLoading";
import { selectFullLoading } from '@store/slices/fullLoading';

function App() {
  const user = useSelector(selectUsers);
  const isLoading = useSelector(selectFullLoading);

  return <>
    {isLoading && <FullLoading />}
    {
      user ? (

        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
          </Routes>
        </BrowserRouter>) :

        (<AcessFlow />)
    }
  </>
}

export default App;
