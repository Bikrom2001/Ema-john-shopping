import { getStoreedCart } from "../utilities/fakedb";

export const productAndCartLoader = async () => {
    // get products
    const productsData = await fetch('http://localhost:5000/products');
    const {products} = await productsData.json();

    // Get cart
    const saveCart = getStoreedCart();
    const initialCart = [];

    for (const id in saveCart) {
        const addedProduct = products.find(product => product._id === id);
        if (addedProduct) {
            const quantity = saveCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return {products: products, initialCart:initialCart};
}