import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { MapPin, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const Branches = () => {
  const [branches, setBranches] = useState([
    { id: 1, name: 'Downtown Branch', bank: 'First National Bank', address: '123 Main St', city: 'New York', phone: '555-0101' },
    { id: 2, name: 'Westside Branch', bank: 'City Trust Bank', address: '456 West Ave', city: 'Los Angeles', phone: '555-0102' },
    { id: 3, name: 'Central Branch', bank: 'Regional Savings Bank', address: '789 Central Blvd', city: 'Chicago', phone: '555-0103' },
  ]);

  const [newBranch, setNewBranch] = useState({ 
    name: '', 
    bank: 'First National Bank', 
    address: '', 
    city: '', 
    phone: '' 
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCreateBranch = (e) => {
    e.preventDefault();
    const branch = {
      id: Date.now(),
      ...newBranch
    };
    setBranches([...branches, branch]);
    setNewBranch({ name: '', bank: 'First National Bank', address: '', city: '', phone: '' });
    setDialogOpen(false);
    toast.success('Branch created successfully!');
  };

  const handleDeleteBranch = (id) => {
    setBranches(branches.filter(branch => branch.id !== id));
    toast.success('Branch deleted successfully!');
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Branch Management</h1>
            <p className="text-muted-foreground">Manage bank branches</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Branch
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Branch</DialogTitle>
                <DialogDescription>Register a new bank branch</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCreateBranch} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="branch-name">Branch Name</Label>
                  <Input
                    id="branch-name"
                    placeholder="e.g., Downtown Branch"
                    value={newBranch.name}
                    onChange={(e) => setNewBranch({ ...newBranch, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="branch-bank">Bank</Label>
                  <Select 
                    value={newBranch.bank} 
                    onValueChange={(value) => setNewBranch({ ...newBranch, bank: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="First National Bank">First National Bank</SelectItem>
                      <SelectItem value="City Trust Bank">City Trust Bank</SelectItem>
                      <SelectItem value="Regional Savings Bank">Regional Savings Bank</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="branch-address">Address</Label>
                  <Input
                    id="branch-address"
                    placeholder="Street address"
                    value={newBranch.address}
                    onChange={(e) => setNewBranch({ ...newBranch, address: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="branch-city">City</Label>
                  <Input
                    id="branch-city"
                    placeholder="City"
                    value={newBranch.city}
                    onChange={(e) => setNewBranch({ ...newBranch, city: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="branch-phone">Phone</Label>
                  <Input
                    id="branch-phone"
                    placeholder="555-0000"
                    value={newBranch.phone}
                    onChange={(e) => setNewBranch({ ...newBranch, phone: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Add Branch</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Branches</CardTitle>
            <CardDescription>Bank branches in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Branch Name</TableHead>
                  <TableHead>Bank</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {branches.map((branch) => (
                  <TableRow key={branch.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="font-medium">{branch.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{branch.bank}</TableCell>
                    <TableCell>{branch.address}</TableCell>
                    <TableCell>{branch.city}</TableCell>
                    <TableCell>{branch.phone}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteBranch(branch.id)}
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

export default Branches;
