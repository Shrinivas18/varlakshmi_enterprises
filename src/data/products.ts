export type Product = {
  id: number;
  name: string;
  category: string;
  capacity: string;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Platform Weighing Scale",
    category: "Industrial",
    capacity: "Different Variants",
    image: "/platform-scale.jpg",
    description:
      "Heavy-duty platform scale suitable for warehouses and industrial use. Accurate and durable.",
  },
  {
    id: 2,
    name: "Table Top Weighing Scale",
    category: "Retail",
    capacity: "Different Variants",
    image: "/table-top.png",
    description:
      "Compact and precise weighing machine ideal for shops and small businesses.",
  },
  {
    id: 3,
    name: "Crane Weighing Scale",
    category: "Industrial",
    capacity: "Different Variants",
    image: "/crane-scale.png",
    description:
      "Robust crane scale for heavy-duty industrial lifting and weighing operations.",
  },
  {
    id: 4,
    name: "Baby Weighing Scale",
    category: "Medical",
    capacity: "Different Variants",
    image: "/baby-scale.png",
    description:
      "Accurate and safe weighing machine designed for infants and clinics.",
  },
  {
    id: 5,
    name: "Personal Digital Weighing Scale",
    category: "Home",
    capacity: "Different Variants",
    image: "/personal-scale.png",
    description:
      "Sleek digital weighing scale for personal home use with high accuracy.",
  },
   {
    id: 6,
    name: "Jewellery Weighing Scale",
    category: "Precision",
    capacity: "500 g",
    image: "/jewellery-scale.png",
    description:
      "High-precision scale designed for jewellery shops and laboratories.",
  },
];