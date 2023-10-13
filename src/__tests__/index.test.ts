import { log } from "console"
import { deepObjectKeyAlternator } from "../index"

describe("deepObjectKeyAlternator", () => {
  it("should handle renaming keys in a simple object", () => {
    const inputObject = {
      foo: "bar",
      baz: {
        qux: "quux",
      },
    }

    const keyMapping = {
      foo: "boo",
      qux: "que",
    }

    const expectedOutput = {
      boo: "bar",
      baz: {
        que: "quux",
      },
    }

    const result = deepObjectKeyAlternator(inputObject, keyMapping)

    log(expectedOutput, result)

    expect(result).toEqual(expectedOutput)
  })

  it("should handle null and undefined values", () => {
    const inputObject = {
      foo: null,
      baz: undefined,
    }

    const keyMapping = {
      foo: "newFoo",
      baz: "newBaz",
    }

    const expectedOutput = {
      newFoo: null,
      newBaz: undefined,
    }

    const result = deepObjectKeyAlternator(inputObject, keyMapping)

    log(expectedOutput, result)

    expect(result).toEqual(expectedOutput)
  })

  it("should handle arrays of objects", () => {
    const inputObject = {
      items: [
        { name: "item1", value: 42 },
        { name: "item2", value: 73 },
      ],
    }

    const keyMapping = {
      items: "newItems",
    }

    const expectedOutput = {
      newItems: [
        { name: "item1", value: 42 },
        { name: "item2", value: 73 },
      ],
    }

    const result = deepObjectKeyAlternator(inputObject, keyMapping)

    log(expectedOutput, result)

    expect(result).toEqual(expectedOutput)
  })

  it("should handle complex nested objects", () => {
    const inputObject = {
      foo: "bar",
      baz: {
        qux: {
          deepProp: "value",
        },
      },
    }

    const keyMapping = {
      foo: "newFoo",
      qux: "newQux",
      deepProp: "newDeepProp",
    }

    const expectedOutput = {
      newFoo: "bar",
      baz: {
        newQux: {
          newDeepProp: "value",
        },
      },
    }

    const result = deepObjectKeyAlternator(inputObject, {
      foo: "newFoo",
      qux: "newQux",
      deepProp: "newDeepProp",
    })

    log(expectedOutput, result)

    expect(result).toEqual(expectedOutput)
  })
})
