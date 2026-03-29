import userModel from "../models/userModel.js";

//add product to user cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;
        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.json({ success: false, message: 'User not found' });
        }

        let cartData = structuredClone(userData.cartData || {});
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } 
            else {
                cartData[itemId][size] = 1
            }
        } 
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1
        }

        const updatedUser = await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });
        console.log("updated cartData", updatedUser.cartData);
        res.json({ success: true, message: 'Added To Cart', cartData: updatedUser.cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });

    }
}

//update product to user cart
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;
        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.json({ success: false, message: 'User not found' });
        }

        let cartData = structuredClone(userData.cartData || {});
        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }
        cartData[itemId][size] = quantity;
        const updatedUser = await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });
        res.json({ success: true, message: 'Cart Updated', cartData: updatedUser.cartData });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//get user cart data
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body;
        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.json({ success: false, message: 'User not found' });
        }

        let cartData = userData.cartData || {};
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addToCart, updateCart, getUserCart };
