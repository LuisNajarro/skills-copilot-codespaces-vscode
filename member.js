function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS', 'PHP', 'WordPress'];
    var member = {
        firstName: 'John',
        lastName: 'Doe',
        age: 26,
        skills: skills,
        calculateNumbers: function(var1, var2) {
            return var1 + var2;
        }
    };
    console.log(member);
    console.log(member.skills);
    console.log(member.calculateNumbers(10, 5));
}