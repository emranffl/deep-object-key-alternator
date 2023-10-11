import { deepObjectKeyAlternator } from "../index"

describe("deepObjectKeyAlternator", () => {
  it("should rename keys in a flat object", () => {
    const inputObject = {
      foo: "bar",
      baz: "qux",
    }

    const keyMapping = {
      foo: "boo",
      baz: "quux",
    }

    const parsedObject = deepObjectKeyAlternator(inputObject, keyMapping)

    const expectedObject = {
      boo: "bar",
      quux: "qux",
    }

    expect(parsedObject).toEqual(expectedObject)
  })

  it("should rename keys in a nested object", () => {
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

    const parsedObject = deepObjectKeyAlternator(inputObject, keyMapping)

    const expectedObject = {
      boo: "bar",
      baz: {
        que: "quux",
      },
    }

    expect(parsedObject).toEqual(expectedObject)
  })

  it("should rename keys in an array of objects", () => {
    const inputObject = [
      {
        foo: "bar",
      },
      {
        baz: "qux",
      },
    ]

    const keyMapping = {
      foo: "boo",
      baz: "quux",
    }

    const parsedObject = deepObjectKeyAlternator(inputObject, keyMapping)

    const expectedObject = [
      {
        boo: "bar",
      },
      {
        quux: "qux",
      },
    ]

    expect(parsedObject).toEqual(expectedObject)
  })
})
