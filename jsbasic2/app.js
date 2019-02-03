//getElementeById
let date=new Date(); //PCの日付から取っている
let hoge=document.getElementById('hoge');
hoge.textContent=date.toLocaleString();
//上の引数に入れることで表示を変えることができる



// getElementsByName
let list= document.getElementsByTagName('a');
console.log(list);
for(let i =0, len= list.length; i<len; i++){
console.log(list.item(i).href);
}


//getElementsByName
let name=document.getElementsByName('email');
console.log(name);
console.log(name[0].value);


// getElementsByClassName
let fuga= document.getElementsByClassName('fuga');
console.log(fuga);
for(let i=0; i<fuga.length; i++ ){
  //consol画面に、fugaの要素、(1,2,3)を表示してください。
console.log(fuga[i].textContent);
console.log(fuga.item(i).textContent);//こっちでもOK
}


//querySelector
let tako = document.querySelector('#tako .ika');
// タコの中の先頭の子要素がconsoleに出される
//これはクラスセレクタなので＃が必要、また、＃takoはなくても良い
console.log(tako);
console.log(tako.tagName);
console.log(tako.textContent);



console.log('1/31の課題だよーーーーーーーーーーーーーーーーーーー');

 // <input type="text" id="email" name="email">
 //   <input type="button" class="htest" onclick="" value="test">
// ↑のHTMLタグを使用して、inputタグに入力された内容をHTMLにpタグで出力してください。
// イベントハンドラ使用です。


// １メソッドを用意する
// ２メソッドの中に絶対実行されるであろう処理を書く
// ３取得したい値を取得してコンソール
// ４pタグに格納して出力

function sendValue(){
  let result= document.getElementByName('email').value;
  let tagp= document.createElement('p');
  let textp= document.createTextNode(result);
   document.body.appendChild(tagp).appendChild(textp);
}












