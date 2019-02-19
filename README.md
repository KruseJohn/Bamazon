# Bamazon

Welcome to Bamazon! This is an Amazon-like storefront built with MySQL and Node.js.  

<br>
<h4> Within the customer portal, you can view the inventory, choose an item you'd like to purchase 
along with the quantity, and voila! Transaction complete! However, if we do not have enough 
of the selected item in stock to fulfill your purchase, the transaction will not go through.  
Each item that is purchased is subtracted from the stock quantity column after a successful transaction...</h4>

``` node bamazonCustomer.js ```

![customer portal](https://github.com/KruseJohn/Bamazon/blob/master/images/customer.gif)
<br>
<br>
<h4> Within the manager portal, you can view all inventory in the store, view all low 
inventory (less than 5 items in stock), choose to add to the inventory of a product, 
add an entirely new item to your inventory, or remove a product altogether...</h4>
<br>
<h4> First, let's choose to view the existing inventory, then we will view the products which are low in stock...</h4>

``` node bamazonManager.js ```

![manager portal](https://github.com/KruseJohn/Bamazon/blob/master/images/manager1.gif)
<br>
<br>
<h4> Next, let's add to the inventory.  In this case, we are getting low on "NIN, The Fragile", so we 
will restock 16 more of the product...</h4>

![manager portal](https://github.com/KruseJohn/Bamazon/blob/master/images/manager2.gif)
<br>
<br>
<h4> Now I would like to add a new item not already listed in the inventory...</h4>

![manager portal](https://github.com/KruseJohn/Bamazon/blob/master/images/manager3.gif)
<br>
<br>
<h4> But now I decide I don't want that product anymore, so let's remove it, and then exit the program...</h4>

![manager portal](https://github.com/KruseJohn/Bamazon/blob/master/images/manager4.gif)


