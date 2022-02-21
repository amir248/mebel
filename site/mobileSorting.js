if(window.innerWidth<700){
  document.querySelector('#zagolovok700').innerHTML=`<strong style="padding:3%;">Гардеробная "шкаф купе"</strong>`;
  document.querySelector('#zagolovok').innerHTML=``;
  document.querySelector('#zagolovokTwo700').innerHTML=`<strong>Торговое оборудование</strong>`;
  document.querySelector('#zagolovokTwo').innerHTML=``;
  document.querySelector('#tele').innerHTML=``;
  document.querySelector('#tele7').innerHTML=`<a href="tel:+79528807647" style="font-size:20px;">Заказать</a>`;
    //teleTwo
  document.querySelector('#telTwo').innerHTML=``;
  let teleTwo=document.querySelector('#teleTwo');
  document.querySelector('#teleTwo').innerHTML=`<a href="tel:+79528807647" style="font-size:20px;">Заказать</a>`;
  teleTwo.querySelector("a").style.cssText=`
  color:violet;
  margin:3%;
  font-size:25px;
  text-shadow:1px 1px 1px black;
  text-decoration:none;
  `;
    //teleT
  let teleT=document.querySelector("#teleT");
  document.querySelector('#telT').innerHTML=``;
  document.querySelector('#teleT').innerHTML=`<a href="tel:+79528807647" style="font-size:20px;">Заказать</a>`;

  teleT.querySelector("a").style.cssText=`
  margin:3%;
  color:green;
  font-size:25px;
  `;
}
