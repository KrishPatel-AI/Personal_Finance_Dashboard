"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { nanoid } from "nanoid"; // For generating unique IDs

const page = () => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [transactionType, setTransactionType] = useState<keyof typeof transactionTypes>("expense");
  const [formData, setFormData] = useState({
    category: "",
    amount: "",
    description: "",
    paymentMethod: "",
  });
  const [transactions, setTransactions] = useState<Array<{
    id: string;
    type: string;
    category: string;
    amount: number;
    description: string;
    paymentMethod: string;
    date: string;
  }>>([]); // Transaction history

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Add new transaction with unique ID
    const newTransaction = {
      id: nanoid(),
      type: transactionType,
      ...formData,
      date,
      amount: Number(formData.amount),
    };
    setTransactions([newTransaction, ...transactions]);

    // Reset form
    setFormData({
      category: "",
      amount: "",
      description: "",
      paymentMethod: "",
    });
    setDate(new Date().toISOString().split("T")[0]);
    setTransactionType("expense");
  };

  const transactionTypes = {
    expense: ["Food", "Cloth", "Salon", "Fuel", "Travel", "Shopping", "Others"],
    income: ["Salary", "Freelance", "Return","Mutual Funds","Others"],
  };

  const formatDate = (dateString: string | number | Date) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="min-h-screen p-4 md:p-6 lg:p-8">
        <div className="max-w-[95%] w-full mx-auto md:max-w-2xl lg:max-w-3xl space-y-6">
          {/* Add Transaction Form */}
          <Card>
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-left">
                Add Transaction
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Transaction Type Selection */}
                  <div className="space-y-2">
                    <Label>Transaction Type</Label>
                    <select
                      value={transactionType}
                      onChange={(e) => setTransactionType(e.target.value as keyof typeof transactionTypes)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="expense">Expense</option>
                      <option value="income">Income</option>
                    </select>
                  </div>

                  {/* Category Selection */}
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select category</option>
                      {transactionTypes[transactionType].map((category) => (
                        <option key={category} value={category.toLowerCase()}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Amount Input */}
                  <div className="space-y-2">
                    <Label>Amount (₹)</Label>
                    <Input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      placeholder="Enter amount"
                    />
                  </div>

                  {/* Date Input */}
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-2">
                    <Label>Payment Method</Label>
                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select payment method</option>
                      <option value="cash">Cash</option>
                      <option value="digital">Digital</option>
                      <option value="card">Card</option>
                    </select>
                  </div>
                </div>

                {/* Description Input */}
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter description"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button type="submit" className="w-full py-2">
                    Add Transaction
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Transactions List */}
          {transactions.length > 0 && (
            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-left">
                  Recent Transactions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 md:p-3">ID</th>
                        <th className="text-left p-2 md:p-3">Date</th>
                        <th className="text-left p-2 md:p-3">Type</th>
                        <th className="text-left p-2 md:p-3">Category</th>
                        <th className="text-right p-2 md:p-3">Amount</th>
                        <th className="text-left p-2 md:p-3">Payment</th>
                        <th className="text-left p-2 md:p-3">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr key={transaction.id} className="border-b">
                          <td className="p-2 md:p-3 text-sm md:text-base">{transaction.id}</td>
                          <td className="p-2 md:p-3 text-sm md:text-base">{formatDate(transaction.date)}</td>
                          <td className="p-2 md:p-3 text-sm md:text-base capitalize">{transaction.type}</td>
                          <td className="p-2 md:p-3 text-sm md:text-base capitalize">{transaction.category}</td>
                          <td className="p-2 md:p-3 text-sm md:text-base text-right">₹{transaction.amount.toLocaleString("en-IN")}</td>
                          <td className="p-2 md:p-3 text-sm md:text-base capitalize">{transaction.paymentMethod}</td>
                          <td className="p-2 md:p-3 text-sm md:text-base">{transaction.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
