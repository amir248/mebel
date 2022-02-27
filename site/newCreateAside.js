let pageList=`<a href="#" style="margin:1%">Верх</a>
<a href="https://sibiro.ru/design.html" style="margin:1%">DESIGN</a>
<a href="https://sibiro.ru/footprint.html" style="margin:1%">FOOTPRINT</a>
<a href="https://sibiro.ru/made.html" style="margin:1%">MADE</a>
<a href="https://sibiro.ru/wood.html" style="margin:1%">WOOD</a>
`;
if(window.innerWidth>1100){
  console.log(">1100");
  let aside=document.createElement('aside');
  let main=document.querySelector('main');
  main.append(aside);
  // document.querySelector('aside > a').style.cssText=`
  // margin:1%;
  // color:green;
  // `;
  document.querySelector('aside').style.cssText=`
  display:flex;
  position:sticky;
  justify-content: flex-start;
  align-items: center;
  width:200px;
  // background: rgba(0,255,0,0.3);
  height:150px;
  max-width: 100%;
  top:0;
  flex-direction:column;
  `;

  document.querySelector('aside').innerHTML=`${pageList}`;
  // document.querySelectorAll('a:hover').style.cssText=`
  // color:orange;
  // background:red;
  // margin:1%;
  // `;
// document.querySelector('aside a').addEventListener('mouseover',()=>{
//   document.querySelector('aside a').style.cssText=`
//   // color:orange;
//   background:red;
//   margin:1%;
//   `
// });
// document.querySelector('aside a').addEventListener('mouseout',()=>{
//   document.querySelector('aside a').style.cssText=`
//   // color:blue;
//   background:none;
//   margin:1%;
//   `
// });
}else if(window.innerWidth<1100){
  document.querySelector('aside').style.cssText=`display:none;`;
  document.querySelector('aside').innerHTML=``;
}else{
  console.log("else");
}
