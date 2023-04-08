import { onMounted, onBeforeUnmount } from "vue";

export function useSimpleBar({elementRef, onScrollEvent = null}) {
    let scrollerObj = null;

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