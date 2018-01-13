export function formatPrice(cents) {
  return `R ${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export const colors = {
  border: '#6435C950',
  background: '#f5f5f5',
  primary: '#6435C9',
  success: '#21BA45',
  error: '#9F3A38'
};
