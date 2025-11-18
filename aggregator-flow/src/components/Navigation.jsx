import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { 
  Home, 
  User, 
  CreditCard, 
  ArrowLeftRight, 
  Building2, 
  MapPin, 
  Users, 
  LogOut,
  Menu,
  X,
  Info,
  HelpCircle,
  FileText,
  Mail
} from 'lucide-react';
import { useState } from 'react';

export const Navigation = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const publicLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/about', label: 'About Us', icon: Info },
    { to: '/faq', label: 'FAQ', icon: HelpCircle },
    { to: '/plans', label: 'Plans', icon: FileText },
    { to: '/contact', label: 'Contact', icon: Mail },
  ];

  const userLinks = [
    { to: '/dashboard', label: 'Dashboard', icon: Home },
    { to: '/accounts', label: 'Accounts', icon: CreditCard },
    { to: '/transactions', label: 'Transactions', icon: ArrowLeftRight },
  ];

  const adminLinks = [
    { to: '/admin/dashboard', label: 'Dashboard', icon: Home },
    { to: '/admin/banks', label: 'Banks', icon: Building2 },
    { to: '/admin/branches', label: 'Branches', icon: MapPin },
    { to: '/admin/users', label: 'Users', icon: Users },
  ];

  const links = user 
    ? [...userLinks, ...(isAdmin ? adminLinks : [])]
    : publicLinks;

  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">BankAggregator</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
            {user ? (
              <div className="flex items-center gap-4 ml-4 border-l pl-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{user.name}</span>
                  {isAdmin && (
                    <span className="px-2 py-1 text-xs font-semibold bg-accent text-accent-foreground rounded">
                      Admin
                    </span>
                  )}
                </div>
                <Button onClick={handleLogout} variant="outline" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button onClick={() => navigate('/login')} size="sm">
                Login
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                );
              })}
              {user ? (
                <>
                  <div className="flex items-center gap-2 pt-4 border-t">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{user.name}</span>
                    {isAdmin && (
                      <span className="px-2 py-1 text-xs font-semibold bg-accent text-accent-foreground rounded">
                        Admin
                      </span>
                    )}
                  </div>
                  <Button onClick={handleLogout} variant="outline" size="sm" className="w-full">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <Button onClick={() => { navigate('/login'); setMobileMenuOpen(false); }} size="sm" className="w-full">
                  Login
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
