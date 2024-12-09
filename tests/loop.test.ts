describe('Loop', function () {
    it("should support for loop", function () {
        const names = ["Jaka", "Kelana", "Umbara"];
        for (let index = 0; index < names.length; index++) {
            const name = names[index];
            console.info(name);
        }

        for (const name of names) {
            console.info(name);
        }

        for (const name in names) {
            console.info(name);
        }
    });

    it("should support while loop", function () {
        let counter = 0;
        while (counter < 10) {
            console.info(counter);
            counter++;
        }
    });

    it("should support do while loop", function () {
        let counter = 0;
        do {
            console.info(counter);
            counter++;
        } while (counter < 10);
    });

    it('should support break and continue', function () { 

        let counter = 0;
        do {
            counter++;
            if (counter == 10) {
                break;
            }
            if (counter % 2 == 0) {
                continue;
            }
            console.info(counter);
        } while (true);
    });
})