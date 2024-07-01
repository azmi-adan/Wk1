#Challenge1.js
# Calculate Student Grade

This JavaScript function prompts the user to input student marks and calculates the corresponding grade based on predefined criteria.

## Functionality

The function performs the following steps:

1. **Prompt User for Input**: 
   - It uses `prompt()` to ask the user to enter the student's marks, expecting a number between 0 and 100.

2. **Input Validation**: 
   - It validates the input to ensure it's a valid number and falls within the specified range (0 to 100). If the input is invalid, it alerts the user to enter a valid number.

3. **Grade Calculation**: 
   - Based on the validated input, the function determines the grade using the following criteria:
     - A (> 79)
     - B (60 to 79)
     - C (50 to 59)
     - D (40 to 49)
     - E (less than 40)

4. **Output**: 
   - It uses `alert()` to display the calculated grade along with the original marks inputted by the user.

## Usage

To use this function:
- Include the `calculateGrade()` function in your JavaScript code.
- Call `calculateGrade()` to prompt the user for input and display the calculated grade.



#challenge2.js

This JavaScript function calculates demerit points for speeding violations based on the excess speed over the speed limit. It follows the rules outlined below:

If the speed is less than the speed limit (70 km/h), it logs “Ok.”
For every 5 km/h above the speed limit, it assigns one demerit point.
If the driver accumulates more than 12 demerit points, it logs “License suspended.”
Usage
Include the calculateDemeritPoints function in your JavaScript code.
Call the function with the speed as an argument.ge2.js
   

   #challenge3.js
   Net Salary Calculator 
What Does This Function Do?
The calculateNetSalary function helps us figure out how much money an individual takes home after all the deductions. 

How Does It Work?
Input Parameters:
basicSalary: This is the main chunk of money you earn (like your monthly salary).
benefits: These are extra perks or allowances you might get (like bonuses or housing allowances).
Calculations:
We add the basicSalary and benefits together to find the total income (called the “gross salary”).
Then we calculate the tax (PAYE) based on the gross salary. The more you earn, the more tax you pay.
Next, we figure out the NHIF deduction (for health insurance) and the NSSF deduction (for social security).
Finally, we subtract all these deductions from the gross salary to get the actual money you take home (the “net salary”).
