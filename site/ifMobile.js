console.log(window.navigator.userAgent);
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<700) {
    console.log("Вы используете мобильное устройство (телефон или планшет). And может окошко сжато по ширине >700px");
    // document.querySelector('img').style.cssText=`display:none;`;
    document.querySelector('#img3').src= ' ';
    document.querySelector('#img3').setAttribute('alt', ' ');
    document.querySelector('#img1').src= ' ';
    document.querySelector('#img1').setAttribute('alt', ' ');
    document.querySelector('#img2').src= ' ';
    document.querySelector('#img2').setAttribute('alt', ' ');
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
        return GoClick;
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
}else{
  console.log("Вы используете ПК.");
}
