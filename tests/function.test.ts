describe('Function', function () {
    it("should support function", function () {
        function sayaHello(name: string): string {
            return `Hello ${name}`;
        }
        expect(sayaHello("Rudi")).toBe("Hello Rudi");

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }
        printHello("Rudi");
    });

    it("should support default value", function () {
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Rudi")).toBe("Hello Rudi");
    });

    it("should support rest parameter", function () {
        function sum(...values: number[]): number {
            let total = 0;
            for (let value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    }
    );

    it("should support optional parameter", function () {
        function sayHello(firstName: string, lastName?: string): string {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            } else {
                return `Hello ${firstName}`;
            }

        }
        expect(sayHello("Jaka")).toBe("Hello Jaka");
        expect(sayHello("Jaka", "Kelana")).toBe("Hello Jaka Kelana");
    });

    it("should support overloading function", function () {
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any): any {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(10)).toBe(100);
        expect(callMe("Jaka")).toBe("JAKA");

    });

    it("should support function as parameter", function () {
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }

        function toUpperCase(name: string): string {
            return name.toUpperCase();
        }

        expect(sayHello("Rudi", toUpperCase)).toBe("Hello RUDI");

        expect(sayHello("Rudi", (name) => name.toUpperCase())).toBe("Hello RUDI");

    });
});

