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
    let salary = prompt("Enter salary");
    //Salary sets to 0 by default
    if (isNaN(salary) || salary === null) {
      salary = 0;
    }
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseInt(salary)
    }

    //Saves information for all Employees entered
    allEmployees.push(employee);
    //This will prompt is the user wants to add another employee
    decision = confirm("Do you want to add another Employee?");

  }
  //Returns the employees array
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
  // TODO: Calculates and display the average salary
  totalSalary = 0;
  for (i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];
    totalSalary += parseInt(currentEmployee.salary);
  }
  let averageSalary = totalSalary / employeesArray.length;
  alert((`There are ${employeesArray.length} employees. The average salary is $ ${averageSalary}`))
  console.log(`The average salary is $ ${averageSalary}`)
  console.log(`There are ${employeesArray.length} employees`)
  return averageSalary;
}

//All the employee's average salary will be displayed and recorded in the Javascript

// TODO: Select and display a random employee
// This will select a random employee
const getRandomEmployee = function (employeesArray) {
  console.log(employeesArray);
  // This will generate a random employee with their information their inputed
  let random = [Math.floor(Math.random() * employeesArray.length)];
  alert(`Congrats to ${employeesArray[random].firstName} ${employeesArray[random].lastName} for being randomly selected.`)
  console.log(getRandomEmployee);

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
