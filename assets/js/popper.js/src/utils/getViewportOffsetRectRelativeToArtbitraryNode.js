import getOffsetRectRelativeToArbitraryNode from 'popper.js/src/utils/getOffsetRectRelativeToArbitraryNode';
import getScroll from 'popper.js/src/utils/getScroll';
import getClientRect from 'popper.js/src/utils/getClientRect';

export default function getViewportOffsetRectRelativeToArtbitraryNode(element, excludeScroll = false) {
  const html = element.ownerDocument.documentElement;
  const relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  const width = Math.max(html.clientWidth, window.innerWidth || 0);
  const height = Math.max(html.clientHeight, window.innerHeight || 0);

  const scrollTop = !excludeScroll ? getScroll(html) : 0;
  const scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  const offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width,
    height,
  };

  return getClientRect(offset);
}
