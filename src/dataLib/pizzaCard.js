export const pizzas = [
  {
    id: 1,
    name: "Margherita Pizza",
    image: "/image/Pizza/pizza (1).jpg",
    price: [28, 35, 42],
    desc: "Classic Italian pizza with tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.",
    extraIngredients: [
      { id: "1-1", name: "Fresh Basil", price: 1 },
      { id: "1-2", name: "Buffalo Mozzarella", price: 4 },
      { id: "1-3", name: "Cherry Tomatoes", price: 2 }
    ]
  },
  {
    id: 2,
    name: "BBQ Chicken Pizza",
    image: "/image/Pizza/pizza (2).jpg",
    price: [35, 44, 53],
    desc: "Smoky BBQ chicken topped with red onions, sweet corn, and melted cheese.",
    extraIngredients: [
      { id: "2-1", name: "Grilled Chicken", price: 4 },
      { id: "2-2", name: "BBQ Sauce", price: 3 },
      { id: "2-3", name: "Sweet Corn", price: 2 },
      { id: "2-4", name: "Smoked Cheddar", price: 3 },
      { id: "2-5", name: "Crispy Onions", price: 2 },
      { id: "2-6", name: "Ranch Drizzle", price: 2 }
    ]
  },
  {
    id: 3,
    name: "Spicy Beef Pizza",
    image: "/image/Pizza/pizza (3).jpg",
    price: [38, 47, 56],
    desc: "Seasoned beef with fiery peppers, chili oil, and melted cheese on a crispy crust.",
    extraIngredients: [
      { id: "3-1", name: "Seasoned Beef", price: 4 },
      { id: "3-2", name: "Jalapeño Slices", price: 2 },
      { id: "3-3", name: "Chili Oil", price: 2 },
      { id: "3-4", name: "Roasted Peppers", price: 2 }
    ]
  },
  {
    id: 4,
    name: "Four Cheese Pizza",
    image: "/image/Pizza/pizza (4).jpg",
    price: [34, 42, 50],
    desc: "A rich blend of mozzarella, cheddar, parmesan, and creamy cheese sauce.",
    extraIngredients: [
      { id: "4-1", name: "Gorgonzola", price: 4 },
      { id: "4-2", name: "Parmesan", price: 3 },
      { id: "4-3", name: "Smoked Gouda", price: 3 },
      { id: "4-4", name: "Cream Cheese", price: 3 },
      { id: "4-5", name: "Garlic Butter", price: 2 },
      { id: "4-6", name: "Fresh Oregano", price: 1 },
      { id: "4-7", name: "Chili Flakes", price: 1 },
      { id: "4-8", name: "Truffle Sauce", price: 4 }
    ]
  },
  {
    id: 5,
    name: "Chicken Tikka Pizza",
    image: "/image/Pizza/pizza (5).jpg",
    price: [36, 45, 54],
    desc: "Spiced chicken tikka with creamy sauce, onions, peppers, and melted mozzarella.",
    extraIngredients: [
      { id: "5-1", name: "Extra Tikka Chicken", price: 4 },
      { id: "5-2", name: "Tikka Sauce", price: 3 },
      { id: "5-3", name: "Green Peppers", price: 2 },
      { id: "5-4", name: "Red Onions", price: 1 },
      { id: "5-5", name: "Cilantro", price: 1 }
    ]
  },
  {
    id: 6,
    name: "Pepperoni Classic",
    image: "/image/Pizza/pizza (6).jpg",
    price: [32, 40, 48],
    desc: "Crispy pepperoni layered over rich tomato sauce and stretchy mozzarella.",
    extraIngredients: [
      { id: "6-1", name: "Double Pepperoni", price: 4 },
      { id: "6-2", name: "Italian Sausage", price: 3 },
      { id: "6-3", name: "Black Olives", price: 2 },
      { id: "6-4", name: "Roasted Garlic", price: 2 }
    ]
  },
  {
    id: 7,
    name: "Veggie Garden Pizza",
    image: "/image/Pizza/pizza (7).jpg",
    price: [29, 37, 45],
    desc: "Fresh mushrooms, bell peppers, tomatoes, onions, olives, and sweet corn.",
    extraIngredients: [
      { id: "7-1", name: "Portobello Mushrooms", price: 3 },
      { id: "7-2", name: "Sweet Corn", price: 2 },
      { id: "7-3", name: "Black Olives", price: 2 },
      { id: "7-4", name: "Cherry Tomatoes", price: 2 },
      { id: "7-5", name: "Roasted Peppers", price: 2 },
      { id: "7-6", name: "Fresh Spinach", price: 2 },
      { id: "7-7", name: "Feta Cheese", price: 3 }
    ]
  },
  {
    id: 8,
    name: "Meat Lovers Pizza",
    image: "/image/Pizza/pizza (8).jpg",
    price: [42, 51, 60],
    desc: "A loaded combination of beef, chicken, pepperoni, sausage, and smoky bacon.",
    extraIngredients: [
      { id: "8-1", name: "Extra Beef", price: 4 },
      { id: "8-2", name: "Smoked Chicken", price: 4 },
      { id: "8-3", name: "Pepperoni", price: 3 },
      { id: "8-4", name: "Beef Sausage", price: 3 },
      { id: "8-5", name: "Crispy Bacon", price: 4 },
      { id: "8-6", name: "Smoked Cheese", price: 3 }
    ]
  },
  {
    id: 9,
    name: "Creamy Garlic Chicken",
    image: "/image/Pizza/pizza (9).jpg",
    price: [37, 46, 55],
    desc: "Tender chicken with creamy garlic sauce, mushrooms, herbs, and parmesan.",
    extraIngredients: [
      { id: "9-1", name: "Roasted Chicken", price: 4 },
      { id: "9-2", name: "Creamy Garlic Sauce", price: 3 },
      { id: "9-3", name: "Wild Mushrooms", price: 3 },
      { id: "9-4", name: "Parmesan", price: 3 },
      { id: "9-5", name: "Fresh Thyme", price: 1 }
    ]
  },
  {
    id: 10,
    name: "Mexican Fiesta Pizza",
    image: "/image/Pizza/pizza (10).jpg",
    price: [36, 45, 54],
    desc: "Spicy beef, jalapeños, corn, peppers, onions, and salsa-inspired pizza sauce.",
    extraIngredients: [
      { id: "10-1", name: "Seasoned Beef", price: 4 },
      { id: "10-2", name: "Jalapeños", price: 2 },
      { id: "10-3", name: "Sweet Corn", price: 2 },
      { id: "10-4", name: "Avocado", price: 3 },
      { id: "10-5", name: "Salsa Sauce", price: 2 },
      { id: "10-6", name: "Nacho Cheese", price: 3 },
      { id: "10-7", name: "Cilantro", price: 1 }
    ]
  },
  {
    id: 11,
    name: "Buffalo Chicken Pizza",
    image: "/image/Pizza/pizza (11).jpg",
    price: [37, 46, 55],
    desc: "Spicy buffalo chicken with creamy ranch, mozzarella, and crunchy celery.",
    extraIngredients: [
      { id: "11-1", name: "Buffalo Chicken", price: 4 },
      { id: "11-2", name: "Buffalo Sauce", price: 3 },
      { id: "11-3", name: "Ranch Dressing", price: 2 },
      { id: "11-4", name: "Blue Cheese", price: 3 },
      { id: "11-5", name: "Celery", price: 1 }
    ]
  },
  {
    id: 12,
    name: "Hawaiian Delight",
    image: "/image/Pizza/pizza (12).jpg",
    price: [34, 43, 52],
    desc: "Sweet pineapple paired with smoky ham, mozzarella, and a light tomato sauce.",
    extraIngredients: [
      { id: "12-1", name: "Extra Pineapple", price: 2 },
      { id: "12-2", name: "Smoked Ham", price: 3 },
      { id: "12-3", name: "Coconut Flakes", price: 2 },
      { id: "12-4", name: "Extra Mozzarella", price: 2 }
    ]
  },
  {
    id: 13,
    name: "Peri Peri Chicken",
    image: "/image/Pizza/pizza (13).jpg",
    price: [37, 46, 55],
    desc: "Fiery peri peri chicken with peppers, onions, and a spicy creamy drizzle.",
    extraIngredients: [
      { id: "13-1", name: "Peri Peri Chicken", price: 4 },
      { id: "13-2", name: "Peri Peri Sauce", price: 3 },
      { id: "13-3", name: "Roasted Peppers", price: 2 },
      { id: "13-4", name: "Jalapeños", price: 2 },
      { id: "13-5", name: "Garlic Mayo", price: 2 },
      { id: "13-6", name: "Red Onions", price: 1 }
    ]
  },
  {
    id: 14,
    name: "Mediterranean Veggie",
    image: "/image/Pizza/pizza (14).jpg",
    price: [33, 42, 51],
    desc: "Mediterranean flavors with olives, tomatoes, feta, spinach, peppers, and fresh herbs.",
    extraIngredients: [
      { id: "14-1", name: "Feta Cheese", price: 3 },
      { id: "14-2", name: "Kalamata Olives", price: 2 },
      { id: "14-3", name: "Baby Spinach", price: 2 },
      { id: "14-4", name: "Sun-Dried Tomatoes", price: 3 },
      { id: "14-5", name: "Artichoke Hearts", price: 3 },
      { id: "14-6", name: "Basil Pesto", price: 3 },
      { id: "14-7", name: "Oregano", price: 1 },
      { id: "14-8", name: "Garlic", price: 1 }
    ]
  },
  {
    id: 15,
    name: "Smoky Beef Supreme",
    image: "/image/Pizza/pizza (15).jpg",
    price: [40, 49, 58],
    desc: "Smoky beef with caramelized onions, mushrooms, roasted peppers, and smoked cheese.",
    extraIngredients: [
      { id: "15-1", name: "Smoked Beef", price: 5 },
      { id: "15-2", name: "Caramelized Onions", price: 2 },
      { id: "15-3", name: "Portobello Mushrooms", price: 3 },
      { id: "15-4", name: "Smoked Gouda", price: 3 },
      { id: "15-5", name: "Roasted Peppers", price: 2 }
    ]
  },
  {
    id: 16,
    name: "Pesto Chicken",
    image: "/image/Pizza/pizza (16).jpg",
    price: [39, 48, 57],
    desc: "Grilled chicken, fragrant basil pesto, cherry tomatoes, mozzarella, and parmesan.",
    extraIngredients: [
      { id: "16-1", name: "Grilled Chicken", price: 4 },
      { id: "16-2", name: "Basil Pesto", price: 3 },
      { id: "16-3", name: "Pine Nuts", price: 2 },
      { id: "16-4", name: "Cherry Tomatoes", price: 2 },
      { id: "16-5", name: "Parmesan Shavings", price: 3 },
      { id: "16-6", name: "Fresh Basil", price: 1 }
    ]
  },
  {
    id: 17,
    name: "Truffle Mushroom Pizza",
    image: "/image/Pizza/pizza (17).jpg",
    price: [42, 51, 60],
    desc: "Wild mushrooms, creamy mozzarella, parmesan, and luxurious truffle sauce.",
    extraIngredients: [
      { id: "17-1", name: "Wild Mushrooms", price: 4 },
      { id: "17-2", name: "Truffle Sauce", price: 5 },
      { id: "17-3", name: "Parmesan", price: 3 },
      { id: "17-4", name: "Garlic Butter", price: 2 }
    ]
  },
  {
    id: 18,
    name: "Tandoori Supreme",
    image: "/image/Pizza/pizza (18).jpg",
    price: [40, 49, 58],
    desc: "Tandoori chicken, spicy beef, peppers, onions, and a creamy Indian-inspired sauce.",
    extraIngredients: [
      { id: "18-1", name: "Tandoori Chicken", price: 4 },
      { id: "18-2", name: "Spiced Beef", price: 4 },
      { id: "18-3", name: "Tandoori Sauce", price: 3 },
      { id: "18-4", name: "Green Chilies", price: 2 },
      { id: "18-5", name: "Red Onions", price: 1 },
      { id: "18-6", name: "Cilantro", price: 1 },
      { id: "18-7", name: "Mint Sauce", price: 2 }
    ]
  },
  {
    id: 19,
    name: "Chicken Fajita",
    image: "/image/Pizza/pizza (19).jpg",
    price: [35, 44, 53],
    desc: "Seasoned fajita chicken with colorful peppers, onions, cheese, and smoky fajita sauce.",
    extraIngredients: [
      { id: "19-1", name: "Fajita Chicken", price: 4 },
      { id: "19-2", name: "Red Peppers", price: 2 },
      { id: "19-3", name: "Yellow Peppers", price: 2 },
      { id: "19-4", name: "Fajita Seasoning", price: 1 },
      { id: "19-5", name: "Sour Cream", price: 2 }
    ]
  },
  {
    id: 20,
    name: "Garlic Parmesan Pizza",
    image: "/image/Pizza/pizza (20).jpg",
    price: [33, 41, 49],
    desc: "Creamy garlic base topped with mozzarella, parmesan, roasted garlic, and Italian herbs.",
    extraIngredients: [
      { id: "20-1", name: "Roasted Garlic", price: 2 },
      { id: "20-2", name: "Parmesan", price: 3 },
      { id: "20-3", name: "Garlic Butter", price: 2 },
      { id: "20-4", name: "Fresh Parsley", price: 1 },
      { id: "20-5", name: "Chili Oil", price: 2 },
      { id: "20-6", name: "Mozzarella", price: 2 },
      { id: "20-7", name: "Oregano", price: 1 }
    ]
  },
  {
    id: 21,
    name: "Double Cheese Pizza",
    image: "/image/Pizza/pizza (21).jpg",
    price: [32, 40, 48],
    desc: "A creamy cheese-filled pizza with mozzarella, cheddar, and a golden baked crust.",
    extraIngredients: [
      { id: "21-1", name: "Extra Mozzarella", price: 2 },
      { id: "21-2", name: "Aged Cheddar", price: 3 },
      { id: "21-3", name: "Cream Cheese", price: 3 },
      { id: "21-4", name: "Parmesan", price: 3 }
    ]
  },
  {
    id: 22,
    name: "Spicy Chicken Ranch",
    image: "/image/Pizza/pizza (22).jpg",
    price: [38, 47, 56],
    desc: "Spicy chicken with ranch dressing, jalapeños, red onions, and melted mozzarella.",
    extraIngredients: [
      { id: "22-1", name: "Spicy Chicken", price: 4 },
      { id: "22-2", name: "Ranch Dressing", price: 2 },
      { id: "22-3", name: "Jalapeños", price: 2 },
      { id: "22-4", name: "Crispy Onions", price: 2 },
      { id: "22-5", name: "Pepper Jack Cheese", price: 3 },
      { id: "22-6", name: "Hot Honey", price: 3 }
    ]
  },
  {
    id: 23,
    name: "Beef Pepperoni Feast",
    image: "/image/Pizza/pizza (23).jpg",
    price: [40, 49, 58],
    desc: "Seasoned beef and crispy pepperoni combined with mushrooms, onions, and rich tomato sauce.",
    extraIngredients: [
      { id: "23-1", name: "Extra Beef", price: 4 },
      { id: "23-2", name: "Extra Pepperoni", price: 4 },
      { id: "23-3", name: "Beef Sausage", price: 3 },
      { id: "23-4", name: "Roasted Mushrooms", price: 2 },
      { id: "23-5", name: "Red Onions", price: 1 }
    ]
  },
  {
    id: 24,
    name: "Fresh Spinach Pizza",
    image: "/image/Pizza/pizza (24).jpg",
    price: [31, 39, 47],
    desc: "Fresh spinach, creamy ricotta, mozzarella, garlic, and sun-dried tomatoes.",
    extraIngredients: [
      { id: "24-1", name: "Fresh Spinach", price: 2 },
      { id: "24-2", name: "Ricotta Cheese", price: 3 },
      { id: "24-3", name: "Sun-Dried Tomatoes", price: 3 },
      { id: "24-4", name: "Roasted Garlic", price: 2 },
      { id: "24-5", name: "Feta Cheese", price: 3 },
      { id: "24-6", name: "Basil Leaves", price: 1 },
      { id: "24-7", name: "Olive Oil", price: 2 },
      { id: "24-8", name: "Black Pepper", price: 1 }
    ]
  },
  {
    id: 25,
    name: "Smoked BBQ Beef",
    image: "/image/Pizza/pizza (25).jpg",
    price: [41, 50, 59],
    desc: "Slow-seasoned beef with smoky BBQ sauce, crispy onions, peppers, and cheddar.",
    extraIngredients: [
      { id: "25-1", name: "Smoked Beef", price: 5 },
      { id: "25-2", name: "BBQ Glaze", price: 3 },
      { id: "25-3", name: "Crispy Onions", price: 2 },
      { id: "25-4", name: "Smoked Cheddar", price: 3 },
      { id: "25-5", name: "Roasted Peppers", price: 2 },
      { id: "25-6", name: "Pickled Jalapeños", price: 2 }
    ]
  },
  {
    id: 26,
    name: "Classic Cheese & Tomato",
    image: "/image/Pizza/pizza (26).jpg",
    price: [27, 34, 41],
    desc: "Simple and delicious tomato sauce, mozzarella, fresh tomatoes, and Italian seasoning.",
    extraIngredients: [
      { id: "26-1", name: "Fresh Tomatoes", price: 2 },
      { id: "26-2", name: "Extra Mozzarella", price: 2 },
      { id: "26-3", name: "Basil", price: 1 }
    ]
  },
  {
    id: 27,
    name: "Loaded Chicken Pizza",
    image: "/image/Pizza/pizza (27).jpg",
    price: [39, 48, 57],
    desc: "Loaded with grilled chicken, mushrooms, peppers, olives, onions, and extra cheese.",
    extraIngredients: [
      { id: "27-1", name: "Grilled Chicken", price: 4 },
      { id: "27-2", name: "Mushrooms", price: 2 },
      { id: "27-3", name: "Green Peppers", price: 2 },
      { id: "27-4", name: "Black Olives", price: 2 },
      { id: "27-5", name: "Red Onions", price: 1 },
      { id: "27-6", name: "Extra Cheese", price: 3 },
      { id: "27-7", name: "Garlic Sauce", price: 2 },
      { id: "27-8", name: "Sweet Corn", price: 2 }
    ]
  },
  {
    id: 28,
    name: "Spicy Sausage Pizza",
    image: "/image/Pizza/pizza (28).jpg",
    price: [37, 46, 55],
    desc: "Spicy sausage with roasted peppers, onions, chili flakes, and melted mozzarella.",
    extraIngredients: [
      { id: "28-1", name: "Spicy Sausage", price: 4 },
      { id: "28-2", name: "Roasted Peppers", price: 2 },
      { id: "28-3", name: "Chili Flakes", price: 1 },
      { id: "28-4", name: "Caramelized Onions", price: 2 },
      { id: "28-5", name: "Provolone Cheese", price: 3 }
    ]
  },
  {
    id: 29,
    name: "Chef's Special Pizza",
    image: "/image/Pizza/pizza (29).jpg",
    price: [42, 49, 56],
    desc: "Our chef's signature combination of premium toppings, special sauce, and melted mozzarella on a golden crust.",
    extraIngredients: [
      { id: "29-1", name: "Extra Chicken", price: 4 },
      { id: "29-2", name: "Extra Beef", price: 4 },
      { id: "29-3", name: "Truffle Sauce", price: 4 },
      { id: "29-4", name: "Smoked Gouda", price: 3 },
      { id: "29-5", name: "Roasted Mushrooms", price: 3 },
      { id: "29-6", name: "Caramelized Onions", price: 2 },
      { id: "29-7", name: "Chef's Sauce", price: 3 },
      { id: "29-8", name: "Fresh Basil", price: 1 }
    ]
  },
  {
    id: 30,
    name: "Garden Pesto Pizza",
    image: "/image/Pizza/pizza (30).jpg",
    price: [34, 43, 52],
    desc: "Basil pesto with zucchini, cherry tomatoes, spinach, mozzarella, and roasted peppers.",
    extraIngredients: [
      { id: "30-1", name: "Zucchini", price: 2 },
      { id: "30-2", name: "Cherry Tomatoes", price: 2 },
      { id: "30-3", name: "Fresh Spinach", price: 2 },
      { id: "30-4", name: "Pesto Sauce", price: 3 },
      { id: "30-5", name: "Roasted Peppers", price: 2 },
      { id: "30-6", name: "Pine Nuts", price: 2 }
    ]
  },
  {
    id: 31,
    name: "Crispy Chicken Pizza",
    image: "/image/Pizza/pizza (31).jpg",
    price: [36, 45, 54],
    desc: "Crispy chicken strips with creamy sauce, mozzarella, onions, and crunchy breadcrumbs.",
    extraIngredients: [
      { id: "31-1", name: "Crispy Chicken", price: 4 },
      { id: "31-2", name: "Creamy Garlic Sauce", price: 3 },
      { id: "31-3", name: "Crispy Breadcrumbs", price: 2 },
      { id: "31-4", name: "Sweet Corn", price: 2 }
    ]
  },
  {
    id: 32,
    name: "Fiery Beef & Cheese",
    image: "/image/Pizza/pizza (32).jpg",
    price: [39, 48, 57],
    desc: "Spicy beef, pepper jack cheese, jalapeños, chili oil, and roasted peppers.",
    extraIngredients: [
      { id: "32-1", name: "Spicy Beef", price: 4 },
      { id: "32-2", name: "Pepper Jack", price: 3 },
      { id: "32-3", name: "Fresh Jalapeños", price: 2 },
      { id: "32-4", name: "Chili Oil", price: 2 },
      { id: "32-5", name: "Roasted Peppers", price: 2 },
      { id: "32-6", name: "Hot Honey", price: 3 },
      { id: "32-7", name: "Crispy Onions", price: 2 }
    ]
  },
  {
    id: 33,
    name: "Mediterranean Chicken",
    image: "/image/Pizza/pizza (33).jpg",
    price: [38, 47, 56],
    desc: "Herb-marinated chicken with feta, olives, tomatoes, spinach, and Mediterranean herbs.",
    extraIngredients: [
      { id: "33-1", name: "Herb Chicken", price: 4 },
      { id: "33-2", name: "Feta Cheese", price: 3 },
      { id: "33-3", name: "Kalamata Olives", price: 2 },
      { id: "33-4", name: "Sun-Dried Tomatoes", price: 3 },
      { id: "33-5", name: "Baby Spinach", price: 2 }
    ]
  },
  {
    id: 34,
    name: "Honey Garlic Chicken",
    image: "/image/Pizza/pizza (34).jpg",
    price: [37, 46, 55],
    desc: "Tender chicken glazed with sweet honey garlic sauce and topped with mozzarella and roasted garlic.",
    extraIngredients: [
      { id: "34-1", name: "Honey Garlic Chicken", price: 4 },
      { id: "34-2", name: "Honey Garlic Glaze", price: 3 },
      { id: "34-3", name: "Roasted Garlic", price: 2 },
      { id: "34-4", name: "Sesame Seeds", price: 1 },
      { id: "34-5", name: "Spring Onions", price: 1 },
      { id: "34-6", name: "Smoked Cheese", price: 3 }
    ]
  },
  {
    id: 35,
    name: "Ultimate Veggie",
    image: "/image/Pizza/pizza (35).jpg",
    price: [32, 40, 48],
    desc: "A colorful vegetable feast with broccoli, mushrooms, peppers, spinach, tomatoes, and olives.",
    extraIngredients: [
      { id: "35-1", name: "Broccoli", price: 2 },
      { id: "35-2", name: "Spinach", price: 2 },
      { id: "35-3", name: "Mushrooms", price: 2 },
      { id: "35-4", name: "Roasted Peppers", price: 2 },
      { id: "35-5", name: "Black Olives", price: 2 },
      { id: "35-6", name: "Cherry Tomatoes", price: 2 },
      { id: "35-7", name: "Goat Cheese", price: 4 }
    ]
  }
]