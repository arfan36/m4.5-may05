//: 1. Convert the following JavaScript array into a TypeScript tuple
const userInfo = [101, "Ema", "John", true, , "2023"];
//. Answer:
// const userInfoTuple = [...userInfo] as const;
const userInfoTuple2: [number, string, string, boolean, undefined, string] = [
	101,
	"Ema",
	"John",
	true,
	,
	"2023",
];

//: 2. Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.
//; For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because the are present in both arrays.

//; The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.
//. Answer:

function commonNumbers<T>(arr1: T[], arr2: T[]): T[] {
	const commonNumbers: T[] = [];

	arr1.forEach((number) => {
		if (arr2.includes(number)) {
			commonNumbers.push(number);
		}
	});

	return commonNumbers;
}

const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: number[] = [2, 4, 6, 8];
const result = commonNumbers(arr1, arr2);
// console.log("🚀 ~ result:", result);

//: 3. You have  an interface for Product, containing the product's id, name, price, and category. You want to filter an array of products based on specific criterion and value.
//; Write a TypeScript generic function thats takes this array, a criterion, and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.
//. Answer:
interface Product {
	id: number;
	name: string;
	price: number;
	category: string;
}

function filterProducts<T extends Product, K extends keyof T>( // Mandatory Type: Product
	products: T[],
	criterion: K,
	value: T[K]
): T[] {
	return products.filter((product) => product[criterion] === value);
}

const products: Product[] = [
	{ id: 1, name: "Product 1", price: 10, category: "Category 1" },
	{ id: 2, name: "Product 2", price: 20, category: "Category 2" },
	{ id: 3, name: "Product 3", price: 30, category: "Category 1" },
	{ id: 4, name: "Product 4", price: 40, category: "Category 2" },
];

const filteredProducts = filterProducts(products, "category", "Category 2");
// console.log("🚀 ~ filteredProducts:", filteredProducts);

//: 4. Suppose you have an array of tuple, where each tuple represents a product and contain the product name, price, and quantity. Write a TypeScript function that calculate the total costs of all the products in the array, using a generic type for the tuple and a type alias for the array.
//. Answer:
//' 1.
type ProductTuple = [string, number, number];
type ProductArray = ProductTuple[];
function calculateTotalCost(products: ProductArray): number {
	let totalCost = 0;
	products.forEach((product) => {
		const [, price, quantity] = product;
		totalCost += price * quantity;
	});
	return totalCost;
}
const products4: ProductArray = [
	["Product 1", 10, 2],
	["Product 2", 20, 3],
	["Product 3", 5, 4],
];
const totalCost = calculateTotalCost(products4);
// console.log("🚀 ~ totalCost:", totalCost);
//
//

//' 2.
type ProductTuple_4b = [string, number, number]; // Tuple type alias
function calculateTotalCost_4b<T extends ProductTuple_4b>(
	products: T[]
): number {
	let totalCost = 0;
	products.forEach((product) => {
		const [name, price, quantity] = product;
		totalCost += price * quantity;
	});
	return totalCost;
}
const products_4b: ProductTuple_4b[] = [
	["Product 1", 10, 2],
	["Product 2", 20, 1],
	["Product 3", 30, 3],
];
const totalCost_4b = calculateTotalCost_4b(products_4b);
// console.log("🚀 ~ totalCost_4b:", totalCost_4b);
//
//

//' 3.
// Define a generic type for the product tuple
//  Use a constraint to ensure that K extends number
// type Product_4<T> = [T, number, number];
type ProductTuple_4c<T, K extends number> = [T, K, K];

// Define a type alias for the array of product
type ProductArray_4c<T, K extends number> = Array<ProductTuple_4c<T, K>>;
// Define a function that takes an array of products and returns the total cost
function totalCost_4c<T, K extends number>(
	products: ProductArray_4c<T, K>
): number {
	// Initialize a variable to store the total cost
	let total = 0;
	// loop through each product in the array
	for (const product of products) {
		// destructure the product tuple into name, price and quantity
		let [name, price, quantity] = product;
		// calculate the total cost of the product and add it to the total cost
		let cost = price * quantity;
		total += cost;
		// print the details of this product
		// console.log(`Product: ${name} ${price} ${quantity}`);
	}
	// return the total cost
	return total;
}
// Example usage
let products_4: ProductArray_4c<string, number> = [
	["Product_1", 2, 5],
	["Product_2", 1, 10],
	["Product_3", 3, 4],
];
let result_4c = totalCost_4c(products_4);
// console.log("🚀 ~ result_4c:", result_4c);
//
//

//: 5. Suppose you have an array of numbers in typescript, and you want to find all the even numbers in the array. How would you approach this problem and write code to solve it?
//. Answer:
function findEvenNumbers_5a<T extends number>(param: T[]): T[] {
	const evenNumbers_5a: T[] = [];
	param.forEach((element) => {
		if (element % 2 === 0) {
			evenNumbers_5a.push(element);
		}
	});
	return evenNumbers_5a;
}
type arrayType_5a = Array<number>;
const arr1_5a: arrayType_5a = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];
const result_5a = findEvenNumbers_5a(arr1_5a);
// console.log("🚀 ~ result_5a:", result_5a);
//
//

//: 6. Create an interface called Person that includes properties name(string), age(number) and email(string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.
//. Answer:
// Create an interface called Person
interface Person {
	name: string;
	age: number;
	email: string;
}
// interface PersonArray extends Array<Person> {}
const people: Person[] = [
	{ name: "John", age: 45, email: "john@example.com" },
	{ name: "Bon", age: 35, email: "bon@example.com" },
	{ name: "Don", age: 40, email: "don@example.com" },
	{ name: "Kon", age: 77, email: "kon@example.com" },
	{ name: "Ton", age: 24, email: "ton@example.com" },
];
function findPersonByEmail(people: Person[], email: string): Person | null {
	return people.find((person) => person.email === email) || null;
}
const getPerson = findPersonByEmail(people, "don@example.com");
console.log("🚀 ~ getPerson:", getPerson);
