import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is BankAggregator?',
      answer: 'BankAggregator is a secure platform that allows you to manage multiple bank accounts from different financial institutions in one place. You can view balances, track transactions, and manage your finances more efficiently.'
    },
    {
      question: 'Is my financial data secure?',
      answer: 'Absolutely. We use bank-level encryption and security measures to protect your data. We never store your banking credentials, and all connections are made through secure, encrypted channels.'
    },
    {
      question: 'How do I add a bank account?',
      answer: 'After logging in, navigate to the Accounts page and click "Create Account". Follow the prompts to link your bank account securely through our platform.'
    },
    {
      question: 'What types of accounts can I manage?',
      answer: 'You can manage various types of accounts including checking accounts, savings accounts, and business accounts from multiple banks.'
    },
    {
      question: 'Is there a fee to use BankAggregator?',
      answer: 'We offer different pricing plans to suit your needs. Please check our Plans page for detailed information about our pricing structure.'
    },
    {
      question: 'Can I make transfers between accounts?',
      answer: 'Yes, you can initiate transfers between your connected accounts. The feature allows you to move money securely within your own accounts.'
    },
    {
      question: 'How often is my account information updated?',
      answer: 'Account information is updated in real-time. You can also manually refresh your accounts at any time to see the latest transactions and balances.'
    },
    {
      question: 'What if I forget my password?',
      answer: 'Click on the "Forgot Password" link on the login page. We\'ll send you a secure link to reset your password via email.'
    },
    {
      question: 'Can I access BankAggregator on mobile?',
      answer: 'Yes, our platform is fully responsive and works seamlessly on mobile devices, tablets, and desktop computers.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach our customer support team through the Contact page. We\'re available 24/7 to assist you with any questions or concerns.'
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about BankAggregator
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Common Questions</CardTitle>
              <CardDescription>Everything you need to know about using our platform</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
              <p className="mb-4 opacity-90">Our support team is here to help</p>
              <a href="/contact" className="inline-block px-6 py-2 bg-background text-foreground rounded-md font-medium hover:bg-background/90 transition-colors">
                Contact Support
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
