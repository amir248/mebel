if(window.innerWidth<=700){
  document.querySelector('.lines').style.cssText="background:black;";
  document.querySelector('.lines2').style.cssText="background:black;";
  document.querySelector('.lines3').style.cssText="background:black;";
  let countClick;
  countClick=+0;
  let createEl;
  createEl=false;
  let textMenu = '<a href="/"><h1>Wooden Furniture</h1></a><a href="#lol"><h2>About</h2></a><h2>Stories</h2>';
  function CloseMenu(){
    document.querySelector('.lines').style.cssText=`
      margin:5px;
      width:70px;
      background:black;
      transform:rotate(0deg);
      width:35px;
      `;
    document.querySelector('.lines2').style.cssText=`
      width:35px;
      height:7px;
      margin:5px;
      background:black;
      `;
    document.querySelector('.lines3').style.cssText=`
      margin:5px;
      width:70px;
      background:black;
      transform:rotate(0deg);
      width:35px;
      `;
    document.querySelector('div').style.cssText=`
      height:0;
      background:violet;
      transition:all 3s ease-out;
      `;
    document.querySelector('div').innerHTML=``;
    document.getElementsByTagName('body')[0].style.cssText=`overflow:auto`;
    countClick=0;
  }
  document.querySelector('.menu').addEventListener('click',()=>{
  console.log(createEl);
  countClick++;
  if(countClick==1){
    console.log(countClick);
    document.querySelector('.lines').style.cssText=`
    margin:0;
    width:70px;
    background:green;
    transform:rotate(45deg);
    `;
    document.querySelector('.lines2').style.cssText="display:none";
    document.querySelector('.lines3').style.cssText=`
    margin:0;
    width:70px;
    background:green;
    transform:rotate(-45deg);
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
      background:rgba(0,255,0,0.3);
      position:absolute;
      height:100%;
      transition:all 3s ease-out;
      `;
      document.querySelector('div').innerHTML=`${textMenu}`;
      document.getElementsByTagName('body')[0].style.cssText=`overflow:hidden`;
      document.querySelector('div').addEventListener('click',()=>{
        console.log("ClickDiv");
        document.getElementsByTagName('body')[0].style.cssText=`overflow:auto`;
        CloseMenu();
      });
    }else if(createEl==true){
      console.log("ctrateEl true");
      document.querySelector('div').style.cssText=`
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      width:100%;
      background:rgba(0,255,0,0.3);
      position:absolute;
      height:100%;
      transition:all 3s ease-out;
      `;
      document.querySelector('div').innerHTML=`${textMenu}`;
      document.getElementsByTagName('body')[0].style.cssText=`overflow:hidden`;
      document.querySelector('div').addEventListener('click',()=>{
        console.log("ClickDiv");
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
    console.log(createEl);
  }else if(countClick==2){
    console.log(countClick);
    CloseMenu();
  }else{
    console.log(countClick+"ok");
  }
  });
}
