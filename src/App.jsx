import { Routes, Route, Navigate } from "react-router-dom"

import Login from "./My Components/login"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/Login" />} />
            <Route path="/login" element={<Login />} />

        </Routes>)
}
export default App