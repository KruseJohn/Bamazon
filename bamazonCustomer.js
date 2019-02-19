// Initialize the npm package mysql and inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");
// require("console.table");
const chalk = require("chalk");


// Initialize the connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "0911",
    database: "bamazon"
});

// Connect to the server
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    showInventory();
});

// Function to show present inventory in database
function showInventory() {
    connection.query("SELECT * FROM products", function (err, response) {
        if (err) throw err;
        // Show the table in the terminal
        console.table(response);
        // Prompt for user to select product
        promptUser();
    });
}
    // function to ask user to select a product to purchase
function promptUser() {
    inquirer.prompt([{
            name: "ID",
            type: "input",
            message: "\n  Please enter the item ID of the product you would like to purchase... \n",
            // make sure user enters a number
            validate: function (answer) {
                return !isNaN(answer);
            }
        },
        {
            name: "Quantity",
            type: "input",
            message: "\n  How many would you like to purchase?   [Q to Quit]",
            // determine if user is asking for more items than in stock, and if user would like to exit the program
            validate: function (answer) {
                return answer > 0 || answer.toLowerCase() === "q";
            }
        }
    ]).then(function (answer) {
        Quit(answer.Quantity);
        var amount = answer.Quantity;
        var IDinput = answer.ID;
        purchaseOrder(IDinput, amount);
    });
};
    // function to purchase the item and remove it from inventory 
function purchaseOrder(ID, amountRequested) {
    connection.query("SELECT * FROM products WHERE item_id = " + ID, function (err, response) {
        if (err) throw err;
        if (amountRequested <= response[0].stock_quantity) {
            var totalCost = response[0].price * amountRequested;
            console.log("\n*******************************************************\n");
            console.log(chalk.bold.yellowBright("*******   Thank You!  Your total cost for " + amountRequested + " of your item '" + response[0].product + "' is $" + totalCost + ".\n"));
            console.log("_________________________________________________________________________________________________________");
            connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?", [amountRequested, ID]);
        } else {
            console.log("\n*******************************************************\n");
            console.log(chalk.bold.redBright("*******   INSUFFICIENT SUPPLY IN STOCK!!!  Please try again below...\n"));
            console.log("_________________________________________________________________________________________________________");
        };
        showInventory();
    });
};
    // function to exit the program
function Quit(Quantity) {
    if (Quantity.toLowerCase() === "q") {
        console.log("\n----------------------------------------------------------------\n")
        console.log(chalk.bold.yellowBright("\n*******   GOODBYE!   *******\n"));
        console.log("_____________________________________________________________________________________________________________");
        process.exit(0);
    }
}