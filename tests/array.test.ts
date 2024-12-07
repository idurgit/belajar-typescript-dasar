describe('Array', function () {
    it("should same with javascript", function () {

        const names = ["Jaka", "Kelana", "Umbara"];
        const values = [1, 2, 3];

        console.info(names);
        console.info(values);
    });

    it('should support readonly array', function () {
        const hobbies = ["Membaca", "Menggambar"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
    });

    it('should support tuple', function () {

        const person: readonly [string, string, number] = ["Jaka", "Kelana", 20];

        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
    });
});