export function addition(): Promise<number> {
  return new Promise((res,rej)=>{
    setTimeout(()=>{res(500)},5000)
  })
}
