// 格納用の連想配列
let data={
  task:[], 
  done:[]
};

// とりあえずここにアイコンを用意します//
// もともと表示されていないものなのでjsで作成する
let removeIcon='<i class="fas fa-trash-alt fa-lg"></i>';
let doneIcon='<i class="fas fa-check-circle fa-lg"></i>';

// ボタンをした時の操作
document.getElementById('add').addEventListener('click', function(){
  let value=document.getElementById('task').value;
  // console.log('task');
});


// 上に入れる関数を作ります
function addTask(value){
  data.task.push(value)
}
