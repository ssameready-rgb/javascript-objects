// Exercise #2 Product

const product = {
  name: 'Xiaomi Air Purifier',
  price: 4000,
  ratings: 2.5,
  photo: null,
};
let socialMediaShare = 'facebookShare';
// Start code here
product.ratings = 4.5; // Update the ratings
product.photo =
  "<a href='https://i01.appmifile.com/webfile/globalimg/products/pc/mi-air-purifier-3H/replace_03.jpg'>https://i01.appmifile.com/webfile/globalimg/products/pc/mi-air-purifier-3H/replace_03.jpg</a>"; // Update the photo
product.price = 6000; // Update the price
delete product.ratings; // Delete the ratings property
product[socialMediaShare] = 45.5; // Add a new property for social media share
console.log(product); // Print the updated product object
