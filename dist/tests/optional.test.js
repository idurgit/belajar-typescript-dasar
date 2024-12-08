"use strict";
describe('Optional', function () {
    it("should support optional null and undefined", function () {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info("Hello");
            }
        }
        sayHello("Rudi");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
