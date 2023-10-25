const userInputString = prompt(
    "Please enter some froyo flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  
function createOrderObject(str) {
    const flavorArray = str.split(",");
    const order = {};
    for (let i = 0; i < flavorArray.length; i++) {
        if(flavorArray[i] in order) {
            order[flavorArray[i]] += 1;
        }
        else {
            order[flavorArray[i]] = 1;
        }
    }

    return order;
}

const newOrder = createOrderObject(userInputString);
console.table(newOrder);