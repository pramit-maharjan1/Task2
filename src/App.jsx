import { BrowserRouter, Routes, Route } from "react-router-dom"
import Users from "./pages/Users"
import Posts from "./pages/Posts"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Users />} />

        <Route path="/users/:id" element={<Posts />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App