"use strict";
describe('Any', function () {
    it("should support any", function () {
        const person = {
            id: 1,
            name: "Jaka Kelana Umbara",
            age: 20
        };
        person.age = 30;
        person.address = "Bandung";
        console.info(person);
    });
});