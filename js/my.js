var case1 = "<h4>恭喜你，没有为腐败做贡献</h4>";
var case2 = "<h4>假如你的同事是公职人员，他可能因为你的礼金受到这样的处分</h4><p>北京怀柔区总工会副调研员胡庆森因邀请47名工会同事参加女儿婚礼，收取礼金2.07万元（<b>人均51元</b>），受到党内严重警告处分</p>"
var case3 = "<h4>假如你的同事是公职人员，他可能因为你的礼金受到这样的处分<h4><p>青海省女子监狱党委委员汪青福因宴请单位同事共88人参加女儿婚宴，收受礼金3.92万元（人均450元），受到党内警告处分。</p>"
$("#b1").click(function() {
    console.log(1);
    $(".case1>p").html(case1);
    $(".case1").show()
})

$("#b2").click(function() {
    console.log(1);
    $(".case1>p").html(case2);
    $(".case1").show()
})

$("#b3").click(function() {
    console.log(1);
    $(".case1>p").html(case3);
    $(".case1").show()
})