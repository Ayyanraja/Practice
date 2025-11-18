import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { CreditCard, Plus, XCircle } from 'lucide-react';
import { toast } from 'sonner';

const Accounts = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, name: 'Main Checking', type: 'checking', balance: 15420.50, accountNumber: '****1234', status: 'active' },
    { id: 2, name: 'Savings Account', type: 'savings', balance: 28500.00, accountNumber: '****5678', status: 'active' },
    { id: 3, name: 'Business Account', type: 'checking', balance: 1311.39, accountNumber: '****9012', status: 'active' },
  ]);

  const [newAccount, setNewAccount] = useState({ name: '', type: 'checking', initialBalance: '' });
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const account = {
      id: Date.now(),
      name: newAccount.name,
      type: newAccount.type,
      balance: parseFloat(newAccount.initialBalance) || 0,
      accountNumber: '****' + Math.floor(1000 + Math.random() * 9000),
      status: 'active'
    };
    setAccounts([...accounts, account]);
    setNewAccount({ name: '', type: 'checking', initialBalance: '' });
    setDialogOpen(false);
    toast.success('Account created successfully!');
  };

  const handleCloseAccount = (id) => {
    setAccounts(accounts.filter(acc => acc.id !== id));
    toast.success('Account closed successfully!');
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Accounts</h1>
            <p className="text-muted-foreground">Manage your bank accounts</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Account
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Account</DialogTitle>
                <DialogDescription>Add a new bank account to your profile</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCreateAccount} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="account-name">Account Name</Label>
                  <Input
                    id="account-name"
                    placeholder="e.g., Emergency Fund"
                    value={newAccount.name}
                    onChange={(e) => setNewAccount({ ...newAccount, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account-type">Account Type</Label>
                  <Select value={newAccount.type} onValueChange={(value) => setNewAccount({ ...newAccount, type: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="checking">Checking</SelectItem>
                      <SelectItem value="savings">Savings</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="initial-balance">Initial Balance</Label>
                  <Input
                    id="initial-balance"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={newAccount.initialBalance}
                    onChange={(e) => setNewAccount({ ...newAccount, initialBalance: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full">Create Account</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accounts.map((account) => (
            <Card key={account.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{account.name}</CardTitle>
                      <CardDescription className="capitalize">{account.type}</CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCloseAccount(account.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <XCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Balance</p>
                    <p className="text-2xl font-bold">${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Account Number</p>
                    <p className="font-mono">{account.accountNumber}</p>
                  </div>
                  <div className="pt-2">
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                      account.status === 'active' ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'
                    }`}>
                      {account.status}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accounts;
