import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe('Interface', function () {
    it("should support interface", function () {
        const seller: Seller = {
            id: 1,
            name: "Toko ABC",
            nib: "1234567890",
            npwp: "3563457324566"
        };
        console.info(seller);
    });

    it("should support function interface", function () {
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number) => {
            return value1 + value2;
        }

        expect(add(1, 2)).toBe(3);
    });

    it("should support indexable interface", function () {
        interface StringArray {
            [index: number]: string;
        }

        const names: StringArray = ["Jaka", "Kelana", "Umbara"];
        console.info(names);
    });

    it("should support indexable interface for non number index", function () {
        interface StringDictionary {
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            "name": "Jaka",
            "address": "Bandung"
        };

        expect(dictionary["name"]).toBe("Jaka");
        expect(dictionary["address"]).toBe("Bandung");
    });

    it("should support extends interface", function () {
        const employee: Employee = {
            id: "1",
            name: "Jaka",
            division: "IT"
        };

        console.info(employee);

        const manager: Manager = {
            id: "2",
            name: "Kelana",
            division: "IT",
            numberOfEmployees: 10
        };

        console.info(manager);
    }
    );

    it("should support function in interface", function () {
        const person: Person = {
            name: "Jaka",
            sayaHello(name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        console.info(person.sayaHello("Eko"));
    });

    it("should support intersection types", function () {
        interface HasName {
            name: string;
        }

        interface HasId {
            id: string;
        }

        type Domain = HasName & HasId;

        const domain: Domain = {
            id: "1",
            name: "Jaka"
        };

        console.info(domain);
    });

    it("should support type assertions", function () {
        const person: any = {
            name: "Eko",
            age: 20
        };

        const person2 = person as Person;
        console.info(person2);
    });

});