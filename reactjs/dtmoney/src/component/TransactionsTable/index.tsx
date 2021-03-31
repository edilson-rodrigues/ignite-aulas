import {Container} from "./styles";
import React, {useEffect} from "react";
import {api} from "../../services/api";

interface Transactions {
    id: number,
    title: string,
    type: 'deposit' | 'withdraw',
    category: string,
    amount: number,
    createAt: string,
};


export function TransactionsTable() {
    const [transactions, setTransactions] = React.useState<Transactions[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));
    }, []);
    return (
        <Container>
            <table>
                <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
                </thead>

                <tbody>
                {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            }).format(transaction.amount)}
                        </td>
                        <td>{transaction.category}</td>
                        <td>
                            {new Intl.DateTimeFormat('pt-BR').format(
                                new Date(transaction.createAt),
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Container>
    )
}
