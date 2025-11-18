import { Card, CardContent } from '../components/ui/card';
import { Building2, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const team = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', image: null },
    { name: 'Michael Chen', role: 'CTO', image: null },
    { name: 'Emily Rodriguez', role: 'Head of Operations', image: null },
    { name: 'David Kim', role: 'Lead Developer', image: null },
  ];

  const values = [
    {
      icon: Building2,
      title: 'Trust & Security',
      description: 'Your financial security is our top priority with bank-grade encryption'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to providing the best banking aggregation service'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Constantly evolving to meet the needs of modern banking'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-foreground">About BankAggregator</h1>
          <p className="text-xl text-muted-foreground">
            We're revolutionizing how people manage their finances by bringing all your banking needs together in one secure, easy-to-use platform.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-4 w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-gradient-to-br from-primary to-accent h-32 w-32 mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold text-lg text-center">{member.name}</h3>
                <p className="text-muted-foreground text-center">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2020, BankAggregator was born from a simple idea: banking should be simple, secure, and accessible to everyone.
              </p>
              <p>
                We noticed that people were struggling to manage multiple bank accounts across different institutions. Our founders, having experienced this challenge firsthand, set out to create a solution that would make financial management easier for everyone.
              </p>
              <p>
                Today, we serve thousands of customers, helping them take control of their finances with our innovative platform. We continue to grow and evolve, always keeping our customers' needs at the forefront of everything we do.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default About;
