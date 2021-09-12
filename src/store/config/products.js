export const searchAllProducts = ({ page, search, lang }) => {
    return {
        url: `/big-deals/api/products/?page=${page}&s=${search}&lang=${lang}`,
        method: "GET",
        onSuccess: "products/itemsReceivedAfterSearch",
    };
};
export const browseAllProducts = ({ page, search, lang }) => {
    return {
        url: `/big-deals/api/products/?page=${page}&s=${search}&lang=${lang}`,
        method: "GET",
        onSuccess: "products/itemsReceivedAfterBrowse",
    };
};