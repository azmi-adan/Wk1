function calculateNetSalary(basicSalary, benefits) {
    // Calculate Gross Salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate PAYE (Payee)
    let payee;
    if (grossSalary <= 24000) {
      payee = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
      payee = 2400 + (grossSalary - 24000) * 0.25;
    } else {
      payee = 5733 + (grossSalary - 32333) * 0.3;
    }
  
    // Calculate NHIF Deduction
    let nhifDeduction;
    if (grossSalary <= 6000) {
      nhifDeduction = 150;
    } else if (grossSalary <= 8000) {
      nhifDeduction = 300;
    } else if (grossSalary <= 12000) {
      nhifDeduction = 400;
    } else if (grossSalary <= 15000) {
      nhifDeduction = 500;
    } else if (grossSalary <= 20000) {
      nhifDeduction = 600;
    } else if (grossSalary <= 25000) {
      nhifDeduction = 750;
    } else if (grossSalary <= 30000) {
      nhifDeduction = 850;
    } else {
      nhifDeduction = 900;
    }
  
    // Calculate NSSF Deduction
    const nssfDeduction = grossSalary * 0.06;
  
    // Calculate Net Salary
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;
    console.log("Gross Salary:", grossSalary);
    console.log("PAYE (Payee):", payee);
    console.log("NHIF Deduction:", nhifDeduction);
    console.log("NSSF Deduction:", nssfDeduction);
    console.log("Net Salary:", netSalary);

  
    return {
      grossSalary,
      payee,
      nhifDeduction,
      nssfDeduction,
      netSalary
    };
  }
  const basicSalary = 50000;
const benefits = 10000;
calculateNetSalary(basicSalary, benefits);