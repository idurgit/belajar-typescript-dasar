import { sayHello } from "../src/say-hello";

describe('sayHello', function() {
    it("should return hello Rudi", function () {
       expect(sayHello('Rudi')).toBe("Hello Rudi");
    });
});