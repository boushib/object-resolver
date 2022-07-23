# Resolver

This algorithm converts an object to a standard format using BFS to make it easy to compare 2 different objects.

Here a code snippet of what the final unit test will look like:

```typescript
import { resolveObject } from './app'

it('works', () => {
  const tests = [
    {
      input: { a: { b: { c: 'z' } }, 'a.b.d': 'y' },
      output: { a: { b: { c: 'z', d: 'y' } } },
    },
  ]

  tests.forEach(test => {
    expect(resolveObject(test.input)).toEqual(test.output)
  })
})
```
