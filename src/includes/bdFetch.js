import { createFetch } from "@vueuse/core";

const useBDaFetch = createFetch({
    baseUrl: 'https://dummyjson.com/',
    options: {
        afterFetch(ctx) {
            ctx.data = JSON.parse(ctx.data);
            return ctx;
        }
    }
});

export default useBDaFetch;