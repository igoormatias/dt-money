import React, { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";


Modal.setAppElement('#root');
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);

  }
  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);

  }
  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}>
        <h2>Nova transação</h2>
      </Modal>

    </>
  );
}


