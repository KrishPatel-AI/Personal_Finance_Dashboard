"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Transaction, fetchTransactions } from "@/api/TransactionsAPI";
import { TransactionsTable } from "@/components/TransactionsTable";
import AddTransactionForm from "@/components/AddTransactionForm";
import { Plus } from 'lucide-react';

interface VisibleColumns {
  Date: boolean;
  Id: boolean;
  Type: boolean;
  From: boolean;
  To: boolean;
  Amount: boolean;
  Status: boolean;
  Method: boolean;
  MoneyType: boolean;
  Category: boolean;
  Description: boolean;
}

export default function TransactionsPage() {
  // State Management
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleColumns, setVisibleColumns] = useState<VisibleColumns>({
    Date: true,
    Id: true,
    Type: true,
    From: true,
    To: true,
    Amount: true,
    Status: true,
    Method: true,
    MoneyType: true,
    Category: true,
    Description: true,
  });

  const pageSize = 10;

  // Data Fetching
  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
        setFilteredTransactions(data);
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTransactions();
  }, []);

  // Handlers
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = transactions.filter((transaction) =>
      Object.values(transaction)
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    setFilteredTransactions(filtered);
    setCurrentPage(1);
  };

  const toggleColumn = (column: keyof VisibleColumns) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  if (isLoading) {
    return <div className="p-4">Loading transactions...</div>;
  }

  // Pagination
  const totalPages = Math.ceil(filteredTransactions.length / pageSize);
  const currentPageData = filteredTransactions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 p-4 sm:p-2 lg:p-4">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">View all Transactions</h1>
        </div>
       
        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 items-start">
          <Input
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="max-w-md"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">Filter Columns</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              {Object.keys(visibleColumns).map((column) => (
                <DropdownMenuItem
                  key={column}
                  className="flex items-center p-2"
                  onSelect={(e) => {
                    e.preventDefault();
                    toggleColumn(column as keyof VisibleColumns);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={visibleColumns[column as keyof VisibleColumns]}
                      onCheckedChange={() =>
                        toggleColumn(column as keyof VisibleColumns)
                      }
                    />
                    <span className="text-sm">
                      {column.charAt(0).toUpperCase() + column.slice(1)}
                    </span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex flex-wrap gap-4 items-center flex-end">
          <Button onClick={() => setIsDialogOpen(true)} ><Plus/> Transaction</Button>
        </div>
        </div>
      </div>

      <TransactionsTable
        data={currentPageData}
        visibleColumns={visibleColumns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add Transaction</DialogTitle>
          </DialogHeader>
          <AddTransactionForm
            onClose={() => setIsDialogOpen(false)}
            onAddTransaction={() => {
              throw new Error("Function not implemented.");
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
