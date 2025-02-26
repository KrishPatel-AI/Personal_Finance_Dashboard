export type Transaction = {
    Id: string;
    Type: "Income" | "Expense";
    MoneyType: "Cash" | "Digital";
    Method?:
    | "UPI"
    | "Net Banking"
    | "Bank Transfer"
    | "Credit Card"
    | "Debit Card"
    | "Gift Card"
    | "E-Rupee";
    Category:
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
    | "CusTom";
    Amount: string;
    Date: string;
    Status: "Pending" | "Failed" | "Completed";
    From: string;
    To: string;
    Description?: string;
};

export const transactions: Transaction[] = [
   
        {
            Id: "TXN001",
            Type: "Income",
            MoneyType: "Digital",
            Method: "Credit Card",
            Category: "CusTom",
            Amount: "$1500.00",
            Date: "2024-01-05",
            Status: "Completed",
            From: "Client A",
            To: "My Account",
            Description: "Freelance payment"
        },
        {
            Id: "TXN002",
            Type: "Expense",
            MoneyType: "Digital",
            Method: "Debit Card",
            Category: "Food",
            Amount: "$45.50",
            Date: "2024-01-06",
            Status: "Completed",
            From: "My Account",
            To: "Restaurant XYZ",
            Description: "Dinner with family"
        },
        {
            Id: "TXN003",
            Type: "Expense",
            MoneyType: "Digital",
            Method: "UPI",
            Category: "Fuel",
            Amount: "$60.00",
            Date: "2024-01-07",
            Status: "Completed",
            From: "My Account",
            To: "Shell Gas Station",
            Description: "Weekly fuel refill"
        },
        {
            Id: "TXN004",
            Type: "Income",
            MoneyType: "Digital",
            Method: "Bank Transfer",
            Category: "CusTom",
            Amount: "$3000.00",
            Date: "2024-01-08",
            Status: "Completed",
            From: "ABC Corp",
            To: "My Account",
            Description: "Monthly salary"
        },
        {
            Id: "TXN005",
            Type: "Expense",
            MoneyType: "Cash",
            Category: "Salon",
            Amount: "$35.00",
            Date: "2024-01-09",
            Status: "Completed",
            From: "My Account",
            To: "Style Studio",
            Description: "Haircut"
        },
        {
            Id: "TXN006",
            Type: "Expense",
            MoneyType: "Digital",
            Method: "Credit Card",
            Category: "Shopping",
            Amount: "$250.00",
            Date: "2024-01-10",
            Status: "Failed",
            From: "My Account",
            To: "Amazon",
            Description: "Electronics purchase"
        },
        {
            Id: "TXN007",
            Type: "Income",
            MoneyType: "Digital",
            Method: "UPI",
            Category: "CusTom",
            Amount: "$75.00",
            Date: "2024-01-11",
            Status: "Pending",
            From: "Friend",
            To: "My Account",
            Description: "Debt repayment"
        },
        {
            Id: "TXN008",
            Type: "Expense",
            MoneyType: "Digital",
            Method: "Net Banking",
            Category: "Education",
            Amount: "$399.00",
            Date: "2024-01-12",
            Status: "Completed",
            From: "My Account",
            To: "Online Course Platform",
            Description: "Web development course"
        },
        {
            Id: "TXN009",
            Type: "Expense",
            MoneyType: "Digital",
            Method: "Debit Card",
            Category: "Lifestyle",
            Amount: "$89.99",
            Date: "2024-01-13",
            Status: "Completed",
            From: "My Account",
            To: "Gym",
            Description: "Monthly membership"
        },
        {
            Id: "TXN010",
            Type: "Income",
            MoneyType: "Digital",
            Method: "Bank Transfer",
            Category: "CusTom",
            Amount: "$500.00",
            Date: "2024-01-14",
            Status: "Completed",
            From: "Rental Property",
            To: "My Account",
            Description: "Monthly rent"
        },
        {
            Id: "TXN011",
            Type: "Expense",
            MoneyType: "Digital",
            Method: "UPI",
            Category: "Relationship",
            Amount: "$150.00",
            Date: "2024-01-15",
            Status: "Completed",
            From: "My Account",
            To: "Gift Shop",
            Description: "Anniversary gift"
        },
        {
            Id: "TXN012",
            Type: "Expense",
            MoneyType: "Digital",
            Method: "Credit Card",
            Category: "Personal Care",
            Amount: "$45.00",
            Date: "2024-01-16",
            Status: "Pending",
            From: "My Account",
            To: "Pharmacy",
            Description: "Medicines"
        },
        {
            Id: "TXN013",
            Type: "Expense",
            MoneyType: "Cash",
            Category: "Waste",
            Amount: "$20.00",
            Date: "2024-01-17",
            Status: "Completed",
            From: "My Account",
            To: "Local STore",
            Description: "Impulse purchase"
        },
        {
            Id: "TXN014",
            Type: "Income",
            MoneyType: "Digital",
            Method: "E-Rupee",
            Category: "CusTom",
            Amount: "$250.00",
            Date: "2024-01-18",
            Status: "Completed",
            From: "SIde Project",
            To: "My Account",
            Description: "Consulting fee"
        },
        {
            Id: "TXN015",
            Type: "Expense",
            MoneyType: "Digital",
            Method: "Gift Card",
            Category: "Cloth",
            Amount: "$199.99",
            Date: "2024-01-19",
            Status: "Failed",
            From: "My Account",
            To: "Fashion STore",
            Description: "Winter clothes"
        },
        {
            Id: "TXN016",
            Type: "Expense",
            MoneyType: "Digital",
            Method: "UPI",
            Category: "Travel",
            Amount: "$300.00",
            Date: "2024-01-20",
            Status: "Completed",
            From: "My Account",
            To: "Airlines",
            Description: "Flight tickets"
        },
        {
            Id: "TXN017",
            Type: "Income",
            MoneyType: "Digital",
            Method: "Bank Transfer",
            Category: "CusTom",
            Amount: "$2000.00",
            Date: "2024-01-21",
            Status: "Completed",
            From: "Investment",
            To: "My Account",
            Description: "STock divIdends"
        },
        {
            Id: "TXN018",
            Type: "Expense",
            MoneyType: "Digital",
            Method: "Credit Card",
            Category: "Other",
            Amount: "$75.50",
            Date: "2024-01-22",
            Status: "Completed",
            From: "My Account",
            To: "Hardware STore",
            Description: "Home repairs"
        },
        {
            Id: "TXN019",
            Type: "Expense",
            MoneyType: "Digital",
            Method: "Debit Card",
            Category: "Food",
            Amount: "$125.00",
            Date: "2024-01-23",
            Status: "Completed",
            From: "My Account",
            To: "Grocery STore",
            Description: "Weekly groceries"
        },
        {
            Id: "TXN020",
            Type: "Income",
            MoneyType: "Cash",
            Category: "CusTom",
            Amount: "$100.00",
            Date: "2024-01-24",
            Status: "Completed",
            From: "Garage Sale",
            To: "My Account",
            Description: "Sold old items"
        },
        {
            Id: "TXN021",
            Type: "Expense",
            MoneyType: "Digital",
            Method: "UPI",
            Category: "Education",
            Amount: "$50.00",
            Date: "2024-01-25",
            Status: "Pending",
            From: "My Account",
            To: "Book STore",
            Description: "Study materials"
        },
        {
            Id: "TXN022",
            Type: "Income",
            MoneyType: "Digital",
            Method: "Net Banking",
            Category: "CusTom",
            Amount: "$800.00",
            Date: "2024-01-26",
            Status: "Completed",
            From: "Client B",
            To: "My Account",
            Description: "Project payment"
        },
        {
            Id: "TXN023",
            Type: "Expense",
            MoneyType: "Digital",
            Method: "Credit Card",
            Category: "Shopping",
            Amount: "$449.99",
            Date: "2024-01-27",
            Status: "Failed",
            From: "My Account",
            To: "Electronics STore",
            Description: "New headphones"
        },
        {
            Id: "TXN024",
            Type: "Expense",
            MoneyType: "Digital",
            Method: "UPI",
            Category: "Personal Care",
            Amount: "$30.00",
            Date: "2024-01-28",
            Status: "Completed",
            From: "My Account",
            To: "Spa Center",
            Description: "Massage therapy"
        },
        {
            Id: "TXN025",
            Type: "Income",
            MoneyType: "Digital",
            Method: "Bank Transfer",
            Category: "CusTom",
            Amount: "$1200.00",
            Date: "2024-01-29",
            Status: "Completed",
            From: "Rental Property",
            To: "My Account",
            Description: "Property income"
        },
        {
            Id: "TXN026",
            Type: "Expense",
            MoneyType: "Cash",
            Category: "Lifestyle",
            Amount: "$15.00",
            Date: "2024-01-30",
            Status: "Completed",
            From: "My Account",
            To: "Coffee Shop",
            Description: "Morning coffee"
        },
        {
            Id: "TXN027",
            Type: "Expense",
            MoneyType: "Digital",
            Method: "Debit Card",
            Category: "Travel",
            Amount: "$150.00",
            Date: "2024-01-31",
            Status: "Completed",
            From: "My Account",
            To: "Hotel",
            Description: "Weekend stay"
        },
        {
            Id: "TXN028",
            Type: "Income",
            MoneyType: "Digital",
            Method: "UPI",
            Category: "CusTom",
            Amount: "$350.00",
            Date: "2024-02-01",
            Status: "Pending",
            From: "Client C",
            To: "My Account",
            Description: "Design work"
        },
        {
            Id: "TXN029",
            Type: "Expense",
            MoneyType: "Digital",
            Method: "Credit Card",
            Category: "Relationship",
            Amount: "$85.00",
            Date: "2024-02-02",
            Status: "Completed",
            From: "My Account",
            To: "Restaurant",
            Description: "Date night"
        },
        {
            Id: "TXN030",
            Type: "Income",
            MoneyType: "Digital",
            Method: "Bank Transfer",
            Category: "CusTom",
            Amount: "$4000.00",
            Date: "2024-02-03",
            Status: "Completed",
            From: "Employer",
            To: "My Account",
            Description: "Monthly salary"
        }
];

export const fetchTransactions = async (): Promise<Transaction[]> => {
    return transactions;
};
