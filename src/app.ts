// @ts-nocheck
// TODO  - Object Index Signature.

export const resolveObject = (obj: Object) => {
  const queue: Array<Object> = [obj]

  while (queue.length) {
    let currentNode = queue.shift()
    if (!currentNode) continue
    const keys = Object.keys(currentNode)

    for (let key of keys) {
      if (key.includes('.')) {
        const value = currentNode[key]
        const keys = key.split('.')
        const k = keys.shift()
        if (!k) continue
        const ks = keys.join('.')
        currentNode[k] = { ...currentNode[k], ...{ [ks]: value } }

        const child: any = currentNode[k]

        if (typeof child === 'object') {
          queue.push(child)
        }

        delete currentNode[key]
      } else {
        const child = currentNode[key]

        if (typeof child === 'object') {
          queue.push(child)
        }
      }
    }
  }

  return obj
}
