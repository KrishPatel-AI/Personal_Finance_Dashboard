export type Transaction = {
    id: string;
    type: "Income" | "Expense";
    amount: string;
    method: "Cash" | "Bank Transfer" | "Credit Card" | "Debit Card";
    from: string;
    to: string;
    status: "Completed" | "Pending" | "Failed";
    date: string;
};

// Sample transactions data
export const transactions: Transaction[] = [
    {
        id: "TXN001",
        type: "Income",
        amount: "$1500.00",
        method: "Credit Card",
        from: "Client A",
        to: "My Account",
        status: "Completed",
        date: "2024-01-05",
    },
    {
        id: "TXN002",
        type: "Expense",
        amount: "$500.00",
        method: "Bank Transfer",
        from: "My Account",
        to: "Supplier B",
        status: "Pending",
        date: "2024-01-05",
    },
    {
        id: "TXN001",
        type: "Income",
        amount: "$1500.00",
        method: "Credit Card",
        from: "Client A",
        to: "My Account",
        status: "Completed",
        date: "2024-01-05",
    },
    {
        id: "TXN003",
        type: "Expense",
        amount: "$500.00",
        method: "Bank Transfer",
        from: "My Account",
        to: "Supplier B",
        status: "Pending",
        date: "2024-01-05",
    },
    {
        id: "TXN002",
        type: "Expense",
        amount: "$500.00",
        method: "Bank Transfer",
        from: "My Account",
        to: "Supplier B",
        status: "Pending",
        date: "2024-01-05",
    },
    {
        id: "TXN001",
        type: "Income",
        amount: "$1500.00",
        method: "Credit Card",
        from: "Client A",
        to: "My Account",
        status: "Completed",
        date: "2024-01-05",
    },
    {
        id: "TXN001",
        type: "Income",
        amount: "$1500.00",
        method: "Credit Card",
        from: "Client A",
        to: "My Account",
        status: "Completed",
        date: "2024-01-05",
    },
    {
        id: "TXN002",
        type: "Expense",
        amount: "$500.00",
        method: "Bank Transfer",
        from: "My Account",
        to: "Supplier B",
        status: "Pending",
        date: "2024-01-05",
    },
    {
        id: "TXN001",
        type: "Income",
        amount: "$1500.00",
        method: "Credit Card",
        from: "Client A",
        to: "My Account",
        status: "Completed",
        date: "2024-01-05",
    },
    {
        id: "TXN002",
        type: "Expense",
        amount: "$500.00",
        method: "Bank Transfer",
        from: "My Account",
        to: "Supplier B",
        status: "Pending",
        date: "2024-01-05",
    },
    {
        id: "TXN001",
        type: "Income",
        amount: "$1500.00",
        method: "Credit Card",
        from: "Client A",
        to: "My Account",
        status: "Completed",
        date: "2024-01-05",
    },
    {
        id: "TXN001",
        type: "Income",
        amount: "$1500.00",
        method: "Credit Card",
        from: "Client A",
        to: "My Account",
        status: "Completed",
        date: "2024-01-05",
    },
];

// You can add API functions here
export const fetchTransactions = async (): Promise<Transaction[]> => {
    // In a real application, this would be an API call
    return transactions;
};
