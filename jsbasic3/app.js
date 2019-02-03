document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('btn').addEventListener('click', function(){
    //入力内容取得
    //URL取得
    let url= document.getElementById('url');
    //サイト名
    let site= document.getElementById('site');
    // console.log(url);
    // console.log(site);

    let anchor= document.createElement('a');
    anchor.href=url.value; //これは決まり


    // フォームから拾ってきた入力された内容をstring型に(TextNode)に変更
    let text= document.createTextNode(site.value);
    //上で作成したtextを小要素として追加
    anchor.appendChild(text);
    //改行用のbrタグを生成
    let br= document.createElement('br');

    // HTMLに作った、＃listにさっき作ったanchorとbrを追加
    let list= document.getElementById('list');
    // listの小要素にaタグ情報を入れる
    list.appendChild(anchor);
    // listの小要素を改行させる（br情報を入れる）
    list.appendChild(br);

  });

  let dellist=document.getElementById('dellist');
  document.getElementById('del').addEventListener('click',function(){
    console.log(dellist);
    dellist.removeChild(dellist.firstChild);
  });

});




