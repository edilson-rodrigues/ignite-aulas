import Modal from "react-modal";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import {
    Container,
    TransactionTypeContainer,
    RadioBox,
} from './styles';
import React from "react";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

enum typeNewTransactionModal{
    withdraw = 'withdraw',
    deposit = 'deposit',
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [type, setType] = React.useState<typeNewTransactionModal>(typeNewTransactionModal.deposit);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="fechar modal"/>
            </button>
            <Container>
                <h2>Cadastrar informações</h2>
                <input
                    type="text"
                    placeholder="Título"
                />
                <input
                    type="number"
                    placeholder="Valor"
                />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={()=>{setType(typeNewTransactionModal.deposit)}}
                        isActive={type === typeNewTransactionModal.deposit}
                        activeColor={typeNewTransactionModal.deposit}
                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={()=>{setType(typeNewTransactionModal.withdraw)}}
                        isActive={type === typeNewTransactionModal.withdraw}
                        activeColor={typeNewTransactionModal.withdraw}
                    >
                        <img src={outcomeImg} alt="Saída"/>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input
                    type="text"
                    placeholder="Categoria"
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}
