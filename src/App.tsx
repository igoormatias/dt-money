import  React, { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import {NewTransactionModal} from './components/NewTransactionModal'

import { GlobalStyle } from "./styles/global";
import { TransactionsContext } from './TransactionsContext'


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
    <TransactionsContext.Provider value={[]}>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseTransactionModal}
       />
     

    </TransactionsContext.Provider>
  );
}


