var cl = console.log;
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var addBtn = document.getElementById("addBtn");
//const add = document.getElementById("add")as HTMLElement;  
//const add = document.getElementById("add")!;  
var addition = function (n1, n2) {
    cl(n1 + n2);
};
//nullcheker >> ?
addBtn.addEventListener("click", function () {
    addition(+num1.value, +num2.value);
});
function addition1(n1, n2, showresult, pharse) {
    if (showresult) {
        cl("".concat(pharse, " ").concat(n1 + n2));
    }
    else {
        return "".concat(pharse, " ").concat(n1 + n2);
    }
}
cl(addition1(110, 320, false, "The result is"));
addition1(1000, 3000, true, "The result is");
var person = {
    fname: " jhon",
    lname: "doe",
    age: 33,
    child: {
        fanme: "may",
        lname: "doe",
        age: 5
    }
};
var Personn = {
    fname: "jhon",
    lname: "doe",
    age: 54,
    userRole: [2, "Admin", true] //sequence change false >>[true, 2, "Admin"]
};
cl(Personn);
// Personn.userRole[0] = "admin"
// Personn.userRole[2] = "123";
// Personn.userRole[3] = 55;
//we change the length by using methods
Personn.userRole.push("hello");
Personn.userRole.pop();
Personn.userRole.pop();
cl(Personn);
////////////////////////////Enum//////////////////////////
var Role;
(function (Role) {
    Role["Admin"] = "A";
    Role["Candidate"] = "C";
    Role["Super_Admin"] = "SA"; //2
})(Role || (Role = {}));
;
cl(Role.Admin);
var Person = {
    fname: "jhon",
    lname: "doe",
    age: 54,
    userRole: "SA"
};
cl(Person);
if (Person.userRole === Role.Super_Admin) {
    cl("UserRole is superAdmin ");
}
;
if (Person.userRole === Role.Candidate) {
    cl("UserRole is Candidate");
}
;
