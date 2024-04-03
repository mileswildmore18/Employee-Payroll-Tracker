// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  const allEmployees = [];
  let decision = true;
  while (decision) {
    //User input will be the first name, last name and the salary
    const firstName = prompt("Enter First Name");
    const lastName = prompt("Enter Last Name");
    const Salary = prompt("Enter salary");
    let Employee = {
      firstName: firstName,
      lastName: lastName,
      salary: Salary
    };

    allEmployees.push(Employee);
    //This will prompt is the user wants to add another employee
    decision = window.confirm("Do you want to add another Employee?");
    if (decision = true) {

    }
    console.log(`decision: ${decision}`);
    console.log(Employee);
  }

  return allEmployees;
}






// TODO: Get user input to create and return an array of employee objects
//prompt users for employee first name - store response in variable
//prompts user for employee last name - store response in variable
//prompts users for employee salary - store response in variable

//creates the employee object
//push employee object to employees array
//ask if they want to add a new employee
//if yes repeat
//if no return employees array

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  function calculateAverage(salaries) {
    var total = 0;
    for (var i = 0; i < salaries.length; i++) {
      total += salaries[i];
    }
    var average = displayAverage(salaries);
    alert("Average salary: " + average.toFixed(2)); //This will display average with two decimal places
  }
}
//All the employee's average salary will be displayed and recorded in the Javascript
displayAverageSalary();

// TODO: Select and display a random employee
// This will select a random employee
const getRandomEmployee = function (employeesArray) {
  console.log(employeesArray);
  // This will generate a random employee with their information their inputed
  var random = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(random);

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

//All employees chosen will have their data collected
const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
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
