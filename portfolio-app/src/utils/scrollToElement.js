export function scrollToElement(id, behavior, offset) {
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - offset,
            behavior: behavior,
        });
    }
}
