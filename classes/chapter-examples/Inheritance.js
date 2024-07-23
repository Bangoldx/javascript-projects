class Felidae {
	constructor() {
		this.claws = "retractable";
	}
}

class Panthera extends Felidae {
	constructor() {
    super();
		this.roar = "loud";
	}
}

class Tiger extends Panthera {
	constructor(name,age,weight) {
    super();
		this.hasStripes = "true";
		this.name = name;
		this.age = age;
		this.weight = weight;
	}
}

let tigger = new Tiger("Tigger", 11, 245);

console.log(tigger);
