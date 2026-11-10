Access Modifier in TypeScript OOP:

In TypeScript, Access Modifiers control how class properties and methods can be accessed or modified. There are four commonly discussed modifiers:
1. public
2. private
3. protected
4. readonly

1. public
- A public property or method can be accessed from anywhere.
- It can be accessed inside the class, outside the class, and from child classes.
- public is the default access modifier in TypeScript.

Example:
class Student {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public displayName(): void {
        console.log(this.name);
    }
}

const student1 = new Student("Rahim");
console.log(student1.name);
student1.displayName();

Output:
Rahim
Rahim

2. private
- A private property or method can only be accessed inside the class where it is declared.
- It cannot be accessed directly from outside the class.
- It cannot be accessed directly from child classes.
class Student {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public displayInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

const student1 = new Student("Rahim", 15);
console.log(student1.name);
student1.displayInfo();

Output:
Rahim
Name: Rahim
Age: 15

3. protected
- A protected property or method can be accessed inside its own class.
- It can also be accessed inside child (derived) classes.
- It cannot be accessed directly from outside the class.
protected name: string;
{
    constructor(name: string) {
        this.name = name;
    }
}

class Student extends Person {

    public displayName(): void {
        console.log(`Student Name: ${this.name}`);
    }
}

const student1 = new Student("Rahim");
student1.displayName();

Output:
Student Name: Rahim

4. readonly
- A readonly property can be initialized when it is declared or inside the constructor.
- Once initialized, its value cannot be changed.
- It can be accessed from outside the class if its access modifier permits it.
- It is useful when you want to prevent accidental modification of a property.

class Student {
    public readonly studentId: number;
    public name: string;

    constructor(studentId: number, name: string) {
        this.studentId = studentId;
        this.name = name;
    }

    public displayInfo(): void {
        console.log(`ID: ${this.studentId}`);
        console.log(`Name: ${this.name}`);
    }
}

const student1 = new Student(101, "Rahim");
student1.displayInfo();
student1.name = "Karim";

Output:
ID: 101
Name: Rahim

