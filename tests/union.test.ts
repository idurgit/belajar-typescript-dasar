describe('Union TYpe', function () {
    it("should support union type", function () {

        let sample: string | number | boolean = "Jaka Kelana Umbara";
        console.info(sample);

        sample = 100;
        console.info(sample);

        sample = true;
        console.info(sample);
    });

    it('should support typeof operator', function () {
        function process(value: number | string | boolean) {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value.toFixed(2);
            } else if (typeof value === "boolean") {
                return value;
            }
        }

        expect(process("Jaka Kelana Umbara")).toBe("JAKA KELANA UMBARA");
        expect(process(100)).toBe("100.00");
        expect(process(true)).toBe(true);
    })
});
