import "./App.css";
import Modal from "./components/UseEffect/Useeffect";
import { createRoot } from "react-dom/client";
import { useState } from "react";
const root = createRoot(document.getElementById("root")!);

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div id="modals"></div>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

root.render(<App />);

export default App;
