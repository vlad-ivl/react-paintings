import "./App.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Paintings from "./components/Paintings/Paintings";
import dataFromJson from "./paitings.json";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [data, setData] = useState(dataFromJson);

  console.log(data);
  return (
    <div className="App">
      <Header />

      <Paintings setData={setData} data={data} />
      <Footer />
    </div>
  );
}

export default App;
