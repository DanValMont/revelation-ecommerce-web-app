import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Fit Pants",
      slug: "fit-pants",
      category: "Pants",
      image: "/images/pants1.jpg",
      isFeatured: true,
      featuredImage: "/images/banner1.png",
      price: 95,
      brand: "Zara",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular pants",
    },
    {
      name: "Fit Shirt",
      slug: "fit-shirt",
      category: "Shirts",
      image: "/images/shirt2.jpg",
      isFeatured: true,
      featuredImage: "/images/banner2.png",
      price: 80,
      brand: "Hugo Boss",
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "T-Shirt",
      slug: "t-shirt",
      category: "Shirts",
      image: "/images/shirt1.jpeg",
      price: 70,
      brand: "Gucci",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A fashion blue t-shirt",
    },
    {
      name: "Slim Shirt",
      slug: "slim-shirt",
      category: "Shirts",
      image: "/images/shirt3.jpeg",
      price: 90,
      brand: "Lacoste",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Golf Pants",
      slug: "golf-pants",
      category: "Pants",
      image: "/images/pants2.jpeg",
      price: 90,
      brand: "Oliver",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Smart looking pants",
    },
    {
      name: "Classic Pants",
      slug: "classic-pants",
      category: "Pants",
      image: "/images/pants3.jpg",
      price: 75,
      brand: "Casely",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular pants",
    },
  ],
};
export default data;
