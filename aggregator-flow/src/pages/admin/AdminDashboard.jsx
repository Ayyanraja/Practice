import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Users, UserCheck, Building2, MapPin } from 'lucide-react';

const AdminDashboard = () => {
  // Mock data - replace with actual API calls
  const stats = {
    totalUsers: 156,
    totalAdmins: 8,
    totalBanks: 3,
    totalBranches: 85
  };

  const statsCards = [
    {
      title: 'Total Users',
      value: stats.totalUsers,
      icon: Users,
      description: 'Active user accounts',
      color: 'text-primary'
    },
    {
      title: 'Total Admins',
      value: stats.totalAdmins,
      icon: UserCheck,
      description: 'Administrator accounts',
      color: 'text-accent'
    },
    {
      title: 'Total Banks',
      value: stats.totalBanks,
      icon: Building2,
      description: 'Registered banks',
      color: 'text-success'
    },
    {
      title: 'Total Branches',
      value: stats.totalBranches,
      icon: MapPin,
      description: 'Bank branches',
      color: 'text-muted-foreground'
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">System overview and statistics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* User Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>User Statistics</CardTitle>
              <CardDescription>Breakdown of user accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="font-medium">Regular Users</span>
                  </div>
                  <span className="text-2xl font-bold">{stats.totalUsers}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <UserCheck className="h-4 w-4 text-accent" />
                    <span className="font-medium">Administrators</span>
                  </div>
                  <span className="text-2xl font-bold">{stats.totalAdmins}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Overview</CardTitle>
              <CardDescription>Banks and branches in the system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-success" />
                    <span className="font-medium">Banks</span>
                  </div>
                  <span className="text-2xl font-bold">{stats.totalBanks}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Branches</span>
                  </div>
                  <span className="text-2xl font-bold">{stats.totalBranches}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
