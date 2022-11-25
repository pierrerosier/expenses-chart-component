async function get() {
    let url = './data.json'
    let obj = await (await fetch(url)).json();
    
    console.log(obj);
    return obj;
}
var tags;
(async () => {
  tags = await get()
  console.log(tags)
  document.getElementsByClassName("test").innerHTML = JSON.stringify(tags);
})()

