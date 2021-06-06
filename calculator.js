var previousInput = "0"; //前に入力した値　最初はを表示
var display = document.getElementById("display");
var dotFlg = false; //.が入力されたらtrueになる
function push(num) {
    //0~9を押した時
    if (display.value == "0" && num != "0") {
        //数式の最初が0の時、0を消して入力した数字を入れる
        console.log("数式の最初が0の時、0を消して入力した数字を入れる");
        display.value = num;
        return;
    }

    var back2 = display.value.substr(-2); //数式の後ろから2つを切り出す
    if (back2 == "+0" || back2 == "*0" || back2 == "-0" || back2 == "/0") {
        // 演算子0(数字1~9)になった時、0を消す
        console.log("演算子0(数字1~9)になった時、0を消す");
        console.log(display.value);
        display.value = display.value.slice(0, -1);
        console.log(display.value);
    }

    if (num != "0") {
        //2回目以降、0以外の数字はそのまま表示
        console.log("2回目以降、0以外の数字はそのまま表示");
        display.value = display.value + num;
    }
    if (display.value == "0" && num == "0") {
        // 数式の最初が0の時、0を入力できない
        console.log("数式の最初が0の時、0を入力できない");
        return;
    }

    if (num == "0") {
        // 入力が0の時、０を入力
        console.log("入力が0の時、０を入力");
        display.value = display.value + num;
    }

    previousInput = num;
}
// 00の反映

function push00() {
    if (display.value == "0") {
        // 数式の最初が0のとき、0のまま
        console.log("数式の最初が0のとき、0のまま");
        return;
    }
    if (previousInput == "+" || previousInput == "-" || previousInput == "*" || previousInput == "/") {
        //前が演算子の時、入力できない
        console.log("前が演算子の時、入力できない");
        return;
    }
    //入力が00の時、00を入力
    console.log("入力が00の時、00を入力");
    display.value = display.value + "00";
}

function opePush(operation) {
    // 前に演算子があるとき、演算子を入力できないようにする
    if (previousInput == "+" || previousInput == "-" || previousInput == "*" || previousInput == "/") {
        return;
    }
    console.log(previousInput);

    // ドットの後に演算子がある場合、ドットを消す
    if (previousInput == ".") {
        console.log(display.value);
        display.value = display.value.slice(0, -1);
        console.log(display.value);
    }

    previousInput = operation;
    display.value = display.value + operation;
    dotFlg = false;
}

function dotPush() {
    // ドットの前に演算子があるときドットを入力できないようにする
    if (previousInput == "+" || previousInput == "-" || previousInput == "*" || previousInput == "/") {
        return;
    }

    // 一つの数字内にドットが複数あってはいけない
    if (dotFlg == true) {
        return;
    }

    display.value = display.value + ".";

    previousInput = ".";

    dotFlg = true;
}

function calc() {
    display.value = eval(display.value);
}

function clearAC() {
    display.value = "0";
}