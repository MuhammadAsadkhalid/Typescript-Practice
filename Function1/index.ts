// implement a simple shopping cart program using an array. 
// Create functions to add items, remove items, and update quantities
//  using the splice method. Print the cart's contents after each operation

var addCart:string [] = ["Rice","Meat","Cold Drink","fruits",""];

var addItem=(addCart:string[],index:number,deleteRow:number,value:string):any=>{
addCart.splice(index,deleteRow,value); // Add item 
console.log(addCart);
};


const removeItem = (addCart: string[],index:number,deleteRow:number,) => {
    addCart.splice(index,deleteRow); // Remove item
    console.log(addCart);

}

const updateItem = (addcart:string[],index:number,deleteRow:number,value:string)=>{
    addCart.splice(index,deleteRow,value); // Update Item
    console.log(addCart);
} 
addItem(addCart,1,2,"seafood");
removeItem(addCart,2,2);
updateItem(addCart,2,2,"Flour");