export type Transaction = {
    id: string;
    type: "Income" | "Expense";
    moneyType: "Cash" | "Digital";
    method?:
    | "UPI"
    | "Net Banking"
    | "Bank Transfer"
    | "Credit Card"
    | "Debit Card"
    | "Gift Card"
    | "E-Rupee";
    category:
    | "Food"
    | "Fuel"
    | "Salon"
    | "Education"
    | "Lifestyle"
    | "Relationship"
    | "Personal Care"
    | "Waste"
    | "Cloth"
    | "Travel"
    | "Shopping"
    | "Other"
    | "Custom";
    amount: string;
    date: string;
    status: "Pending" | "Failed" | "Completed";
    from: string;
    to: string;
    description?: string;
};

export const transactions: Transaction[] = [
   
        {
            id: "TXN001",
            type: "Income",
            moneyType: "Digital",
            method: "Credit Card",
            category: "Custom",
            amount: "$1500.00",
            date: "2024-01-05",
            status: "Completed",
            from: "Client A",
            to: "My Account",
            description: "Freelance payment"
        },
        {
            id: "TXN002",
            type: "Expense",
            moneyType: "Digital",
            method: "Debit Card",
            category: "Food",
            amount: "$45.50",
            date: "2024-01-06",
            status: "Completed",
            from: "My Account",
            to: "Restaurant XYZ",
            description: "Dinner with family"
        },
        {
            id: "TXN003",
            type: "Expense",
            moneyType: "Digital",
            method: "UPI",
            category: "Fuel",
            amount: "$60.00",
            date: "2024-01-07",
            status: "Completed",
            from: "My Account",
            to: "Shell Gas Station",
            description: "Weekly fuel refill"
        },
        {
            id: "TXN004",
            type: "Income",
            moneyType: "Digital",
            method: "Bank Transfer",
            category: "Custom",
            amount: "$3000.00",
            date: "2024-01-08",
            status: "Completed",
            from: "ABC Corp",
            to: "My Account",
            description: "Monthly salary"
        },
        {
            id: "TXN005",
            type: "Expense",
            moneyType: "Cash",
            category: "Salon",
            amount: "$35.00",
            date: "2024-01-09",
            status: "Completed",
            from: "My Account",
            to: "Style Studio",
            description: "Haircut"
        },
        {
            id: "TXN006",
            type: "Expense",
            moneyType: "Digital",
            method: "Credit Card",
            category: "Shopping",
            amount: "$250.00",
            date: "2024-01-10",
            status: "Failed",
            from: "My Account",
            to: "Amazon",
            description: "Electronics purchase"
        },
        {
            id: "TXN007",
            type: "Income",
            moneyType: "Digital",
            method: "UPI",
            category: "Custom",
            amount: "$75.00",
            date: "2024-01-11",
            status: "Pending",
            from: "Friend",
            to: "My Account",
            description: "Debt repayment"
        },
        {
            id: "TXN008",
            type: "Expense",
            moneyType: "Digital",
            method: "Net Banking",
            category: "Education",
            amount: "$399.00",
            date: "2024-01-12",
            status: "Completed",
            from: "My Account",
            to: "Online Course Platform",
            description: "Web development course"
        },
        {
            id: "TXN009",
            type: "Expense",
            moneyType: "Digital",
            method: "Debit Card",
            category: "Lifestyle",
            amount: "$89.99",
            date: "2024-01-13",
            status: "Completed",
            from: "My Account",
            to: "Gym",
            description: "Monthly membership"
        },
        {
            id: "TXN010",
            type: "Income",
            moneyType: "Digital",
            method: "Bank Transfer",
            category: "Custom",
            amount: "$500.00",
            date: "2024-01-14",
            status: "Completed",
            from: "Rental Property",
            to: "My Account",
            description: "Monthly rent"
        },
        {
            id: "TXN011",
            type: "Expense",
            moneyType: "Digital",
            method: "UPI",
            category: "Relationship",
            amount: "$150.00",
            date: "2024-01-15",
            status: "Completed",
            from: "My Account",
            to: "Gift Shop",
            description: "Anniversary gift"
        },
        {
            id: "TXN012",
            type: "Expense",
            moneyType: "Digital",
            method: "Credit Card",
            category: "Personal Care",
            amount: "$45.00",
            date: "2024-01-16",
            status: "Pending",
            from: "My Account",
            to: "Pharmacy",
            description: "Medicines"
        },
        {
            id: "TXN013",
            type: "Expense",
            moneyType: "Cash",
            category: "Waste",
            amount: "$20.00",
            date: "2024-01-17",
            status: "Completed",
            from: "My Account",
            to: "Local Store",
            description: "Impulse purchase"
        },
        {
            id: "TXN014",
            type: "Income",
            moneyType: "Digital",
            method: "E-Rupee",
            category: "Custom",
            amount: "$250.00",
            date: "2024-01-18",
            status: "Completed",
            from: "Side Project",
            to: "My Account",
            description: "Consulting fee"
        },
        {
            id: "TXN015",
            type: "Expense",
            moneyType: "Digital",
            method: "Gift Card",
            category: "Cloth",
            amount: "$199.99",
            date: "2024-01-19",
            status: "Failed",
            from: "My Account",
            to: "Fashion Store",
            description: "Winter clothes"
        },
        {
            id: "TXN016",
            type: "Expense",
            moneyType: "Digital",
            method: "UPI",
            category: "Travel",
            amount: "$300.00",
            date: "2024-01-20",
            status: "Completed",
            from: "My Account",
            to: "Airlines",
            description: "Flight tickets"
        },
        {
            id: "TXN017",
            type: "Income",
            moneyType: "Digital",
            method: "Bank Transfer",
            category: "Custom",
            amount: "$2000.00",
            date: "2024-01-21",
            status: "Completed",
            from: "Investment",
            to: "My Account",
            description: "Stock dividends"
        },
        {
            id: "TXN018",
            type: "Expense",
            moneyType: "Digital",
            method: "Credit Card",
            category: "Other",
            amount: "$75.50",
            date: "2024-01-22",
            status: "Completed",
            from: "My Account",
            to: "Hardware Store",
            description: "Home repairs"
        },
        {
            id: "TXN019",
            type: "Expense",
            moneyType: "Digital",
            method: "Debit Card",
            category: "Food",
            amount: "$125.00",
            date: "2024-01-23",
            status: "Completed",
            from: "My Account",
            to: "Grocery Store",
            description: "Weekly groceries"
        },
        {
            id: "TXN020",
            type: "Income",
            moneyType: "Cash",
            category: "Custom",
            amount: "$100.00",
            date: "2024-01-24",
            status: "Completed",
            from: "Garage Sale",
            to: "My Account",
            description: "Sold old items"
        },
        {
            id: "TXN021",
            type: "Expense",
            moneyType: "Digital",
            method: "UPI",
            category: "Education",
            amount: "$50.00",
            date: "2024-01-25",
            status: "Pending",
            from: "My Account",
            to: "Book Store",
            description: "Study materials"
        },
        {
            id: "TXN022",
            type: "Income",
            moneyType: "Digital",
            method: "Net Banking",
            category: "Custom",
            amount: "$800.00",
            date: "2024-01-26",
            status: "Completed",
            from: "Client B",
            to: "My Account",
            description: "Project payment"
        },
        {
            id: "TXN023",
            type: "Expense",
            moneyType: "Digital",
            method: "Credit Card",
            category: "Shopping",
            amount: "$449.99",
            date: "2024-01-27",
            status: "Failed",
            from: "My Account",
            to: "Electronics Store",
            description: "New headphones"
        },
        {
            id: "TXN024",
            type: "Expense",
            moneyType: "Digital",
            method: "UPI",
            category: "Personal Care",
            amount: "$30.00",
            date: "2024-01-28",
            status: "Completed",
            from: "My Account",
            to: "Spa Center",
            description: "Massage therapy"
        },
        {
            id: "TXN025",
            type: "Income",
            moneyType: "Digital",
            method: "Bank Transfer",
            category: "Custom",
            amount: "$1200.00",
            date: "2024-01-29",
            status: "Completed",
            from: "Rental Property",
            to: "My Account",
            description: "Property income"
        },
        {
            id: "TXN026",
            type: "Expense",
            moneyType: "Cash",
            category: "Lifestyle",
            amount: "$15.00",
            date: "2024-01-30",
            status: "Completed",
            from: "My Account",
            to: "Coffee Shop",
            description: "Morning coffee"
        },
        {
            id: "TXN027",
            type: "Expense",
            moneyType: "Digital",
            method: "Debit Card",
            category: "Travel",
            amount: "$150.00",
            date: "2024-01-31",
            status: "Completed",
            from: "My Account",
            to: "Hotel",
            description: "Weekend stay"
        },
        {
            id: "TXN028",
            type: "Income",
            moneyType: "Digital",
            method: "UPI",
            category: "Custom",
            amount: "$350.00",
            date: "2024-02-01",
            status: "Pending",
            from: "Client C",
            to: "My Account",
            description: "Design work"
        },
        {
            id: "TXN029",
            type: "Expense",
            moneyType: "Digital",
            method: "Credit Card",
            category: "Relationship",
            amount: "$85.00",
            date: "2024-02-02",
            status: "Completed",
            from: "My Account",
            to: "Restaurant",
            description: "Date night"
        },
        {
            id: "TXN030",
            type: "Income",
            moneyType: "Digital",
            method: "Bank Transfer",
            category: "Custom",
            amount: "$4000.00",
            date: "2024-02-03",
            status: "Completed",
            from: "Employer",
            to: "My Account",
            description: "Monthly salary"
        }
];

export const fetchTransactions = async (): Promise<Transaction[]> => {
    return transactions;
};
