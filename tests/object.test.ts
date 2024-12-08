describe('Object', function() {
    it("should support object", function () {

        const person: {id: string, name: string, hobby?: string} = { 
            id: "1",
            name: "Jaka"
        };

        console.info(person);

        person.id = "2";
        person.name = "Kelana Umbara";

        console.info(person);
    });
});