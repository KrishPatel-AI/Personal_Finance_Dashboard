"use client";
import { useEffect, useState } from "react";
import { TransactionsTable } from "@/components/TransactionsTable";
import { Button } from "@/components/ui/button";
import { fetchTransactions, Transaction } from "@/api/TransactionsAPI";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTransactions();
  }, []);

  if (isLoading) {
    return <div className="p-4">Loading transactions...</div>;
  }

  return (
    <div className="p-4 sm:p-2 lg:p-3">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">View all Transactions</h1>
      
      </div>

      <TransactionsTable data={transactions} />
    </div>
  );
}