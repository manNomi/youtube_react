export const setNumber = (num) => {
  if (num > 10000) {
    return `${Math.round(num / 10000)}만`;
  } else if (num > 1000) {
    return `${Math.round(num / 1000)}천`;
  } else {
    return `${num}`;
  }
};
export const setDate = (num) => {
  if (num > 365) {
    return `${Math.round(num / 365)}년전`;
  } else if (num > 3) {
    return `${Math.round(num / 30)}달전`;
  } else if (num > 7) {
    return `${Math.round(num / 7)}주전`;
  } else {
    return `${num} 일전`;
  }
};

export const setView = (num) => {
  if (num > 10000) {
    return `${Math.round(num / 10000)}만회`;
  } else if (num > 1000) {
    return `${Math.round(num / 1000)}천회`;
  } else {
    return `${num}회`;
  }
};
