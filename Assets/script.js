// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
//User input will be the first name, last name and the salary
  let Employee = {
};

//This will prompt for the user to enter their first name
    let firstName = prompt("Employee First Name", "First Name"); 
    Employee.fName = firstName;
    console.log(Employee);
    if(firstName != null || firstName != "") {
    //This will prompt the user for their last name
      let lastName = prompt("Employee Last Name", "Last Name");
      Employee.lName = lastName;
      console.log(Employee);
      if (lastName != null || lastName != "") {
      //This will prompt for their salary
        let salary = prompt("Employee Salary", "Salary");
        Employee.sal = salary;
        console.log(Employee);
        if (salary != null || salary != "") {
          //This will prompt is the user wants to add another employee
          let decision = prompt ("Do you want to add another Employee?");
        }
      }}}

  

  // TODO: Get user input to create and return an array of employee objects
//prompt users for employee first name - store response in variable
//prompts user for employee last name - store response in variable
//prompts users for employee salary - store response in variable

//creates the employee object
//push employee object to employees array
//ask if they want to add a new eomployee
//if yes repeat
//if no return employees array

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {

    // Creating a currentEmployee variable and setting it to the current employee from employeesArray
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");
//Append adds the first name of the Employee into the currentEmployee section
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);
//Append adds the last name of the Employee into the currentEmployee section
    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

//All employees chosen will have their data collected
const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
