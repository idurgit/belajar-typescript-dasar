describe('If Statement', function () {
    it("should support if statement", function () {
        const examValue = 90;
        if (examValue >= 80) {
            console.info("Good");
        } else if (examValue >= 60) {
            console.info("Not Bad");
        } else {
            console.info("Try Again");
        }
    });

    it("should support ternary operator", function () {
        const examValue = 50;
        const say = examValue >= 80 ? "Good" : "Try Again";
        console.info(say);

    });

    it("should support switch statement", function () {
        function sayHello(name: string): string {
            switch (name) {
                case "Jaka":
                    return "Hello Jaka";
                case "Kelana":
                    return "Hello Kelana";
                default:
                    return "Hello";
            }
        }

        console.info(sayHello("Jaka"));
        console.info(sayHello("Kelana"));
        console.info(sayHello("Umbara"));
    })
});
