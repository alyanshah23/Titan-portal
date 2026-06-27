import { Routes, Route, Navigate } from "react-router-dom"

import Login from "./My Components/Login"
import details from "./My Components/details"
function App() {
    return (<>
        {/* <Routes>
             <Route path="/" element={<Navigate to="/Login" />} />
             <Route path="/login" element={<Login />} />

         </Routes>) */}
    <Login/>
    <details/>
</>)
}
export default App