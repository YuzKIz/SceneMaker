function menu(){
  toWrite = '<div class="menuBar"><ul>'
    + '<li><a href="javascipt:void(0);">メニュー画像<span class="sideBar"></span></a></li>'
    + '<div><ul>'
      + '<li><a href="javascript:void(0);">作品新規作成</a></li>'
      + '<li><a href="javascript:void(0);">ファイルから読み込み</a></li>'
      + '<li><a href="javascript:void(0);">ファイルに書き出し</a></li>'
    + '</ul></div>'
    + '<li><a href="javascipt:void(0);">場面画像</a></li>'
    + '<li><a href="javascipt:void(0);">時間画像</a></li>'
    + '<li><a href="javascipt:void(0);">場所画像</a></li>'
    + '<li><a href="javascipt:void(0);">人物画像</a></li>'
    + '<li><a href="javascipt:void(0);">伏線画像</a></li>'
    + '</ul></div>';
  getElementById("header").innerHTML = toWrite;
}
