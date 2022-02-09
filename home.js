var rate = 0, money = 0, year = 0;
function check_rate(){
    rate = document.getElementById("Rate").value;
    document.getElementById("Rate").value = "";
    // alert(rate1);
    debug = document.getElementById("rate_output");
    try{
        if (rate == "") throw "請輸入數字";
        if (isNaN(rate)==true) throw "請輸入數字"
        rate = Number(rate);
        if (rate<0) throw "請輸入正整數";
    }catch(w){
        debug.innerText = w;
        rate = 0;
        return;
    }
    debug.innerText = rate + '%';
}
function check_money(){
    money = document.getElementById("Money").value;
    document.getElementById("Money").value = "";
    debug = document.getElementById("money_output");
    try{
        if (money == "") throw "請輸入數字";
        if (isNaN(money) == true) throw "請輸入數字";
        money = Number(money);
        if (money<0) throw "請輸入正整數";
    }catch(w){
        debug.innerText = w;
        money = 0;
        return;
    }
    debug.innerText = money + '元';
}
function check_time(){
    year = document.getElementById("Time").value;
    document.getElementById("Time").value = "";
    debug = document.getElementById("time_output");
    try{
        if (year == "") throw "請輸入數字";
        if (isNaN(year) == true) throw "請輸入數字";
        year = Number(year);
        if (year<0) throw "請輸入正整數";
    }catch(w){
        debug.innerText = w;
        year = 0;
        return;
    }
    debug.innerText = year;
}
function calculate(){
    var ans = document.getElementById("ans");
    output = money;
    for(var i=1;i<=year;i++){
        output = output*(1+rate/100);
    }
    ans.innerText = output;
}