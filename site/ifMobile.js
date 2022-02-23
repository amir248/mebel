console.log(window.navigator.userAgent);
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<700) {
    console.log("Вы используете мобильное устройство (телефон или планшет). And может окошко сжато по ширине >700px");
    // document.querySelector('img').style.cssText=`display:none;`;
    // document.querySelector('#img3').style.cssText=`display:none;`;
    document.querySelector('#img3').style.cssText=`display:none;`;
    // document.querySelector('#img1').style.cssText=`display:none;`;
    document.querySelector('#img1').style.cssText=`display:none;`;
    // document.querySelector('#img2').style.cssText=`display:none;`;
    document.querySelector('#img2').style.cssText=`display:none;`;
    // Gallery
    document.addEventListener("DOMContentLoaded",GoClick);
    window.addEventListener("hashchange",GoClick);
    document.querySelector('#img').addEventListener('click',Plus);
    let CountClick=+0;
    function Plus(){
      CountClick++;
      if(CountClick>=IMG.length){
        CountClick=0;
        // window.location.hash='';
      GoClick();
      }
        // console.log("coutnClick"+'__'+CountClick);
        for(let newi=0;newi<IMG.length;newi++){
          if(IMG[newi].count==CountClick){
            // console.log('nu vot'+IMG[newi].count+'__'+CountClick);
            document.querySelector('#img').src=IMG[newi].src;
            document.querySelector('#img').setAttribute('alt',IMG[newi].alt);
            document.querySelector('#img').setAttribute('title',IMG[newi].title);
              window.location.hash='#'+IMG[newi].hash;
          }
        }
    }
    function GoClick(){
      for(let aj=0;aj<IMG.length;aj++){
        if(window.location.hash=='#'+IMG[aj].hash){
        document.querySelector('#img').src=IMG[aj].src;
        document.querySelector('#img').setAttribute('alt',IMG[aj].alt);
        document.querySelector('#img').setAttribute('title',IMG[aj].title);
          // console.log(IMG[aj].count+"_"+IMG[aj].hash);
          // if(IMG[aj].srcset=={}){
          //   // console.log('pusto');
          // }else{
          //   document.querySelector('#img').srcset=IMG[aj].srcset;
          //   // console.log("nePusto");
          // }
          // localStorage.setItem(CountClick,IMG[aj].count);
        }
      }
    }

    // document.querySelector('#ok367').style.cssText=`display:none;`;
    document.querySelector('#img4').style.cssText=`display:none;`;
    document.querySelector('#img5').style.cssText=`display:none;`;
    // document.querySelector('#367').src= ' ';
    // document.querySelector('#367').setAttribute('alt', ' ');
    // Gallery
    document.addEventListener("DOMContentLoaded",GoCli);
    window.addEventListener("hashchange",GoCli);
    document.querySelector('#ok367').addEventListener('click',Plus9);
    let CountCl=+0;
    function Plus9(){

      CountCl++;
      if(CountCl>IMG9.length){
        CountCl=0;
        console.log(IMG9.length);
        // window.location.hash='';
        return GoCli;
      }else if(CountCl>=IMG9.length){
        CountCl=0;
        GoCli();
      }else{
        // console.log("I' m working!");
      }
        // console.log("coutnClick"+'__'+CountClick);
        for(let newa=0;newa<IMG9.length;newa++){
          if(IMG9[newa].count==CountCl){
            // console.log('nu vot'+IMG[newi].count+'__'+CountClick);
            document.querySelector('#ok367').src=IMG9[newa].src;
            document.querySelector('#ok367').setAttribute('alt',IMG9[newa].alt);
            document.querySelector('#ok367').setAttribute('title',IMG9[newa].title);
              window.location.hash='#'+IMG9[newa].hash;
          }
        }
    }
    function GoCli(){
      for(let ay=0;ay<IMG9.length;ay++){
        if(window.location.hash=='#'+IMG9[ay].hash){
        document.querySelector('#ok367').src=IMG9[ay].src;
        document.querySelector('#ok367').setAttribute('alt',IMG9[ay].alt);
        document.querySelector('#ok367').setAttribute('title',IMG9[ay].title);
          // console.log(IMG[aj].count+"_"+IMG[aj].hash);
          // if(IMG[aj].srcset=={}){
          //   // console.log('pusto');
          // }else{
          //   document.querySelector('#img').srcset=IMG[aj].srcset;
          //   // console.log("nePusto");
          // }
          // localStorage.setItem(CountClick,IMG[aj].count);
        }
      }
    }
}else{
  document.querySelector('#ClickFlipping').style.cssText=`display:none;`;
  document.querySelector('#ClickFlippingTwo').style.cssText=`display:none;`;
  document.querySelector('#leftButton').style.cssText=`
  display:flex;
  align-items:center;
  width:17px;
  height:100px;
  background:green;
  border-radius:5px;
  `;
  document.querySelector('#leftButton').innerHTML=`<`;
  document.querySelector('#rightButton').style.cssText=`
  display:flex;
  align-items:center;
  width:17px;
  height:100px;
  background:orange;
  border-radius:5px;
  `;
  document.querySelector('#rightButton').innerHTML=`>`;
  //CountFoto
  const numberCount={
    numOne: +0,
    numTwo: +0,
    numThre:+0
  };
  let clickLeft=IMG9.length;
  numberCount.numOne=0;
  numberCount.numTwo=1;
  numberCount.numThre=2;
document.addEventListener('DOMContentLoaded', ()=>{
  console.log("ok");
    try{
      document.querySelector('#ok367').src=IMG9[numberCount.numOne].src;
    }catch{
      numberCount.numOne=IMG9.length;
      // console.log("OSHIBKA@!!!");
      document.querySelector('#ok367').src=IMG9[numberCount.numOne].src;
      console.log(numberCount.numOne);
    }
    // document.querySelector('#ok367').setAttribute('alt', IMG9[numberCount.numOne].alt);
    // document.querySelector('#ok367').setAttribute('title', IMG9[numberCount.numOne].title);
    try{
      document.querySelector('#img5').src=IMG9[numberCount.numTwo].src;
    }catch{
      numberCount.numTwo=IMG9.length;
      console.log(numberCount.numTwo);
    }
    // document.querySelector('#img5').setAttribute('alt', IMG9[numberCount.numTwo].alt);
    // document.querySelector('#img5').setAttribute('title', IMG9[numberCount.numTwo].title);
    try{
      document.querySelector('#img4').src=IMG9[numberCount.numThre].src;
    }catch{
      numberCount.numThre=IMG9.length;
      console.log(numberCount.numThre);
    }
    // document.querySelector('#img4').setAttribute('alt', IMG9[numberCount.numThre].alt);
    // document.querySelector('#img4').setAttribute('title', IMG9[numberCount.numThre].title);
  });
  //GoListing function;
    function goListing(){
      console.log(IMG9.length);
      if(numberCount.numOne>=IMG9.length){
        numberCount.numOne=0;
      }else if(numberCount.numTwo>=IMG9.length){
        numberCount.numTwo=0;
      }else if(numberCount.numThre>=IMG9.length){
        numberCount.numThre=0;
      }else if(numberCount.numOne<=0){
        console.log("One");
        numberCount.numOne=IMG9.length;
      }else if(numberCount.numTwo<=0){
        console.log("Two");
        numberCount.numTwo=IMG9.length;
      }else if(numberCount.numThre<=0){
        console.log("Thre");
        numberCount.numThre=IMG9.length;
      }
      console.log(numberCount.numOne+" "+numberCount.numTwo+" "+numberCount.numThre);
      try{
        document.querySelector('#ok367').src=IMG9[numberCount.numOne].src;
      }catch{
        numberCount.numOne=IMG9.length;
        // console.log("OSHIBKA@!!!");
        document.querySelector('#ok367').src=IMG9[numberCount.numOne].src;
        // console.log(numberCount.numOne);
      }
      // document.querySelector('#ok367').setAttribute('alt', IMG9[numberCount.numOne].alt);
      // document.querySelector('#ok367').setAttribute('title', IMG9[numberCount.numOne].title);
      try{
        document.querySelector('#img5').src=IMG9[numberCount.numTwo].src;
      }catch{
        numberCount.numTwo=IMG9.length;
        console.log(numberCount.numTwo);
      }
      // document.querySelector('#img5').setAttribute('alt', IMG9[numberCount.numTwo].alt);
      // document.querySelector('#img5').setAttribute('title', IMG9[numberCount.numTwo].title);
      try{
        document.querySelector('#img4').src=IMG9[numberCount.numThre].src;
      }catch{
        numberCount.numThre=IMG9.length;
        console.log(numberCount.numThre);
      }
      // document.querySelector('#img4').setAttribute('alt', IMG9[numberCount.numThre].alt);
      // document.querySelector('#img4').setAttribute('title', IMG9[numberCount.numThre].title);
    };


  document.querySelector('#leftButton').addEventListener('click',()=>{
    numberCount.numOne++;
    numberCount.numTwo++;
    numberCount.numThre++;
    goListing();
    // clickLeft--;
    // console.log(clickLeft);
    // function leftButtonGo(){
    //   for(let nLeft=0;nLeft<IMG9.length;nLeft++){
    //     let oneImg=nLeft-clickLeft+1;
    //     let oneTo=[nLeft+2]-clickLeft;
    //     if(nLeft>clickLeft){
    //       // console.log("number"+clickLeft);
    //       // console.log("numberY"+[nLeft-clickLeft]+" "+oneImg+" "+oneTo+" ");
    //       //
    //       // document.querySelector('#ok367').src=IMG9[nLeft-clickLeft].src;
    //       // document.querySelector('#img5').src=IMG9[oneImg].src;
    //       // document.querySelector('#img4').src=IMG9[oneTo].src;
    //
    //     }else if(clickLeft==IMG9.length){
    //       console.log("==click");
    //     }else if(clickLeft==0||clickLeft==-1){
    //       console.log('MINUS');
    //       clickLeft=IMG9.length;
    //     }
    //   }
    //   console.log("Фанкшин ГО");
    // }
    // leftButtonGo();
  });

  //RightButtonGo "Function"
  document.querySelector('#rightButton').addEventListener('click',()=>{
    numberCount.numOne--;
    numberCount.numTwo--;
    numberCount.numThre--;
    goListing();
    // function rightButtonGo(){
    //   clickRight++;
    //   console.log("rightClkick"+clickRight);
    //   for(let nRight=0;nRight<IMG9.length;nRight++){
    //
    //     let onImg=nRight-clickRight+1;
    //     let onTo=[nRight+2]-clickRight;
    //
    //     if(nRight>clickRight){
    //       console.log(IMG9.lenght);
    //       console.log("number"+clickRight);
    //       console.log("numberY"+[nRight-clickRight]+" "+onImg+" "+onTo+" ");
    //
    //       document.querySelector('#ok367').src=IMG9[nRight-clickRight].src;
    //       document.querySelector('#img5').src=IMG9[onImg].src;
    //       document.querySelector('#img4').src=IMG9[onTo].src;
    //
    //     }else if(clickRight==IMG9.length){
    //       nRight=0;
    //       onImg=nRight-clickRight+1;
    //       onTo=[nRight+2]-clickRight;
    //       clickRight=0;
    //       console.log(IMG9.lenght+"ON");
    //       console.log("==clickR");
    //     }else if(clickRight==0||clickRight==-1){
    //       console.log('MINUS R');
    //       clickRight=0;
    //     }
    //   }
    //   console.log("Фанкшин ГО R");
    // }
    // rightButtonGo();
  });
  console.log("Вы используете ПК.");
}
