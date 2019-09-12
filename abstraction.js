// to reduce code duplication
// hides certain details and only shows the essential features
// lack of abstraction leads to a problem with maintainability

function Employee(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    let monthlyBonus = 1000;

    // this should not be exposed
    let calculateFinalSalary = function() {
        let finalSalary = baseSalary + monthlyBonus;
        console.log('Final Salary: ' + finalSalary);
    };
    this.getEmpDetails = function() {
        console.log('Name : ' + this.name + ' Age : ' + this.age);
        calculateFinalSalary();
    };
}

let emp1 = new Employee('John', 30, 2000);
emp1.getEmpDetails();