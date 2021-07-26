export function insertToArrayMap<KeyT, ValT>(map: Map<KeyT, Array<ValT>>, key: KeyT, value: ValT | Array<ValT>)
{
  let array = map.get(key);
  if (!array)
    map.set(key, array = new Array<ValT>());
  if (Array.isArray(value))
    for (const item of value)
      array.push(item);
  else
    array.push(value);
}
export function mergeArrayMaps<KeyT, ValT>(...args: Array<Map<KeyT, Array<ValT>>>): Map<KeyT, Array<ValT>>
{
  const res = new Map<KeyT, Array<ValT>>();
  for (const map of args)
  {
    for (const [ key, value ] of map.entries())
      insertToArrayMap(res, key, value);
  }
  return res;
}
