const resolveObjects = obj => {
  const queue = [obj]

  while (queue.length) {
    let currentNode = queue.shift()
    const keys = Object.keys(currentNode)

    for (let key of keys) {
      if (key.includes('.')) {
        const value = currentNode[key]
        let ks = key.split('.')
        const k = ks.shift()
        ks = ks.join('.')
        currentNode[k] = { ...currentNode[k], ...{ [ks]: value } }

        const child = currentNode[k]

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

module.exports = resolveObjects
