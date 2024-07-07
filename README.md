<h2>Challenge 1: Student Grade Generator (Toy Problem)</h2>

To solve the problem of generating grades based on student marks, I followed below steps:

<ol>
<li>Prompt for User Input: Use prompt() methods to get input from the user for student marks.</li>
<li>Convert Input to Number: Ensure the input is converted to a number so I can compare it.
<li>Conditional Checks: Based on the value of the input:</li>
<ul>
<li>Assign "A" if the mark is greater than 79.</li>
<li>Assign "B" if the mark is between 60 and 79 (inclusive).</li>
<li>Assign "C" if the mark is between 50 and 59 (inclusive).</li>
<li>Assign "D" if the mark is between 40 and 49 (inclusive).</li>
<li>Assign "E" if the mark is less than 40.</li>
</ul>
<li>Output the Grade: Display the corresponding grade based on the input.

</ol>

`Functions used`

<ol>
<li>
generateStudentGrade(); </li>
</ol>

`Explanation:`

<ol>
<li>Prompt: prompt() is used to get input from the user.</li>
<li>Conversion: parseFloat() converts the input string to a number.</li>
<li>Conditional Statements: Based on the value of marks, the appropriate grade (A, B, C, D, E) is assigned using if-else statements.</li>
<li>Output: The grade is displayed using console.log().</li>
</ol>
<p>This function prompts the user to enter student marks, evaluate the mark against predefined ranges, and then output the corresponding grade based on the conditions specified. Adjust the prompt and input handling as per your specific environment or application requirements.</p>

<h2>Challenge 2: Speed Detector (Toy Problem)</h2>

`Explanation:`

1. Function checkSpeed(speed):

<ul>
<li>Takes speed as input, which represents the speed of the car.
<li>Defines speedLimit as 70 km/h, which is the legal speed limit.
<li>Defines kmPerPoint as 5 km/h, which indicates the speed increment per demerit point.
</ul>

2. Condition Checks:
<ul>
<li>Checks if speed is less than speedLimit + kmPerPoint. If true, prints "Ok" indicating the speed is within the limit.
<li>If speed exceeds speedLimit, calculates points based on how many km/h over the limit (Math.floor((speed - speedLimit) / kmPerPoint)).
<li>Checks if points are 12 or more. If true, prints "License suspended". Otherwise, prints the total demerit points.
</ul>

3. Test Cases:

<li>checkSpeed(83); checks for a speed of 83 km/h and prints "Points: 2".
<li>checkSpeed(74); checks for a speed of 74 km/h and prints "Ok".

<h2>Challenge 3: Net Salary Calculator</h2>

`Overview`

This program calculates an individual's net salary based on their basic salary and benefits. It computes deductions for income tax (PAYE), health insurance (NHIF), and retirement savings (NSSF) to determine the final take-home pay.

`Inputs`

<li>Basic Salary: The core income amount for the individual.
<li>Benefits: Additional earnings or perks that contribute to total income.

`Calculations`

<li>Gross Salary:

<li>Sum of Basic Salary and Benefits.
<li>PAYE (Pay As You Earn):

<p>Calculate income tax based on progressive tax brackets using the annualized Gross Salary.</p>
<li><li>NHIF (National Hospital Insurance Fund):

Determine health insurance deduction based on the Gross Salary.
<li>NSSF (National Social Security Fund):

Compute retirement fund contribution based on the Gross Salary.
<li>Net Salary:

Calculate remaining income after deducting PAYE, NHIF, and NSSF from Gross Salary.

`Output`

The program returns:

<li>Gross Salary: Total income before deductions.
<li>PAYE: Income tax deducted based on government tax brackets.
<li>NHIF: Health insurance deduction based on salary.
<li>NSSF: Retirement savings deducted according to social security rates.
<li>Net Salary: Final take-home pay after all deductions.

