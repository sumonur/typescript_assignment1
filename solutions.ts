// function multiplyValue(value: number, multiplier?: number): number {
//     if (multiplier === 0) {
//         return 0;
//     }
//     if (!multiplier)
//         return value * 2;
//     else
//         return value * multiplier; 
// }

// function processInput(input: string | number | boolean): string | number{
//     if (typeof input === 'string') {
//         return input.toLowerCase().trim();
//     } else if (typeof input === 'number') {
//         return input * 10;
//     } else if (typeof input === 'boolean') {
//         return input ? "Active" : "Inactive";
//     } else {
//         return 'Invalid input type';
//     }
// }

// function formatCoordinate(locationCoordinate: readonly [number, number, string]): string {
//   const [latitude, longitude, locationName] = locationCoordinate;
//   return `Location: ${locationName} (${latitude}, ${longitude})`;
// }

// function concatenateArrays<T>(...arrays: T[][]): T[] {
//   const result: T[] = [];
//   for (const arr of arrays) {
//     for (const item of arr) {
//       result.push(item);
//     }
//   }
//   return result;
// }

// interface Course {
//     title: string;
//     students: number;
//     isPublished: boolean;
// }

// function getPopularCourses(courses: Course[], minStudents: number): Course[] {
//   return courses.filter(
//     (course) => course.isPublished && course.students >= minStudents
//   );
// }

// function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
//   return items.map((item) => item[key]);
// }

// class Employee {
//   protected name: string;
//   private baseSalary: number;

//   constructor(name: string, baseSalary: number) {
//     this.name = name;
//     this.baseSalary = baseSalary;
//   }

//   public getDetails(): string {
//     return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
//   }
// }

// class Manager extends Employee {
//   private department: string;

//   constructor(name: string, baseSalary: number, department: string) {
//     super(name, baseSalary);
//     this.department = department;
//   }

//   public getRoleInfo(): string {
//     return `Manager of ${this.department}: ${this.name}`;
//   }
// }

async function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}

async function main(): Promise<string> {
  try {
    const result: string = await validateAgeAsync(25);
    return result;
  } catch (error) {
    return (error as Error).message;
  }
}

const result = main();

//console.log(await validateAgeAsync(20))