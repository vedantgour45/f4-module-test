import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Item from "./Components/Item";
import "./style.css";
import { fetchItems } from "./Redux/actions/actionCreate";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="App">
      <h2>TravelMedia.in</h2>
      <div>
        
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/item/:id" element={<Item />}></Route>
      </Routes>
    </div>
  );
}

export default App;
