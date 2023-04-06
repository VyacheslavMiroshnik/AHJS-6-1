export default function returnListMethods(object, params = []) {
  const keyList = [];
  for (const key in object) {
    if (!params.includes(key)) {
      keyList.push(key);
    }
  }
  keyList.sort().forEach((element) => {
    params.push(element);
  });
  const result = params.map((element) => {
    const res = { key: element, value: object[element] };
    return res;
  });
  return result;
}
