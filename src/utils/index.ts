export function groupObjectByType<T>(array: T[]) {
  const groupedObjects: { [key: string]: T[] } = {};

  // Group objects by type
  array.forEach((obj) => {
    if (!groupedObjects[obj.type]) {
      groupedObjects[obj.type] = [];
    }
    groupedObjects[obj.type].push(obj);
  });

  // Convert grouped objects into array of objects
  const result: { type: string; data: T[] }[] = [];
  for (const type in groupedObjects) {
    if (groupedObjects.hasOwnProperty(type)) {
      result.push({ type, data: groupedObjects[type] });
    }
  }

  return result;
}
