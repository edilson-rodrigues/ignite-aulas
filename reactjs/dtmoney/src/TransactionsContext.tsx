import {api} from "./services/api";
import React from "react";

interface Transactions {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createAt: string,
}

/*interface TransactionInput {
    title: string,
    type: string,
    category: string,
    amount: number,
}*/

type TransactionInput = Omit<Transactions, 'id' | 'createAt'>;
// type TransactionInput = Pick<Transactions, 'title' | 'type' | 'category' | 'amount'>;

interface TransactionsProviderProps {
    children: React.ReactNode
}

interface TransactionsContextData {
    transactions: Transactions[],
    createTransaction: (transaction: TransactionInput) => void;
}

const defaultValue = {} as TransactionsContextData;
export const TransactionsContext = React.createContext<TransactionsContextData>(defaultValue);

export function TransactionsProvider({children} :TransactionsProviderProps){
    const [transactions, setTransactions] = React.useState<Transactions[]>([])

    React.useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));
    }, []);

    function createTransaction(transaction: TransactionInput){
        api.post('/transactions', transaction);
    }

    return <TransactionsContext.Provider value={{
        transactions,
        createTransaction,
    }}>
        {children}
    </TransactionsContext.Provider>
}