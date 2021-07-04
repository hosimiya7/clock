function clock()
{
  // 数字が 1ケタのとき、「0」を加えて 2ケタにする
    let twoDigit =function(num){
    　  let digit
        if( num < 10 ){
            digit = "0" + num;
        }
        else{
            digit = num;
        }
        return digit;
    }
  // 曜日を表す各文字列の配列
  let weeks = new Array("Sun","Mon","Thu","Wed","Thr","Fri","Sat");

 // 現在日時を表すインスタンスを取得
    let now = new Date();
    let year = now.getFullYear();
    let month = twoDigit(now.getMonth() + 1)
    let day = twoDigit(now.getDate());
    let week = weeks[now.getDay()];
    let hour = twoDigit(now.getHours());
    let minute = twoDigit(now.getMinutes());
    let second = twoDigit(now.getSeconds());
 //　HTML: <div id="clock_date">(ココの日付文字列を書き換え)</div>
document.getElementById("clock_date").textContent =  year + "/" + month + "/" + day + " (" + week + ")";

//　HTML: <div id="clock_time">(ココの時刻文字列を書き換え)</div>
document.getElementById("clock_time").textContent = hour + ":" + minute + ":" + second;

}
// 上記のclock関数を1000ミリ秒ごと(毎秒)に実行
setInterval(clock, 1000);