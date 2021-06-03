var transformColor = function(Target,Height,Colors,Finals,Distance){
  var flag = 0,                        //斷點標籤
      scrollBegin = Height[flag],      //顏色變化開始位置
      scrollFinal = Finals[flag+1],    //顏色變化結束位置
      scrollArea = Distance[flag],     //可滾動範圍
      scrollTop,                       //當前滾動位置

      topColor,                        //頂部顏色色值
      bottomColor,                     //底部顏色色值
      settingColor,                    //計算出來用於設置的顏色色值

      target = Target,                 //操作對象

      fr = Colors[flag][0],            //初始紅色色值   
      fg = Colors[flag][1],            //初始綠色色值
      fb = Colors[flag][2],            //初始藍色色值
      fa = Colors[flag][3],            //初始透明度

      br = Colors[flag+1][0],          //結束紅色色值
      bg = Colors[flag+1][1],          //結束綠色色值 
      bb = Colors[flag+1][2],          //結束藍色色值
      ba = Colors[flag+1][3];          //結束透明度
    
	//顏色構造函數
    function RGB(r, g, b, a) {
      this.red = r;
      this.green = g;
      this.blue = b;
      this.trans = a;
      //获取颜色赋值语句
      this.getValue = function () {
          return "rgb(" + this.red + "," + this.green + "," + this.blue + "," + this.trans + ")";
      };
    };
    
	//顏色設置
    topColor = new RGB(fr,fg,fb,fa);			      //頂部顏色
    bottomColor = new RGB(br,bg,bb,ba);		      //底部顏色
    settingColor = new RGB(255, 255, 255, 0);		//設置使用，計算得出
  
  //色值計算公式
    function colorCalc(top, bottom) {
        return top - ((top - bottom) * (scrollTop - scrollBegin) / scrollArea);
    };
  
  //顏色變化函數
    function setColor(topColor, bottomColor){
      //開始顏色變化
        //紅色色值
        settingColor.red = colorCalc(topColor.red, bottomColor.red);
        //綠色色值
        settingColor.green = colorCalc(topColor.green, bottomColor.green);
        //藍色色值
        settingColor.blue = colorCalc(topColor.blue, bottomColor.blue);
        //透明度
        settingColor.trans = colorCalc(topColor.trans, bottomColor.trans);
        //目標賦值
        $(target).css({ "background-color": settingColor.getValue() });
    };
    
  //監聽滾動
    $(window).scroll(function () {
    	//獲取當前滾動位置
        scrollTop = $(this).scrollTop();
      
      //區段條件函式
        if (scrollTop > Height[5]) {
        	$(target).css({ "background-color": "rgba(61,81,140,1)" });
        } else if (scrollTop > Height[4]) {
          //變數更新
            flag = 4;
            scrollBegin = Height[flag];  
            scrollFinal = Finals[flag+1];
            scrollArea = Distance[flag];
            fr = Colors[flag][0];
            fg = Colors[flag][1];
            fb = Colors[flag][2];
            fa = Colors[flag][3];
            br = Colors[flag+1][0];
            bg = Colors[flag+1][1];
            bb = Colors[flag+1][2];
            ba = Colors[flag+1][3];
            topColor = new RGB(fr,fg,fb,fa);
            bottomColor = new RGB(br,bg,bb,ba);
        	//變化顏色
            setColor(topColor, bottomColor);
        } else if (scrollTop > Height[3]) {
            flag = 3;
            scrollBegin = Height[flag];  
            scrollFinal = Finals[flag+1];
            scrollArea = Distance[flag];
            fr = Colors[flag][0];
            fg = Colors[flag][1];
            fb = Colors[flag][2];
            fa = Colors[flag][3];
            br = Colors[flag+1][0];
            bg = Colors[flag+1][1];
            bb = Colors[flag+1][2];
            ba = Colors[flag+1][3];
            topColor = new RGB(fr,fg,fb,fa);
            bottomColor = new RGB(br,bg,bb,ba);
            setColor(topColor, bottomColor);
        } else if (scrollTop > Height[2]) {
            flag = 2;
            scrollBegin = Height[flag];  
            scrollFinal = Finals[flag+1];
            scrollArea = Distance[flag];
            fr = Colors[flag][0];
            fg = Colors[flag][1];
            fb = Colors[flag][2];
            fa = Colors[flag][3];
            br = Colors[flag+1][0];
            bg = Colors[flag+1][1];
            bb = Colors[flag+1][2];
            ba = Colors[flag+1][3];
            topColor = new RGB(fr,fg,fb,fa);
            bottomColor = new RGB(br,bg,bb,ba);
            setColor(topColor, bottomColor);
        } else if (scrollTop > Height[1]) {
            flag = 1;
            scrollBegin = Height[flag];  
            scrollFinal = Finals[flag+1];
            scrollArea = Distance[flag];
            fr = Colors[flag][0];
            fg = Colors[flag][1];
            fb = Colors[flag][2];
            fa = Colors[flag][3];
            br = Colors[flag+1][0];
            bg = Colors[flag+1][1];
            bb = Colors[flag+1][2];
            ba = Colors[flag+1][3];
            topColor = new RGB(fr,fg,fb,fa);
            bottomColor = new RGB(br,bg,bb,ba);
        	  setColor(topColor, bottomColor);
        } else {
            flag = 0;
            scrollBegin = Height[flag];  
            scrollFinal = Finals[flag+1];
            scrollArea = Distance[flag];
            fr = Colors[flag][0];
            fg = Colors[flag][1];
            fb = Colors[flag][2];
            fa = Colors[flag][3];
            br = Colors[flag+1][0];
            bg = Colors[flag+1][1];
            bb = Colors[flag+1][2];
            ba = Colors[flag+1][3];
            topColor = new RGB(fr,fg,fb,fa);
            bottomColor = new RGB(br,bg,bb,ba);
            setColor(topColor, bottomColor);
        };
    });
};

//定義斷點顏色
  var c = [[0,0,0,0],[165,145,50,1],[218,116,34,1],[155,196,203,1],[57,147,221,1],[61,81,140,1]];
  var c_for_ddm = [[242,244,243,0.6],[165,145,50,1],[218,116,34,1],[155,196,203,1],[57,147,221,1],[61,81,140,1]];

//斷點
  var f = ["#origin","#chronicle","#representative","#future","#recruit","document"];

// 計算斷點絕對高度
  //區塊id
  var ids = ["header","origin","chronicle","representative","future","recruit"];
  var h = [];
  var d = [];
    for(var i=0; i<ids.length; i++){
      h.push($("#" + ids[i]).offset().top);
    };
  // 計算斷點間隔
    for(var i=0; i<ids.length-1; i++){
      d.push((h[i+1] - h[i]));
    };

//視窗大小發生改變則重新計算
  $(window).resize(function() {
    for(var i=0; i<ids.length; i++){
      h[i] = ($("#" + ids[i]).offset().top);
    };
    for(var i=0; i<ids.length-1; i++){
      d[i] = ((h[i+1] - h[i]));
    };
  });

//啟動顏色變化函數
  for(var i=0; i<h.length-1; i++){
    transformColor("#navigation",h,c,f,d);
  }
  for(var i=0; i<h.length-1; i++){
    transformColor(".dropdown-menu",h,c_for_ddm,f,d);
  }
  for(var i=0; i<h.length-1; i++){
    transformColor(".top",h,c,f,d);
  }

//初始化skrollr套件
  var s = skrollr.init();
//初始化AOS套件
  AOS.init();

//返回頂部按鈕
  $(".top,.navbar-brand").click(function(){
    $("html,body").animate({
      scrollTop: $("#header").offset().top
    }, 2000);
  });

//往下滾動一定高度才會出現返回頂部按鈕
  $(window).scroll(function(evt){
    if ($(window).scrollTop() > 500) {
      $(".top").css("display","block");
    }
    else {
      $(".top").css("display","none"); 
    }
  });

$(".event").click(function(){
  var id = $(this).attr("data-post");
  $(this).addClass("eventhover");
  $(this).removeClass("event");
  $(this).siblings().addClass("event");
  $(this).siblings().removeClass("eventhover");
  $(".intro").css("display","none");
  $("#"+id).css("display","block");
});

//navbar滑動監控
  $('body').scrollspy({ target: '#navigation' })

// 滾動控制：滑鼠滾動/鍵盤上下鍵
  const $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'),
        $section = $('section');
  var numOfPages = $section.length - 1, //取得section
      curPage = 0,                      //起始頁
      scrollLock = false;               //滾動開關
  
  function scrollPage() {
    //滑鼠滾動
    $(document).on("mousewheel DOMMouseScroll", function(e) {
      if (scrollLock) return;
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0)
        navigateUp();
      else
        navigateDown();
    });
    //鍵盤上下鍵
    $(document).on("keydown", function(e) {
      if (scrollLock) return;
      if (e.which === 38)
        navigateUp();
      else if (e.which === 40)
        navigateDown();
    });
  }

// 區塊滾動
  // 上滾動
    function navigateUp () {
      if (curPage === 0) return;
      curPage--;
      pagination();
    };
  // 下滾動
    function navigateDown() {
      if (curPage === numOfPages) return;
      curPage++;
      pagination();
    };
  // 滾動至上/下區塊
    function pagination() {
      scrollLock = true;
      $body.stop().animate({
        scrollTop: $section.eq(curPage).offset().top
      }, 1000, 'swing', function(){
        scrollLock = false;
      });
    };

// 執行區塊滾動函數
  $(function() {
    scrollPage();
  });

//清除dropdown-item上綁定的事件
  $(".dropdown-item").unbind();

//nav-link點擊後區塊折疊，並以動畫方式滑動至對應區塊
$(".nav-link:not(#navbarDropdown)").click(function(){
  var id = $(this).attr("href");
  const $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body')
  
  // 滑動動畫
    $($body).animate({
      scrollTop: $(id).offset().top
    }, 2000, "swing");
  
  //所有區塊摺疊
    $(".navbar-toggler").addClass("collapsed");
    $(".navbar-toggler").attr("aria-expanded", "false");
    $(".navbar-collapse").removeClass("show");
    $(".navbar-collapse").addClass("collapsed");

    $(".dropdown").removeClass("show");
    $(".dropdown-toggle").attr("aria-expanded", "false");
    $(".dropdown-menu").removeClass("show");
  
  //點擊a標籤後不觸發原本的跳轉事件
    return false;
});

//dropdown-itemk點擊後區塊折疊，並以動畫方式滑動至對應區塊
  $(".dropdown-item").click(function(){
    //所有區塊摺疊
      $(".navbar-toggler").addClass("collapsed");
      $(".navbar-toggler").attr("aria-expanded", "false");
      $(".navbar-collapse").removeClass("show");
      $(".navbar-collapse").addClass("collapsed");

      $(".dropdown").removeClass("show");
      $(".dropdown-toggle").attr("aria-expanded", "false");
      $(".dropdown-menu").removeClass("show");

    //設置對應的dropdown-item active
      var id = $(this).attr("href");
      $(id).addClass("active");
      $(id).siblings().removeClass("active");

    //滑動動畫
      $("html,body").animate({
        scrollTop: $(id).offset().top
      }, 2000, "swing");
    
    //不觸發跳轉事件
      return false;
  });