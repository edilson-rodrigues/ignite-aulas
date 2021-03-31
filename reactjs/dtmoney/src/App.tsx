import {GlobalStyle} from "./styles/global";

import {Header} from "./component/Header";
import {Dashboard} from "./component/Dashboard";
import Modal from "react-modal";
import React from "react";
import {NewTransactionModal} from "./component/NewTransactionModal";
import { TransactionsProvider} from "./TransactionsContext";


Modal.setAppElement('#root');

export function App() {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = React.useState<boolean>(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <TransactionsProvider>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
            <Dashboard/>
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
            <GlobalStyle/>
        </TransactionsProvider>
    );
}

export default App;
