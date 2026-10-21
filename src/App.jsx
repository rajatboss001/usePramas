import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Blogdetails from "./pages/Blogdetails"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='/blog/:slug' element={<Blogdetails />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
