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
