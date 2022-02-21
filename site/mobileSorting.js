if(window.innerWidth<700){
  document.querySelector('#zagolovok700').innerHTML=`<strong style="padding:3%;">Гардеробная "шкаф купе"</strong>`;
  document.querySelector('#zagolovok').innerHTML=``;
  document.querySelector('#zagolovokTwo700').innerHTML=`<strong>Торговое оборудование</strong>`;
  document.querySelector('#zagolovokTwo').innerHTML=``;
  document.querySelector('#tele').innerHTML=``;
  document.querySelector('#tele7').innerHTML=`<a href="tel:+79528807647" style="font-size:20px;">Заказать</a>`;
  document.querySelector('#telTwo').innerHTML=``;
  document.querySelector('#teleTwo').innerHTML=`<a href="tel:+79528807647" style="font-size:20px;">Заказать</a>`;
  let teleT=document.querySelector("#teleT");
  document.querySelector('#telT').innerHTML=``;
  document.querySelector('#teleT').innerHTML=`<a href="tel:+79528807647" style="font-size:20px;">Заказать</a>`;

  teleT.querySelector("a").style.cssText=`
  margin:3%;
  color:green;
  font-size:35px;
  `;
}
