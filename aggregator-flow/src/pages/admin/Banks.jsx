import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Building2, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const Banks = () => {
  const [banks, setBanks] = useState([
    { id: 1, name: 'First National Bank', code: 'FNB001', swiftCode: 'FNBUS33', branches: 45 },
    { id: 2, name: 'City Trust Bank', code: 'CTB002', swiftCode: 'CTBUS33', branches: 28 },
    { id: 3, name: 'Regional Savings Bank', code: 'RSB003', swiftCode: 'RSBUS33', branches: 12 },
  ]);

  const [newBank, setNewBank] = useState({ name: '', code: '', swiftCode: '' });
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCreateBank = (e) => {
    e.preventDefault();
    const bank = {
      id: Date.now(),
      ...newBank,
      branches: 0
    };
    setBanks([...banks, bank]);
    setNewBank({ name: '', code: '', swiftCode: '' });
    setDialogOpen(false);
    toast.success('Bank created successfully!');
  };

  const handleDeleteBank = (id) => {
    setBanks(banks.filter(bank => bank.id !== id));
    toast.success('Bank deleted successfully!');
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Bank Management</h1>
            <p className="text-muted-foreground">Manage registered banks in the system</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Bank
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Bank</DialogTitle>
                <DialogDescription>Register a new bank in the system</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCreateBank} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="bank-name">Bank Name</Label>
                  <Input
                    id="bank-name"
                    placeholder="e.g., First National Bank"
                    value={newBank.name}
                    onChange={(e) => setNewBank({ ...newBank, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bank-code">Bank Code</Label>
                  <Input
                    id="bank-code"
                    placeholder="e.g., FNB001"
                    value={newBank.code}
                    onChange={(e) => setNewBank({ ...newBank, code: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="swift-code">SWIFT Code</Label>
                  <Input
                    id="swift-code"
                    placeholder="e.g., FNBUS33"
                    value={newBank.swiftCode}
                    onChange={(e) => setNewBank({ ...newBank, swiftCode: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Add Bank</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Registered Banks</CardTitle>
            <CardDescription>All banks in the aggregator system</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Bank Name</TableHead>
                  <TableHead>Bank Code</TableHead>
                  <TableHead>SWIFT Code</TableHead>
                  <TableHead>Branches</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {banks.map((bank) => (
                  <TableRow key={bank.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-primary" />
                        <span className="font-medium">{bank.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono">{bank.code}</TableCell>
                    <TableCell className="font-mono">{bank.swiftCode}</TableCell>
                    <TableCell>{bank.branches}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteBank(bank.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
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

export default Banks;
