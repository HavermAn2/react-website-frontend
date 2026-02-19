import { useState } from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import "./App.css";
import MusicSection from "./components/MusicSection/MusicSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ArticleSection from "./components/Article&Updates_Section/Article&Updates_Section";
import GoodsSection from "./components/GoodsSection/GoodsSection";
import Footer from "./components/Footer/Footer";
import SpecialEdition from "./components/GoodsSection/SpecialEdition";
import Modal from "./components/Modal/Modal";
import DialogContent from "./components/Modal/DialogContent";
import Success from "./components/Modal/Success";
function App() {
  const [index, setIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);
  function handleCloseDialog() {
    setIsOpen(false);
    setIsSent(false);
  }
  return (
    <>
      <Header />
      <HeroSection />
      <MusicSection />
      <AboutSection />
      <ArticleSection idx={index} handleSetIdx={setIndex} />
      <GoodsSection onSelected={setSelectedCard} isOpen={setIsOpen} />
      <Footer />
      <Modal isOpen={isOpen} onClose={handleCloseDialog}>
        {isSent ? (
          <Success />
        ) : (
          <DialogContent
            card={selectedCard}
            onHandleSendData={setIsSent}
            onHandleModalOpen={setIsOpen}
          />
        )}
      </Modal>
    </>
  );
}

export default App;
