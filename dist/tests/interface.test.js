describe('Interface', function () {
    it("should support interface", function () {
        const seller = {
            id: 1,
            name: "Toko ABC",
            nib: "1234567890",
            npwp: "3563457324566"
        };
        console.info(seller);
    });
    it("should support function interface", function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(1, 2)).toBe(3);
    });
    it("should support indexable interface", function () {
        const names = ["Jaka", "Kelana", "Umbara"];
        console.info(names);
    });
    it("should support indexable interface for non number index", function () {
        const dictionary = {
            "name": "Jaka",
            "address": "Bandung"
        };
        expect(dictionary["name"]).toBe("Jaka");
        expect(dictionary["address"]).toBe("Bandung");
    });
    it("should support extends interface", function () {
        const employee = {
            id: "1",
            name: "Jaka",
            division: "IT"
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Kelana",
            division: "IT",
            numberOfEmployees: 10
        };
        console.info(manager);
    });
    it("should support function in interface", function () {
        const person = {
            name: "Jaka",
            sayaHello(name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayaHello("Eko"));
    });
    it("should support intersection types", function () {
        const domain = {
            id: "1",
            name: "Jaka"
        };
        console.info(domain);
    });
});
export {};
