//Expense class
class Expenditure {
    constructor(expenditure, expense) {
        this.expenditure = expenditure;
        this.expense = expense
    }
}

//UI Class: Handle UI tasks
class UI {
    static displayExpenditure() {
        const StoredExpenditure = [
            {
                expenditure: "Non-academic Staff Salary",
                expense: 120000.00
            },
            {
                expenditure: "Academic Staff Salary",
                expense: 400000.00
            },
            {
                expenditure: "External Examinations",
                expense: 250000.00
            }
        ];

        const expenditure = StoredExpenditure;

        //Loop through all the books in array
        expenditure.forEach((exp) => UI.addExpToList(exp));
    }

    static addExpToList(exp) {
        const expList = document.querySelector('#expense-list');

        const tableRow = document.createElement('tr');

        tableRow.innerHTML = `
            <td>${exp.expenditure}</td>
            <td>${exp.expense}</td>
            <td><a href="#" class="btn btn-danger btn-sm-delete">X</a></td>
        `;

        expList.appendChild(tableRow);
    }
}

//Store Class: Handles Storage

//Events: Display Expenditure
document.addEventListener('DOMContentLoaded', UI.displayExpenditure);

//Event: Add Expenditure

//Event: Delete Expenditure
