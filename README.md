# Bamazon

Welcome to Bamazon! This is an Amazon-like storefront built with MySQL and Node.js.  

<br>
#### Within the customer portal, you can view the inventory, choose an item you'd like to purchase
#### along with the quantity, and voila! Transaction complete! However, if we do not have enough 
#### of the selected item in stock to fulfill your purchase, the transaction will not go through.
#### Each item that is purchased is subtracted from the stock quantity column after a successful transaction... 

``` node bamazonCustomer.js ```

![customer portal](https://github.com/KruseJohn/Bamazon/blob/master/Images/customer.gif)
<br>
<br>
#### Within the manager portal, you can view all inventory in the store, view all low
#### inventory (less than 5 items in stock), choose to add to the inventory of a product, 
#### add an entirely new item to your inventory, or remove a product altogether...
<br>
#### First, let's choose to view the existing inventory, then we will view the products which are low in stock...

``` node bamazonManager.js ```

![manager portal](https://github.com/KruseJohn/Bamazon/blob/master/Images/manager1.gif)
<br>
<br>
#### Next, let's add to the inventory.  In this case, we are getting low on "NIN, The Fragile", so we
#### will restock 16 more of the product...

![manager portal](https://github.com/KruseJohn/Bamazon/blob/master/Images/manager2.gif)
<br>
<br>
#### Now I would like to add a new item not already listed in the inventory...

![manager portal](https://github.com/KruseJohn/Bamazon/blob/master/Images/manager3.gif)
<br>
<br>
#### But now I decide I don't want that product anymore, so let's remove it, and then exit the program...

![manager portal](https://github.com/KruseJohn/Bamazon/blob/master/Images/manager4.gif)


