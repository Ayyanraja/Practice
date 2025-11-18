import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { ArrowDownCircle, ArrowUpCircle, Plus } from 'lucide-react';
import { toast } from 'sonner';

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'deposit', amount: 3500.00, description: 'Salary Deposit', account: 'Main Checking', date: '2024-01-15', status: 'completed' },
    { id: 2, type: 'withdraw', amount: 125.50, description: 'ATM Withdrawal', account: 'Main Checking', date: '2024-01-14', status: 'completed' },
    { id: 3, type: 'deposit', amount: 500.00, description: 'Transfer In', account: 'Savings Account', date: '2024-01-13', status: 'completed' },
    { id: 4, type: 'withdraw', amount: 85.20, description: 'Online Payment', account: 'Main Checking', date: '2024-01-12', status: 'completed' },
  ]);

  const [newTransaction, setNewTransaction] = useState({ 
    type: 'deposit', 
    amount: '', 
    description: '', 
    account: 'Main Checking' 
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCreateTransaction = (e) => {
    e.preventDefault();
    const transaction = {
      id: Date.now(),
      type: newTransaction.type,
      amount: parseFloat(newTransaction.amount),
      description: newTransaction.description,
      account: newTransaction.account,
      date: new Date().toISOString().split('T')[0],
      status: 'completed'
    };
    setTransactions([transaction, ...transactions]);
    setNewTransaction({ type: 'deposit', amount: '', description: '', account: 'Main Checking' });
    setDialogOpen(false);
    toast.success(`${newTransaction.type === 'deposit' ? 'Deposit' : 'Withdrawal'} completed successfully!`);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Transactions</h1>
            <p className="text-muted-foreground">View and manage your transactions</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Transaction
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New Transaction</DialogTitle>
                <DialogDescription>Record a deposit or withdrawal</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCreateTransaction} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="transaction-type">Transaction Type</Label>
                  <Select 
                    value={newTransaction.type} 
                    onValueChange={(value) => setNewTransaction({ ...newTransaction, type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deposit">Deposit</SelectItem>
                      <SelectItem value="withdraw">Withdrawal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="transaction-account">Account</Label>
                  <Select 
                    value={newTransaction.account} 
                    onValueChange={(value) => setNewTransaction({ ...newTransaction, account: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Main Checking">Main Checking</SelectItem>
                      <SelectItem value="Savings Account">Savings Account</SelectItem>
                      <SelectItem value="Business Account">Business Account</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="transaction-amount">Amount</Label>
                  <Input
                    id="transaction-amount"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={newTransaction.amount}
                    onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="transaction-description">Description</Label>
                  <Input
                    id="transaction-description"
                    placeholder="e.g., Grocery shopping"
                    value={newTransaction.description}
                    onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Submit Transaction</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>All your account transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Account</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {transaction.type === 'deposit' ? (
                          <ArrowDownCircle className="h-4 w-4 text-success" />
                        ) : (
                          <ArrowUpCircle className="h-4 w-4 text-destructive" />
                        )}
                        <span className="capitalize">{transaction.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.account}</TableCell>
                    <TableCell className={`text-right font-semibold ${
                      transaction.type === 'deposit' ? 'text-success' : 'text-destructive'
                    }`}>
                      {transaction.type === 'deposit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-success/10 text-success">
                        {transaction.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Transactions;
