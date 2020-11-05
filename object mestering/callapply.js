const normalPerson = {
    firstName: 'shaker',
    lastName: 'hossain',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        // console.log(this);
        this.salary = this.salary - amount -tips - tax;
        return this.salary;
    }
}
// normalPerson.chargeBill(200);

// console.log(normalPerson.salary);

// object use bind to borrow method form another object

const heroPerson = {
    firstName: 'hero',
    lastName: 'hossain',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'tarek',
    lastName: 'hossain',
    salary: 25000
}

// bind

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(2000);
// console.log(heroPerson.salary);

// console.log(normalPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(2000);
// console.log(friendlyPerson.salary);

// call

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 2000, 200, 100);
// console.log(friendlyPerson.salary);

//apply

normalPerson.chargeBill.apply(friendlyPerson, [2000, 200, 100]);
console.log(friendlyPerson.salary);