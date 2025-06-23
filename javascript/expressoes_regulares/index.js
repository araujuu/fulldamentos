function PhoneNumber(PhoneNumberString){
    const fixedString = PhoneNumberString.replace(/[\sa-zA-Z]/g, "")
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
}   

console.log(new PhoneNumber('+55 (21) 9 9688-8997'))
console.log(new PhoneNumber('+1 (55) as555-999-8888'))