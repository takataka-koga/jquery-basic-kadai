/*番号	合格基準
1	「文字色変化」ボタンを押した際に、文字色が任意の色に更新されている
2	「文字内容変化」ボタンを押した際に、任意の文字内容に更新されている
3	「フェードアウト」ボタンを押した際に、フェードアウトで文字が消える
4	「フェードイン」ボタンを押した際に、フェードインで文字が現れる*/

$(function (){
  $('#change-color').on('click', function(){
    $('#target').css('color','blue');
  });

  $('#change-text').on('click', function(){
    $('#target').text('こんばんワン');
  });

  $('#fade-out').on('click', function(){
    $('#target').css('opacity',0);
  });

  $('#fade-in').on('click', function(){
    $('#target').css('opacity',1);
  });

});