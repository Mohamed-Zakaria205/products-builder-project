import { v4 as uuid } from "uuid";
import type { IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "2022 Genesis GV70: Nominee",
    description:
      "A luxury compact SUV offering elegant design, advanced tech, and a smooth driving experience.",
    imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    },
  },

  {
    id: uuid(),
    title: "Tesla Model S Plaid",
    description:
      "An all-electric sedan with extreme performance, cutting-edge technology, and long range.",
    imageURL: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
    price: "850000",
    colors: ["#000000", "#ffffff", "#9ca3af"],
    category: {
      name: "Cars",
      imageURL: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    },
  },

  {
    id: uuid(),
    title: "MacBook Pro 16-inch M2",
    description:
      "Powerful laptop designed for professionals with incredible performance and battery life.",
    imageURL: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    price: "120000",
    colors: ["#111827", "#6b7280", "#d1d5db"],
    category: {
      name: "Laptops",
      imageURL: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
  },

  {
    id: uuid(),
    title: "iPhone 15 Pro Max",
    description:
      "Apple’s flagship smartphone with a titanium design and powerful A17 chip.",
    imageURL:
      "https://buy.gazelle.com/cdn/shop/files/iPhone_15_Pro_Max_-_Blue_titanium-_Overlap_Trans-cropped.jpg?v=1757425930&width=1946",
    price: "65000",
    colors: ["#0f172a", "#64748b", "#e5e7eb"],
    category: {
      name: "Mobiles",
      imageURL:
        "https://buy.gazelle.com/cdn/shop/files/iPhone_15_Pro_Max_-_Blue_titanium-_Overlap_Trans-cropped.jpg?v=1757425930&width=1946",
    },
  },

  {
    id: uuid(),
    title: "Sony WH-1000XM5",
    description:
      "Industry-leading noise cancelling headphones with premium sound quality.",
    imageURL:
      "https://d1ncau8tqf99kp.cloudfront.net/PDP/Audio/Headphones/WH-1000XM5/v1/mobile/1_m.jpg",
    price: "18000",
    colors: ["#000000", "#a3a3a3"],
    category: {
      name: "Accessories",
      imageURL:
        "https://d1ncau8tqf99kp.cloudfront.net/PDP/Audio/Headphones/WH-1000XM5/v1/mobile/1_m.jpg",
    },
  },

  {
    id: uuid(),
    title: "Apple Watch Ultra",
    description:
      "A rugged smartwatch designed for extreme sports and outdoor adventures.",
    imageURL:
      "https://i5.walmartimages.com/seo/Apple-Watch-Ultra-2-49-mm-titanium-smart-watch-Trail-Loop-nylon-weave-green-gray-band-size-S-M-64-GB-LTE-Wi-Fi-Bluetooth-UWB-4G-2-17-oz_96661365-998e-40ea-8fdb-5e6569ef3ff8.66ea753c3d6ee5d26e91d1e7182090a1.jpeg",
    price: "42000",
    colors: ["#1f2933", "#9ca3af", "#f59e0b"],
    category: {
      name: "Wearables",
      imageURL:
        "https://i5.walmartimages.com/seo/Apple-Watch-Ultra-2-49-mm-titanium-smart-watch-Trail-Loop-nylon-weave-green-gray-band-size-S-M-64-GB-LTE-Wi-Fi-Bluetooth-UWB-4G-2-17-oz_96661365-998e-40ea-8fdb-5e6569ef3ff8.66ea753c3d6ee5d26e91d1e7182090a1.jpeg",
    },
  },

  {
    id: uuid(),
    title: "PlayStation 5",
    description:
      "Next-generation gaming console with ultra-fast SSD and immersive gameplay.",
    imageURL:
      "https://cdn.mos.cms.futurecdn.net/HkdMToxijoHfz4JwUgfh3G-1920-80.jpg",
    price: "35000",
    colors: ["#ffffff", "#1e40af"],
    category: {
      name: "Gaming",
      imageURL:
        "https://cdn.mos.cms.futurecdn.net/HkdMToxijoHfz4JwUgfh3G-1920-80.jpg",
    },
  },

  {
    id: uuid(),
    title: "Canon EOS R6",
    description:
      "Mirrorless camera with outstanding image quality and fast autofocus system.",
    imageURL:
      "https://i5.walmartimages.com/seo/Canon-EOS-R6-Digital-camera-mirrorless-20-1-MP-Full-Frame-4K-60-fps-4-3x-optical-zoom-RF-24-105mm-F4-L-USM-lens-Wi-Fi-Bluetooth-black_e40bbfc6-303e-4f59-9e3c-d2ab35a167d2.6bf6d539b19e2599c22bbf45c0891fac.jpeg",
    price: "90000",
    colors: ["#000000", "#374151"],
    category: {
      name: "Cameras",
      imageURL:
        "https://i5.walmartimages.com/seo/Canon-EOS-R6-Digital-camera-mirrorless-20-1-MP-Full-Frame-4K-60-fps-4-3x-optical-zoom-RF-24-105mm-F4-L-USM-lens-Wi-Fi-Bluetooth-black_e40bbfc6-303e-4f59-9e3c-d2ab35a167d2.6bf6d539b19e2599c22bbf45c0891fac.jpeg",
    },
  },
];
