import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { CreditCard, ArrowLeftRight, TrendingUp, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Total Balance',
      value: '$45,231.89',
      icon: DollarSign,
      trend: '+20.1% from last month',
      color: 'text-success'
    },
    {
      title: 'Active Accounts',
      value: '3',
      icon: CreditCard,
      trend: '2 checking, 1 savings',
      color: 'text-primary'
    },
    {
      title: 'Transactions',
      value: '142',
      icon: ArrowLeftRight,
      trend: '+12 this week',
      color: 'text-accent'
    },
    {
      title: 'Monthly Growth',
      value: '+12.5%',
      icon: TrendingUp,
      trend: 'Above average',
      color: 'text-success'
    }
  ];

  const recentTransactions = [
    { id: 1, description: 'Grocery Store', amount: -125.50, date: '2024-01-15', type: 'debit' },
    { id: 2, description: 'Salary Deposit', amount: 3500.00, date: '2024-01-14', type: 'credit' },
    { id: 3, description: 'Electric Bill', amount: -85.20, date: '2024-01-13', type: 'debit' },
    { id: 4, description: 'Online Transfer', amount: -200.00, date: '2024-01-12', type: 'debit' },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Welcome back, {user?.name}!</h1>
          <p className="text-muted-foreground">Here's an overview of your accounts</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.trend}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest account activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                  <span className={`font-semibold ${transaction.type === 'credit' ? 'text-success' : 'text-foreground'}`}>
                    {transaction.type === 'credit' ? '+' : ''}{transaction.amount.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
