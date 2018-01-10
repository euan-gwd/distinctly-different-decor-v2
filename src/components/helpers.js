export function formatPrice(cents) {
  return `R ${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export const colors = {
  border: '#642bcc50',
  background: '#f5f5f5',
  primary: '#642bcc'
};
