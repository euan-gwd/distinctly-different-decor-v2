export function formatPrice(cents) {
  return `R ${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

export const colors = {
  grey: "#C8C9C8",
  primary: "#6435C9",
  primaryHover: "#6435C9",
  success: "#21BA45",
  successHover: "#16ab39",
  danger: "#DB2828",
  dangerHover: "#d01919",
  error: "#9F3A38",
  white: "#ffffff",
  default: "#00000099",
  defaultHover: "#C8C9C8",
  background: "#f5f5f5",
  errorBackground: "#FFF5F5",
  primaryBorder: "#6435C950",
  defaultBorder: "rgba(34,36,38,.15)",
  defaultBackground: "#fefffe"
};
