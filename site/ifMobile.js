console.log(window.navigator.userAgent);
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<700) {
    console.log("Вы используете мобильное устройство (телефон или планшет). And может окошко сжато по ширине >700px");
    // document.querySelector('img').style.cssText=`display:none;`;
    document.querySelector('#img3').style.cssText=`display:none;`;
    document.querySelector('#img3').style.cssText=`display:none;`;
    document.querySelector('#img1').style.cssText=`display:none;`;
    document.querySelector('#img1').style.cssText=`display:none;`;
    document.querySelector('#img2').style.cssText=`display:none;`;
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

    document.querySelector('#img4').style.cssText=`display:none;`;
    document.querySelector('#img4').style.cssText=`display:none;`;
    document.querySelector('#img5').style.cssText=`display:none;`;
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
        console.log("I' m working!");
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
  console.log("Вы используете ПК.");
}
