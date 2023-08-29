const products = [
  {
    id: "redhoody",
    description: "brand new red hoody",
    price: 50.25,
    reviews: [],
  },
  {
    id: "Adidas",
    description: "Flashy adidas",
    price: 103.8,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductById(id) {
  const product = products.find((product) => {
    return product.id === id;
  });

  return product;
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };

  products.push(newProduct);

  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const product = getProductById(id);

  if (product) {
    const newReview = {
      rating,
      comment,
    };
    product.reviews.push(newReview);
    return newReview;
  }
  return product;
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
