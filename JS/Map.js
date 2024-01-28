// Sample shopping cart object
const shoppingCart = {
    "P001": 2,  
    "P002": 1, 
    "P003": 3   
  };
  
  
  shoppingCart["P004"] = 5;  
  shoppingCart["P005"] = 2; 
  
  
  delete shoppingCart["P002"];
  
  
  console.log("Final Shopping Cart:");
  for (const productId in shoppingCart) {
    if (shoppingCart.hasOwnProperty(productId)) {
      console.log(`Product ID: ${productId}, Quantity: ${shoppingCart[productId]}`);
    }
  }


  // Sample dataset with duplicate URLs
const urlList = [
    "https://example.com",
    "https://example.com",
    "https://google.com",
    "https://yahoo.com",
    "https://example.com",
    "https://apple.com",
  ];
  
  
  const uniqueUrls = new Set(urlList);
  
  const uniqueUrlArray = Array.from(uniqueUrls);
  

  console.log(uniqueUrlArray);
  
  