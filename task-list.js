'use strict';
const taskMonth = document.getElementById('taskmonth');
const taskStatus = document.getElementById('taskstatus');
const taskTitle = document.getElementById('tasktitle');
const taskDetail = document.getElementById('taskdetail');
const submitButton = document.getElementById('submit');
const taskListTbody = document.getElementById('tasklist');
//タスクを管理する配列を準備する
// { month: 実施月, status: 進捗, title: タイトル, detail: 概要 }
const tasks = [];
//登録ボタンのclickイベントを追加する
submitButton.onclick = function () {
  //taskオブジェクトにタスクの情報を登録する
  const task = {
    month: taskMonth.value,   // 実施月
    status: taskStatus.value, // 進捗
    title: taskTitle.value,   // タイトル
    detail: taskDetail.value  // 概要
  };
  //タスクを登録する関数を呼び出す
  addTask(task);
};

/**
 * タスクを登録する関数
 * @param {object} task タスクの情報
 */
function addTask(task) {
  //　タスクを配列に追加する
  tasks.push(task);
  //　タスクリストを表示する関数を呼び出す
  displayTasklist();
}

/**
 * タスクを削除する関数
 * @param {number} deleteIndex 削除するタスクの添字
*/
function deleteTask(deleteIndex) {
  // 関数の処理
  tasks.splice(deleteIndex, 1);
  displayTasklist();
}

/**
 * タスクリストを表示する関数
 */
function displayTasklist() {
  //テーブル本体を空にする
  taskListTbody.innerText = '';
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    //テーブル行を作る
    const taskTr = document.createElement('tr');
    //実施月のテーブルデータを作って、行に追加する
    const monthTd = document.createElement('td');
    monthTd.innerText = task.month;
    taskTr.appendChild(monthTd);

    const statusTd = document.createElement('td');
    statusTd.innerText = task.status;
    taskTr.appendChild(statusTd);

    const titlehTd = document.createElement('td');
    titlehTd.innerText = task.title;
    taskTr.appendChild(titlehTd);

    const detailTd = document.createElement('td');
    detailTd.innerText = task.detail;
    taskTr.appendChild(detailTd);

    //削除ボタンを追加するテーブルデータを追加する
    const deleteTd = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "消去";
    deleteTd.appendChild(deleteButton);
    taskTr.appendChild(deleteTd)
    //ボタンにclickイベントを追加する
    deleteButton.onclick = function () {
      deleteTask(i);
      //消去ボタンをテーブルデータに追加する
      deleteTd.appendChild(deleteButton);
    };
    taskListTbody.appendChild(taskTr);
  }
}

/**
 * サンプルデータを追加する関数
 */
function addSample() {
  const task = {
    month: '2021-07',
    status: '済',
    title: 'A社経営統合プロジェクト',
    detail: '経営統合に伴う業務プロセス統合プロジェクト。\nプロジェクトリーダー（メンバー4人）として担当。\nxQDC目標いずれも達成。CS評価で5をいただいた。',
  };
  addTask(task);
}
//サンプルデータを追加する関数を呼び出す
addSample();
