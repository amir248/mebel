if(window.innerWidth<=700){
  document.querySelector('.lines').style.cssText="background:black;";
  document.querySelector('.lines2').style.cssText="background:black;";
  document.querySelector('.lines3').style.cssText="background:black;";
  let countClick;
  countClick=+0;
  let createEl;
  createEl=false;
  let textMenu = '<a href="#modular-system"><h2 class="menuShka">Уникальный дизайн</h2></a><a href="#zagolovok700"><h2 class="menuShka">Шкафы купе</h2></a><a href="#contacts"><h2 class="menuShka">Контакты</h2></a><a href="#torg"><h2 class="menuShka">Торговое оборудование</h2></a><a href="/maps.html><h2 class="menuShka">Карта</h2></a><a href="tel:+79528807647"><h2 class="menuShka">+7 952 880 76 47</h2></a>';
  function CloseMenu(){
    document.querySelector('.lines').style.cssText=`
      margin:5px;
      background:black;
      transform:rotate(0deg);
      width:35px;
      transition:all 1s ease-out;
      `;
    document.querySelector('.lines2').style.cssText=`
      width:35px;
      height:7px;
      margin:5px;
      background:black;
      transition:all 1s ease-out;
      `;
    document.querySelector('.lines3').style.cssText=`
      margin:5px;
      background:black;
      transform:rotate(0deg);
      width:35px;
      transition:all 1s ease-out;
      `;
    document.querySelector('div').style.cssText=`
      height:0;
      background:violet;
      transition:all 0.3s ease-out;
      `;
    document.querySelector('div').innerHTML=``;
    document.getElementsByTagName('body')[0].style.cssText=`overflow:auto`;
    countClick=0;
  }
  document.querySelector('.menu').addEventListener('click',()=>{
  // console.log(createEl);
  countClick++;
  if(countClick==1){
    // console.log(countClick);
    document.querySelector('.lines').style.cssText=`
    margin:0;
    width:70px;
    background:green;
    transform:rotate(45deg);
    transition:all 1s ease-out;
    `;
    document.querySelector('.lines2').style.cssText="display:none";
    document.querySelector('.lines3').style.cssText=`
    margin:0;
    width:70px;
    background:green;
    transform:rotate(-45deg);
    transition:all 1s ease-out;
    `;
    if(createEl==false){
      let opMenu=document.createElement('div');
      document.body.prepend(opMenu);
      opMenu.style.cssText=`
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      width:100%;
      background:rgba(255,255,255,0.7);
      position:absolute;
      height:100%;
      transition:all 1s ease-out;
      `;
      document.querySelector('div').innerHTML=`${textMenu}`;
      document.getElementsByTagName('body')[0].style.cssText=`overflow:hidden`;
      document.querySelector('div').addEventListener('click',()=>{
        // console.log("ClickDiv");
        document.getElementsByTagName('body')[0].style.cssText=`overflow:auto`;
        CloseMenu();
      });
    }else if(createEl==true){
      // console.log("ctrateEl true");
      document.querySelector('div').style.cssText=`
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      width:100%;
      background:rgba(255,255,255,0.7);
      position:absolute;
      height:100%;
      transition:all 1s ease-out;
      `;
      document.querySelector('div').innerHTML=`${textMenu}`;
      document.getElementsByTagName('body')[0].style.cssText=`overflow:hidden`;
      document.querySelector('div').addEventListener('click',()=>{
        // console.log("ClickDiv2");
        document.getElementsByTagName('body')[0].style.cssText=`overflow:auto`;
        CloseMenu();
      });
    }else{
      opMenu.style.cssText=`
      width:100%;
      background:green;
      position:absolute;
      height:100%;
      transition:all 3s ease-out;
      `;
    }
    createEl=true;
    // console.log(createEl);
  }else if(countClick==2){
    // console.log(countClick);
    CloseMenu();
  }else{
    console.log(countClick+"ok");
  }
  });
}
