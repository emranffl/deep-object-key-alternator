type KeyMapping<T> = Record<keyof T, string>

type DeepKeyMapping<T> = {
  [K in keyof T]: T[K] extends object
    ? T[K] extends Array<NonNullable<unknown>>
      ? Array<DeepKeyMapping<T[K][number]>>
      : DeepKeyMapping<T[K]>
    : T[K]
}

/**
 * Recursively parses an object/array, applying a key mapping to rename the keys.
 *
 * @param inputObject - The input object or array to be parsed.
 * @param keyMapping - An object specifying key mapping rules.
 * @example
 * ```ts
 * const inputObject = {
 *   foo: "bar",
 *   baz: {
 *     qux: "quux"
 *   }
 * };
 *
 * const keyMapping = {
 *   foo: "boo",
 *   qux: "que"
 * };
 *
 * const parsedObject = deepObjectKeyAlternator(inputObject, keyMapping);
 *
 * console.log(parsedObject);
 * // {
 * //   boo: "bar",
 * //   baz: {
 * //     que: "quux"
 * //   }
 * // }
 * ```
 *
 * @returns A new object or array with keys renamed according to the key mapping.
 */
export function deepObjectKeyAlternator<T extends Record<string, any>>(
  inputObject: T,
  keyMapping:
    | Partial<KeyMapping<DeepKeyMapping<T>>>
    | Record<string, string> = {}
): DeepKeyMapping<T> | any[] {
  if (Array.isArray(inputObject)) {
    // If the input is an array, map its elements recursively.
    return inputObject.map((item: T[keyof T][number]) =>
      deepObjectKeyAlternator(
        item,
        keyMapping as Partial<KeyMapping<DeepKeyMapping<T[keyof T][number]>>>
      )
    ) as DeepKeyMapping<T>[keyof T]
  }

  const alteredObject = {} as DeepKeyMapping<T>

  for (const key in inputObject) {
    if (Object.prototype.hasOwnProperty.call(inputObject, key)) {
      const newKey = keyMapping[key] || key

      if (typeof newKey === "string") {
        if (
          typeof inputObject[key as keyof T] === "object" &&
          inputObject[key as keyof T] !== null
        ) {
          if (Array.isArray(inputObject[key as keyof T])) {
            alteredObject[newKey as keyof DeepKeyMapping<T>] = inputObject[
              key as keyof T
            ].map((item: T[keyof T][number]) =>
              deepObjectKeyAlternator(
                item,
                keyMapping as Partial<
                  KeyMapping<DeepKeyMapping<T[keyof T][number]>>
                >
              )
            ) as DeepKeyMapping<T>[keyof T]
          } else {
            alteredObject[newKey as keyof DeepKeyMapping<T>] =
              deepObjectKeyAlternator(
                inputObject[key as keyof T],
                keyMapping as Partial<KeyMapping<DeepKeyMapping<T[keyof T]>>>
              ) as DeepKeyMapping<T>[keyof T]
          }
        } else {
          alteredObject[newKey as keyof DeepKeyMapping<T>] = inputObject[
            key as keyof T
          ] as DeepKeyMapping<T>[keyof T]
        }
      }
    }
  }

  return alteredObject
}
