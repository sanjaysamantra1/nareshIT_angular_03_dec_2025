let user = {
    firstName: 'Virat',
    lastName: 'Kohli',
    fullName: function () {
        console.log(this.firstName, this.lastName)
    },
    fullName2() {
        console.log('fullname2: ', this.firstName, this.lastName)
    }
}
user.fullName()
user.fullName2()