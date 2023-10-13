type DeepObject = Record<string, unknown>

type KeyMapping<T> = Record<keyof T, string>

type DeepKeyMapping<T> = {
  [K in keyof T]: T[K] extends DeepObject ? DeepKeyMapping<T[K]> : T[K]
}

type DeepArrayMapping<T> = DeepKeyMapping<T>[]

export function deepObjectKeyAlternator<
  T extends DeepObject | DeepArrayMapping<DeepObject>,
>(
  inputObject: T,
  keyMapping:
    | Partial<
        KeyMapping<
          T extends DeepArrayMapping<DeepObject>
            ? DeepArrayMapping<DeepObject>
            : T
        >
      >
    | Record<string, string> = {}
): T {
  if (inputObject === null || inputObject === undefined) {
    return inputObject
  }

  let alteredObject: T

  if (Array.isArray(inputObject)) {
    alteredObject = [] as unknown as T
  } else {
    alteredObject = {} as T
  }

  for (const key in inputObject) {
    if (Object.prototype.hasOwnProperty.call(inputObject, key)) {
      const newKey =
        typeof key === "string"
          ? (keyMapping as Record<string, string>)[key] || key
          : key

      if (typeof newKey === "string") {
        if (typeof inputObject[key as keyof T] === "object") {
          if (Array.isArray(inputObject[key as keyof T])) {
            alteredObject[newKey as keyof T] = (
              inputObject[key as keyof T] as any[]
            ).map((item) =>
              deepObjectKeyAlternator(
                item as DeepObject,
                keyMapping as Partial<KeyMapping<DeepObject>>
              )
            ) as T[keyof T]
          } else {
            alteredObject[newKey as keyof T] = deepObjectKeyAlternator(
              inputObject[key as keyof T] as DeepObject,
              keyMapping as Partial<KeyMapping<DeepObject>>
            ) as T[keyof T]
          }
        } else {
          alteredObject[newKey as keyof T] = inputObject[
            key as keyof T
          ] as T[keyof T]
        }
      }
    }
  }

  return alteredObject
}
