import {Category, Product} from "../src/type-alias";

describe('Type Alias', function () {
    it("should support type alias", function () {

        const category: Category = {
            id: "1",
            name: "Handphone"
        }; 

        const product: Product = {
            id: "1",
            name: "Samsung S20",
            price: 2000000,
            category: category
        };

        console.info(category);

        console.info(product);
    });
}) 