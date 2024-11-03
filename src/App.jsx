import { useEffect, useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("#000");
  const [dockBg, setDockBg] = useState("white");

  const handleChangeColor = (value) => {
    setColor(value);
  };

  useEffect(() => {
    if (color === "white") {
      setDockBg("#f2f2f2");
    } else {
      setDockBg("white");
    }
  }, [color]);

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center items-center bottom-12 inset-x-0 px-2">
        <div
          className="flex flex-wrap justify-center items-center gap-3 shadow-3xl px-6 py-4 rounded-3xl duration-200"
          style={{ backgroundColor: dockBg }}
        >
          <Button btnValue="red" handleChangeColor={handleChangeColor}></Button>
          <Button
            btnValue="green"
            handleChangeColor={handleChangeColor}
          ></Button>
          <Button
            btnValue="blue"
            handleChangeColor={handleChangeColor}
          ></Button>
          <Button
            btnValue="olive"
            handleChangeColor={handleChangeColor}
          ></Button>
          <Button
            btnValue="gray"
            handleChangeColor={handleChangeColor}
          ></Button>
          <Button
            btnValue="yellow"
            handleChangeColor={handleChangeColor}
            textColor="text-black"
          ></Button>
          <Button
            btnValue="pink"
            handleChangeColor={handleChangeColor}
            textColor="text-black"
          ></Button>
          <Button
            btnValue="purple"
            handleChangeColor={handleChangeColor}
          ></Button>
          <Button
            btnValue="lavender"
            handleChangeColor={handleChangeColor}
            textColor="text-black"
          ></Button>
          <Button
            btnValue="white"
            handleChangeColor={handleChangeColor}
            textColor="text-black"
          ></Button>
          <Button
            btnValue="black"
            handleChangeColor={handleChangeColor}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
