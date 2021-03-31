import {GlobalStyle} from "./styles/global";

import {Header} from "./component/Header";
import {Dashboard} from "./component/Dashboard";
import Modal from "react-modal";
import {useState} from "react";
import {NewTransactionModal} from "./component/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState<boolean>(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
            <Dashboard/>
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
            <GlobalStyle/>
        </>
    );
}

export default App;
