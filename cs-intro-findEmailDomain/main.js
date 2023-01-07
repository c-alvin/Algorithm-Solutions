// eslint-disable-next-line no-unused-vars
function solution(address) {
  let domain = '';

  domain = address.split('@');

  return domain[domain.length - 1];
}
