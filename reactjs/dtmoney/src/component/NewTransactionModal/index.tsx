import React, {FormEvent} from "react";
import Modal from "react-modal";

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import {
    Container,
    TransactionTypeContainer,
    RadioBox,
} from './styles';
import {useTransactions} from "../../hooks/useTransactions";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

enum typeNewTransactionModal {
    withdraw = 'withdraw',
    deposit = 'deposit',
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const {createTransaction} = useTransactions();

    const [title, setTitle] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    const [category, setCategory] = React.useState('');
    const [type, setType] = React.useState<typeNewTransactionModal>(typeNewTransactionModal.deposit);

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type,
        });

        setTitle('');
        setAmount(0);
        setCategory('');
        setType(typeNewTransactionModal.deposit);

        onRequestClose();
    }

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
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar informações</h2>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value as string)}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => {
                            setType(typeNewTransactionModal.deposit)
                        }}
                        isActive={type === typeNewTransactionModal.deposit}
                        activeColor={typeNewTransactionModal.deposit}
                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => {
                            setType(typeNewTransactionModal.withdraw)
                        }}
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
                    value={category}
                    onChange={event => setCategory(event.target.value as string)}
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}
