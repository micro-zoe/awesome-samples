// importScripts('http://localhost:6616/utils.js')
import performComplexCalculation from 'http://localhost:6616/utils.js'

onmessage = function (event) {
  console.log(`主线程接收: ${event.data}`)

  const result = performComplexCalculation()

  postMessage(result)
}
