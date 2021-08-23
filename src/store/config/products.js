export const getAllProduct = ({ page, search }) => {
    return {
        url: `/big-yay-deals/api/products/?s=${search}&page=${page}&limit=${6}`,
        method: "GET",
        onSuccess: "products/itemsReceived",
    };
};