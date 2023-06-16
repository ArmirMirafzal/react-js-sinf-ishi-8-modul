class Person {
	constructor(public name: string, public birthDate: string) {}

	eat() {
		this.run();
		console.log(`${this.name} is eating...`);
	}
}

class Doctor extends Person {
	treatment() {
		console.log(`${this.name} is treatmenting...`);
	}
	run() {
		console.log(`${this.name} doctor is running...`);
	}
}

class Teacher extends Person {
	teach() {
		console.log(`${this.name} is teaching...`);
	}
	run() {
		console.log(`${this.name} teacher is running...`);
	}
}

const teacher = new Teacher("Arslonbek", "12.12.1212");
teacher.teach();
teacher.eat();

const doctor = new Doctor("armir", "12.12.1212");
doctor.treatment();
doctor.eat();
