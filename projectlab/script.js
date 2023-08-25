const btn = document.getElementById("search-btn");
// console.log(display);
const parseId=(s)=>{
  return s.substr(-4);
}

const postfun = async () => {
  const val = document.getElementById("search-box").value;
  const value = val.toUpperCase();
  const display = document.getElementById("display");
  // display.innerHTML = '';
  if (value == "") {
    display.innerHTML = `<h1>No ITEMS FOUND SORRY</h1>`;

    return;
  }
  if (value.length > 10) {
    display.innerHTML = `<h1>No ITEMS FOUND SORRY</h1>`;
    return;
  }
  const data = await fetch(
    "https://api.dexscreener.com/latest/dex/search/?q=" + value
    );
    const final = await data.json();
    // console.log(final.pairs);
  const array = final.pairs;
  
  // console.log(array)
  for (let i = 0; i < 20; ++i) {
    // display.innerHTML =`<div class="first">name: ${array[i].baseToken.name}</div>`;
        display.innerHTML += `
    <div class=first>
      <div class="span"><div class="top"><b>BASIC INFO</b></div><div>Pair created at : ${array[i].baseToken.name}</div>
      <div>Symbol : ${array[i].baseToken.symbol}</div><div>${parseId(array[i].pairAddress)}</div></div>
      <div class="span"><div class="top"><b>BASE TOKEN </b></div><div>Pair created at : ${array[i].baseToken.name}</div>
      <div>Symbol : ${array[i].baseToken.symbol}</div><div>${parseId(array[i].baseToken.address)}</div></div>
      <div class="span"><div class="top"><b>QUOTE TOKEN </b></div><div>Pair created at : ${array[i].quoteToken.name}</div>
      <div>Symbol : ${array[i].quoteToken.symbol}</div><div>${parseId(array[i].quoteToken.address)}</div></div>
      
      <div class="span"><div class="top"><b>PRICE</b></div><div>Pair created at : ${array[i].quoteToken.name}</div>
      <div>Price Native : ${array[i].priceNative}</div><div>price USD : ${array[i].priceUsd}</div></div>

    </div>
  `;
    }
};

btn.addEventListener("click",  () => {
    postfun();
    // console.log('hello');
    document.getElementById("search-box").value = "";
});
