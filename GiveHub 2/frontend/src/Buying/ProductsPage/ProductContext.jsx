// import React, { createContext, useContext, useState } from 'react';

// const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//     const [products, setProducts] = useState([
//         { id: 1, name: 'Green Fancy Chair', description: 'Comfortable green chair perfect for modern offices.', price: '$45', imageUrl: 'path_to_image' },
//         { id: 2, name: 'Red Sofa Set', description: 'Stylish red sofa that will give your living room a classic look.', price: '$88', imageUrl: 'path_to_image' },
//         { id: 3, name: 'Desk Lamp', description: 'Adjustable desk lamp, ideal for reading or work.', price: '$22', imageUrl: 'path_to_image' },
//         { id: 4, name: 'Desk Lamp', description: 'Adjustable desk lamp, ideal for reading or work.', price: '$22', imageUrl: 'path_to_image' }
//     ]);

//     const addProduct = product => {
//         setProducts(prevProducts => [...prevProducts, { ...product, id: prevProducts.length + 1 }]);
//     };

//     return (
//         <ProductContext.Provider value={{ products, addProduct }}>
//             {children}
//         </ProductContext.Provider>
//     );
// };

// export const useProducts = () => useContext(ProductContext);
