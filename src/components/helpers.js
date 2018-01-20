export function formatPrice(cents) {
  return `R ${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export const colors = {
  default: '#C8C9C8',
  primary: '#6435C9',
  success: '#21BA45',
  error: '#9F3A38',
  white: '#ffffff',
  black: '#00000099',
  background: '#f5f5f5',
  errorBackground: '#FFF5F5',
  primaryBorder: '#6435C950',
  defaultBorder: 'rgba(34,36,38,.15)',
  defaultBackground: '#fefffe'
};
