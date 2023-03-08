// eslint-disable-next-line no-unused-vars
function solution(name) {
  if (!isNaN(name[0])) {
    return false;
  }
  for (let i = 0; i < name.length; i++) {
    if (!/^[a-z0-9]+$/i.test(name[i]) && name[i] !== '_') {
      return false;
    }
  }
  return true;
}
