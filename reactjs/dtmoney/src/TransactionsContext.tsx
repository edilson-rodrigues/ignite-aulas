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
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const defaultValue = {} as TransactionsContextData;
export const TransactionsContext = React.createContext<TransactionsContextData>(defaultValue);

export function TransactionsProvider({children} :TransactionsProviderProps){
    const [transactions, setTransactions] = React.useState<Transactions[]>([])

    React.useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));
    }, []);

    async function createTransaction(transactionInput: TransactionInput){
       const response = await api.post('/transactions', {
           ...transactionInput,
           createAt: new Date(),
       } );
       const {transaction} = response.data;

       setTransactions([
           ...transactions,
           transaction,
       ]);
    }

    return <TransactionsContext.Provider value={{
        transactions,
        createTransaction,
    }}>
        {children}
    </TransactionsContext.Provider>
}