class Book{
    constructor(title){
        this.title = title;
        this.published = false;
    }
    publish(){
        this.published = true;
    }
}

const diarioDeUmBanana = new Book("Diario de um Banana")
const metamorfose = new Book("Metamorfose")

diarioDeUmBanana.publish()

console.log(diarioDeUmBanana)
console.log(metamorfose)

console.log(diarioDeUmBanana instanceof Book)