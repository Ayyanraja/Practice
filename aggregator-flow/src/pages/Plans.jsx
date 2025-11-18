import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Check } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      description: 'Perfect for getting started',
      features: [
        'Up to 2 bank accounts',
        'Basic transaction tracking',
        'Monthly reports',
        'Email support',
        'Mobile access'
      ]
    },
    {
      name: 'Pro',
      price: '$9.99/mo',
      description: 'For serious money managers',
      features: [
        'Up to 10 bank accounts',
        'Advanced analytics',
        'Real-time notifications',
        'Priority support',
        'Export data',
        'Custom categories',
        'Budget planning tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For businesses and teams',
      features: [
        'Unlimited bank accounts',
        'Multi-user access',
        'Advanced security features',
        'Dedicated support',
        'API access',
        'Custom integrations',
        'White-label options',
        'SLA guarantee'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Choose Your Plan</h1>
          <p className="text-lg text-muted-foreground">
            Select the perfect plan for your financial management needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-shadow ${
                plan.popular ? 'border-primary shadow-lg scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-16 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">All plans include:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Bank-level security',
                '256-bit encryption',
                'Two-factor authentication',
                'Regular security updates',
                'GDPR compliant',
                'Data backup & recovery'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-success" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Plans;
