export interface ProductSpecs {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  mrp: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  inStock: boolean;
  specs: ProductSpecs;
  features: string[];
  emi?: string;
}

export const products: Product[] = [
  // MOBILES (10 products)
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra 5G",
    brand: "Samsung",
    category: "mobiles",
    subcategory: "smartphones",
    price: 129999,
    mrp: 149999,
    discount: 13,
    rating: 4.7,
    reviews: 3542,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800"
    ],
    inStock: true,
    specs: {
      Display: "6.8 inch Dynamic AMOLED 2X",
      Processor: "Snapdragon 8 Gen 3",
      RAM: "12GB",
      Storage: "256GB",
      Battery: "5000mAh",
      Camera: "200MP + 12MP + 50MP + 10MP",
      OS: "Android 14"
    },
    features: ["S Pen Included", "AI Features", "100x Space Zoom"],
    emi: "₹6,249/month"
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    category: "mobiles",
    subcategory: "smartphones",
    price: 159900,
    mrp: 179900,
    discount: 11,
    rating: 4.8,
    reviews: 5621,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800"
    ],
    inStock: true,
    specs: {
      Display: "6.7 inch Super Retina XDR",
      Processor: "A17 Pro Chip",
      RAM: "8GB",
      Storage: "256GB",
      Battery: "4441mAh",
      Camera: "48MP + 12MP + 12MP",
      OS: "iOS 17"
    },
    features: ["Titanium Design", "Action Button", "USB-C"],
    emi: "₹7,695/month"
  },
  {
    id: 3,
    name: "OnePlus 12 5G",
    brand: "OnePlus",
    category: "mobiles",
    subcategory: "smartphones",
    price: 64999,
    mrp: 69999,
    discount: 7,
    rating: 4.5,
    reviews: 2187,
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=400",
    images: [
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800"
    ],
    inStock: true,
    specs: {
      Display: "6.82 inch LTPO AMOLED",
      Processor: "Snapdragon 8 Gen 3",
      RAM: "12GB",
      Storage: "256GB",
      Battery: "5400mAh",
      Camera: "50MP + 64MP + 48MP",
      OS: "Android 14"
    },
    features: ["100W SUPERVOOC", "Hasselblad Camera", "Aqua Touch"],
    emi: "₹3,124/month"
  },
  {
    id: 4,
    name: "Redmi Note 13 Pro+ 5G",
    brand: "Xiaomi",
    category: "mobiles",
    subcategory: "smartphones",
    price: 31999,
    mrp: 35999,
    discount: 11,
    rating: 4.3,
    reviews: 4521,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800"
    ],
    inStock: true,
    specs: {
      Display: "6.67 inch AMOLED",
      Processor: "MediaTek Dimensity 7200",
      RAM: "8GB",
      Storage: "256GB",
      Battery: "5000mAh",
      Camera: "200MP + 8MP + 2MP",
      OS: "Android 13"
    },
    features: ["120W HyperCharge", "IP68 Rating", "Curved Display"],
    emi: "₹1,539/month"
  },
  {
    id: 5,
    name: "Vivo V30 Pro 5G",
    brand: "Vivo",
    category: "mobiles",
    subcategory: "smartphones",
    price: 46999,
    mrp: 51999,
    discount: 10,
    rating: 4.4,
    reviews: 1823,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400",
    images: [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800"
    ],
    inStock: true,
    specs: {
      Display: "6.78 inch AMOLED",
      Processor: "MediaTek Dimensity 8200",
      RAM: "12GB",
      Storage: "256GB",
      Battery: "5000mAh",
      Camera: "50MP + 50MP",
      OS: "Android 14"
    },
    features: ["ZEISS Optics", "3D Curved Display", "Aura Light"],
    emi: "₹2,260/month"
  },
  {
    id: 6,
    name: "Realme GT 5 Pro",
    brand: "Realme",
    category: "mobiles",
    subcategory: "smartphones",
    price: 42999,
    mrp: 47999,
    discount: 10,
    rating: 4.4,
    reviews: 1456,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400",
    images: [
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800"
    ],
    inStock: true,
    specs: {
      Display: "6.78 inch AMOLED",
      Processor: "Snapdragon 8 Gen 3",
      RAM: "12GB",
      Storage: "256GB",
      Battery: "5400mAh",
      Camera: "50MP + 8MP + 50MP",
      OS: "Android 14"
    },
    features: ["100W Charging", "Sony IMX890", "Gaming Mode"],
    emi: "₹2,068/month"
  },
  {
    id: 7,
    name: "Samsung Galaxy A54 5G",
    brand: "Samsung",
    category: "mobiles",
    subcategory: "smartphones",
    price: 32999,
    mrp: 38999,
    discount: 15,
    rating: 4.2,
    reviews: 6789,
    image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400",
    images: [
      "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=800"
    ],
    inStock: true,
    specs: {
      Display: "6.4 inch Super AMOLED",
      Processor: "Exynos 1380",
      RAM: "8GB",
      Storage: "128GB",
      Battery: "5000mAh",
      Camera: "50MP + 12MP + 5MP",
      OS: "Android 13"
    },
    features: ["IP67 Rating", "Gorilla Glass 5", "One UI 5.1"],
    emi: "₹1,587/month"
  },
  {
    id: 8,
    name: "iPhone 15",
    brand: "Apple",
    category: "mobiles",
    subcategory: "smartphones",
    price: 79900,
    mrp: 89900,
    discount: 11,
    rating: 4.6,
    reviews: 3456,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400",
    images: [
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800"
    ],
    inStock: true,
    specs: {
      Display: "6.1 inch Super Retina XDR",
      Processor: "A16 Bionic",
      RAM: "6GB",
      Storage: "128GB",
      Battery: "3349mAh",
      Camera: "48MP + 12MP",
      OS: "iOS 17"
    },
    features: ["Dynamic Island", "USB-C", "Ceramic Shield"],
    emi: "₹3,843/month"
  },
  {
    id: 9,
    name: "Motorola Edge 50 Pro",
    brand: "Motorola",
    category: "mobiles",
    subcategory: "smartphones",
    price: 35999,
    mrp: 39999,
    discount: 10,
    rating: 4.3,
    reviews: 987,
    image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=400",
    images: [
      "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=800"
    ],
    inStock: true,
    specs: {
      Display: "6.7 inch pOLED",
      Processor: "Snapdragon 7 Gen 3",
      RAM: "12GB",
      Storage: "256GB",
      Battery: "4500mAh",
      Camera: "50MP + 13MP + 10MP",
      OS: "Android 14"
    },
    features: ["125W TurboPower", "Pantone Validated", "Ready For"],
    emi: "₹1,731/month"
  },
  {
    id: 10,
    name: "Nothing Phone 2",
    brand: "Nothing",
    category: "mobiles",
    subcategory: "smartphones",
    price: 44999,
    mrp: 49999,
    discount: 10,
    rating: 4.4,
    reviews: 2134,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800"
    ],
    inStock: true,
    specs: {
      Display: "6.7 inch LTPO OLED",
      Processor: "Snapdragon 8+ Gen 1",
      RAM: "12GB",
      Storage: "256GB",
      Battery: "4700mAh",
      Camera: "50MP + 50MP",
      OS: "Android 14"
    },
    features: ["Glyph Interface", "45W Fast Charging", "Pure Android"],
    emi: "₹2,164/month"
  },

  // TABLETS (4 products)
  {
    id: 11,
    name: "iPad Pro 12.9 M2",
    brand: "Apple",
    category: "mobiles",
    subcategory: "tablets",
    price: 112900,
    mrp: 124900,
    discount: 10,
    rating: 4.9,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800"
    ],
    inStock: true,
    specs: {
      Display: "12.9 inch Liquid Retina XDR",
      Processor: "Apple M2",
      RAM: "8GB",
      Storage: "128GB",
      Battery: "10758mAh",
      Camera: "12MP + 10MP",
      OS: "iPadOS 17"
    },
    features: ["ProMotion", "Face ID", "Thunderbolt/USB 4"],
    emi: "₹5,431/month"
  },
  {
    id: 12,
    name: "Samsung Galaxy Tab S9 Ultra",
    brand: "Samsung",
    category: "mobiles",
    subcategory: "tablets",
    price: 108999,
    mrp: 124999,
    discount: 13,
    rating: 4.7,
    reviews: 654,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400",
    images: [
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800"
    ],
    inStock: true,
    specs: {
      Display: "14.6 inch Dynamic AMOLED 2X",
      Processor: "Snapdragon 8 Gen 2",
      RAM: "12GB",
      Storage: "256GB",
      Battery: "11200mAh",
      Camera: "13MP + 8MP",
      OS: "Android 13"
    },
    features: ["S Pen Included", "IP68 Rating", "DeX Mode"],
    emi: "₹5,243/month"
  },
  {
    id: 13,
    name: "OnePlus Pad",
    brand: "OnePlus",
    category: "mobiles",
    subcategory: "tablets",
    price: 37999,
    mrp: 42999,
    discount: 12,
    rating: 4.4,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400",
    images: [
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800"
    ],
    inStock: true,
    specs: {
      Display: "11.61 inch LCD",
      Processor: "MediaTek Dimensity 9000",
      RAM: "8GB",
      Storage: "128GB",
      Battery: "9510mAh",
      Camera: "13MP",
      OS: "Android 13"
    },
    features: ["Dolby Vision", "67W SUPERVOOC", "Cellular Option"],
    emi: "₹1,828/month"
  },
  {
    id: 14,
    name: "Lenovo Tab P12 Pro",
    brand: "Lenovo",
    category: "mobiles",
    subcategory: "tablets",
    price: 52999,
    mrp: 59999,
    discount: 12,
    rating: 4.3,
    reviews: 543,
    image: "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=400",
    images: [
      "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=800"
    ],
    inStock: false,
    specs: {
      Display: "12.6 inch AMOLED",
      Processor: "Snapdragon 870",
      RAM: "8GB",
      Storage: "256GB",
      Battery: "10200mAh",
      Camera: "13MP + 5MP",
      OS: "Android 12"
    },
    features: ["Precision Pen 3", "JBL Speakers", "Productivity Mode"],
    emi: "₹2,549/month"
  },

  // REFRIGERATORS (5 products)
  {
    id: 15,
    name: "LG 655L Side by Side Refrigerator",
    brand: "LG",
    category: "appliances",
    subcategory: "refrigerators",
    price: 89990,
    mrp: 119990,
    discount: 25,
    rating: 4.5,
    reviews: 2341,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400",
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800"
    ],
    inStock: true,
    specs: {
      Capacity: "655 Litres",
      Type: "Side by Side",
      "Energy Rating": "3 Star",
      Compressor: "Inverter Linear",
      "Ice Maker": "Yes",
      "Door Cooling+": "Yes"
    },
    features: ["Smart Diagnosis", "Door-in-Door", "Hygiene Fresh+"],
    emi: "₹4,329/month"
  },
  {
    id: 16,
    name: "Samsung 653L Triple Door",
    brand: "Samsung",
    category: "appliances",
    subcategory: "refrigerators",
    price: 94990,
    mrp: 124990,
    discount: 24,
    rating: 4.4,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400",
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800"
    ],
    inStock: true,
    specs: {
      Capacity: "653 Litres",
      Type: "French Door",
      "Energy Rating": "2 Star",
      Compressor: "Digital Inverter",
      "Ice Maker": "Yes",
      "Twin Cooling Plus": "Yes"
    },
    features: ["Family Hub", "Metal Cooling", "FlexZone"],
    emi: "₹4,570/month"
  },
  {
    id: 17,
    name: "Whirlpool 265L Double Door",
    brand: "Whirlpool",
    category: "appliances",
    subcategory: "refrigerators",
    price: 28990,
    mrp: 37990,
    discount: 24,
    rating: 4.2,
    reviews: 4532,
    image: "https://images.unsplash.com/photo-1536353284924-9220c464e262?w=400",
    images: [
      "https://images.unsplash.com/photo-1536353284924-9220c464e262?w=800"
    ],
    inStock: true,
    specs: {
      Capacity: "265 Litres",
      Type: "Double Door",
      "Energy Rating": "3 Star",
      Compressor: "IntelliSense Inverter",
      "Ice Maker": "Yes",
      "Zeolite Technology": "Yes"
    },
    features: ["MicroBlock", "6th Sense", "Fresh Flow Air Tower"],
    emi: "₹1,394/month"
  },
  {
    id: 18,
    name: "Haier 320L Double Door",
    brand: "Haier",
    category: "appliances",
    subcategory: "refrigerators",
    price: 31990,
    mrp: 43990,
    discount: 27,
    rating: 4.1,
    reviews: 2134,
    image: "https://images.unsplash.com/photo-1594635844945-dabb3f2bb2b2?w=400",
    images: [
      "https://images.unsplash.com/photo-1594635844945-dabb3f2bb2b2?w=800"
    ],
    inStock: true,
    specs: {
      Capacity: "320 Litres",
      Type: "Double Door",
      "Energy Rating": "3 Star",
      Compressor: "Twin Inverter",
      "Ice Maker": "Yes",
      "Magic Cooling": "Yes"
    },
    features: ["1 Hour Icing", "Turbo Icing", "Stabilizer Free"],
    emi: "₹1,539/month"
  },
  {
    id: 19,
    name: "Godrej 564L Side by Side",
    brand: "Godrej",
    category: "appliances",
    subcategory: "refrigerators",
    price: 62990,
    mrp: 79990,
    discount: 21,
    rating: 4.3,
    reviews: 876,
    image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=400",
    images: [
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800"
    ],
    inStock: true,
    specs: {
      Capacity: "564 Litres",
      Type: "Side by Side",
      "Energy Rating": "3 Star",
      Compressor: "Inverter",
      "Ice Maker": "Yes",
      "Cool Shower": "Yes"
    },
    features: ["Aroma Lock", "Stay Fresh", "Humidity Control"],
    emi: "₹3,030/month"
  },

  // WASHING MACHINES (5 products)
  {
    id: 20,
    name: "IFB 8kg Front Load",
    brand: "IFB",
    category: "appliances",
    subcategory: "washing-machines",
    price: 38990,
    mrp: 49990,
    discount: 22,
    rating: 4.4,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400",
    images: [
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800"
    ],
    inStock: true,
    specs: {
      Capacity: "8 kg",
      Type: "Front Load",
      "Energy Rating": "5 Star",
      RPM: "1400",
      "Wash Programs": "12",
      "In-built Heater": "Yes"
    },
    features: ["Aqua Energie", "Crescent Moon Drum", "3D Wash"],
    emi: "₹1,875/month"
  },
  {
    id: 21,
    name: "LG 9kg AI DD Front Load",
    brand: "LG",
    category: "appliances",
    subcategory: "washing-machines",
    price: 48990,
    mrp: 59990,
    discount: 18,
    rating: 4.6,
    reviews: 2187,
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400",
    images: [
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800"
    ],
    inStock: true,
    specs: {
      Capacity: "9 kg",
      Type: "Front Load",
      "Energy Rating": "5 Star",
      RPM: "1400",
      "Wash Programs": "14",
      "In-built Heater": "Yes"
    },
    features: ["AI Direct Drive", "Steam+", "TurboWash 360"],
    emi: "₹2,356/month"
  },
  {
    id: 22,
    name: "Samsung 7kg Fully Automatic",
    brand: "Samsung",
    category: "appliances",
    subcategory: "washing-machines",
    price: 22990,
    mrp: 29990,
    discount: 23,
    rating: 4.2,
    reviews: 5432,
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=400",
    images: [
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800"
    ],
    inStock: true,
    specs: {
      Capacity: "7 kg",
      Type: "Top Load",
      "Energy Rating": "5 Star",
      RPM: "700",
      "Wash Programs": "6",
      "Wobble Technology": "Yes"
    },
    features: ["Diamond Drum", "Magic Dispenser", "Digital Inverter"],
    emi: "₹1,106/month"
  },
  {
    id: 23,
    name: "Bosch 8kg Front Load",
    brand: "Bosch",
    category: "appliances",
    subcategory: "washing-machines",
    price: 45990,
    mrp: 57990,
    discount: 21,
    rating: 4.5,
    reviews: 1654,
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400",
    images: [
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800"
    ],
    inStock: true,
    specs: {
      Capacity: "8 kg",
      Type: "Front Load",
      "Energy Rating": "5 Star",
      RPM: "1200",
      "Wash Programs": "15",
      "In-built Heater": "Yes"
    },
    features: ["EcoSilence Drive", "ActiveWater Plus", "VarioDrum"],
    emi: "₹2,212/month"
  },
  {
    id: 24,
    name: "Whirlpool 7.5kg Semi-Automatic",
    brand: "Whirlpool",
    category: "appliances",
    subcategory: "washing-machines",
    price: 12990,
    mrp: 16990,
    discount: 24,
    rating: 4.0,
    reviews: 7654,
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=400",
    images: [
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800"
    ],
    inStock: true,
    specs: {
      Capacity: "7.5 kg",
      Type: "Semi-Automatic",
      "Energy Rating": "5 Star",
      RPM: "1400",
      "Wash Programs": "3",
      "Turbo Scrub": "Yes"
    },
    features: ["Super Soak", "Turbo Scrub", "Rust Free Body"],
    emi: "₹625/month"
  },

  // AIR CONDITIONERS (5 products)
  {
    id: 25,
    name: "Voltas 1.5 Ton 5 Star Inverter",
    brand: "Voltas",
    category: "appliances",
    subcategory: "air-conditioners",
    price: 42990,
    mrp: 57990,
    discount: 26,
    rating: 4.3,
    reviews: 3876,
    image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=400",
    images: [
      "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800"
    ],
    inStock: true,
    specs: {
      Capacity: "1.5 Ton",
      "Energy Rating": "5 Star",
      Type: "Split Inverter",
      Compressor: "Inverter",
      Refrigerant: "R32",
      "Copper Condenser": "Yes"
    },
    features: ["Steady Cool", "Anti Dust Filter", "Self Diagnosis"],
    emi: "₹2,068/month"
  },
  {
    id: 26,
    name: "Daikin 1.5 Ton 3 Star",
    brand: "Daikin",
    category: "appliances",
    subcategory: "air-conditioners",
    price: 45990,
    mrp: 59990,
    discount: 23,
    rating: 4.5,
    reviews: 2543,
    image: "https://images.unsplash.com/photo-1625245488600-f03fef636a3c?w=400",
    images: [
      "https://images.unsplash.com/photo-1625245488600-f03fef636a3c?w=800"
    ],
    inStock: true,
    specs: {
      Capacity: "1.5 Ton",
      "Energy Rating": "3 Star",
      Type: "Split Inverter",
      Compressor: "Inverter",
      Refrigerant: "R32",
      "Copper Condenser": "Yes"
    },
    features: ["Power Chill", "Econo Mode", "Coanda Airflow"],
    emi: "₹2,212/month"
  },
  {
    id: 27,
    name: "Blue Star 1 Ton 5 Star Inverter",
    brand: "Blue Star",
    category: "appliances",
    subcategory: "air-conditioners",
    price: 38990,
    mrp: 51990,
    discount: 25,
    rating: 4.4,
    reviews: 1987,
    image: "https://images.unsplash.com/photo-1580595999172-787d2db6a08c?w=400",
    images: [
      "https://images.unsplash.com/photo-1580595999172-787d2db6a08c?w=800"
    ],
    inStock: true,
    specs: {
      Capacity: "1 Ton",
      "Energy Rating": "5 Star",
      Type: "Split Inverter",
      Compressor: "Inverter",
      Refrigerant: "R410A",
      "Copper Condenser": "Yes"
    },
    features: ["Turbo Cool", "Self Clean", "Smart Ready"],
    emi: "₹1,875/month"
  },
  {
    id: 28,
    name: "LG 2 Ton 3 Star Dual Inverter",
    brand: "LG",
    category: "appliances",
    subcategory: "air-conditioners",
    price: 62990,
    mrp: 79990,
    discount: 21,
    rating: 4.6,
    reviews: 3210,
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400",
    images: [
      "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800"
    ],
    inStock: true,
    specs: {
      Capacity: "2 Ton",
      "Energy Rating": "3 Star",
      Type: "Split Dual Inverter",
      Compressor: "Dual Inverter",
      Refrigerant: "R32",
      "Copper Condenser": "Yes"
    },
    features: ["ThinQ App", "Himalaya Cool", "Ocean Black Fin"],
    emi: "₹3,030/month"
  },
  {
    id: 29,
    name: "Carrier 1.5 Ton 5 Star Inverter",
    brand: "Carrier",
    category: "appliances",
    subcategory: "air-conditioners",
    price: 44990,
    mrp: 58990,
    discount: 24,
    rating: 4.3,
    reviews: 1432,
    image: "https://images.unsplash.com/photo-1596552183299-000ef779e88d?w=400",
    images: [
      "https://images.unsplash.com/photo-1596552183299-000ef779e88d?w=800"
    ],
    inStock: true,
    specs: {
      Capacity: "1.5 Ton",
      "Energy Rating": "5 Star",
      Type: "Split Inverter",
      Compressor: "Flexicool Inverter",
      Refrigerant: "R32",
      "Copper Condenser": "Yes"
    },
    features: ["Flexicool", "PM 2.5 Filter", "Auto Cleanser"],
    emi: "₹2,164/month"
  }
];

export const categories = [
  {
    id: "mobiles",
    name: "Mobiles & Tablets",
    icon: "📱",
    subcategories: ["smartphones", "tablets"],
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
  },
  {
    id: "appliances",
    name: "Home Appliances",
    icon: "🏠",
    subcategories: ["refrigerators", "washing-machines", "air-conditioners"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400"
  }
];

export const brands = [
  "Samsung", "Apple", "OnePlus", "Xiaomi", "Vivo", "Realme", "Motorola", "Nothing",
  "Lenovo", "LG", "Whirlpool", "Haier", "Godrej", "IFB", "Bosch",
  "Voltas", "Daikin", "Blue Star", "Carrier"
];

export const getProductsByCategory = (category: string) => {
  return products.filter(p => p.category === category);
};

export const getProductsBySubcategory = (subcategory: string) => {
  return products.filter(p => p.subcategory === subcategory);
};

export const getProductById = (id: number) => {
  return products.find(p => p.id === id);
};

export const getFeaturedProducts = () => {
  return products.filter(p => p.rating >= 4.5).slice(0, 8);
};

export const getBestSellers = () => {
  return products.sort((a, b) => b.reviews - a.reviews).slice(0, 8);
};
