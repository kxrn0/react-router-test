import Home from "./Home";
import Products from "./Products";
import About from "./About";

import { Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <nav>
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
        </div>
    );
}

export default App;
