import { insertToArrayMap, mergeArrayMaps } from '../../../../lib/map/index';

describe('insertToArrayMap', () => {

  test('basic insertToArrayMap', async () => {
    const map1 = new Map();
    const map2 = new Map();
    map1.set('a', [1]);
    map2.set('a', [1]);
    map2.set('y', [3]);
    insertToArrayMap(map1, "y", 3);
    expect(map1).toEqual(map2);
  });

  test('insertToArrayMap with empty value', async () => {
    const map1 = new Map();
    insertToArrayMap(map1, "y", []);
    expect(map1.get("y")).toEqual([]);
  });

  test('insertToArrayMap with multiples elements', async () => {
    const map1 = new Map();
    map1.set('a', [1]);
    insertToArrayMap(map1, "b", [3, 1, 2, 3, 3]);
    expect(map1.get("b")).toEqual([3, 1, 2, 3, 3]);
  });

  test('insertToArrayMap with empty map', async () => {
    const map1 = new Map();
    insertToArrayMap(map1, "a", [[3, 1, 2, 3, 3], [1], [2]]);
    expect(map1.get("a")).toEqual([[3, 1, 2, 3, 3], [1], [2]]);
  });
});

describe('mergeArrayMaps', () => {

  test('basic mergeArrayMaps', async () => {
    const map1 = new Map();
    const map2 = new Map();
    map1.set('a', [1]);
    map2.set('b', 2);
    const map3 = mergeArrayMaps(map1, map2);
    expect(map3.get("a")).toEqual([1]);
    expect(map3.get("b")).toEqual([2]);
  });

  test('mergeArrayMaps with two same keys', async () => {
    const map1 = new Map();
    const map2 = new Map();
    map1.set('a', [1]);
    map2.set('a', 2);
    const map3 = mergeArrayMaps(map1, map2);
    expect(map3.get("a")).toEqual([1, 2]);
  });

  test('mergeArrayMaps one map empty', async () => {
    const map1 = new Map();
    const map2 = new Map();
    map2.set('a', 2);
    const map3 = mergeArrayMaps(map1, map2);
    expect(map3.get("a")).toEqual([2]);
  });
});
