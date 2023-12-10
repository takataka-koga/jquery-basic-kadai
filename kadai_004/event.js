/*
1	HTMLドキュメントが読み込み完了した際に、「loadイベントが発生しました」とコンソールに出力されている
2	画面スクロールした際に、「scrollイベントが発生しました」とコンソールに出力されている */

  $(window).on('load', function (){
    console.log('loadイベントが発生しました');
  });

  $(window).on('scroll', function (){
    console.log('scrollイベントが発生しました');
  });
