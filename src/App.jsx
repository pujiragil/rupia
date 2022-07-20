import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./pages"
import SignIn from "./pages/signin"
import SignUp from "./pages/signup"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="signin" element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
