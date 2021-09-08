
var s=0

  for (let i = 2; i < process.argv.length; i++) {
       s += Number(process.argv[i])
      return s  
  }
  console.log(s)
 