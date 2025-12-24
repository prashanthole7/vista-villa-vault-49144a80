import { useState, useMemo } from "react";
import { Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { formatPrice } from "@/data/properties";

interface EMICalculatorProps {
  propertyPrice: number;
}

export function EMICalculator({ propertyPrice }: EMICalculatorProps) {
  const [loanPercentage, setLoanPercentage] = useState(80);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const calculations = useMemo(() => {
    const loanAmount = (propertyPrice * loanPercentage) / 100;
    const downPayment = propertyPrice - loanAmount;
    
    const monthlyRate = interestRate / 12 / 100;
    const numberOfPayments = tenure * 12;
    
    const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / 
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalAmount = emi * numberOfPayments;
    const totalInterest = totalAmount - loanAmount;
    
    return {
      loanAmount,
      downPayment,
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
    };
  }, [propertyPrice, loanPercentage, interestRate, tenure]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Calculator className="h-5 w-5 text-primary" />
          EMI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Loan Amount Slider */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Loan Amount ({loanPercentage}%)</span>
            <span className="font-medium">{formatPrice(calculations.loanAmount)}</span>
          </div>
          <Slider
            value={[loanPercentage]}
            onValueChange={([value]) => setLoanPercentage(value)}
            min={50}
            max={90}
            step={5}
            className="cursor-pointer"
          />
        </div>

        {/* Interest Rate Slider */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Interest Rate</span>
            <span className="font-medium">{interestRate}% p.a.</span>
          </div>
          <Slider
            value={[interestRate]}
            onValueChange={([value]) => setInterestRate(value)}
            min={6}
            max={12}
            step={0.1}
            className="cursor-pointer"
          />
        </div>

        {/* Tenure Slider */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Loan Tenure</span>
            <span className="font-medium">{tenure} Years</span>
          </div>
          <Slider
            value={[tenure]}
            onValueChange={([value]) => setTenure(value)}
            min={5}
            max={30}
            step={1}
            className="cursor-pointer"
          />
        </div>

        {/* Results */}
        <div className="pt-4 border-t space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Down Payment</span>
            <span className="font-medium">{formatPrice(calculations.downPayment)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Interest</span>
            <span className="font-medium">{formatPrice(calculations.totalInterest)}</span>
          </div>
          <div className="flex justify-between items-center pt-3 border-t">
            <span className="font-medium">Monthly EMI</span>
            <span className="text-2xl font-bold text-primary">
              {formatPrice(calculations.emi)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
