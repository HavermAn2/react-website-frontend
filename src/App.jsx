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

function App() {
  const [index, setIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  function handleCloseDialog() {
    setIsOpen(false);
  }
  return (
    <>
      <Header />
      <HeroSection />
      <MusicSection />
      <AboutSection />
      <ArticleSection idx={index} handleSetIdx={setIndex} />
      <GoodsSection onSelected={setSelectedCard} isOpen={setIsOpen} />
      {/* <SpecialEdition
        imgUrl="/Frame 39.png"
        h1="Violin & Harp Duo"
        h2="An Enchanting Collaboration"
      /> */}
      <Footer />
      <Modal isOpen={isOpen} onClose={handleCloseDialog}>
        {isOpen && <DialogContent card={selectedCard} />}
      </Modal>
    </>
  );
}

export default App;
