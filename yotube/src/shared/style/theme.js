const colors = {
  black: "black",
  white: "white",
  gray: "#484848",
  focusBlue: "blue",
  slider: "#1e201e",
  transparent: "#00ff0000",
  hover: "#b2b2b2",
  thumbTextSmall: "#b2b2b2",
  placeholder: "#cccccc",
  backgroundColor: "white",
  iconBackground: "#1d1d1d",
  shortsComment: "#191919",
};

const sizes = {
  headerSize: "50px",
  asideSize: "55px",
  searchSize: "732px",
  logoSizeSmall: "24px",
  thumbSize: "36px",
  windowSmallSize: "790px",
  shortsWidth: "315px",
  shortsHeight: "560px",
  shortsIconWidth: "32px",
  shortsIconHeight: "32px",
  shortsIconBigWidth: "48px",
  shortsIconBigHeight: "48px",
  shortsAsideWidth: "48px",
  shortsAsideHeight: "72px",
  detailIconWidth: "24px",
  detailIconHeight: "24px",
  commentIconWidth: "24px",
};

const fontSize = {};
const darkAside = {
  textColor: "white",
};

const lightAside = {
  textColor: "#484848",
};

export const darkTheme = {
  sizes,
  colors: {
    ...colors,
    text: "white",
    backgroundColor: "black",
  },
  fontSize,
  darkAside,
};
export const lightTheme = {
  sizes,
  colors: {
    ...colors,
    text: "black",
    backgroundColor: "white",
  },
  fontSize,
  lightAside,
};
