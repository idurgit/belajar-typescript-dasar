describe('Optional', function () {
    it("should support optional null and undefined", function () {
        function sayHello(name?: string | null) {
            if (name) {
                console.info(`Hello ${name}`);
            } else {
                console.info("Hello");
            }
        }

        sayHello("Rudi"); 
        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);
    });
});