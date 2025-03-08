//#### LAB 5 - OBJECTS ####
//PART 2:  CREATE A BANK CUSTOMER OBJECT
//1. Create the object structure first.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Stretch Goal!

var bank_customer = {
    lastName: "Ghael",
    branchNumber: 1234,
    accountBalance: 500.25,
    interestRate: 1.03,
    makeDeposit: function (amount) {

        bank_customer.accountBalance = bank_customer.accountBalance + amount;
        return ("Thank you, your current balance is now $ " + bank_customer.accountBalance.toFixed(2))


    },
    makeWithdrawal: function (amount) {
        bank_customer.accountBalance = bank_customer.accountBalance - amount;
        return ("Thank you, your current balance is now $ " + bank_customer.accountBalance.toFixed(2))


    },
    addInterest: function () {
        var accInterestRate = bank_customer.interestRate;
        bank_customer.multipleAccounts = false;
        if (bank_customer.multipleAccounts) {
            accInterestRate = accInterestRate + 0.005;
        }
        bank_customer.accountBalance = bank_customer.accountBalance * accInterestRate;
        return ("Thank you, your current balance is now $ " + bank_customer.accountBalance.toFixed(2))


    }
}
console.log("Starting Balance: " + bank_customer.accountBalance.toFixed(2));
console.log(bank_customer.makeDeposit(200));
console.log(bank_customer.makeWithdrawal(75));
console.log(bank_customer.addInterest());
