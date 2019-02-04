document.addEventListener('DOMContentLoaded',function(){
  //id="elem"がついたHTMLの要素をjavascript用に連想配列にして変数に格納
  let elem= document.getElementById('elem');
  //elemがもしマウスオーバーされたらメソッドを実行しなさい
  elem.addEventListener('mouseover', function(){
    //thisはイベント発注元のこと
    //this=elem(連想配列)の、キー「style」の中に格納されたキー「color」の値を変更
    this.style.color= '#ff0000';

  elem.addEventListener('mouseout',function(){
    this.style.color='';
  })
  })
});

//クラス名を追加して変更する方法
document.addEventListener('DOMContentLoaded',function(){
  let elem2= document.getElementById('elem2');
  elem2.addEventListener('mouseover', function(){

    //クラス属性を発動
    // this.className='js1';
    //クラスリストでもできるよ
    elem2.classList.add('js1');
    //クラスリスト(toggle)を使うと発動していない時、removeもしてくれるよ
    // elem2.classList.toggle('js1');
  });
    elem2.addEventListener('mouseout',function(){
    elem2.classList.remove('js1');
    // elem2.className='';
  })
});

// クリックしたときに色を変える

// document.addEventListener('DOMContentLoaded',function(){
//   let elem3= document.getElementById('elem3');
//   elem3.addEventListener('click', function(){
//   elem3.classList.add('js2');
//   });
// });

// クリック屋慶名さんver.
document.addEventListener('DOMContentLoaded',function(){
  let elem3= document.getElementById('elem3');
  elem3.addEventListener('click', function(){
  if(this.className==='blue'){
    elem3.className='';
  }else{elem3.className='blue';
  }
  });
});
























