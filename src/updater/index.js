import {
  increaseQuality,
  decreaseQuality,
  decreaseSellIn,
  setZeroQuality
} from "../actions";
import { isExpired } from "../helpers";

export const updateBrie = item => {
  increaseQuality(item);
  decreaseSellIn(item);
  if (isExpired(item)) {
    increaseQuality(item);
  }
  return;
};

export const updateBackstagePasses = item => {
  increaseQuality(item);
  if (item.sellIn < 11) {
    increaseQuality(item);
  }
  if (item.sellIn < 6) {
    increaseQuality(item);
  }
  decreaseSellIn(item);
  if (isExpired(item)) {
    setZeroQuality(item);
  }
  return;
};

export const updateNormalItem = item => {
  decreaseQuality(item);
  decreaseSellIn(item);
  if (isExpired(item)) {
    decreaseQuality(item);
  }
  return;
};