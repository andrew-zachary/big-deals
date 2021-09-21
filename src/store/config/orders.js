export const createOrder = ({items}) => {
    return {
      url: `/big-deals/api/orders/`,
      method: "POST",
      data: {items},
      onSuccess: "orders/orderReceived",
      useGlobalSpinner: true,
      processName: "getting orders ...",
    };
  };
export const getAllOrders = () => {
    return {
      url: `/big-deals/api/orders/`,
      method: "GET",
      data: {},
      onSuccess: "orders/ordersReceived",
      useGlobalSpinner: true,
      processName: "getting orders ...",
    };
  };
  export const getOrder = ({ orderId }) => {
    return {
      url: `/big-deals/api/orders/${orderId}`,
      method: "GET",
      data: {},
      onSuccess: "orders/orderReceived",
      useGlobalSpinner: true,
      processName: "order details ...",
    };
  };
  export const updateOrderProducts = ({ orderId, products, state }) => {
    return {
      url: `/big-deals/api/orders/${orderId}`,
      method: "PUT",
      data: { products, state },
      onSuccess: "orders/orderReceived",
      feedback: {
        header: "Cart",
        body: "order was saved",
        time: "now",
      },
      auth: true,
      useGlobalSpinner: true,
      processName: "updating order ...",
    };
  };