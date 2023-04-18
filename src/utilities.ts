/**
 * 遍历全部命名空间的路径，方式一
 */
export const getNamespacedModulePathsByLoop = (store: any) => {
  const namespacePaths = [];
  for (const namespace in store._modulesNamespaceMap) {
    if (
      Object.prototype.hasOwnProperty.call(
        store._modulesNamespaceMap,
        namespace,
      )
    ) {
      // Remove the trailing slash from the namespace to get the path
      const path = namespace.slice(0, -1);
      namespacePaths.push(path);
    }
  }
  return namespacePaths;
};

/**
 * 遍历全部命名空间的路径，方式二
 */
export const getNamespacedModulePathsByEntries = (store: any) => {
  return Object.entries(store._modulesNamespaceMap).map(([namespace]) =>
    namespace.slice(0, -1),
  );
};

/**
 * 遍历全部命名空间的路径，方式三
 */
export const getNamespacedModulePathsByObjectKeys = (store: any) =>
  Object.keys(store._modulesNamespaceMap).map((namespace) =>
    namespace.slice(0, -1),
  );
