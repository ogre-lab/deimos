/**
 * Create a carousel
 * @param {HTMLDivElement} block carousel container
 */
export default function decorate(block) {
  const children = Array.from(block.children);
  children.forEach((elm, idx) => {
    elm.classList.add(`elm-${idx}`);
    if (idx === 0) {
      elm.classList.add('first');
    }
    if (idx === children.length - 2) {
      elm.classList.add('last');
    }
    if (idx % 2 === 0) {
      elm.addEventListener('click', () => {
        /** @type {HTMLElement} */
        const nxt = block.querySelector(`.elm-${idx + 1}`);
        const isExpanded = nxt.classList.contains('expanded');
        children.forEach((itm) => itm.classList.remove('expanded'));
        if (isExpanded) {
          nxt.classList.remove('expanded');
        } else {
          nxt.classList.add('expanded');
        }
      });
      elm.classList.add('title-wrapper');
      elm.querySelector('div').classList.add('title');
    } else {
      elm.classList.add('body-wrapper');
      elm.querySelector('div').classList.add('body');
    }
  });
  console.log(block);
}
