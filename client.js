var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// console.log(employees);

// console.log(employees[0].employeeNumber);

function compensationCalculator(employee) {
    console.log('employee log inside of compensationCalculator', employee);
    
    var employeeCompensation = {};
    // add name to employeeCompensation
    employeeCompensation.name = employee.name;

    // add bonusPercentage to employeeCompensation
    employeeCompensation.bonusPercentage = bonusPercentageCalculator(employee);

    // add totalCompensation to employeeCompensation

    // add totalBonus to employeeCompensation

    return employeeCompensation;
}

function bonusPercentageCalculator(employee) {
    var bonusPercentage;

    if (employee.reviewRating == 5) {
        bonusPercentage = .1;
    } else if (employee.reviewRating == 4) {
        bonusPercentage = .06;
    } else if (employee.reviewRating == 3) {
        bonusPercentage = .04;
    } else if (employee.reviewRating <= 2) {
        bonusPercentage = 0;
    }

    return bonusPercentage;
}

console.log(compensationCalculator(atticus));
console.log(compensationCalculator(jem));

