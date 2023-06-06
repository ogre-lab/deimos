
/**
 * Create a carousel
 * @param {HTMLDivElement} block carousel container
 */
export default function decorate(block) {
  const cmpChilds = Array.from(block.children);
  const child = cmpChilds
    .find((node) => node?.tagName?.toLowerCase() === 'div');
  child.classList.toggle('carousel-holder');
  const childs = Array.from(child.children);
  childs
    .filter((node) => node?.tagName?.toLowerCase() === 'div')
    .forEach((slide) => slide.classList.add('carousel-picture'));
  child.setAttribute('data-count', childs.length);

  const titleNode = cmpChilds
    .find((node, idx) => node?.tagName?.toLowerCase() === 'div' && idx === 1);
  const title = titleNode
    .textContent;
  const h1 = document.createElement('h1');
  h1.classList.add('title');
  h1.textContent = title;

  const subtitleNode = cmpChilds
    .find((node, idx) => node?.tagName?.toLowerCase() === 'div' && idx === 2);
  const subtitle = subtitleNode
    .textContent;
  const h2 = document.createElement('h2');
  h2.classList.add('subtitle');
  h2.textContent = subtitle;

  const textWrapper = document.createElement('div');
  textWrapper.classList.add('text-wrapper');
  textWrapper.appendChild(h1);
  textWrapper.appendChild(h2);

  block.removeChild(titleNode);
  block.removeChild(subtitleNode);

  block.appendChild(textWrapper);

  // console.log(title, block);
}
