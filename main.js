// Data

const allProducts = [
  {
    id: "allProducts1",
    name: "Almond Blanched (Badam)",
    image: "./Products/nuts/Almond/Almonds-Blanched-Raw.jpg",
    desc: "Rs 700 - (250g) per pack",
    roasted: false,
    salted: false,
    normal: true,
    category: "Almond",
    benefits:
      "Almonds are a good source of vitamin E, providing antioxidants that protect cells from oxidative stress. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 3.36 g",
      "Protein: 6 g ",
      " Manganesium: 76 milligrams ",
      " Vitamin E: 7 milligrams ",
      "Copper: 0.29 milligrams",
    ],
    price: 700,
  },
  {
    id: "allProducts2",
    name: "Almond Blanched (Roasted + Salted)",
    image: "./Products/nuts/Almond/Almonds-Blanched-Roasted-Salted.jpg",
    desc: "Rs 900 - (250g) per pack",
    roasted: true,
    salted: true,
    normal: false,
    category: "Almond",
    benefits:
      "Almonds are rich in monounsaturated fats, promoting heart health by helping to lower bad cholesterol levels. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 3.36 g",
      "Protein: 6 g ",
      " Phosphorous: 138 milligrams ",
      " Vitamin E: 7 milligrams ",
      "Manganesium: 76 milligrams",
    ],
    price: 900,
  },
  {
    id: "allProducts3",
    name: "Almond Blanched (Roasted)",
    image: "./Products/nuts/Almond/Almonds-Blanched-Roasted-Unsalted.jpg",
    desc: "Rs 850 - (250g) per pack",
    roasted: true,
    salted: false,
    normal: false,
    category: "Almond",
    benefits:
      "Almonds are a plant-based protein source, contributing to muscle repair and overall body function. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 3.36 g",
      "Protein: 6 g ",
      " Copper: 0.29 milligrams ",
      " Vitamin E: 7 milligrams ",
      " Phosphorous: 138 milligrams",
    ],
    price: 850,
  },
  {
    id: "allProducts4",
    name: "Almonds In Shell (Badam)",
    image: "./Products/nuts/Almond/Almonds-In-Shell.png",
    desc: "Rs 700 - (250g) per pack",
    roasted: false,
    salted: false,
    normal: true,
    category: "Almond",
    benefits:
      "The presence of the almond skin adds extra dietary fiber, which supports digestive health and helps maintain a feeling of fullness. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 3.3 g",
      "Protein: 6 g ",
      " Phosphorous: 138 milligrams ",
      " Vitamin E: 7 milligrams ",
      "Manganesium: 76 milligrams",
    ],
    price: 700,
  },
  {
    id: "allProducts5",
    name: "Almonds (Roasted + Salted)",
    image: "./Products/nuts/Almond/Almonds-Roasted-Salted.jpg",
    desc: "Rs 900 - (250g) per pack",
    roasted: true,
    salted: true,
    normal: false,
    category: "Almond",
    benefits:
      "The combination of healthy fats, protein, and salt can help satisfy hunger and curb cravings. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 3.36 g",
      "Protein: 6 g ",
      " Manganesium: 76 milligrams ",
      " Vitamin E: 7 milligrams ",
      "Copper: 0.29 milligrams",
    ],
    price: 900,
  },
  {
    id: "allProducts6",
    name: "Almonds (Roasted)",
    image: "./Products/nuts/Almond/Roasted-Almonds.jpg",
    desc: "Rs 850 - (250g) per pack",
    roasted: true,
    salted: false,
    normal: false,
    category: "Almond",
    benefits:
      "The combination of healthy fats, protein, and natural sugars can provide a sustained energy boost. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 3.36 g",
      "Protein: 6 g ",
      " Copper: 0.29 milligrams ",
      " Vitamin E: 7 milligrams ",
      " Phosphorous: 138 milligrams",
    ],
    price: 850,
  },
  {
    id: "allProducts7",
    name: "Brazil Nut (Roasted + Salted)",
    image: "./Products/nuts/Brazil-Nut/Brazil-Nuts-Roasted-Unsalted.jpg",
    desc: "Rs 1300 - (250g) per pack",
    roasted: true,
    salted: false,
    normal: true,
    category: "BrazilNut",
    benefits:
      " Brazil nuts are exceptionally high in selenium, a mineral crucial for thyroid function, immune system support, and antioxidant defense. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 2 g",
      "Protein: 4 g ",
      " Healthy Fats: Monounsaturated and polyunsaturated fats ",
      " Selenium: Over 100 micrograms per nut ",
      "Magnesium: 106 milligrams",
    ],
    price: 1300,
  },
  {
    id: "allProducts8",
    name: "Brazil Nut (Roasted)",
    image: "./Products/nuts/Brazil-Nut/Brazil-Nuts-Roasted-Salted.jpg",
    desc: "Rs 1500 - (250g) per pack",
    roasted: true,
    salted: true,
    normal: false,
    category: "BrazilNut",
    benefits:
      "The monounsaturated fats in Brazil nuts may contribute to heart health by helping to lower bad cholesterol levels. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 2 g",
      "Protein: 4 g ",
      " Healthy Fats: Monounsaturated and polyunsaturated fats ",
      " Selenium: Over 100 micrograms per nut ",
      "Phosphorous: 206 milligrams",
    ],
    price: 1500,
  },
  {
    id: "allProducts9",
    name: "Cashew Pieces (Kajoo)",
    image: "./Products/nuts/Cashew/Cashew-Pieces-Raw.jpg",
    desc: "Rs 750 - (250g) per pack",
    roasted: false,
    salted: false,
    normal: true,
    category: "Cashew",
    benefits:
      "Cashews contain monounsaturated fats that may contribute to heart health by helping to lower bad cholesterol levels. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 1 g",
      "Protein: 5 g ",
      " Healthy Fats: Monounsaturated and polyunsaturated fats ",
      " Sugars: 1 gram ",
      "Calcium: 28 milligrams",
    ],
    price: 750,
  },
  {
    id: "allProducts10",
    name: "Cashew (Kajoo)",
    image: "./Products/nuts/Cashew/Cashews-Raw-320.jpg",
    desc: "Rs 750 - (250g) per pack",
    roasted: false,
    salted: false,
    normal: true,
    category: "Cashew",
    benefits:
      "Rich in antioxidants, including vitamin E, cashews help protect cells from oxidative stress. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Magnesium: 74 milligrams",
      "Protein: 6 g ",
      " Copper: 0.6 milligrams ",
      " Vitamin E: 0.3 milligrams ",
      "Zinc: 1.6 milligrams",
    ],
    price: 750,
  },
  {
    id: "allProducts11",
    name: "Cashew Pieces (Roasted + Salted)",
    image: "./Products/nuts/Cashew/Cashew-Pieces-Roasted-Salted.jpg",
    desc: "Rs 950 - (250g) per pack",
    roasted: true,
    salted: true,
    normal: false,
    category: "Cashew",
    benefits:
      "The combination of healthy fats, protein, and salt in roasted and salted cashew pieces may contribute to satiety and weight management. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Carbohydrates: 8 grams",
      "Potassium: 166 milligrams ",
      " Phosphorous: 168 milligrams ",
      " Sodium: Varies with respect to amount of salt ",
      "Iron: 1 milligrams",
    ],
    price: 950,
  },
  {
    id: "allProducts12",
    name: "Cashew Pieces (Roasted)",
    image: "./Products/nuts/Cashew/Cashew-Pieces-Roasted-Unsalted.jpg",
    desc: "Rs 900 - (250g) per pack",
    roasted: true,
    salted: false,
    normal: false,
    category: "Cashew",
    benefits:
      "The combination of magnesium, phosphorus, and copper supports overall bone health. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Folate: 6 micrograms",
      "Calcium: 10 milligrams ",
      " Magnesium: 74 milligrams ",
      " Phosphorous: 168 milligrams ",
      "Copper: 0.6 milligrams",
    ],
    price: 900,
  },
  {
    id: "allProducts13",
    name: "Cashew (Roasted + Salted)",
    image: "./Products/nuts/Cashew/Cashews-Roasted-Salted-240.jpg",
    desc: "Rs 950 - (250g) per pack",
    roasted: true,
    salted: true,
    normal: false,
    category: "Cashew",
    benefits:
      "Roasted and salted cashews, despite the added salt, still contain monounsaturated fats, promoting heart health by helping to lower bad cholesterol levels. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 1 g",
      "Protein: 5 g ",
      "Protein: 6 g ",
      " Copper: 0.6 milligrams ",
      " Phosphorous: 168 milligrams ",
    ],
    price: 950,
  },
  {
    id: "allProducts14",
    name: "Cashew (Roasted)",
    image: "./Products/nuts/Cashew/Cashews-Roasted-Unsalted-240.jpg",
    desc: "Rs 900 - (250g) per pack",
    roasted: true,
    salted: false,
    normal: false,
    category: "Cashew",
    benefits:
      "Roasted cashews provide antioxidants, including vitamin E, helping protect cells from oxidative stress. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      " Sugars: 1 gram ",
      "Calcium: 28 milligrams",
      " Vitamin E: 0.3 milligrams ",
      "Folate: 6 micrograms",
      "Calcium: 10 milligrams ",
    ],
    price: 900,
  },
  {
    id: "allProducts15",
    name: "Hazelnut Blanched (kundakh)",
    image: "./Products/nuts/HazelNuts/Blanched-Hazelnuts.jpg",
    desc: "Rs 700 - (250g) per pack",
    roasted: false,
    salted: false,
    normal: true,
    category: "Hazelnut",
    benefits:
      "Hazelnuts contain nutrients that may contribute to stress reduction. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Magnesium: 46 milligrams.",
      "Biotin (Vitamin B7): 7 micrograms.",
      "Riboflavin (Vitamin B2): milligrams.",
      " Folate: 29 micrograms.",
      "Manganese: 1 milligram.",
    ],
    price: 700,
  },
  {
    id: "allProducts16",
    name: "Filberts (kundakh)",
    image: "./Products/nuts/HazelNuts/Filberts-Raw.jpg",
    desc: "Rs 600 - (250g) per pack",
    roasted: false,
    salted: false,
    normal: true,
    category: "Hazelnut",
    benefits:
      " Filberts provide antioxidants crucial for overall health. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Beta-Carotene: 0.4 micrograms.",
      "Omega-9 Fatty Acids: 3 grams. ",
      " Dietary Fiber: 1.9 grams.",
      " Phosphorus: 72.5 milligrams.",
      "Vitamin C: 1.8 milligrams.",
    ],
    price: 600,
  },
  {
    id: "allProducts17",
    name: "Filberts (Roasted)",
    image: "./Products/nuts/HazelNuts/Filberts-Roasted-Unsalted.jpg",
    desc: "Rs 980 - (250g) per pack",
    roasted: true,
    salted: false,
    normal: false,
    category: "Hazelnut",
    benefits:
      "Nutrients important for blood health are present in roasted filberts. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Iron: 1.3 milligrams.",
      "Vitamin K: 4 micrograms.",
      "Manganese: 1.8 milligrams.",
      "Protein: 2.5 grams.",
      "Dietary Fiber: 1.9 grams.",
    ],
    price: 980,
  },
  {
    id: "allProducts18",
    name: "Filberts (Roasted + Salted)",
    image: "./Products/nuts/HazelNuts/Macadamia-Nuts-Roasted-Salted.jpg",
    desc: "Rs 1050 - (250g) per pack",
    roasted: true,
    salted: true,
    normal: false,
    category: "Hazelnut",
    benefits:
      "he fiber content supports a healthy digestive system. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Soluble Fiber: 0.5 grams.",
      "Insoluble Fiber: 1 gram.",
      " Sodium: 190 milligrams.",
      " Beta-Carotene: 0.4 micrograms.",
      "Manganese: 1.8 milligrams.",
    ],
    price: 1050,
  },
  {
    id: "allProducts19",
    name: "Hazelnuts In Shell (Kundakh)",
    image: "./Products/nuts/HazelNuts/Hazelnuts-In-Shell.png",
    desc: "Rs 600 - (250g) per pack",
    roasted: false,
    salted: false,
    normal: true,
    category: "Hazelnut",
    benefits:
      "The shell of hazelnuts may have antibacterial properties. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Tannins: Present in the shell, known for their antibacterial effects.",
      "Iron: 1.2 milligrams.",
      " Protein: 2.7 grams.",
      " Vitamin B6: 0.2 milligrams.",
      "Calcium: 20 milligrams.",
    ],
    price: 600,
  },
  {
    id: "allProducts20",
    name: "Macadamia nuts",
    image: "./Products/nuts/Macadamia-Nuts/Macadamia-Nuts-Raw.jpg",
    desc: "Rs 900 - (250g) per pack",
    roasted: false,
    salted: false,
    normal: true,
    category: "MacadamiaNuts",
    benefits:
      "Macadamia nuts support brain health with specific nutrients. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Thiamine (Vitamin B1): 0.2 milligrams.",
      "Soluble Fiber: 0.6 grams.",
      " Vitamin E: 0.5 milligrams.",
      " Selenium: 3.6 micrograms.",
      "Monounsaturated Fats: 16.4 grams.",
    ],
    price: 900,
  },
  {
    id: "allProducts21",
    name: "Macadamia nuts (Roasted)",
    image: "./Products/nuts/Macadamia-Nuts/Macadamia-Nuts-Roasted-Unsalted.jpg",
    desc: "Rs 1200 - (250g) per pack",
    roasted: true,
    salted: false,
    normal: false,
    category: "MacadamiaNuts",
    benefits:
      "Roasted macadamia nuts contribute to skin health with specific nutrients. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Copper: 0.3 milligrams.",
      "Vitamin B6: 0.1 milligrams.",
      " Protein: 2.2 grams.",
      " Dietary Fiber: 2.4 grams.",
      "Phosphorus: 54 milligrams.",
    ],
    price: 1200,
  },
  {
    id: "allProducts22",
    name: "Macadamia nuts (Roasted + Salted)",
    image: "./Products/nuts/Macadamia-Nuts/Macadamia-Nuts-Roasted-Salted.jpg",
    desc: "Rs 1300 - (250g) per pack",
    roasted: true,
    salted: true,
    normal: false,
    category: "MacadamiaNuts",
    benefits:
      " Roasted + Salted macadamia nuts support brain health with specific nutrients. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Manganese: 1.2 milligrams.",
      "Magnesium: 48 milligrams.",
      " Iron: 0.4 milligrams. ",
      "Zinc: 0.3 milligrams.",
      "Sodium: 46 milligrams.",
    ],
    price: 1300,
  },
  {
    id: "allProducts23",
    name: "Peanuts (Moong Phali)",
    image: "./Products/nuts/Peanuts/Raw-Peanuts.jpg",
    desc: "Rs 300 - (250g) per pack",
    roasted: false,
    salted: false,
    normal: true,
    category: "Peanuts",
    benefits:
      "Peanuts are rich in monounsaturated and polyunsaturated fats, promoting cardiovascular health. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Monounsaturated Fats: 7.3 grams.",
      "Polyunsaturated Fats: 4 grams.",
      " Resveratrol: 1.6 micrograms.",
      "Niacin (Vitamin B3): 2 milligrams.",
      "Folate: 41 micrograms.",
    ],
    price: 300,
  },
  {
    id: "allProducts24",
    name: "Peanuts Readskin (Roasted)",
    image: "./Products/nuts/Peanuts/Peanuts-Roasted-Unsalted.jpg",
    desc: "Rs 350 - (250g) per pack",
    roasted: true,
    salted: false,
    normal: false,
    category: "Peanuts",
    benefits:
      "Roasted redskin peanuts are a good source of plant-based protein. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Protein: 7 grams.",
      "Calcium: 14 milligrams. ",
      " Zinc: 0.9 milligrams. ",
      " Phosphorus: 107 milligrams. ",
      "Copper: 0.3 milligrams.",
    ],
    price: 350,
  },
  {
    id: "allProducts25",
    name: "Peanuts Readskin (Roasted + Salted)",
    image: "./Products/nuts/Peanuts/Peanuts-Roasted-Salted.jpg",
    desc: "Rs 375 - (250g) per pack",
    roasted: true,
    salted: true,
    normal: false,
    category: "Peanuts",
    benefits:
      "The fiber content supports a healthy digestive system. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Soluble Fiber: 0.5 grams.",
      "Insoluble Fiber: 2.2 grams.",
      "Dietary Fiber: 2.7 grams.",
      " Manganese: 0.6 milligrams.",
      "Magnesium: 50 milligrams.",
    ],
    price: 375,
  },
  {
    id: "allProducts26",
    name: "Peanuts (Roasted)",
    image: "./Products/nuts/Peanuts/Peanuts-Roasted-Unsalted.jpg",
    desc: "Rs 350 - (250g) per pack",
    roasted: true,
    salted: false,
    normal: false,
    category: "Peanuts",
    benefits:
      "Roasted peanuts provide nutrients crucial for energy metabolism. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Phosphorus: 107 milligrams.",
      "Vitamin E: 2.2 milligrams.",
      "Polyunsaturated Fats: 4 grams. ",
      " Monounsaturated Fats: 7.3 grams.",
      "Copper: 0.3 milligrams.",
    ],
    price: 350,
  },
  {
    id: "allProducts27",
    name: "Peanuts (Roasted + Salted)",
    image: "./Products/nuts/Peanuts/Peanuts-Roasted-Salted.jpg",
    desc: "Rs 375 - (250g) per pack",
    roasted: true,
    salted: true,
    normal: false,
    category: "Peanuts",
    benefits:
      " Roasted + Salted peanuts support brain health with specific nutrients. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Niacin (Vitamin B3): 2 milligrams.",
      "Folate: 41 micrograms.",
      "Iron: 0.6 milligrams.",
      "Calcium: 14 milligrams.",
      "Zinc: 0.9 milligrams.",
    ],
    price: 375,
  },
  {
    id: "allProducts28",
    name: "Pecans (Pekan)",
    image: "./Products/nuts/Pecans/Pecans-Raw.jpg",
    desc: "Rs 1450 - (250g) per pack",
    roasted: false,
    salted: false,
    normal: true,
    category: "Pecans",
    benefits:
      "Pecans support brain health with specific nutrients. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Thiamine (Vitamin B1): 0.2 milligrams.",
      "Copper: 0.3 milligrams. ",
      " Ellagic Acid: 0.6 milligrams.",
      " Vitamin E: 0.7 milligrams. ",
      "Monounsaturated Fats: 11.5 grams.",
    ],
    price: 1450,
  },
  {
    id: "allProducts29",
    name: "Pecans (Roasted)",
    image: "./Products/nuts/Pecans/Pecans-Roasted-Unsalted.jpg",
    desc: "Rs 1650 - (250g) per pack",
    roasted: true,
    salted: false,
    normal: false,
    category: "Pecans",
    benefits:
      "Roasted pecans contribute to skin health with specific vitamins. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Vitamin A: 16 micrograms.",
      "Vitamin C: 0.6 milligrams.",
      " Protein: 2.7 grams.",
      " Calcium: 20 milligrams. ",
      "Phosphorus: 63 milligrams.",
    ],
    price: 1650,
  },
  {
    id: "allProducts30",
    name: "Pine Nuts (Chilghoza)",
    image: "./Products/nuts/Pine-Nuts/Mediterranean-Pine-Nuts-Pignolias.jpg",
    desc: "Rs 3900 - (250g) per pack",
    roasted: false,
    salted: false,
    normal: true,
    category: "PineNuts",
    benefits:
      "Pine nuts provide antioxidants crucial for overall health. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Vitamin E: 9.3 milligrams.",
      "Zinc: 6.5 milligrams.",
      " Thiamine (Vitamin B1): 0.4 milligrams.",
      " Copper: 1.6 milligrams. ",
      "Magnesium: 168 milligrams.",
    ],
    price: 3900,
  },
  {
    id: "allProducts31",
    name: "Pistachios (Pista)",
    image: "./Products/nuts/Pistachios/Raw-Pistachios-Kernels-California.jpg",
    desc: "Rs 850 - (250g) per pack",
    roasted: false,
    salted: false,
    normal: true,
    category: "Pistachios",
    benefits:
      "Pistachios support brain health with specific nutrients. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Vitamin B6: 0.5 milligrams.",
      "Lutein and Zeaxanthin: 370 micrograms.",
      " Vitamin E: 2.9 milligrams. ",
      "Monounsaturated Fats: 6.6 grams.",
      "Polyunsaturated Fats: 3.9 grams.",
    ],
    price: 850,
  },
  {
    id: "allProducts32",
    name: "Pistachios (Roasted)",
    image: "./Products/nuts/Pistachios/Pistachios-Roasted-Unsalted.jpg",
    desc: "Rs 950 - (250g) per pack",
    roasted: true,
    salted: false,
    normal: false,
    category: "Pistachios",
    benefits:
      "The fiber content supports a healthy digestive system. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Soluble Fiber: 1.3 grams.",
      "Insoluble Fiber: 1.7 grams. ",
      "Protein: 6 grams.",
      " Dietary Fiber: 3 grams.",
      "Copper: 0.7 milligrams.",
    ],
    price: 950,
  },
  {
    id: "allProducts33",
    name: "Pistachios (Roasted + Salted)",
    image: "./Products/nuts/Pistachios/Roasted-Salted-Pistachios.jpg",
    desc: "Rs 1050 - (250g) per pack",
    roasted: true,
    salted: true,
    normal: false,
    category: "Pistachios",
    benefits:
      "The addition of salt contributes to sodium intake. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Sodium: 158 milligrams.",
      "Iron: 1.1 milligrams.",
      "Folate: 14 micrograms.",
      " Calcium: 31 milligrams.",
      "Zinc: 0.5 milligrams.",
    ],
    price: 1050,
  },
  {
    id: "allProducts34",
    name: "Pumpkin Seeds (Kaddu ka beej)",
    image:
      "./Products/nuts/Pumpkin-Seeds/Pumpkin-Kernels-No-Shell-Pumpkin-Seeds.jpg",
    desc: "Rs 700 - (250g) per pack",
    roasted: false,
    salted: false,
    normal: true,
    category: "PumpkinSeeds",
    benefits:
      " Pumpkin seeds are known for their potential benefits for prostate health in men. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Phytosterols: 32 milligrams.",
      "Zinc: 2.2 milligrams. ",
      " Vitamin E: 2.4 milligrams. ",
      " Iron: 4.2 milligram ",
      "Phosphorus: 265 milligrams.",
    ],
    price: 700,
  },
  {
    id: "allProducts35",
    name: "Pumpkin Seeds (Roasted)",
    image:
      "./Products/nuts/Pumpkin-Seeds/Pumpkin-In-Shell-Roasted-Unsalted.jpg",
    desc: "Rs 850 - (250g) per pack",
    roasted: true,
    salted: false,
    normal: false,
    category: "PumpkinSeeds",
    benefits:
      " Roasted pumpkin seeds promote heart health with a mix of healthy fats. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Monounsaturated Fats: 3.1 grams.",
      "Polyunsaturated Fats: 6 grams. ",
      " Magnesium: 168 milligrams.",
      " Copper: 0.4 milligrams.",
      "Manganese: 0.9 milligrams.",
    ],
    price: 850,
  },
  {
    id: "allProducts36",
    name: "Pumpkin Seeds (Roasted + Salted)",
    image: "./Products/nuts/Pumpkin-Seeds/Pumpkin-In-Shell-Roasted-Salted.jpg",
    desc: "Rs 900 - (250g) per pack",
    roasted: true,
    salted: true,
    normal: false,
    category: "PumpkinSeeds",
    benefits:
      "The combination of healthy fats, protein, and fiber aids in satiety. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Protein: 9 grams.",
      "Dietary Fiber: 1.7 grams.",
      "Arginine: 0.8 grams ",
      " Pumpkin Seed Oil Content: 12 grams  ",
      "Phospholipids: 318 milligrams",
    ],
    price: 900,
  },
  {
    id: "allProducts37",
    name: "Pumpkin Seeds (Roasted + Salted)",
    image: "./Products/nuts/Pumpkin-Seeds/Pumpkin-Kernels-Roasted-Salted.jpg",
    desc: "Rs 900 - (250g) per pack",
    roasted: true,
    salted: true,
    normal: false,
    category: "PumpkinSeeds",
    benefits:
      "Roasted + Salted pumpkin seeds contribute to a healthy immune system. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Zinc: 2.2 milligrams.",
      "Tryptophan: 166 milligrams",
      " Selenium: 10 micrograms",
      "eaxanthin: 140 micrograms",
      "Vitamin E: 2.4 milligrams.",
    ],
    price: 900,
  },
  {
    id: "allProducts38",
    name: "Pumpkin Seeds (Roasted)",
    image: "./Products/nuts/Pumpkin-Seeds/Pumpkin-Kernels-Roasted-Unsalted.jpg",
    desc: "Rs 850 - (250g) per pack",
    roasted: true,
    salted: false,
    normal: false,
    category: "PumpkinSeeds",
    benefits:
      "Roasted pumpkin seeds provide antioxidants crucial for overall health. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Beta-Sitosterol: 21 milligrams ",
      "Gamma-Tocopherol: 0.9 milligrams",
      " Cucurbitacin: 0.5 milligrams",
      " Vitamin E: 2.4 milligrams.",
      "Iron: 4.2 milligrams.",
    ],
    price: 850,
  },
  {
    id: "allProducts39",
    name: "Sunflower seeds (Surajmukhi ke beej)",
    image: "./Products/nuts/Sunflower-Seeds/Sunflower-Kernels-Raw.jpg",
    desc: "Rs 250 - (250g) per pack",
    roasted: false,
    salted: false,
    normal: true,
    category: "SunflowerSeeds",
    benefits:
      "Sunflower seeds contain compounds with potential anti-inflammatory effects. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Vitamin E: 7.4 milligrams.",
      "Selenium: 31 micrograms. ",
      "Copper: 0.8 milligrams. ",
      " Iron: 2.7 milligrams.",
      "Zinc: 2.5 milligrams.",
    ],
    price: 250,
  },
  {
    id: "allProducts40",
    name: "Sunflower seeds (Roasted)",
    image:
      "./Products/nuts/Sunflower-Seeds/Sunflower-In-Shell-Roasted-Unsalted.jpg",
    desc: "Rs 1150 - (250g) per pack",
    roasted: true,
    salted: false,
    normal: false,
    category: "SunflowerSeeds",
    benefits:
      "Roasted sunflower seeds provide nutrients crucial for energy metabolism. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Vitamin B6: 0.4 milligrams.",
      "Magnesium: 113 milligrams.",
      " Calcium: 20 milligrams. ",
      " Choline: 38 milligrams.",
      "Phytosterols: 55 milligrams.",
    ],
    price: 1150,
  },
  {
    id: "allProducts41",
    name: "Sunflower seeds (Roasted + salted)",
    image:
      "./Products/nuts/Sunflower-Seeds/Sunflower-In-Shell-Roasted-Salted.jpg",
    desc: "Rs 1400 - (250g) per pack",
    roasted: true,
    salted: true,
    normal: false,
    category: "SunflowerSeeds",
    benefits:
      " Roasted + salted sunflower seeds contribute to heart health with a good balance of healthy fats. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Monounsaturated Fats: 5 grams.",
      "Polyunsaturated Fats: 9 grams.",
      " Protein: 8 grams.",
      " Lysine: 0.4 grams.",
      "Molybdenum: 13 micrograms.",
    ],
    price: 1400,
  },
  {
    id: "allProducts42",
    name: "Sunflower seeds (Roasted)",
    image:
      "./Products/nuts/Sunflower-Seeds/Sunflower-Kernels-Roasted-Unsalted.jpg",
    desc: "Rs 1350 - (250g) per pack",
    roasted: true,
    salted: false,
    normal: false,
    category: "SunflowerSeeds",
    benefits:
      " Roasted sunflower seeds support brain health with specific nutrients. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Thiamine (Vitamin B1): 0.4 milligrams.",
      "Manganese: 0.9 milligrams.",
      " Pantothenic Acid (Vitamin B5): 0.8 milligrams.",
      " Tocopherols (Gamma-Tocopherol): 7.4 milligrams.",
      "Lignans: 0.1 grams.",
    ],
    price: 1350,
  },
  {
    id: "allProducts43",
    name: "Sunflower seeds (Roasted + Salted)",
    image:
      "./Products/nuts/Sunflower-Seeds/Sunflower-Kernels-Roasted-Salted.jpg",
    desc: "Rs 1400 - (250g) per pack",
    roasted: true,
    salted: true,
    normal: false,
    category: "SunflowerSeeds",
    benefits:
      "The combination of minerals and fiber aids in satiety. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Dietary Fiber: 3.6 grams.",
      "Phosphorus: 329 milligrams. ",
      " Carnitine: 1.5 milligrams.",
      " Zeaxanthin: 28 micrograms.",
      "Squalene: 7 milligrams.",
    ],
    price: 1400,
  },
  {
    id: "allProducts44",
    name: "Walnuts (Akhrot)",
    image: "./Products/nuts/Walnuts/Walnuts-In-Shell.png",
    desc: "Rs 330 - (250g) per pack",
    roasted: false,
    salted: false,
    normal: true,
    category: "Walnuts",
    benefits:
      "Walnuts are heart-friendly, rich in omega-3 fatty acids. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Omega-3 Fatty Acids (ALA): 2.6 grams.",
      "Ellagic Acid: 5.6 milligrams. ",
      " Protein: 4.3 grams.",
      " DHA (Omega-3 Fatty Acid): 21 milligrams.",
      "Dietary Fiber: 1.9 grams.",
    ],
    price: 330,
  },
];

const listProducts = allProducts.filter((product) => product.normal == true);

const specialProducts = [
  {
    id: "specialProducts1",
    name: "Circle of Delights",
    image:
      "./Images/Leonardo_Diffusion_XL_Create_an_image_of_a_dry_fruit_gift_pack_0-removebg-preview.png",
    desc: "Rs 2250",
    benefits:
      "Almonds boast an impressive nutrient profile.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 3.5 g",
      "Protein: 6 g ",
      " Fat: 14 g (9 of which are monounsaturated) ",
      " Vitamin E: 48% of the daily value (DV) ",
      "Manganese: 27% of the DV",
    ],
    price: 2250,
  },
  {
    id: "specialProducts2",
    name: "Golden Symphony",
    image:
      "./Images/SDXL_09_Create_an_image_of_a_dry_fruits_gift_pack_with_multip_3-removebg-preview.png",
    desc: "Rs 4500",
    benefits:
      "Almonds boast an impressive nutrient profile.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 3.5 g",
      "Protein: 6 g ",
      " Fat: 14 g (9 of which are monounsaturated) ",
      " Vitamin E: 48% of the daily value (DV) ",
      "Manganese: 27% of the DV",
    ],
    price: 4500,
  },
  {
    id: "specialProducts3",
    name: "Harvest Jar Bliss",
    image:
      "./Images/Leonardo_Diffusion_XL_Create_an_image_of_a_packed_jar_of_mix_d_3-removebg-preview.png",
    desc: "Rs 1850",
    benefits:
      "Almonds boast an impressive nutrient profile.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 3.5 g",
      "Protein: 6 g ",
      " Fat: 14 g (9 of which are monounsaturated) ",
      " Vitamin E: 48% of the daily value (DV) ",
      "Manganese: 27% of the DV",
    ],
    price: 1850,
  },
  {
    id: "specialProducts4",
    name: "Bountiful Bowl Medley",
    image:
      "./Images/Leonardo_Diffusion_XL_Create_an_image_of_ajar_of_mix_dry_fruit_1-removebg-preview.png",
    desc: "Rs 1700",
    benefits:
      "Almonds boast an impressive nutrient profile.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 3.5 g",
      "Protein: 6 g ",
      " Fat: 14 g (9 of which are monounsaturated) ",
      " Vitamin E: 48% of the daily value (DV) ",
      "Manganese: 27% of the DV",
    ],
    price: 1700,
  },
  {
    id: "specialProducts5",
    name: "Ruby Red Elegance",
    image:
      "./Images/Leonardo_Diffusion_XL_Create_an_image_of_a_dry_fruits_gift_pac_1-removebg-preview.png",
    desc: "Rs 2500",
    benefits:
      "Almonds boast an impressive nutrient profile.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 3.5 g",
      "Protein: 6 g ",
      " Fat: 14 g (9 of which are monounsaturated) ",
      " Vitamin E: 48% of the daily value (DV) ",
      "Manganese: 27% of the DV",
    ],
    price: 2500,
  },
  {
    id: "specialProducts6",
    name: "Azure Harmony Box",
    image:
      "./Images/Leonardo_Diffusion_XL_Create_an_image_of_a_dry_fruit_gift_pack_2-removebg-preview.png",
    desc: "Rs 1500",
    benefits:
      "Almonds boast an impressive nutrient profile.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 3.5 g",
      "Protein: 6 g ",
      " Fat: 14 g (9 of which are monounsaturated) ",
      " Vitamin E: 48% of the daily value (DV) ",
      "Manganese: 27% of the DV",
    ],
    price: 1500,
  },
  {
    id: "specialProducts7",
    name: "Grand Orchard Basket",
    image:
      "./Images/Leonardo_Diffusion_XL_Create_an_image_of_a_dry_fruit_gift_bask_0-removebg-preview.png",
    desc: "Rs 6900",
    benefits:
      "Almonds boast an impressive nutrient profile.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 3.5 g",
      "Protein: 6 g ",
      " Fat: 14 g (9 of which are monounsaturated) ",
      " Vitamin E: 48% of the daily value (DV) ",
      "Manganese: 27% of the DV",
    ],
    price: 6900,
  },
  {
    id: "specialProducts8",
    name: "Duo Essence Delight",
    image:
      "./Images/Leonardo_Diffusion_XL_Create_an_image_of_a_dry_ribbon_packed_d_3-removebg-preview (1).png",
    desc: "Rs 800",
    benefits:
      "Almonds boast an impressive nutrient profile.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 3.5 g",
      "Protein: 6 g ",
      " Fat: 14 g (9 of which are monounsaturated) ",
      " Vitamin E: 48% of the daily value (DV) ",
      "Manganese: 27% of the DV",
    ],
    price: 800,
  },
];

const limitedProducts = [
  {
    id: "limitedProducts1",
    name: "Almonds (Roasted + Salted)",
    image: "./Products/nuts/Almond/Almonds-Roasted-Salted.jpg",
    desc: "Rs 900 - (250g) per pack",
    benefits:
      "The combination of healthy fats, protein, and salt can help satisfy hunger and curb cravings. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Fiber: 3.36 g",
      "Protein: 6 g ",
      " Manganesium: 76 milligrams ",
      " Vitamin E: 7 milligrams ",
      "Copper: 0.29 milligrams",
    ],
    price: 900,
  },
  {
    id: "limitedProducts2",
    name: "Pistachios (Roasted)",
    image: "./Products/nuts/Pistachios/Pistachios-Roasted-Unsalted.jpg",
    desc: "Rs 950 - (250g) per pack",
    benefits:
      "The fiber content supports a healthy digestive system. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Soluble Fiber: 1.3 grams.",
      "Insoluble Fiber: 1.7 grams. ",
      "Protein: 6 grams.",
      " Dietary Fiber: 3 grams.",
      "Copper: 0.7 milligrams.",
    ],
    price: 950,
  },
  {
    id: "limitedProducts3",
    name: "Pine Nuts (Chilghoza)",
    image: "./Products/nuts/Pine-Nuts/Mediterranean-Pine-Nuts-Pignolias.jpg",
    desc: "Rs 3900 - (250g) per pack",
    benefits:
      "Pine nuts provide antioxidants crucial for overall health. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Vitamin E: 9.3 milligrams.",
      "Zinc: 6.5 milligrams.",
      " Thiamine (Vitamin B1): 0.4 milligrams.",
      " Copper: 1.6 milligrams. ",
      "Magnesium: 168 milligrams.",
    ],
    price: 3900,
  },
  {
    id: "limitedProducts4",
    name: "Dried Kiwi",
    image: "./Products/dried-fruits/Dried-Kiwi.jpg",
    desc: "Rs 850 - (250g) per pack",
    benefits:
      "Kiwi contains antioxidants that help protect cells from oxidative stress.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Vitamin C: 50 milligrams.",
      "Total Sugars: 14 grams. ",
      " Vitamin K: 17 micrograms. ",
      " Folate: 6 micrograms.",
      "Dietary Fiber: 2.3 grams.",
    ],
    price: 850,
  },
  {
    id: "limitedProducts5",
    name: "Dried Apple Rings",
    image: "./Products/dried-fruits/Dried-Apple-Rings.jpg",
    desc: "Rs 450 - (250g) per pack",
    benefits:
      "Dried apple rings are a good source of dietary fiber, promoting digestive health.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Dietary Fiber: 3.7 grams.",
      "Quercetin: 1.4 milligrams. ",
      " Total Sugars: 18 grams. ",
      " Fructose: 9 grams. ",
      "Glucose: 7 grams.",
    ],
    price: 450,
  },
  {
    id: "limitedProducts6",
    name: "Sunflower seeds (Roasted + Salted)",
    image:
      "./Products/nuts/Sunflower-Seeds/Sunflower-Kernels-Roasted-Salted.jpg",
    desc: "Rs 1400 - (250g) per pack",
    benefits:
      "The combination of minerals and fiber aids in satiety. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Dietary Fiber: 3.6 grams.",
      "Phosphorus: 329 milligrams. ",
      " Carnitine: 1.5 milligrams.",
      " Zeaxanthin: 28 micrograms.",
      "Squalene: 7 milligrams.",
    ],
    price: 1400,
  },
  {
    id: "limitedProducts7",
    name: "Dried Mango",
    image: "./Products/dried-fruits/Dried-Mango.jpg",
    desc: "Rs 1300 - (250g) per pack",
    benefits:
      "Dried mango is rich in vitamin A, crucial for vision and immune health.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Vitamin A: 1350 micrograms (RAE).",
      "Potassium: 115 milligrams. ",
      "Vitamin E: 1.1 milligrams. ",
      "Dietary Fiber: 2 grams",
      "Total Sugars: 18 grams.",
    ],
    price: 1300,
  },
  {
    id: "limitedProducts8",
    name: "Peanuts Readskin (Roasted + Salted)",
    image: "./Products/nuts/Peanuts/Peanuts-Roasted-Salted.jpg",
    desc: "Rs 375 - (250g) per pack",
    benefits:
      "The fiber content supports a healthy digestive system. <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Soluble Fiber: 0.5 grams.",
      "Insoluble Fiber: 2.2 grams.",
      "Dietary Fiber: 2.7 grams.",
      " Manganese: 0.6 milligrams.",
      "Magnesium: 50 milligrams.",
    ],
    price: 375,
  },
];
const RoastedProducts = allProducts.filter(
  (product) => product.roasted == true
);

const SaltedProducts = allProducts.filter((product) => product.salted == true);

const DriedProducts = [
  {
    id: "driedProducts1",
    name: "Apple Rings",
    image: "./Products/dried-fruits/Dried-Apple-Rings.jpg",
    desc: "Rs 450 - (250g) per pack",
    benefits:
      "Dried apple rings are a good source of dietary fiber, promoting digestive health.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Dietary Fiber: 3.7 grams.",
      "Quercetin: 1.4 milligrams. ",
      " Total Sugars: 18 grams. ",
      " Fructose: 9 grams. ",
      "Glucose: 7 grams.",
    ],
    price: 450,
  },
  {
    id: "driedProducts2",
    name: "Apricots",
    image: "./Products/dried-fruits/Dried-Apricots-Turkish.jpg",
    desc: "Rs 400 - (250g) per pack",
    benefits:
      "Dried apricots are high in vitamin A, crucial for vision and immune health.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Vitamin A: 1080 micrograms (RAE).",
      "Beta-Carotene: 605 micrograms. ",
      " Lutein + Zeaxanthin: 350 micrograms.",
      " Potassium: 259 milligrams. ",
      "Total Sugars: 16 grams.",
    ],
    price: 400,
  },
  {
    id: "driedProducts3",
    name: "Banana Chips",
    image: "./Products/dried-fruits/Dried-Banana-Chips.jpg",
    desc: "Rs 900 - (250g) per pack",
    benefits:
      "Dried banana chips provide a quick source of natural sugars for an energy boost.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Total Sugars: 14 grams.",
      "Phosphorus: 14 milligrams.",
      " Calories: 153 calories. ",
      " Magnesium: 26 milligrams.",
      "Total Fat: 8 grams.",
    ],
    price: 900,
  },
  {
    id: "driedProducts4",
    name: "Blueberries",
    image: "./Products/dried-fruits/Dried-Blueberries.jpg",
    desc: "Rs 1250 - (250g) per pack",
    benefits:
      " Dried blueberries are rich in antioxidants, supporting overall health.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Anthocyanins: 90 milligrams.",
      "Quercetin: 1.5 milligrams.",
      " Total Sugars: 18 grams.",
      " Vitamin K: 14 micrograms. ",
      "Iron: 0.3 milligrams.",
    ],
    price: 1250,
  },
  {
    id: "driedProducts5",
    name: "Cantaloupe",
    image: "./Products/dried-fruits/Dried-Cantaloupe.jpg",
    desc: "Rs 350 - (250g) per pack",
    benefits:
      "Cantaloupe, even when dried, can provide essential vitamins like vitamin A and vitamin C, contributing to immune health.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Vitamin A: Varies, 600-800 micrograms (RAE).",
      "Vitamin C: Varies, 10-20 milligrams. ",
      " Total Sugars: Varies, 14-18 grams.",
      "Potassium: Varies, 100-200 milligrams.",
      "Dietary Fiber: Varies, 1-3 grams.",
    ],
    price: 350,
  },
  {
    id: "driedProducts6",
    name: "Cranberries",
    image: "./Products/dried-fruits/Dried-Cranberries.jpg",
    desc: "Rs 1600 - (250g) per pack",
    benefits:
      " Cranberries are known for their potential benefits in supporting urinary tract health.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "PACs (Proanthocyanidins): 24 milligrams.",
      "Proanthocyanidins: 24 milligrams.",
      " No Cholesterol.",
      "Total Sugars: 20 grams.",
      "Total Fat: 0.3 grams.",
    ],
    price: 1600,
  },
  {
    id: "driedProducts7",
    name: "Dates Medjool",
    image: "./Products/dried-fruits/Dried-Dates-Medjool.jpg",
    desc: "Rs 200 - (250g) per pack",
    benefits:
      " Medjool dates serve as a natural sweetener, offering a healthier alternative to refined sugars.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Total Sugars: 18 grams.",
      "Vitamin B6: 0.1 milligrams.",
      " Copper: 0.1 milligrams. ",
      " Folate: 2 micrograms.",
      "Potassium: 167 milligrams.",
    ],
    price: 200,
  },
  {
    id: "driedProducts8",
    name: "Figs",
    image: "./Products/dried-fruits/Dried-Figs.jpg",
    desc: "Rs 900 - (250g) per pack",
    benefits:
      "Dried figs provide vitamin K, important for blood clotting and bone health.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Vitamin K: 3.4 micrograms.",
      "Dietary Fiber: 3.7 grams. ",
      " Total Sugars: 16 grams. ",
      " Calcium: 63 milligrams",
      "Calories: 81 calories.",
    ],
    price: 900,
  },
  {
    id: "driedProducts9",
    name: "Ginger",
    image: "./Products/dried-fruits/Dried-Ginger.jpg",
    desc: "Rs 500 - (250g) per pack",
    benefits:
      "Ginger has been traditionally used to alleviate various digestive issues, including nausea and indigestion.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Total Carbohydrates: 4.5 grams.",
      "Dietary Fiber: 0.6 grams. ",
      " Calories: 19 calories per 28 grams.",
      "Protein: 0.4 grams.",
      "Total Fat: 0.2 grams.",
    ],
    price: 500,
  },
  {
    id: "driedProducts10",
    name: "Kiwi",
    image: "./Products/dried-fruits/Dried-Kiwi.jpg",
    desc: "Rs 850 - (250g) per pack",
    benefits:
      "Kiwi contains antioxidants that help protect cells from oxidative stress.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Vitamin C: 50 milligrams.",
      "Total Sugars: 14 grams. ",
      " Vitamin K: 17 micrograms. ",
      " Folate: 6 micrograms.",
      "Dietary Fiber: 2.3 grams.",
    ],
    price: 850,
  },
  {
    id: "driedProducts11",
    name: "Mango",
    image: "./Products/dried-fruits/Dried-Mango.jpg",
    desc: "Rs 1300 - (250g) per pack",
    benefits:
      "Dried mango is rich in vitamin A, crucial for vision and immune health.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Vitamin A: 1350 micrograms (RAE).",
      "Potassium: 115 milligrams. ",
      "Vitamin E: 1.1 milligrams. ",
      "Dietary Fiber: 2 grams",
      "Total Sugars: 18 grams.",
    ],
    price: 1300,
  },
  {
    id: "driedProducts12",
    name: "Strawberry Slices",
    image: "./Products/dried-fruits/Dried-Papaya-Strawberry-Slices.jpg",
    desc: "Rs 1550 - (250g) per pack",
    benefits:
      " Dried strawberry slices are a good source of dietary fiber, promoting digestive health.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Dietary Fiber: 2.6 grams.",
      "Total Sugars: 15 grams.",
      " Vitamin C: 36 milligrams. ",
      " Folate: 6 micrograms ",
      "Manganese: 0.3 milligrams.",
    ],
    price: 1550,
  },
  {
    id: "driedProducts13",
    name: "Peaches",
    image: "./Products/dried-fruits/Dried-Peaches-1.jpg",
    desc: "Rs 975 - (250g) per pack",
    benefits:
      "These antioxidants are beneficial for eye health and may help protect against age-related macular degeneration.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Lutein: 42 micrograms.",
      "Zeaxanthin: 6 micrograms.",
      " Beta-Cryptoxanthin: 15 micrograms. ",
      "Boron: 30 micrograms",
      "Protein: 0.6 grams.",
    ],
    price: 975,
  },
  {
    id: "driedProducts14",
    name: "Pears",
    image: "./Products/dried-fruits/Dried-Pears.jpg",
    desc: "Rs 1650 - (250g) per pack",
    benefits:
      "Dried pears provide a naturally sweet and flavorful snack without added sugars.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Total Sugars: 17 grams.",
      "Dietary Fiber: 4 grams ",
      "Vitamin K: 3.6 micrograms. ",
      " Iron: 0.2 milligrams. ",
      "Calories: 96 calories.",
    ],
    price: 1650,
  },
  {
    id: "driedProducts15",
    name: "Pineapple Rings",
    image:
      "./Products/dried-fruits/Dried-Pineapple-Rings-No-Sugar-Low-Sulphur-Nutstop.jpg",
    desc: "Rs 1000 - (250g) per pack",
    benefits:
      "As a unique feature, dried pineapple rings contain bromelain, an enzyme with potential anti-inflammatory and digestive properties.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Bromelain: 50 milligrams.",
      "Caffeic Acid: 3 milligrams.",
      " Selenium: 0.1 micrograms.",
      " Phosphorus: 8 milligrams.",
      "Tryptophan: 10 milligrams.",
    ],
    price: 1000,
  },
  {
    id: "driedProducts16",
    name: "Prunes",
    image: "./Products/dried-fruits/Dried-Prunes.jpg",
    desc: "Rs 1000 - (250g) per pack",
    benefits:
      " Prunes are well-known for their natural laxative effect, promoting digestive regularity.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Potassium: 259 milligrams.",
      "Rich in Sorbitol",
      " Vitamin K: 59 micrograms. ",
      " Dietary Fiber: 3.9 grams. ",
      "Calories: 67 calories.",
    ],
    price: 1000,
  },
  {
    id: "driedProducts17",
    name: "Raisins",
    image: "./Products/dried-fruits/Dried-Raisins-Golden-Jumbo-Nutstop.jpg",
    desc: "Rs 375 - (250g) per pack",
    benefits:
      "Raisins provide a small amount of iron, supporting oxygen transport in the blood.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Iron: 0.5 milligrams.",
      "Boron: 40 micrograms.",
      " Potassium: 273 milligrams ",
      "Dietary Fiber: 1.3 grams. ",
      "Calories: 85 calories.",
    ],
    price: 375,
  },
  {
    id: "driedProducts18",
    name: "Red Cherries",
    image: "./Products/dried-fruits/Dried-Red-Sour-Cherries.jpg",
    desc: "Rs 925 - (250g) per pack",
    benefits:
      " Cherries contribute to potassium intake, important for heart health.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Potassium: 162 milligrams.",
      "Copper: 0.1 milligrams ",
      " Quercetin: 7 milligrams. ",
      " Vitamin K: 2 micrograms.",
      "Manganese: 0.1 milligrams.",
    ],
    price: 925,
  },
  {
    id: "driedProducts19",
    name: "Star Fruit",
    image: "./Products/dried-fruits/Dried-Star-Fruit.jpg",
    desc: "Rs 9000 - (250g) per pack",
    benefits:
      "Dried star fruit provides a small amount of iron, supporting oxygen transport in the blood.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Iron: 0.2 milligrams.",
      "Vitamin B(Pantothenic Acid): 0.2 milligrams.",
      "Total Sugars: 17 grams. ",
      " Dietary Fiber: 2 grams.",
      "Vitamin A: 60 micrograms (RAE).",
    ],
    price: 9000,
  },
  {
    id: "driedProducts20",
    name: "Strawberries",
    image: "./Products/dried-fruits/Dried-Strawberries.jpg",
    desc: "Rs 1500 - (250g) per pack",
    benefits:
      "Dried strawberries are a good source of vitamin C, supporting immune health.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Vitamin C: 49 milligrams.",
      "Dietary Fiber: 3.5 grams.",
      "Manganese: 0.6 milligrams. ",
      " Vitamin K: 2 micrograms. ",
      "Calories: 98 calories.",
    ],
    price: 1500,
  },
  {
    id: "driedProducts21",
    name: "Goji Berries",
    image: "./Products/dried-fruits/Goji-Berries.jpg",
    desc: "Rs 2000 - (250g) per pack",
    benefits:
      " Zeaxanthin, present in goji berries, is beneficial for eye health and may help protect against age-related macular degeneration.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Protein: 3 grams.",
      "Beta-Carotene: 7,000 micrograms.",
      " Selenium: 1 microgram.",
      "Vitamin C: 12 milligrams.",
      "Calories: 98 calories.",
    ],
    price: 2000,
  },
  {
    id: "driedProducts22",
    name: "Nectarines",
    image: "./Products/dried-fruits/Nectarines.jpg",
    desc: "Rs 10050 - (250g) per pack",
    benefits:
      "Nectarines contain niacin, supporting energy metabolism.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Niacin: 1 milligram.",
      "Beta-Cryptoxanthin: 10 micrograms. ",
      " Tryptophan: 7 milligrams ",
      " Riboflavin: 0.1 milligrams.",
      "Phosphorus: 15 milligrams.",
    ],
    price: 10050,
  },
  {
    id: "driedProducts23",
    name: "Guava",
    image: "./Products/dried-fruits/Organic-Dried-Guava.jpg",
    desc: "Rs 1600 - (250g) per pack",
    benefits:
      " Guava provides vitamin A, essential for vision and immune health.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Vitamin A: 285 micrograms (RAE).",
      "Potassium: 206 milligrams.",
      "Zeaxanthin: 7 micrograms. ",
      " Lycopene: 40 micrograms. ",
      "Calcium: 20 milligrams.",
    ],
    price: 1600,
  },
  {
    id: "driedProducts24",
    name: "Organic Jackfruit",
    image: "./Products/dried-fruits/Organic-Dried-Jackfruit.jpg",
    desc: "Rs 6250 - (250g) per pack",
    benefits:
      "Jackfruit contributes to magnesium intake, essential for muscle and nerve function.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Magnesium: 29 milligrams.",
      "Potassium: 231 milligrams. ",
      " Protein: 2 grams. ",
      " Calories: 98 calories. ",
      "Dietary Fiber: 4 grams.",
    ],
    price: 6250,
  },
  {
    id: "driedProducts25",
    name: "Tomatoes",
    image: "./Products/dried-fruits/Sun-Dried-Tomatoes.jpg",
    desc: "Rs 1850 - (250g) per pack",
    benefits:
      " Dried tomatoes are an excellent source of lycopene, a powerful antioxidant associated with various health benefits.  <br> 1-ounce (oz), or 28-gram (g):",
    keyPoints: [
      "Beta-Carotene: 400 micrograms.",
      "Phosphorus: 35 milligrams.",
      " Calcium: 20 milligrams. ",
      " Vitamin E: 2 milligrams.",
      "Zeaxanthin: 225 micrograms.",
    ],
    price: 1850,
  },
];

const Almonds = allProducts.filter((product) => product.category == "Almond");

const BrazilNut = allProducts.filter(
  (product) => product.category == "BrazilNut"
);

const Cashew = allProducts.filter((product) => product.category == "Cashew");

const HazelNut = allProducts.filter(
  (product) => product.category == "Hazelnut"
);

const MacadamiaNut = allProducts.filter(
  (product) => product.category == "MacadamiaNuts"
);

const Peanuts = allProducts.filter((product) => product.category == "Peanuts");

const Pecans = allProducts.filter((product) => product.category == "Pecans");

const PineNuts = allProducts.filter(
  (product) => product.category == "PineNuts"
);

const Pistachios = allProducts.filter(
  (product) => product.category == "Pistachios"
);

const PumpkinSeeds = allProducts.filter(
  (product) => product.category == "PumpkinSeeds"
);

const SunflowerSeeds = allProducts.filter(
  (product) => product.category == "SunflowerSeeds"
);

const Wallnuts = allProducts.filter((product) => product.category == "Walnuts");

// cards flipping functionality
function flipCard(event) {
  let card = event.target.closest(".card-inner");
  if (card) {
    card.classList.toggle("flipped");
  }
}

// LOADING SCREEN

let heroImg = document.querySelector('.hero-img');
let spinner = document.querySelector('.spinner-border');
let loadingScreen = document.querySelector('.loading')

let hasVisit = localStorage.getItem('firstVisit')

if (!hasVisit) {
  localStorage.setItem('firstVisit', true);
  loadingScreen.classList.remove('d-none')
}

const loading = () => {
    const loader = () => {
      spinner.classList.add('d-none')
      heroImg.style.transform = 'translateX(0)'  
      heroImg.style.opacity = '1'
    }
    const loadingEnd = () => {
      loadingScreen.style.transform = 'translateY(-100%)'
    }
    const homeShow = () => {
      loadingScreen.classList.add('d-none')
      document.querySelector('body').style.overflow = 'auto'
    }

      loadingScreen.classList.contains('d-none') && loadingScreen.classList.remove('d-none');
      document.querySelector('body').style.overflow = 'hidden'

      setTimeout(loader , 3000)
      setTimeout(loadingEnd , 3800)
      setTimeout(homeShow , 4300)

}

// End Loading Screen

// LOGIN BUTTON
const loginBtn = document.querySelector(".Login-button");
const checkoutValidateSec = document.getElementById("checkout-validate");
const isSmallScreen = window.innerWidth < 570;

const updateLogin = () => {
  loginBtn.innerHTML = isSmallScreen
    ? '<i class="fa-solid fa-user"></i>'
    : "Login";

  checkoutAddress.classList.toggle("px-5", !isSmallScreen);

  checkoutValidateSec.style.width = isSmallScreen ? "100%" : "90%";
};

const handleWindowChange = () => {
  updateLogin();
};

window.addEventListener("resize", updateLogin);
window.addEventListener("orientationchange", handleWindowChange);

document.addEventListener("DOMContentLoaded", () => {
  updateLogin();
});

let cartIconQuantity = document.querySelector(".cart-item-indicator");

// FOR ALL PRODUCTS
let ProductContainer = document.getElementById("allProducts");
ProductContainer.innerHTML = "";
listProducts.forEach((product) => {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-card");
  newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <div class="benefits-key">
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map((val) => `<li>${val}</li>`).join("")}
          </ul>
          </div>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `;
  ProductContainer.appendChild(newProduct);
});

ProductContainer.addEventListener("click", (e) => {
  let clickPosition = e.target;
  if (clickPosition.classList.contains("addCartBtn")) {
    let pro_id = clickPosition.parentElement.dataset.id;
    addToCart(pro_id);
  }
});
// FOR SPECIAL PRODUCTS

let specialProductContainer = document.getElementById("spcContainer");
specialProductContainer.innerHTML = "";

specialProducts.forEach((product) => {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-card");
  newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn spc-card-btn">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <div class="benefits-key">
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map((val) => `<li>${val}</li>`).join("")}
          </ul>
          </div>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `;
  specialProductContainer.appendChild(newProduct);
});

specialProductContainer.addEventListener("click", (e) => {
  let clickPosition = e.target;
  if (clickPosition.classList.contains("addCartBtn")) {
    let pro_id = clickPosition.parentElement.dataset.id;
    addToCart(pro_id);
  }
});

// FOR LIMITEDPRODUCTS

let limitedProductContainer = document.getElementById("limitedContainer");
limitedProductContainer.innerHTML = "";

limitedProducts.forEach((product) => {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-card");
  newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <div class="benefits-key">
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map((val) => `<li>${val}</li>`).join("")}
          </ul>
          </div>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `;
  limitedProductContainer.appendChild(newProduct);
});

limitedProductContainer.addEventListener("click", (e) => {
  let clickPosition = e.target;
  if (clickPosition.classList.contains("addCartBtn")) {
    let pro_id = clickPosition.parentElement.dataset.id;
    addToCart(pro_id);
  }
});

// FOR ROASTED PRODUCTS
let roastedProductContainer = document.getElementById("roastedProducts");
roastedProductContainer.innerHTML = "";

RoastedProducts.forEach((product) => {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-card");
  newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <div class="benefits-key">
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map((val) => `<li>${val}</li>`).join("")}
          </ul>
          </div>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `;
  roastedProductContainer.appendChild(newProduct);
});
roastedProductContainer.addEventListener("click", (e) => {
  let clickPosition = e.target;
  if (clickPosition.classList.contains("addCartBtn")) {
    let pro_id = clickPosition.parentElement.dataset.id;
    addToCart(pro_id);
  }
});

// FOR SALTED PRODUCTS

let saltedProductContainer = document.getElementById("saltedProducts");
saltedProductContainer.innerHTML = "";

SaltedProducts.forEach((product) => {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-card");
  newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <div class="benefits-key">
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map((val) => `<li>${val}</li>`).join("")}
          </ul>
          </div>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `;
  saltedProductContainer.appendChild(newProduct);
});
saltedProductContainer.addEventListener("click", (e) => {
  let clickPosition = e.target;
  if (clickPosition.classList.contains("addCartBtn")) {
    let pro_id = clickPosition.parentElement.dataset.id;
    addToCart(pro_id);
  }
});

// FOR DRIED PRODUCTS

let driedProductContainer = document.getElementById("driedProducts");
driedProductContainer.innerHTML = "";

DriedProducts.forEach((product) => {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-card");
  newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <div class="benefits-key">
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map((val) => `<li>${val}</li>`).join("")}
          </ul>
          </div>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `;
  driedProductContainer.appendChild(newProduct);
});
driedProductContainer.addEventListener("click", (e) => {
  let clickPosition = e.target;
  if (clickPosition.classList.contains("addCartBtn")) {
    let pro_id = clickPosition.parentElement.dataset.id;
    addToCart(pro_id);
  }
});

// FOR ALMONDS

let almondsProductContainer = document.getElementById("almonds");
almondsProductContainer.innerHTML = "";

Almonds.forEach((product) => {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-card");
  newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <div class="benefits-key">
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map((val) => `<li>${val}</li>`).join("")}
          </ul>
          </div>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `;
  almondsProductContainer.appendChild(newProduct);
});
almondsProductContainer.addEventListener("click", (e) => {
  let clickPosition = e.target;
  if (clickPosition.classList.contains("addCartBtn")) {
    let pro_id = clickPosition.parentElement.dataset.id;
    addToCart(pro_id);
  }
});

// FOR BRAZIL NUTS
let brazilNutsProductContainer = document.getElementById("brazilNuts");
brazilNutsProductContainer.innerHTML = "";

BrazilNut.forEach((product) => {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-card");
  newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <div class="benefits-key">
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map((val) => `<li>${val}</li>`).join("")}
          </ul>
          </div>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `;
  brazilNutsProductContainer.appendChild(newProduct);
});
brazilNutsProductContainer.addEventListener("click", (e) => {
  let clickPosition = e.target;
  if (clickPosition.classList.contains("addCartBtn")) {
    let pro_id = clickPosition.parentElement.dataset.id;
    addToCart(pro_id);
  }
});
// FOR CASHEW
let cashewProductContainer = document.getElementById("Cashew");
cashewProductContainer.innerHTML = "";

Cashew.forEach((product) => {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-card");
  newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <div class="benefits-key">
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map((val) => `<li>${val}</li>`).join("")}
          </ul>
          </div>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `;
  cashewProductContainer.appendChild(newProduct);
});
cashewProductContainer.addEventListener("click", (e) => {
  let clickPosition = e.target;
  if (clickPosition.classList.contains("addCartBtn")) {
    let pro_id = clickPosition.parentElement.dataset.id;
    addToCart(pro_id);
  }
});
// For Hazel Nuts
let hazelNutsProductContainer = document.getElementById("hazelNuts");
hazelNutsProductContainer.innerHTML = "";

HazelNut.forEach((product) => {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-card");
  newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <div class="benefits-key">
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map((val) => `<li>${val}</li>`).join("")}
          </ul>
          </div>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `;
  hazelNutsProductContainer.appendChild(newProduct);
});
hazelNutsProductContainer.addEventListener("click", (e) => {
  let clickPosition = e.target;
  if (clickPosition.classList.contains("addCartBtn")) {
    let pro_id = clickPosition.parentElement.dataset.id;
    addToCart(pro_id);
  }
});
// For Macadamia
let macadamiaNutsProductContainer = document.getElementById("macadamia");
macadamiaNutsProductContainer.innerHTML = "";

MacadamiaNut.forEach((product) => {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-card");
  newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <div class="benefits-key">
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map((val) => `<li>${val}</li>`).join("")}
          </ul>
          </div>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `;
  macadamiaNutsProductContainer.appendChild(newProduct);
});
macadamiaNutsProductContainer.addEventListener("click", (e) => {
  let clickPosition = e.target;
  if (clickPosition.classList.contains("addCartBtn")) {
    let pro_id = clickPosition.parentElement.dataset.id;
    addToCart(pro_id);
  }
});

// For Peanuts
let peanutsProductContainer = document.getElementById("peanuts");
peanutsProductContainer.innerHTML = "";

Peanuts.forEach((product) => {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-card");
  newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <div class="benefits-key">
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map((val) => `<li>${val}</li>`).join("")}
          </ul>
          </div>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `;
  peanutsProductContainer.appendChild(newProduct);
});
peanutsProductContainer.addEventListener("click", (e) => {
  let clickPosition = e.target;
  if (clickPosition.classList.contains("addCartBtn")) {
    let pro_id = clickPosition.parentElement.dataset.id;
    addToCart(pro_id);
  }
});

// For Pecsns
let pecansProductContainer = document.getElementById("pecans");
pecansProductContainer.innerHTML = "";

Pecans.forEach((product) => {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-card");
  newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <div class="benefits-key">
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map((val) => `<li>${val}</li>`).join("")}
          </ul>
          </div>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `;
  pecansProductContainer.appendChild(newProduct);
});
pecansProductContainer.addEventListener("click", (e) => {
  let clickPosition = e.target;
  if (clickPosition.classList.contains("addCartBtn")) {
    let pro_id = clickPosition.parentElement.dataset.id;
    addToCart(pro_id);
  }
});

// For Pine Nuts
let pineNutsProductContainer = document.getElementById("pineNuts");
pineNutsProductContainer.innerHTML = "";

PineNuts.forEach((product) => {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-card");
  newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <div class="benefits-key">
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map((val) => `<li>${val}</li>`).join("")}
          </ul>
          </div>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `;
  pineNutsProductContainer.appendChild(newProduct);
});
pineNutsProductContainer.addEventListener("click", (e) => {
  let clickPosition = e.target;
  if (clickPosition.classList.contains("addCartBtn")) {
    let pro_id = clickPosition.parentElement.dataset.id;
    addToCart(pro_id);
  }
});

// For Pistachio
let pistachioProductContainer = document.getElementById("Pistachio");
pistachioProductContainer.innerHTML = "";

Pistachios.forEach((product) => {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-card");
  newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <div class="benefits-key">
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map((val) => `<li>${val}</li>`).join("")}
          </ul>
          </div>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `;
  pistachioProductContainer.appendChild(newProduct);
});
pistachioProductContainer.addEventListener("click", (e) => {
  let clickPosition = e.target;
  if (clickPosition.classList.contains("addCartBtn")) {
    let pro_id = clickPosition.parentElement.dataset.id;
    addToCart(pro_id);
  }
});

// For Pumpkin Seeds
let pumpkinSeedsProductContainer = document.getElementById("pumpkinSeeds");
pumpkinSeedsProductContainer.innerHTML = "";

PumpkinSeeds.forEach((product) => {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-card");
  newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <div class="benefits-key">
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map((val) => `<li>${val}</li>`).join("")}
          </ul>
          </div>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `;
  pumpkinSeedsProductContainer.appendChild(newProduct);
});
pumpkinSeedsProductContainer.addEventListener("click", (e) => {
  let clickPosition = e.target;
  if (clickPosition.classList.contains("addCartBtn")) {
    let pro_id = clickPosition.parentElement.dataset.id;
    addToCart(pro_id);
  }
});

// For Sunflower Seeds
let sunflowerSeedsProductContainer = document.getElementById("sunflowerSeeds");
sunflowerSeedsProductContainer.innerHTML = "";

SunflowerSeeds.forEach((product) => {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-card");
  newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <div class="benefits-key">
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map((val) => `<li>${val}</li>`).join("")}
          </ul>
          </div>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `;
  sunflowerSeedsProductContainer.appendChild(newProduct);
});
sunflowerSeedsProductContainer.addEventListener("click", (e) => {
  let clickPosition = e.target;
  if (clickPosition.classList.contains("addCartBtn")) {
    let pro_id = clickPosition.parentElement.dataset.id;
    addToCart(pro_id);
  }
});

// For Walnut
let walnutProductContainer = document.getElementById("wallnuts");
walnutProductContainer.innerHTML = "";

Wallnuts.forEach((product) => {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-card");
  newProduct.innerHTML = `
    <div class="card proCard">
    <div class="card-inner">
      <div class="card-front">
        <img src="${product.image}" alt="Product Image">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="buttons" data-id='${product.id}'>
            <button class="add-to-cart addCartBtn">Add to Cart</button>
            <button class="view-details" onclick="flipCard(event)">View Benefits</button>
          </div>
        </div>
      </div>
      <div class="card-back">
        <div class="details">
          <h3>${product.name}</h3>
          <h4>Benefits: </h4>
          <div class="benefits-key">
          <p>${product.benefits}</p>
          <ul>
          ${product.keyPoints.map((val) => `<li>${val}</li>`).join("")}
          </ul>
          </div>
        </div>
        <button class="go-back" onclick="flipCard(event)">Go Back</button>
      </div>
    </div> 
  </div>
        `;
  walnutProductContainer.appendChild(newProduct);
});
walnutProductContainer.addEventListener("click", (e) => {
  let clickPosition = e.target;
  if (clickPosition.classList.contains("addCartBtn")) {
    let pro_id = clickPosition.parentElement.dataset.id;
    addToCart(pro_id);
  }
});

// FOR CART
let cart = [];

let listItem = document.querySelector(".listCart");

function addToCart(pro_id) {
  let isAlreadyInCart = cart.findIndex((val) => val.product_id == pro_id);
  if (cart.length <= 0) {
    cart = [
      {
        product_id: pro_id,
        quantity: 1,
      },
    ];
  } else if (isAlreadyInCart < 0) {
    cart.push({
      product_id: pro_id,
      quantity: 1,
    });
  } else {
    cart[isAlreadyInCart].quantity += 1;
  }
  addProToCart();
  savingCart();
}
// SAVING CART TO LOCAL STORAGE

const savingCart = () => {
  localStorage.setItem("carts", JSON.stringify(cart));
};

// Adding Cart functionality
let listItemCheckout = document.querySelector(".checkout-listCart");

let totalHtml = document.querySelectorAll(".totalAmount");
const addProToCart = () => {
  listItemCheckout.innerHTML = "";
  listItem.innerHTML = "";
  let totalQuantity = 0;
  let totalAmount = 0;
  cart.forEach((cart) => {
    totalQuantity += cart.quantity;

    let currentProduct = allProducts.find(
      (product) => product.id === cart.product_id
    );

    if (!currentProduct) {
      currentProduct = specialProducts.find(
        (product) => product.id === cart.product_id
      );
    }

    if (!currentProduct) {
      currentProduct = limitedProducts.find(
        (product) => product.id === cart.product_id
      );
    }

    if (!currentProduct) {
      currentProduct = DriedProducts.find(
        (product) => product.id === cart.product_id
      );
    }

    if (currentProduct) {
      totalAmount += currentProduct.price * cart.quantity;

      let newItem = document.createElement("div");
      newItem.dataset.id = cart.product_id;
      newItem.classList.add("item");
      newItem.innerHTML = `
        <div class="image">
            <img src=${currentProduct.image} alt="">
        </div>
        <div class="name">
            ${currentProduct.name}
        </div>
        <div class="price">
        Rs. ${currentProduct.price * cart.quantity}
        </div>
        <div class="quantity">
            <span class="minus"><</span>
            <span>${cart.quantity}</span>
            <span class="plus">></span>
        </div>
        `;
      listItem.appendChild(newItem);

      let newItemCheckout = newItem.cloneNode(newItem);
      listItemCheckout.appendChild(newItemCheckout);
    }
  });
  totalHtml.forEach((elem) => {
    let Amount = document.createElement("p");
    Amount.innerHTML = `Total Amount: RS ${totalAmount}`;
    elem.innerHTML = "";
    elem.appendChild(Amount);
  });

  cartIconQuantity.innerText = totalQuantity;
};

// Increasing or Decreasing quantity

listItem.addEventListener("click", (event) => {
  let clickPosition = event.target;
  if (
    clickPosition.classList.contains("plus") ||
    clickPosition.classList.contains("minus")
  ) {
    let proId = clickPosition.parentElement.parentElement.dataset.id;
    let type = "minus";
    if (clickPosition.classList.contains("plus")) {
      type = "plus";
    }
    changeQuantity(proId, type);
  }
});

const changeQuantity = (proId, type) => {
  let positionOfTheCart = cart.findIndex((val) => val.product_id == proId);

  if (positionOfTheCart >= 0) {
    switch (type) {
      case "plus":
        cart[positionOfTheCart].quantity = cart[positionOfTheCart].quantity + 1;
        break;

      default:
        let changedValue = cart[positionOfTheCart].quantity - 1;
        if (changedValue > 0) {
          cart[positionOfTheCart].quantity = changedValue;
        } else {
          cart.splice(positionOfTheCart, 1);
        }
        break;
    }
  }
  savingCart();
  addProToCart();
};

// Setting Product
let initialize = () => {

  !hasVisit && loading()
  if (localStorage.getItem("carts")) {
    cart = JSON.parse(localStorage.getItem("carts"));
    CheckoutCart = cart;
    addProToCart();
  }
};
initialize();

// Cart Show

let cartBtn = document.querySelector(".cartBtn");
let closeBtn = document.querySelector(".close");
let body = document.querySelector("body");

cartBtn.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

let cartClose = () => {
  body.classList.toggle("showCart");
};

closeBtn.addEventListener("click", cartClose);

const backBtn = document.querySelector(".payment-method .back");

// Section Pages
const home = document.getElementById("home");
const products = document.getElementById("Product");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

// Page Active Changer

window.onscroll = function () {
  let viewPortHeight = window.innerHeight;
  let scrollPosition = window.scrollY;
  let homePosition = home.offsetTop;
  let productPosition = products.offsetTop;
  let aboutPosition = about.offsetTop;
  let contactPosition = contact.offsetTop;

  let homeLink = document.querySelector(".nav-link-home");
  let productLink = document.querySelector(".nav-link-product");
  let aboutLink = document.querySelector(".nav-link-about");
  let contactLink = document.querySelector(".nav-link-contact");

  if (scrollPosition >= contactPosition - viewPortHeight) {
    !contactLink.classList.contains("active") &&
      contactLink.classList.add("active");
    aboutLink.classList.contains("active") &&
      aboutLink.classList.remove("active");
    homeLink.classList.contains("active") &&
      homeLink.classList.remove("active");
    productLink.classList.contains("active") &&
      productLink.classList.remove("active");
  } else if (scrollPosition >= aboutPosition - viewPortHeight) {
    !aboutLink.classList.contains("active") &&
      aboutLink.classList.add("active");
    productLink.classList.contains("active") &&
      productLink.classList.remove("active");
    contactLink.classList.contains("active") &&
      contactLink.classList.remove("active");
    homeLink.classList.contains("active") &&
      homeLink.classList.remove("active");
  } else if (scrollPosition >= productPosition - viewPortHeight) {
    !productLink.classList.contains("active") &&
      productLink.classList.add("active");
    homeLink.classList.contains("active") &&
      homeLink.classList.remove("active");
    aboutLink.classList.contains("active") &&
      aboutLink.classList.remove("active");
    contactLink.classList.contains("active") &&
      contactLink.classList.remove("active");
  } else if (scrollPosition >= homePosition - viewPortHeight) {
    !homeLink.classList.contains("active") && homeLink.classList.add("active");
    productLink.classList.contains("active") &&
      productLink.classList.remove("active");
    aboutLink.classList.contains("active") &&
      aboutLink.classList.remove("active");
    contactLink.classList.contains("active") &&
      contactLink.classList.remove("active");
  }
};

// Sections
const allPro = document.getElementById("all");
const roasted = document.getElementById("roasted");
const salted = document.getElementById("salted");
const dried = document.getElementById("dried");
const almond = document.getElementById("almondsCont");
const brazilNut = document.getElementById("brazilNutsCont");
const cashew = document.getElementById("CashewCont");
const hazelNut = document.getElementById("hazelNutsCont");
const macadamia = document.getElementById("macadamiaCont");
const peanuts = document.getElementById("peanutsCont");
const pecans = document.getElementById("pecansCont");
const pineNuts = document.getElementById("pineNutsCont");
const pistachio = document.getElementById("PistachioCont");
const pumpkinSeed = document.getElementById("pumpkinSeedsCont");
const sunflowerSeed = document.getElementById("sunflowerSeedsCont");
const walnut = document.getElementById("wallnutsCont");
const shopSec = document.querySelector(".all");
const checkoutSec = document.querySelector(".checkout-sec");

// Payment Sections

const checkoutAddress = document.querySelector(".checkout");
const paymentCard = document.querySelector(".payment-method");

const goBack = () => {
  if (checkoutAddress.classList.contains("d-none")) {
    checkoutAddress.classList.remove("d-none");
    paymentCard.classList.add("d-none");
  }
};

// SignUp Show/Hide

const signUp = document.getElementById("signUp");

let allData = document.querySelector(".all");
let alreadyHaveAnAccountBtn = document.querySelector(".alreadyHaveAccount");

// Redirecting to Signup:
const redirectToLogin = () => {
  !allData.classList.contains("d-none") && allData.classList.add("d-none");
  !checkoutSec.classList.contains("d-none") &&
    checkoutSec.classList.add("d-none");
  signUp.classList.contains("d-none") && signUp.classList.remove("d-none");
};
loginBtn.addEventListener("click", redirectToLogin);
alreadyHaveAnAccountBtn.addEventListener("click", redirectToLogin);

backBtn.addEventListener("click", () => goBack());

// Redirecting To Home

let signUpToHome = document.querySelector(".cross-signUp");
signUpToHome.addEventListener("click", () => {
  !signUp.classList.contains("d-none") && signUp.classList.add("d-none");
  allData.classList.contains("d-none") && allData.classList.remove("d-none");
  shopSec.classList.contains("d-none") && shopSec.classList.remove("d-none");
});

const contShop = () => {
  if (shopSec.classList.contains("d-none")) {
    shopSec.classList.remove("d-none");
    checkoutSec.classList.add("d-none");
  }
};
const showCheckout = () => {
  if (cart.length > 0) {
    if (checkoutSec.classList.contains("d-none")) {
      checkoutSec.classList.remove("d-none");
      shopSec.classList.add("d-none");
    }
  }
};
const showAllPro = () => {
  allPro.classList.contains("d-none")
    ? allPro.classList.remove("d-none")
    : null;
  dried.classList.contains("d-none") ? null : dried.classList.add("d-none");
  salted.classList.contains("d-none") ? null : salted.classList.add("d-none");
  roasted.classList.contains("d-none") ? null : roasted.classList.add("d-none");
  almond.classList.contains("d-none") ? null : almond.classList.add("d-none");
  brazilNut.classList.contains("d-none")
    ? null
    : brazilNut.classList.add("d-none");
  cashew.classList.contains("d-none") ? null : cashew.classList.add("d-none");
  hazelNut.classList.contains("d-none")
    ? null
    : hazelNut.classList.add("d-none");
  macadamia.classList.contains("d-none")
    ? null
    : macadamia.classList.add("d-none");
  peanuts.classList.contains("d-none") ? null : peanuts.classList.add("d-none");
  pecans.classList.contains("d-none") ? null : pecans.classList.add("d-none");
  pineNuts.classList.contains("d-none")
    ? null
    : pineNuts.classList.add("d-none");
  pistachio.classList.contains("d-none")
    ? null
    : pistachio.classList.add("d-none");
  pumpkinSeed.classList.contains("d-none")
    ? null
    : pumpkinSeed.classList.add("d-none");
  sunflowerSeed.classList.contains("d-none")
    ? null
    : sunflowerSeed.classList.add("d-none");
  walnut.classList.contains("d-none") ? null : walnut.classList.add("d-none");
};
const showRoasted = () => {
  roasted.classList.contains("d-none")
    ? roasted.classList.remove("d-none")
    : null;
  allPro.classList.contains("d-none") ? null : allPro.classList.add("d-none");
  salted.classList.contains("d-none") ? null : salted.classList.add("d-none");
  dried.classList.contains("d-none") ? null : dried.classList.add("d-none");
  almond.classList.contains("d-none") ? null : almond.classList.add("d-none");
  brazilNut.classList.contains("d-none")
    ? null
    : brazilNut.classList.add("d-none");
  cashew.classList.contains("d-none") ? null : cashew.classList.add("d-none");
  hazelNut.classList.contains("d-none")
    ? null
    : hazelNut.classList.add("d-none");
  macadamia.classList.contains("d-none")
    ? null
    : macadamia.classList.add("d-none");
  peanuts.classList.contains("d-none") ? null : peanuts.classList.add("d-none");
  pecans.classList.contains("d-none") ? null : pecans.classList.add("d-none");
  pineNuts.classList.contains("d-none")
    ? null
    : pineNuts.classList.add("d-none");
  pistachio.classList.contains("d-none")
    ? null
    : pistachio.classList.add("d-none");
  pumpkinSeed.classList.contains("d-none")
    ? null
    : pumpkinSeed.classList.add("d-none");
  sunflowerSeed.classList.contains("d-none")
    ? null
    : sunflowerSeed.classList.add("d-none");
  walnut.classList.contains("d-none") ? null : walnut.classList.add("d-none");
};
const showSalted = () => {
  salted.classList.contains("d-none")
    ? salted.classList.remove("d-none")
    : null;
  allPro.classList.contains("d-none") ? null : allPro.classList.add("d-none");
  dried.classList.contains("d-none") ? null : dried.classList.add("d-none");
  roasted.classList.contains("d-none") ? null : roasted.classList.add("d-none");
  almond.classList.contains("d-none") ? null : almond.classList.add("d-none");
  brazilNut.classList.contains("d-none")
    ? null
    : brazilNut.classList.add("d-none");
  cashew.classList.contains("d-none") ? null : cashew.classList.add("d-none");
  hazelNut.classList.contains("d-none")
    ? null
    : hazelNut.classList.add("d-none");
  macadamia.classList.contains("d-none")
    ? null
    : macadamia.classList.add("d-none");
  peanuts.classList.contains("d-none") ? null : peanuts.classList.add("d-none");
  pecans.classList.contains("d-none") ? null : pecans.classList.add("d-none");
  pineNuts.classList.contains("d-none")
    ? null
    : pineNuts.classList.add("d-none");
  pistachio.classList.contains("d-none")
    ? null
    : pistachio.classList.add("d-none");
  pumpkinSeed.classList.contains("d-none")
    ? null
    : pumpkinSeed.classList.add("d-none");
  sunflowerSeed.classList.contains("d-none")
    ? null
    : sunflowerSeed.classList.add("d-none");
  walnut.classList.contains("d-none") ? null : walnut.classList.add("d-none");
};
const showDried = () => {
  dried.classList.contains("d-none") ? dried.classList.remove("d-none") : null;
  allPro.classList.contains("d-none") ? null : allPro.classList.add("d-none");
  salted.classList.contains("d-none") ? null : salted.classList.add("d-none");
  roasted.classList.contains("d-none") ? null : roasted.classList.add("d-none");
  almond.classList.contains("d-none") ? null : almond.classList.add("d-none");
  brazilNut.classList.contains("d-none")
    ? null
    : brazilNut.classList.add("d-none");
  cashew.classList.contains("d-none") ? null : cashew.classList.add("d-none");
  hazelNut.classList.contains("d-none")
    ? null
    : hazelNut.classList.add("d-none");
  macadamia.classList.contains("d-none")
    ? null
    : macadamia.classList.add("d-none");
  peanuts.classList.contains("d-none") ? null : peanuts.classList.add("d-none");
  pecans.classList.contains("d-none") ? null : pecans.classList.add("d-none");
  pineNuts.classList.contains("d-none")
    ? null
    : pineNuts.classList.add("d-none");
  pistachio.classList.contains("d-none")
    ? null
    : pistachio.classList.add("d-none");
  pumpkinSeed.classList.contains("d-none")
    ? null
    : pumpkinSeed.classList.add("d-none");
  sunflowerSeed.classList.contains("d-none")
    ? null
    : sunflowerSeed.classList.add("d-none");
  walnut.classList.contains("d-none") ? null : walnut.classList.add("d-none");
};

const showAlmonds = () => {
  almond.classList.contains("d-none")
    ? almond.classList.remove("d-none")
    : null;
  allPro.classList.contains("d-none") ? null : allPro.classList.add("d-none");
  salted.classList.contains("d-none") ? null : salted.classList.add("d-none");
  roasted.classList.contains("d-none") ? null : roasted.classList.add("d-none");
  dried.classList.contains("d-none") ? null : dried.classList.add("d-none");
  brazilNut.classList.contains("d-none")
    ? null
    : brazilNut.classList.add("d-none");
  cashew.classList.contains("d-none") ? null : cashew.classList.add("d-none");
  hazelNut.classList.contains("d-none")
    ? null
    : hazelNut.classList.add("d-none");
  macadamia.classList.contains("d-none")
    ? null
    : macadamia.classList.add("d-none");
  peanuts.classList.contains("d-none") ? null : peanuts.classList.add("d-none");
  pecans.classList.contains("d-none") ? null : pecans.classList.add("d-none");
  pineNuts.classList.contains("d-none")
    ? null
    : pineNuts.classList.add("d-none");
  pistachio.classList.contains("d-none")
    ? null
    : pistachio.classList.add("d-none");
  pumpkinSeed.classList.contains("d-none")
    ? null
    : pumpkinSeed.classList.add("d-none");
  sunflowerSeed.classList.contains("d-none")
    ? null
    : sunflowerSeed.classList.add("d-none");
  walnut.classList.contains("d-none") ? null : walnut.classList.add("d-none");
};
const showBrazilNut = () => {
  brazilNut.classList.contains("d-none")
    ? brazilNut.classList.remove("d-none")
    : null;
  allPro.classList.contains("d-none") ? null : allPro.classList.add("d-none");
  salted.classList.contains("d-none") ? null : salted.classList.add("d-none");
  roasted.classList.contains("d-none") ? null : roasted.classList.add("d-none");
  dried.classList.contains("d-none") ? null : dried.classList.add("d-none");
  almond.classList.contains("d-none") ? null : almond.classList.add("d-none");
  cashew.classList.contains("d-none") ? null : cashew.classList.add("d-none");
  hazelNut.classList.contains("d-none")
    ? null
    : hazelNut.classList.add("d-none");
  macadamia.classList.contains("d-none")
    ? null
    : macadamia.classList.add("d-none");
  peanuts.classList.contains("d-none") ? null : peanuts.classList.add("d-none");
  pecans.classList.contains("d-none") ? null : pecans.classList.add("d-none");
  pineNuts.classList.contains("d-none")
    ? null
    : pineNuts.classList.add("d-none");
  pistachio.classList.contains("d-none")
    ? null
    : pistachio.classList.add("d-none");
  pumpkinSeed.classList.contains("d-none")
    ? null
    : pumpkinSeed.classList.add("d-none");
  sunflowerSeed.classList.contains("d-none")
    ? null
    : sunflowerSeed.classList.add("d-none");
  walnut.classList.contains("d-none") ? null : walnut.classList.add("d-none");
};
const showCashew = () => {
  cashew.classList.contains("d-none")
    ? cashew.classList.remove("d-none")
    : null;
  allPro.classList.contains("d-none") ? null : allPro.classList.add("d-none");
  salted.classList.contains("d-none") ? null : salted.classList.add("d-none");
  roasted.classList.contains("d-none") ? null : roasted.classList.add("d-none");
  dried.classList.contains("d-none") ? null : dried.classList.add("d-none");
  almond.classList.contains("d-none") ? null : almond.classList.add("d-none");
  brazilNut.classList.contains("d-none")
    ? null
    : brazilNut.classList.add("d-none");
  hazelNut.classList.contains("d-none")
    ? null
    : hazelNut.classList.add("d-none");
  macadamia.classList.contains("d-none")
    ? null
    : macadamia.classList.add("d-none");
  peanuts.classList.contains("d-none") ? null : peanuts.classList.add("d-none");
  pecans.classList.contains("d-none") ? null : pecans.classList.add("d-none");
  pineNuts.classList.contains("d-none")
    ? null
    : pineNuts.classList.add("d-none");
  pistachio.classList.contains("d-none")
    ? null
    : pistachio.classList.add("d-none");
  pumpkinSeed.classList.contains("d-none")
    ? null
    : pumpkinSeed.classList.add("d-none");
  sunflowerSeed.classList.contains("d-none")
    ? null
    : sunflowerSeed.classList.add("d-none");
  walnut.classList.contains("d-none") ? null : walnut.classList.add("d-none");
};
const showHazelNut = () => {
  hazelNut.classList.contains("d-none")
    ? hazelNut.classList.remove("d-none")
    : null;
  allPro.classList.contains("d-none") ? null : allPro.classList.add("d-none");
  salted.classList.contains("d-none") ? null : salted.classList.add("d-none");
  roasted.classList.contains("d-none") ? null : roasted.classList.add("d-none");
  dried.classList.contains("d-none") ? null : dried.classList.add("d-none");
  almond.classList.contains("d-none") ? null : almond.classList.add("d-none");
  brazilNut.classList.contains("d-none")
    ? null
    : brazilNut.classList.add("d-none");
  cashew.classList.contains("d-none") ? null : cashew.classList.add("d-none");
  macadamia.classList.contains("d-none")
    ? null
    : macadamia.classList.add("d-none");
  peanuts.classList.contains("d-none") ? null : peanuts.classList.add("d-none");
  pecans.classList.contains("d-none") ? null : pecans.classList.add("d-none");
  pineNuts.classList.contains("d-none")
    ? null
    : pineNuts.classList.add("d-none");
  pistachio.classList.contains("d-none")
    ? null
    : pistachio.classList.add("d-none");
  pumpkinSeed.classList.contains("d-none")
    ? null
    : pumpkinSeed.classList.add("d-none");
  sunflowerSeed.classList.contains("d-none")
    ? null
    : sunflowerSeed.classList.add("d-none");
  walnut.classList.contains("d-none") ? null : walnut.classList.add("d-none");
};
const showMacadamia = () => {
  macadamia.classList.contains("d-none")
    ? macadamia.classList.remove("d-none")
    : null;
  allPro.classList.contains("d-none") ? null : allPro.classList.add("d-none");
  salted.classList.contains("d-none") ? null : salted.classList.add("d-none");
  roasted.classList.contains("d-none") ? null : roasted.classList.add("d-none");
  dried.classList.contains("d-none") ? null : dried.classList.add("d-none");
  almond.classList.contains("d-none") ? null : almond.classList.add("d-none");
  brazilNut.classList.contains("d-none")
    ? null
    : brazilNut.classList.add("d-none");
  cashew.classList.contains("d-none") ? null : cashew.classList.add("d-none");
  hazelNut.classList.contains("d-none")
    ? null
    : hazelNut.classList.add("d-none");
  peanuts.classList.contains("d-none") ? null : peanuts.classList.add("d-none");
  pecans.classList.contains("d-none") ? null : pecans.classList.add("d-none");
  pineNuts.classList.contains("d-none")
    ? null
    : pineNuts.classList.add("d-none");
  pistachio.classList.contains("d-none")
    ? null
    : pistachio.classList.add("d-none");
  pumpkinSeed.classList.contains("d-none")
    ? null
    : pumpkinSeed.classList.add("d-none");
  sunflowerSeed.classList.contains("d-none")
    ? null
    : sunflowerSeed.classList.add("d-none");
  walnut.classList.contains("d-none") ? null : walnut.classList.add("d-none");
};
const showPeanuts = () => {
  peanuts.classList.contains("d-none")
    ? peanuts.classList.remove("d-none")
    : null;
  allPro.classList.contains("d-none") ? null : allPro.classList.add("d-none");
  salted.classList.contains("d-none") ? null : salted.classList.add("d-none");
  roasted.classList.contains("d-none") ? null : roasted.classList.add("d-none");
  dried.classList.contains("d-none") ? null : dried.classList.add("d-none");
  almond.classList.contains("d-none") ? null : almond.classList.add("d-none");
  brazilNut.classList.contains("d-none")
    ? null
    : brazilNut.classList.add("d-none");
  cashew.classList.contains("d-none") ? null : cashew.classList.add("d-none");
  hazelNut.classList.contains("d-none")
    ? null
    : hazelNut.classList.add("d-none");
  macadamia.classList.contains("d-none")
    ? null
    : macadamia.classList.add("d-none");
  pecans.classList.contains("d-none") ? null : pecans.classList.add("d-none");
  pineNuts.classList.contains("d-none")
    ? null
    : pineNuts.classList.add("d-none");
  pistachio.classList.contains("d-none")
    ? null
    : pistachio.classList.add("d-none");
  pumpkinSeed.classList.contains("d-none")
    ? null
    : pumpkinSeed.classList.add("d-none");
  sunflowerSeed.classList.contains("d-none")
    ? null
    : sunflowerSeed.classList.add("d-none");
  walnut.classList.contains("d-none") ? null : walnut.classList.add("d-none");
};
const showPecans = () => {
  pecans.classList.contains("d-none")
    ? pecans.classList.remove("d-none")
    : null;
  allPro.classList.contains("d-none") ? null : allPro.classList.add("d-none");
  salted.classList.contains("d-none") ? null : salted.classList.add("d-none");
  roasted.classList.contains("d-none") ? null : roasted.classList.add("d-none");
  dried.classList.contains("d-none") ? null : dried.classList.add("d-none");
  almond.classList.contains("d-none") ? null : almond.classList.add("d-none");
  brazilNut.classList.contains("d-none")
    ? null
    : brazilNut.classList.add("d-none");
  cashew.classList.contains("d-none") ? null : cashew.classList.add("d-none");
  hazelNut.classList.contains("d-none")
    ? null
    : hazelNut.classList.add("d-none");
  macadamia.classList.contains("d-none")
    ? null
    : macadamia.classList.add("d-none");
  peanuts.classList.contains("d-none") ? null : peanuts.classList.add("d-none");
  pineNuts.classList.contains("d-none")
    ? null
    : pineNuts.classList.add("d-none");
  pistachio.classList.contains("d-none")
    ? null
    : pistachio.classList.add("d-none");
  pumpkinSeed.classList.contains("d-none")
    ? null
    : pumpkinSeed.classList.add("d-none");
  sunflowerSeed.classList.contains("d-none")
    ? null
    : sunflowerSeed.classList.add("d-none");
  walnut.classList.contains("d-none") ? null : walnut.classList.add("d-none");
};
const showPineNuts = () => {
  pineNuts.classList.contains("d-none")
    ? pineNuts.classList.remove("d-none")
    : null;
  allPro.classList.contains("d-none") ? null : allPro.classList.add("d-none");
  salted.classList.contains("d-none") ? null : salted.classList.add("d-none");
  roasted.classList.contains("d-none") ? null : roasted.classList.add("d-none");
  dried.classList.contains("d-none") ? null : dried.classList.add("d-none");
  almond.classList.contains("d-none") ? null : almond.classList.add("d-none");
  brazilNut.classList.contains("d-none")
    ? null
    : brazilNut.classList.add("d-none");
  cashew.classList.contains("d-none") ? null : cashew.classList.add("d-none");
  hazelNut.classList.contains("d-none")
    ? null
    : hazelNut.classList.add("d-none");
  macadamia.classList.contains("d-none")
    ? null
    : macadamia.classList.add("d-none");
  peanuts.classList.contains("d-none") ? null : peanuts.classList.add("d-none");
  pecans.classList.contains("d-none") ? null : pecans.classList.add("d-none");
  pistachio.classList.contains("d-none")
    ? null
    : pistachio.classList.add("d-none");
  pumpkinSeed.classList.contains("d-none")
    ? null
    : pumpkinSeed.classList.add("d-none");
  sunflowerSeed.classList.contains("d-none")
    ? null
    : sunflowerSeed.classList.add("d-none");
  walnut.classList.contains("d-none") ? null : walnut.classList.add("d-none");
};
const showPistachios = () => {
  pistachio.classList.contains("d-none")
    ? pistachio.classList.remove("d-none")
    : null;
  allPro.classList.contains("d-none") ? null : allPro.classList.add("d-none");
  salted.classList.contains("d-none") ? null : salted.classList.add("d-none");
  roasted.classList.contains("d-none") ? null : roasted.classList.add("d-none");
  dried.classList.contains("d-none") ? null : dried.classList.add("d-none");
  almond.classList.contains("d-none") ? null : almond.classList.add("d-none");
  brazilNut.classList.contains("d-none")
    ? null
    : brazilNut.classList.add("d-none");
  cashew.classList.contains("d-none") ? null : cashew.classList.add("d-none");
  hazelNut.classList.contains("d-none")
    ? null
    : hazelNut.classList.add("d-none");
  macadamia.classList.contains("d-none")
    ? null
    : macadamia.classList.add("d-none");
  peanuts.classList.contains("d-none") ? null : peanuts.classList.add("d-none");
  pecans.classList.contains("d-none") ? null : pecans.classList.add("d-none");
  pineNuts.classList.contains("d-none")
    ? null
    : pineNuts.classList.add("d-none");
  pumpkinSeed.classList.contains("d-none")
    ? null
    : pumpkinSeed.classList.add("d-none");
  sunflowerSeed.classList.contains("d-none")
    ? null
    : sunflowerSeed.classList.add("d-none");
  walnut.classList.contains("d-none") ? null : walnut.classList.add("d-none");
};
const showPumpkinSeeds = () => {
  pumpkinSeed.classList.contains("d-none")
    ? pumpkinSeed.classList.remove("d-none")
    : null;
  allPro.classList.contains("d-none") ? null : allPro.classList.add("d-none");
  salted.classList.contains("d-none") ? null : salted.classList.add("d-none");
  roasted.classList.contains("d-none") ? null : roasted.classList.add("d-none");
  dried.classList.contains("d-none") ? null : dried.classList.add("d-none");
  almond.classList.contains("d-none") ? null : almond.classList.add("d-none");
  brazilNut.classList.contains("d-none")
    ? null
    : brazilNut.classList.add("d-none");
  cashew.classList.contains("d-none") ? null : cashew.classList.add("d-none");
  hazelNut.classList.contains("d-none")
    ? null
    : hazelNut.classList.add("d-none");
  macadamia.classList.contains("d-none")
    ? null
    : macadamia.classList.add("d-none");
  peanuts.classList.contains("d-none") ? null : peanuts.classList.add("d-none");
  pecans.classList.contains("d-none") ? null : pecans.classList.add("d-none");
  pineNuts.classList.contains("d-none")
    ? null
    : pineNuts.classList.add("d-none");
  pistachio.classList.contains("d-none")
    ? null
    : pistachio.classList.add("d-none");
  sunflowerSeed.classList.contains("d-none")
    ? null
    : sunflowerSeed.classList.add("d-none");
  walnut.classList.contains("d-none") ? null : walnut.classList.add("d-none");
};
const showSunflowerSeeds = () => {
  sunflowerSeed.classList.contains("d-none")
    ? sunflowerSeed.classList.remove("d-none")
    : null;
  allPro.classList.contains("d-none") ? null : allPro.classList.add("d-none");
  salted.classList.contains("d-none") ? null : salted.classList.add("d-none");
  roasted.classList.contains("d-none") ? null : roasted.classList.add("d-none");
  dried.classList.contains("d-none") ? null : dried.classList.add("d-none");
  almond.classList.contains("d-none") ? null : almond.classList.add("d-none");
  brazilNut.classList.contains("d-none")
    ? null
    : brazilNut.classList.add("d-none");
  cashew.classList.contains("d-none") ? null : cashew.classList.add("d-none");
  hazelNut.classList.contains("d-none")
    ? null
    : hazelNut.classList.add("d-none");
  macadamia.classList.contains("d-none")
    ? null
    : macadamia.classList.add("d-none");
  peanuts.classList.contains("d-none") ? null : peanuts.classList.add("d-none");
  pecans.classList.contains("d-none") ? null : pecans.classList.add("d-none");
  pineNuts.classList.contains("d-none")
    ? null
    : pineNuts.classList.add("d-none");
  pistachio.classList.contains("d-none")
    ? null
    : pistachio.classList.add("d-none");
  pumpkinSeed.classList.contains("d-none")
    ? null
    : pumpkinSeed.classList.add("d-none");
  walnut.classList.contains("d-none") ? null : walnut.classList.add("d-none");
};
const showWalnut = () => {
  walnut.classList.contains("d-none")
    ? walnut.classList.remove("d-none")
    : null;
  allPro.classList.contains("d-none") ? null : allPro.classList.add("d-none");
  salted.classList.contains("d-none") ? null : salted.classList.add("d-none");
  roasted.classList.contains("d-none") ? null : roasted.classList.add("d-none");
  dried.classList.contains("d-none") ? null : dried.classList.add("d-none");
  almond.classList.contains("d-none") ? null : almond.classList.add("d-none");
  brazilNut.classList.contains("d-none")
    ? null
    : brazilNut.classList.add("d-none");
  cashew.classList.contains("d-none") ? null : cashew.classList.add("d-none");
  hazelNut.classList.contains("d-none")
    ? null
    : hazelNut.classList.add("d-none");
  macadamia.classList.contains("d-none")
    ? null
    : macadamia.classList.add("d-none");
  peanuts.classList.contains("d-none") ? null : peanuts.classList.add("d-none");
  pecans.classList.contains("d-none") ? null : pecans.classList.add("d-none");
  pineNuts.classList.contains("d-none")
    ? null
    : pineNuts.classList.add("d-none");
  pistachio.classList.contains("d-none")
    ? null
    : pistachio.classList.add("d-none");
  pumpkinSeed.classList.contains("d-none")
    ? null
    : pumpkinSeed.classList.add("d-none");
  sunflowerSeed.classList.contains("d-none")
    ? null
    : sunflowerSeed.classList.add("d-none");
};

// SIGN UP
$(function () {
  $(".toggle").on("click", function () {
    if ($(".menu").hasClass("active")) {
      $(".menu").removeClass("active");
      $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
    } else {
      $(".menu").addClass("active");
      $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
    }
  });
});

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".SignUp-container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
sign_up_btn2.addEventListener("click", () => {
  container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
  container.classList.remove("sign-up-mode2");
});

// validation
jQuery("#contact-validate").validate({
  rules: {
    firstname: {
      required: true,
      minlength: 3,
    },
    lastname: {
      required: true,
      minlength: 3,
    },
    email: {
      required: true,
      email: true,
    },
    message: {
      required : true,
      minlength : 3
    }
  },
  messages: {
    firstname: {
      required: "Please enter your first name",
      minlength: "Name must be atleast 3 characters",
    },
    lastname: {
      required: "Please enter your last name",
      minlength: "Name must be atleast 3 characters",
    },
    email: {
      required: "Please enter your email",
      email: "Enter a valid email",
    },
    message : {
      required : "Please enter your query",
      minlength : "Minimum lemgth should be 3 character"
    }
  },
  submitHandler: function (form) {
    form.submit();
  },
});

const checkoutValidate = () => {
  if ($("#checkout-validate").valid()) {
    const nextfunc = () => {
      if (paymentCard.classList.contains("d-none")) {
        paymentCard.classList.remove("d-none");
        checkoutAddress.classList.add("d-none");
      }
    };

    nextfunc();
  }
};
jQuery("#checkout-validate").validate({
  rules: {
    firstname: {
      required: true,
      minlength: 3,
    },
    lastname: {
      required: true,
      minlength: 3,
    },
    email: {
      required: true,
      email: true,
    },
    address: "required",
    apart: "required",
    zipcode: {
      required: true,
      digits: true,
      rangelength: [5, 5],
    },
  },
  messages: {
    firstname: {
      required: "Please enter your first name",
      minlength: "Name must be atleast 3 characters",
    },
    lastname: {
      required: "Please enter your last name",
      minlength: "Name must be atleast 3 characters",
    },
    email: {
      required: "Please enter your email",
      email: "Enter a valid email",
    },
    address: "Please enter your address",
    apart: "Please enter your appartment number",
    zipcode: {
      required: "Please enter your zip code",
      digits: "Please enter a valid zip code",
      rangelength: "Please enter a valid zip code",
    },
  },
  submitHandler: function (form) {
    form.submit();
  },
});

const paymentValidate = () => {
  if ($("#payment-validate").valid()) {
    const showCongrats = () => {
      localStorage.removeItem("carts");
      cart = [];
      addProToCart();
      cartClose();
      Swal.fire({
        title: "Order confirmed",
        icon: "success",
      });
      contShop();
      goBack();
    };
    showCongrats();
  }
};

// CONTACT SUBMIT

let MessageBtn = document.getElementById('sendMsg');


  MessageBtn.addEventListener('click', (e) => {
    e.preventDefault();
  
  if($('#contact-validate').valid()){
    const showCongratsMessage = () => {
      Swal.fire({
        title: "Message Sent Successfully",
        icon: "success",
      });
    };
    showCongratsMessage();
  }
  });




// CONTACT SUBMIT END

jQuery("#payment-validate").validate({
  rules: {
    email: {
      required: true,
      email: true,
    },
    cardnum: {
      required: true,
      digits: true,
      rangelength: [9, 16],
    },
    expirydate: {
      required: true,
      date: true,
    },
    cvv_cvc: {
      required: true,
      digits: true,
      rangelength: [3, 4],
    },
    cardname: "required",
  },
  messages: {
    email: {
      required: "Please enter your email",
      email: "Enter a valid email",
    },
    cardnum: {
      required: "Please enter your credit card number",
      digits: "Please enter a valid number",
      rangelength: "Please enter a valid number",
    },
    expirydate: {
      required: "Please enter the expiry date",
      date: "Please enter a valid expiry date",
    },
    cvv_cvc: {
      required: "Please enter a number",
      digits: "Please enter a valid number",
      rangelength: "Please enter a valid number",
    },
    cardname: "Please enter the name on your card",
  },
  submitHandler: function (form) {
    form.submit();
  },
});

jQuery(".sign-in-form").validate({
  rules: {
    usernamexy: {
      required: true,
      minlength: 3,
    },
    passwordxy: {
      required: true,
      minlength: 7,
    },
  },
  messages: {
    usernamexy: {
      required: "Username can not be left empty",
      minlength: "Please enter a valid username",
    },
    passwordxy: {
      required: "Password can not be left empty",
      minlength: "Please enter valid password",
    },
  },
  submitHandler: function (form) {
    form.submit();
  },
});

jQuery(".sign-up-form").validate({
  rules: {
    usernamewx: {
      required: true,
      minlength: 3,
    },
    emailwx: {
      required: true,
      email: true,
    },
    passwordwx: {
      required: true,
      minlength: 7,
    },
  },
  messages: {
    usernamewx: {
      required: "Username can not be left empty",
      minlength: "Please enter a valid username",
    },
    emailwx: {
      required: "Please enter your email",
      email: "Enter a valid email",
    },
    passwordwx: {
      required: "Password can not be left empty",
      minlength: "Please enter valid password",
    },
  },
  submitHandler: function (form) {
    form.submit();
  },
});
