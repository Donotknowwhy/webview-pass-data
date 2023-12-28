import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [inputData, setInputData] = useState({
    title: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle sending data to the app
    const dataToSend = JSON.stringify(inputData);
    window.location.href = `AwesomeProject://open-app?data=${encodeURIComponent(
      dataToSend
    )}`;
    // You may modify the URL structure based on how your app expects data
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        name="title"
        value={inputData.title}
        placeholder="Title"
        onChange={handleInputChange}
        style={{ marginBottom: "10px" }}
      />
      <input
        type="text"
        name="message"
        value={inputData.message}
        placeholder="Message"
        onChange={handleInputChange}
        style={{ marginBottom: "10px" }}
      />
      <button onClick={handleSubmit}>Gửi Dữ Liệu</button>
    </div>
  );
}
export default App;

ReactDOM.render(<App />, document.getElementById("root"));
