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

interface TransactionsProviderProps {
    children: React.ReactNode
}

export const TransactionsContext = React.createContext<Transactions[]>([]);

export function TransactionsProvider({children} :TransactionsProviderProps){
    const [transactions, setTransactions] = React.useState<Transactions[]>([])

    React.useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));
    }, []);

    return <TransactionsContext.Provider value={transactions}>
        {children}
    </TransactionsContext.Provider>
}