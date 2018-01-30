export function formatPrice(cents) {
  return `R ${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

export const colors = {
  primary: "#5E2EB3",
  primaryHover: "#6435C9",
  primaryBorder: "#6435C950",
  success: "#60C796",
  successHover: "#16ab39",
  successBorder: "#a3c193",
  successBackground: "#F5FFF5",
  danger: "#DB2828",
  dangerHover: "#d01919",
  error: "#9F3A38",
  errorBorder: "#C193A3",
  errorBackground: "#FFF5F5",
  default: "#00000099",
  defaultHover: "#C8C9C8",
  defaultBackground: "#fefffe",
  defaultBorder: "rgba(34,36,38,.15)",
  grey: "#C8C9C8",
  white: "#ffffff"
};
