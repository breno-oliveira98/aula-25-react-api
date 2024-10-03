import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "../pages/LoginPage"
import HomePage from "../pages/HomePage"
import { createContext } from "react";

const CarrinhoContext = createContext()
function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login-page" element={<LoginPage />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes