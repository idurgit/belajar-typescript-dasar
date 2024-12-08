import { Customer, CustomerType } from "../src/enum";

describe('Enum', function () {
    it("should support enum", function () {
        const customer: Customer = {
            id: 1,
            name: "Jaka",
            type: CustomerType.REGULAR
        };
        console.info(customer);
    });
});