import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./page/Home"
import { Contact } from "./page/Contact"
import { Works } from "./page/Works"
import { NotFound } from "./page/NotFound"
import { NavBar } from "./component/NavBar"
import "./css/App.css";

const routerBaseName = process.env.PUBLIC_URL;

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element = {<Home />} />
                    <Route path="/works" element = {<Works />} />
                    <Route path="/contact" element = {<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;