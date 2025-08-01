import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    price: '',
    description: ''
  });

  const [errors, setErrors] = useState({});

  // ✅ Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  // ✅ Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.productName) newErrors.productName = "Product Name is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.price) newErrors.price = "Price is required";
    if (!formData.description) newErrors.description = "Description is required";
    return newErrors;
  };

  // ✅ Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log(validationErrors)
    } else {
      console.log(formData)
      console.log("✅ Form Data Submitted:", JSON.stringify(formData, null, 2));   //JSON.stringify(value, replacer, space)
      setErrors({});
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Product Form</h1>
        <div className="outerBox">
          <div className="innerBox1">
            <div>
              <span>Product Name:</span>
              <input 
                type="text" 
                name="productName"
                value={formData.productName}
                onChange={handleChange}
              />
              {errors.productName && <p className="error">{errors.productName}</p>}
            </div>

            <div>
              <span>Category:</span>
              <select 
                name="category" 
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">--Select--</option>
                <option value="clothing">Clothing</option>
                <option value="fancy">Fancy</option>
                <option value="footwear">Footwear</option>
                <option value="electronics">Electronics</option>
              </select>
              {errors.category && <p className="error">{errors.category}</p>}
            </div>
          </div>

          <div className='innerBox2'>
            <div>
              <span>Price:</span>
              <input 
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
              {errors.price && <p className="error">{errors.price}</p>}
            </div>

            <div>
              <span>Description:</span>
              <input 
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              {errors.description && <p className="error">{errors.description}</p>}
            </div>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
