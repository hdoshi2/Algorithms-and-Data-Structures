let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2){
    resolve('success')
  } else {
    reject('Failed')
  }
})

p.then((message) => {
  console.log('In then ' + message)
}).catch((message) => {
  console.log('In catch ' + message)
})
