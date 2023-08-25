const btn = document.getElementById('search-btn');
// const value = document.getElementById("search-box");
// console.log(value);
// console.log(document.getElementById('search-btn'));
console.log(btn);
// console.log(display);
const parseId=(s)=>{
  return s.substr(-4);
}
const postfun = async () => {
  const value = document.getElementById("search-box").value;
  // const value = val.toUpperCase();
  const display = document.getElementById("display");
  // display.innerHTML = '';
  if (value === "") {
    display.innerHTML = `<h1>No ITEMS FOUND SORRY</h1>`;

    return;
  }
  const data = await fetch(
    "https://api.dexscreener.com/latest/dex/tokens/" + value,
  ).catch(err => {
    display.innerHTML = `<h1>a wrong request was made sorry</h1>`;
    console.error(err);
  })
  
    const final = await data.json();
    // console.log(final.pairs);
  const array = final.pairs;
  console.log(array);
  
  // console.log(array)
  for (let i = 0; i < 10; ++i) {
    // display.innerHTML =`<div class="first">name: ${array[i].baseToken.name}</div>`;
    if (array[i].baseToken.address === value||array[i].quoteToken.address === value) {
      display.innerHTML+=`<div class="first"><div class="span"><div class="top"><b>BASE TOKEN</b></div><div>Pair created at : ${array[i].baseToken.name}</div>
      <div>Symbol : ${array[i].baseToken.symbol}</div><div>${parseId(array[i].pairAddress)}</div></div>
      `
      
    }
    if (array[i].quoteToken.address === value) {
      display.innerHTML+=`<div class="first"><div class="span"><div class="top"><b>QUOTE TOKEN </b></div><div>Pair created at : ${array[i].quoteToken.name}</div>
      <div>Symbol : ${array[i].quoteToken.symbol}</div><div>${parseId(array[i].quoteToken.address)}</div></div></div>`
    }

    document.getElementById("search-box").value = '';
    }
};
btn.addEventListener('click',postfun)
//for the element to be sorted in sorted order of their values i created a function

// function sortByKey(array, key) {
//   return array.sort(function(a, b) {
//     var x = a[key];
//     var y = b[key];
//     return ((x < y) ? -1 : ((x > y) ? 1 : 0));
//   });
// }
// which could have been used to sort array in the order which they occur but was stuck at a step were I was not able to access the elements after putting them in the new array.