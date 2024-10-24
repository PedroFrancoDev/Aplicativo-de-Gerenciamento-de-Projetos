import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/accessFlow/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
