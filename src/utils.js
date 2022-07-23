import {
  CARD_SPACE_WIDTH,
  HIDE_SHIFT,
  INITIAL_PULL_BEFORE_HIDING,
  NUMBER_OF_CARDS,
  NUMBER_OF_CARDS_TO_SHIFT,
} from './constants';

export const getMultiple = ({ index, total, shiftInteger }) => {
  let m = (index + shiftInteger) % total;
  if (m < NUMBER_OF_CARDS_TO_SHIFT - HIDE_SHIFT) {
    m += total;
  }
  return m;
};
export const getIsInvisible = (multiple, total) => {
  const cm = Math.min(total, NUMBER_OF_CARDS) - NUMBER_OF_CARDS_TO_SHIFT;
  return multiple === cm;
};
export const getIsActive = (multiple, total) => {
  /* depends on how many cards are visible in the carousal container and carousal width, so this is responsive in answer which card should be active */
  const indexToHighlight =
    (document.querySelector('.carousal-container')?.getBoundingClientRect()
      ?.width ?? 0) /
      CARD_SPACE_WIDTH +
    INITIAL_PULL_BEFORE_HIDING;
  return multiple == parseInt(indexToHighlight / 2);
};
