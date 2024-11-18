export async function getProduct(id: string) {
  const products = [
    {
      id: "1",
      name: "Floating Phone",
      price: 1139.33,
      inStock: true,
      rating: 4.8,
      reviewCount: 10,
      description: "Experience the future of mobile technology with our Floating Phone. This cutting-edge device defies gravity, offering a truly unique user experience. With its advanced holographic display and gesture controls, it's not just a phone—it's a conversation starter.",
      images: ["/img/img_1.jpg", "/img/img_2.jpg"],
      colors: ["blue", "black", "green", "orange"]
    },
    {
      id: "2",
      name: "Smart Watch Pro",
      price: 299.99,
      inStock: true,
      rating: 4.5,
      reviewCount: 24,
      description: "Stay connected and track your fitness with our Smart Watch Pro. Featuring a vibrant OLED display, heart rate monitor, and GPS, it's your perfect companion for an active lifestyle. Water-resistant and long-lasting battery life ensure it keeps up with your busy day.",
      images: ["/img/img_2.jpg", "/img/img_4.jpg", "/img/img_5.jpg"],
      colors: ["black", "white", "red", "yellow"]
    },
    {
      id: "3",
      name: "Wireless Earbuds X",
      price: 149.99,
      inStock: true,
      rating: 4.3,
      reviewCount: 18,
      description: "Immerse yourself in rich, crystal-clear sound with our Wireless Earbuds X. Featuring noise-cancellation and a comfortable fit, these earbuds are perfect for long listening sessions or quick calls on the go.",
      images: ["/img/img_3.jpg", "/img/img_2.jpg"],
      colors: ["white", "black"]
    },
    {
      id: "4",
      name: "4K Ultra HD Drone",
      price: 499.99,
      inStock: false,
      rating: 4.7,
      reviewCount: 36,
      description: "Capture breathtaking aerial footage with the 4K Ultra HD Drone. Equipped with a stabilizing gimbal and intelligent flight modes, this drone ensures professional-level results every time.",
      images: ["/img/img_4.jpg"],
      colors: ["gray", "black", "red"]
    },
    {
      id: "5",
      name: "VR Headset Elite",
      price: 199.99,
      inStock: true,
      rating: 4.6,
      reviewCount: 42,
      description: "Step into the world of virtual reality with our VR Headset Elite. Featuring high-resolution lenses and intuitive controls, this headset brings immersive experiences to life like never before.",
      images: ["/img/img_5.jpg"],
      colors: ["white", "black"]
    },
    {
      id: "6",
      name: "Smart Home Hub",
      price: 89.99,
      inStock: true,
      rating: 4.2,
      reviewCount: 50,
      description: "Control all your smart devices seamlessly with the Smart Home Hub. Simple to set up and use, it connects lights, thermostats, cameras, and more for a smarter living space.",
      images: ["/img/img_6.jpg"],
      colors: ["black", "gray"]
    },
    {
      id: "7",
      name: "Gaming Laptop GX",
      price: 1599.99,
      inStock: true,
      rating: 4.9,
      reviewCount: 87,
      description: "Dominate the game with the Gaming Laptop GX. Featuring a powerful processor, high refresh rate display, and customizable RGB keyboard, this laptop is made for serious gamers.",
      images: ["/img/img_7.jpg"],
      colors: ["black", "silver"]
    },
    {
      id: "8",
      name: "Portable Projector Max",
      price: 279.99,
      inStock: false,
      rating: 4.4,
      reviewCount: 21,
      description: "Take the cinema anywhere with the Portable Projector Max. Compact and lightweight, it delivers vibrant, high-resolution images for home movie nights or presentations on the go.",
      images: ["/img/img_8.jpg"],
      colors: ["white", "black"]
    },
    {
      id: "9",
      name: "Fitness Tracker Pro",
      price: 99.99,
      inStock: true,
      rating: 4.5,
      reviewCount: 34,
      description: "Keep track of your health and fitness goals with the Fitness Tracker Pro. It monitors steps, sleep, heart rate, and more to help you stay on top of your wellness journey.",
      images: ["/img/img_1.jpg"],
      colors: ["blue", "pink", "black"]
    },
    {
      id: "10",
      name: "Smart Thermostat V2",
      price: 159.99,
      inStock: true,
      rating: 4.3,
      reviewCount: 28,
      description: "Regulate your home temperature with the Smart Thermostat V2. Featuring remote control via app and energy-saving modes, it helps you stay comfortable while saving money.",
      images: ["/img/img_2.jpg"],
      colors: ["white", "silver"]
    },
    {
      id: "11",
      name: "Noise-Cancelling Headphones",
      price: 249.99,
      inStock: true,
      rating: 4.8,
      reviewCount: 45,
      description: "Experience exceptional sound quality and peace with Noise-Cancelling Headphones. Ideal for travel, work, or relaxation, they provide a high-quality listening experience without distractions.",
      images: ["/img/img_3.jpg"],
      colors: ["black", "silver"]
    },
    {
      id: "12",
      name: "Robotic Vacuum Cleaner",
      price: 299.99,
      inStock: false,
      rating: 4.5,
      reviewCount: 53,
      description: "Effortlessly keep your floors clean with the Robotic Vacuum Cleaner. With smart mapping and scheduling, it adapts to your home layout for efficient, automatic cleaning.",
      images: ["/img/img_4.jpg"],
      colors: ["black", "white"]
    },
    {
      id: "13",
      name: "Smart Doorbell Camera",
      price: 129.99,
      inStock: true,
      rating: 4.6,
      reviewCount: 19,
      description: "Enhance home security with the Smart Doorbell Camera. Featuring two-way audio and motion detection, it alerts you to visitors and allows remote monitoring via your smartphone.",
      images: ["/img/img_5.jpg"],
      colors: ["gray", "black"]
    },
    {
      id: "14",
      name: "Action Camera Xtreme",
      price: 199.99,
      inStock: true,
      rating: 4.7,
      reviewCount: 32,
      description: "Capture your adventures with the Action Camera Xtreme. With 4K recording, waterproof design, and various mounting options, it's perfect for extreme sports enthusiasts.",
      images: ["/img/img_6.jpg"],
      colors: ["black", "yellow"]
    },
    {
      id: "15",
      name: "Electric Scooter Z1",
      price: 499.99,
      inStock: true,
      rating: 4.4,
      reviewCount: 27,
      description: "Commute with style using the Electric Scooter Z1. Featuring a long-range battery and robust build, it ensures a smooth ride for urban travel.",
      images: ["/img/img_7.jpg"],
      colors: ["black", "red"]
    },
    {
      id: "16",
      name: "Wireless Charging Pad",
      price: 39.99,
      inStock: true,
      rating: 4.1,
      reviewCount: 14,
      description: "Keep your devices charged effortlessly with the Wireless Charging Pad. Compatible with all Qi-enabled devices, it offers fast charging in a sleek, compact design.",
      images: ["/img/img_8.jpg", "/img/img_4.jpg"],
      colors: ["black", "white", "blue"]
    }
  ];
  
  
    const product = products.find(p => p.id === id)
    if (!product) {
      return null
    }
    return product
  }

export async function getBestSellerProducts() {
  const products = [
    {
      id: "1",
      name: "Floating Phone",
      image: "/img/img_1.jpg",
      store: "English Department",
      inStock: true,
      price: 1499.99,
      discountedPrice: 1139.33
    },
    {
      id: "2",
      name: "Smart Watch Pro",
      image: "/img/img_2.jpg",
      store: "English Department",
      inStock: true,
      price: 399.99,
      discountedPrice: 299.99
    },
    {
      id: "3",
      name: "Wireless Earbuds X",
      image: "/img/img_3.jpg",
      store: "Tech Store",
      inStock: true,
      price: 199.99,
      discountedPrice: 149.99
    },
    {
      id: "4",
      name: "4K Ultra HD Drone",
      image: "/img/img_4.jpg",
      store: "Drone Hub",
      inStock: false,
      price: 699.99,
      discountedPrice: 499.99
    },
    {
      id: "5",
      name: "VR Headset Elite",
      image: "/img/img_5.jpg",
      store: "Gadget World",
      inStock: true,
      price: 249.99,
      discountedPrice: 199.99
    },
    {
      id: "6",
      name: "Smart Home Hub",
      image: "/img/img_6.jpg",
      store: "Home Solutions",
      inStock: true,
      price: 129.99,
      discountedPrice: 89.99
    },
    {
      id: "7",
      name: "Gaming Laptop GX",
      image: "/img/img_7.jpg",
      store: "Gaming Station",
      inStock: true,
      price: 1999.99,
      discountedPrice: 1599.99
    },
    {
      id: "8",
      name: "Portable Projector Max",
      image: "/img/img_8.jpg",
      store: "Tech Essentials",
      inStock: false,
      price: 349.99,
      discountedPrice: 279.99
    },
    {
      id: "9",
      name: "Fitness Tracker Pro",
      image: "/img/img_1.jpg",
      store: "Wellness Hub",
      inStock: true,
      price: 149.99,
      discountedPrice: 99.99
    },
    {
      id: "10",
      name: "Smart Thermostat V2",
      image: "/img/img_2.jpg",
      store: "Home Solutions",
      inStock: true,
      price: 199.99,
      discountedPrice: 159.99
    },
    {
      id: "11",
      name: "Noise-Cancelling Headphones",
      image: "/img/img_3.jpg",
      store: "Sound World",
      inStock: true,
      price: 299.99,
      discountedPrice: 249.99
    },
    {
      id: "12",
      name: "Robotic Vacuum Cleaner",
      image: "/img/img_4.jpg",
      store: "CleanTech",
      inStock: false,
      price: 399.99,
      discountedPrice: 299.99
    },
    {
      id: "13",
      name: "Smart Doorbell Camera",
      image: "/img/img_5.jpg",
      store: "Secure Living",
      inStock: true,
      price: 179.99,
      discountedPrice: 129.99
    },
    {
      id: "14",
      name: "Action Camera Xtreme",
      image: "/img/img_6.jpg",
      store: "Adventure Gear",
      inStock: true,
      price: 249.99,
      discountedPrice: 199.99
    },
    {
      id: "15",
      name: "Electric Scooter Z1",
      image: "/img/img_7.jpg",
      store: "Urban Wheels",
      inStock: true,
      price: 649.99,
      discountedPrice: 499.99
    },
    {
      id: "16",
      name: "Wireless Charging Pad",
      image: "/img/img_8.jpg",
      store: "Charge Solutions",
      inStock: true,
      price: 59.99,
      discountedPrice: 39.99
    }
  ];   
  
    return products
  }
  