Union (|) and Intersection (&) types in TypeScript:

In TypeScript, Union (|) and Intersection (&) types allow us to combine multiple types to create flexible and reusable type definitions.

1. Union Type (|)
A Union Type allows a variable to accept one of several possible types

Example:
type ID = string | number;

let userId: ID;

userId = 101; 
userId = "USER101"; 

Here, userId can accept either a string or a number.

2. Intersection Type (&)
An Intersection Type combines multiple types into one type.

The resulting object must contain all the required properties from the combined types.

Example:
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    department: string;
};

type EmployeeDetails = Person & Employee;

const employee1: EmployeeDetails = {
    name: "Rahim",
    age: 25,
    employeeId: 101,
    department: "IT"
};

Here, EmployeeDetails must contain all four properties from both Person and Employee.

3. Practical Example: Combining Union (|) and Intersection (&)
Suppose we are developing an employee management system.
- Every employee has personal information.
- Every employee has employment information.
- An employee can have either a permanent or contractual employment type.
We can combine Union and Intersection types to achieve this.

Complete TypeScript Code:
const employee2: EmployeeDetails = {
    name: "Karim",
    age: 30,
    employeeId: 102,
    department: "Accounts",
    employmentType: "Contractual"
};

function displayEmployee(employee: EmployeeDetails): void {
    console.log("Name:", employee.name);
    console.log("Age:", employee.age);
    console.log("Employee ID:", employee.employeeId);
    console.log("Department:", employee.department);
    console.log("Employment Type:", employee.employmentType);
}

displayEmployee(employee1);
console.log("------------------");
displayEmployee(employee2);

Output:
Name: Rahim
Age: 28
Employee ID: 101
Department: IT
Employment Type: Permanent
------------------
Name: Karim
Age: 30
Employee ID: 102
Department: Accounts
Employment Type: Contractual


4. Understanding how they work together
type EmployeeDetails = Person & Employee & {
    employmentType: EmploymentType;
};

It combines two concepts:
Operator	        Purpose	                                    Example
& Intersection	    Requires all combined properties	        Person & Employee
\| Union	        Allows one of multiple possible values	    "Permanent" \| "Contractual"

Quick summary:
- Union (|) means OR — one of the specified types.
- Intersection (&) means AND — all combined types must be satisfied.

Real-world applications:
- Union: Payment methods (Cash, Card, Bank Transfer).
- Intersection: Combining Customer and Address information.
- Both together: Employee management, user authentication, API response structures.