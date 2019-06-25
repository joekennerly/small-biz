// Top part just represents a db
// Skip to bottom to see the it appended to dom

const employees = [
  {
    id: 1,
    name: "Jim",
    dep_id: 2,
    comp_id: 1
  },
  {
    id: 2,
    name: "Jon",
    dep_id: 1,
    comp_id: 1
  },
  {
    id: 3,
    name: "Jan",
    dep_id: 1,
    comp_id: 2
  },
  {
    id: 4,
    name: "Jil",
    dep_id: 1,
    comp_id: 2
  },
  {
    id: 5,
    name: "Joe",
    dep_id: 2,
    comp_id: 1
  }
]

const departments = [
  {
    id: 1,
    name: "Tech"
  },
  {
    id: 2,
    name: "Others"
  }
]

const computers = [
  {
    id: 1,
    model: "Macbook Pro"
  },
  {
    id: 2,
    model: "Windows Computer"
  }
]

// database obj pulling in all three arrays as values
const employeeDatabase = {
  employees: employees,
  departments: departments,
  computers: computers
}

// Make container for html elements
let container = document.createElement("div")
// Add elements to container

// Loop over employees
employeeDatabase.employees.forEach(employee => {
  // create div elements for each employee + comp + department
  let card = document.createElement('div')
  container.appendChild(card)

  // matches the fk id from empoyee with the computer obj with corresponding pk id
  // returns one obj
  let employeeComputer = employeeDatabase.computers.find(computer => {
    return computer.id === employee.comp_id
  })

  // matches the fk id from empoyee with the department obj with corresponding pk id
  // returns one obj
  let employeeDepartment = employeeDatabase.departments.find(department => {
    return department.id === employee.dep_id
  })

  // create html which take the value from employee obj
  let person = document.createElement('h1')
  person.textContent = employee.name
  card.appendChild(person)

  // create html with value from department obj
  let department = document.createElement('p')
  department.textContent = `Department: ${employeeDepartment.name}`
  card.appendChild(department)
  
  // create html with value from computer obj
  let computer = document.createElement('p')
  computer.textContent = `Computer: ${employeeComputer.model}`
  card.appendChild(computer)
})

// Append container of elements to <body>
document.querySelector("body").appendChild(container)