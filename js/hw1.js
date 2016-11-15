function Animal(name, type, word) {
    this.name=name;
    this.type=type;
    this.word=word;
    this.say = function () {
        var result;
        result = this.type + "'s " + "name is - " + this.name + " and it say " +this.word;
        console.log(result);

    }
}

var dog = new Animal("Bethovin", "Dog", "gau");
// console.log (typeof cat);
dog.say();
