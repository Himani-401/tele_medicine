

const mongoose = require('mongoose');
require('dotenv').config(); 
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.log('Error connecting to MongoDB Atlas:', err));

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

const products = [
    {
      name: "Paracetamol Tablets",
      price: 5,
      description: "Effective for reducing fever and relieving mild to moderate pain.",
      category: "Pain Relief",
      imageUrl: "src/assets/images/medicine_1-removebg-preview.png",
    },
    {
      name: "Ibuprofen Tablets",
      price: 10,
      description: "Non-steroidal anti-inflammatory drug used to reduce pain and inflammation.",
      category: "Pain Relief",
      imageUrl: "src/assets/images/medicine_1-removebg-preview.png",
    },
    {
      name: "Cough Syrup",
      price: 8,
      description: "Relieves dry and productive coughs with a soothing formulation.",
      category: "Cold and Flu",
      imageUrl: "src/assets/images/medicine_1-removebg-preview.png",
    },
    {
      name: "Vitamin C Capsules",
      price: 12,
      description: "Boosts immunity and supports overall health with antioxidants.",
      category: "Supplements",
      imageUrl: "src/assets/images/medicine_1-removebg-preview.png",
    },
    {
      name: "Antacid Tablets",
      price: 6,
      description: "Provides quick relief from acidity, heartburn, and indigestion.",
      category: "Digestive Health",
      imageUrl: "src/assets/images/medicine_1-removebg-preview.png",
    },
    {
      name: "Allergy Relief Tablets",
      price: 15,
      description: "Effective in treating allergy symptoms such as runny nose and sneezing.",
      category: "Allergy",
      imageUrl: "src/assets/images/medicine_1-removebg-preview.png",
    },
    {
      name: "Multivitamin Tablets",
      price: 20,
      description: "Comprehensive multivitamin formula for daily nutritional support.",
      category: "Supplements",
      imageUrl: "src/assets/images/medicine_1-removebg-preview.png",
    },
    {
      name: "Diabetes Test Strips",
      price: 25,
      description: "Accurate and easy-to-use strips for blood glucose monitoring.",
      category: "Diabetes Care",
      imageUrl: "src/assets/images/medicine_1-removebg-preview.png",
    },
    {
      name: "Thermometer",
      price: 18,
      description: "Digital thermometer for quick and accurate temperature readings.",
      category: "Medical Equipment",
      imageUrl: "src/assets/images/medicine_1-removebg-preview.png",
    },
    {
      name: "Antibiotic Ointment",
      price: 7,
      description: "Topical ointment to prevent infections in minor cuts and wounds.",
      category: "First Aid",
      imageUrl: "src/assets/images/medicine_1-removebg-preview.png",
    },
  ];
  
const insertProducts = async () => {
  try {
    await Product.insertMany(products); 
    console.log('Products inserted successfully');
    mongoose.connection.close();  
  } catch (err) {
    console.error('Error inserting products:', err);
    mongoose.connection.close();
  }
};

insertProducts();
