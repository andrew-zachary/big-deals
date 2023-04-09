import { onMounted, onBeforeUnmount } from "vue";

export function useSimpleBar({elementRef, callback = null}) {

    let scrollerObj = null;
    const onScrollEvent = (e) => {
        if ((Math.floor(e.target.scrollTop) + Math.floor(e.target.clientHeight) + 150) > Math.floor(e.target.scrollHeight)) {
            callback();
        }
    };

    onMounted(() => {

        scrollerObj = new SimpleBar(elementRef.value);

        if(onScrollEvent) {
            scrollerObj.getScrollElement().addEventListener('scroll', onScrollEvent);
        }

    });
    
    onBeforeUnmount(() => {

        scrollerObj.unMount();

        if(onScrollEvent) {
            scrollerObj.getScrollElement().removeEventListener('scroll', onScrollEvent);
        }

    });

    return null;
}