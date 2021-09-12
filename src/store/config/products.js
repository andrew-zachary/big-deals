export const searchAllProducts = ({ page, search }) => {
    return {
        url: `/big-deals/api/products/?page=${page}&s=${search}`,
        method: "GET",
        onSuccess: "products/itemsReceivedAfterSearch",
    };
};
export const browseAllProducts = ({ page, search }) => {
    return {
        url: `/big-deals/api/products/?page=${page}&s=${search}`,
        method: "GET",
        onSuccess: "products/itemsReceivedAfterBrowse",
    };
};