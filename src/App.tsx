import { AcessFlow } from "pages/accessFlow/acessFlow";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<AcessFlow />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
