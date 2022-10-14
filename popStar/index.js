/**
 * 初始化：
 * 初始化 样式  √
 * 初始化小方块   √
 * 初始化标签    √
 */
/**
 *鼠标已入操作：
 * 还原其他的样式
 * 检查相邻的小方块
 * 闪烁
 * 显示分数
 */
/**
 * 鼠标点击操作：
 * 删除小方块
 * 分数增加
 * 剩余方块下落
 * 下落之后再次判断山所（再次触发鼠标移入事件）
 */
/**
 * 结束：
 * 判断任意相邻两个方块颜色都不相同
 * 没有方块
 */

var table;//游戏桌面
var squareWidth = 50;//每个格子的尺寸，50px
var boardWidth = 10;//行和列
var squareSet = [];//创建的小方块，二位数组
var flag = true;//对点击事件加锁，消除过程中不允许有其他移动点击事件:true的时候能点击
var tempSquare = null;//消除过程中，如果输入移入其他方块，进行记录
var choose = [];//选中的方块
var timer = null;//闪烁定时器
var baseScore = 5;
var stepScore = 10;
var totalScore = 0;
var targetScore = 2000;//目标分数

function createSquare(value, row, col) {
    var temp = document.createElement('div');
    temp.style.width = squareWidth + 'px';
    temp.style.height = squareWidth + 'px';
    temp.style.display = 'inline-block';
    temp.style.position = 'absolute';
    temp.style.boxSizing = 'border-box';
    temp.style.borderRadius = '12px';
    temp.num = value;
    temp.row = row;
    temp.col = col;
    return temp;
}


function refresh() {
    for (var i = 0; i < squareSet.length; i++) {
        for (var j = 0; j < squareSet[i].length; j++) {
            if (squareSet[i][j] == null) {
                continue;
            }
            squareSet[i][j].row = i;
            squareSet[i][j].col = j;
            squareSet[i][j].style.left = squareSet[i][j].col * squareWidth + 'px';
            squareSet[i][j].style.bottom = squareSet[i][j].row * squareWidth + 'px';
            squareSet[i][j].style.backgroundImage = "url('./pic/" + squareSet[i][j].num + ".png')";
            squareSet[i][j].style.backgroundSize = "cover";
            squareSet[i][j].style.transform = "scale(0.95)";
        }
    }
}

function mouseOver(obj) {//obj是当前mouseover的div
    if (!flag) {
        tempSquare = obj;
        return;
    }
    goback();//还原所有样式
    choose = [];
    checkLinked(obj, choose);
    if (choose.length <= 1) {//没有相邻同颜色的情况
        choose = [];
        return;
    }
    flicker(choose);//闪烁
    showScore(choose);//显示选中的分数

}

function goback() {
    if (timer != null) {
        clearInterval(timer);
    }
    for (var i = 0; i < squareSet.length; i++) {
        for (var j = 0; j < squareSet[i].length; j++) {
            if (squareSet[i][j] == null) {
                continue;
            }
            squareSet[i][j].style.transform = "scale(0.95)";
            squareSet[i][j].style.border = "0px solid white";
        }
    }
}

function checkLinked(square, arr) {////检查相连的相同颜色的小方块，使用递归的方式
    if (square == null) {

        return;
    }
    arr.push(square);
    //判断左边
    if (square.col > 0 &&
        squareSet[square.row][square.col - 1] &&
        squareSet[square.row][square.col - 1].num == square.num &&
        arr.indexOf(squareSet[square.row][square.col - 1]) == -1
    ) {
        checkLinked(squareSet[square.row][square.col - 1], arr);
    }
    //判断右边
    if (square.col < boardWidth - 1 &&
        squareSet[square.row][square.col + 1] &&
        squareSet[square.row][square.col + 1].num == square.num &&
        arr.indexOf(squareSet[square.row][square.col + 1]) == -1
    ) {
        checkLinked(squareSet[square.row][square.col + 1], arr);
    }
    //判断下面
    if (
        square.row > 0 &&
        squareSet[square.row - 1][square.col] &&
        squareSet[square.row - 1][square.col].num == square.num &&
        arr.indexOf(squareSet[square.row - 1][square.col]) == -1
    ) {
        checkLinked(squareSet[square.row - 1][square.col], arr)
    }
    //判断上面
    if (square.row < boardWidth - 1 &&
        squareSet[square.row + 1][square.col] &&
        squareSet[square.row + 1][square.col].num == square.num &&
        arr.indexOf(squareSet[square.row + 1][square.col]) == -1
    ) {
        checkLinked(squareSet[square.row + 1][square.col], arr);
    }
}

function flicker(arr) {
    var num = 0;
    timer = setInterval(function () {
        for (var i = 0; i < arr.length; i++) {
            arr[i].style.transform = 'scale(' + (0.9 + 0.05 * Math.pow(-1, num)) + ')';
            arr[i].style.border = '3px solid #BFEFFF';
        }
        num++;
        // console.log(num);
    }, 300);
}

function showScore(arr) {
    var score = 0;
    for (var i = 0; i < choose.length; i++) {
        score += baseScore + i * stepScore;
    }
    if (score == 0) {
        return;
    }
    // console.log(choose);
    var selectScore = document.getElementById('selectScore');
    selectScore.innerHTML = (choose.length) + '块' + score + '分';
    selectScore.style.transition = null;
    selectScore.style.opacity = 1;
    setInterval(function () {
        selectScore.style.opacity = 0;
        selectScore.style.transition = 'opacity 1s';
    }, 2000);
}
function move() {//上面的掉下来
    for (var i = 0; i < boardWidth; i++) { //纵向移动
        var pointer = 0;
        for (var j = 0; j < boardWidth; j++) {
            if (squareSet[j][i] != null) {
                if (j != pointer) {
                    squareSet[pointer][i] = squareSet[j][i];
                    squareSet[j][i].row = pointer;
                    squareSet[j][i] = null;
                }
                pointer++;
            }
        }
    }
    for (var i = 0; i < squareSet[0].length;) { //横向移动
        if (squareSet[0][i] == null) {
            for (var j = 0; j < boardWidth; j++) {
                squareSet[j].splice(i, 1);
            }
            continue;
        }
        i++;
    }
    refresh();
}
function isFinish() {//判断游戏是否结束
    var flag = true;
    for (var i = 0;i<squareSet.length;i++){
        for (var j = 0;j<squareSet[i].length;i++){
            var temp = [];
            checkLinked(squareSet[i][j],temp);
            if (temp.length>1) {
                return false;
            }
        }
    }
    return flag;
}
function init() {
    //初始化
    table = document.getElementById('popStar');
    document.getElementById('targetScore').innerHTML = '目标分数：' + targetScore + '分';
    //初始化小方块
    for (var i = 0; i < boardWidth; i++) {
        squareSet[i] = new Array();
        for (var j = 0; j < boardWidth; j++) {
            var square = createSquare(Math.floor(Math.random() * 5), i, j)//一个个div
            square.onmouseover = function () {//给创建的每个div添加鼠标进入操作
                // 检查相邻的小方块
                mouseOver(this);
            }
            square.onclick = function () {
                //点击效果
                //删除小方块
                //分数增加
                //剩余方块下落
                //下落之后再次判断删除（再次触发鼠标移入事件）
                if (!flag ||choose.length == 0){
                    return;
                }
                flag = false;
                tempSquare = null;
                var score = 0;
                for (var i=0;i<choose.length;i++){
                    score += baseScore +i*stepScore;
                }
                totalScore +=score;
                document.getElementById('totalScore').innerHTML = '当前分数'+totalScore+'分';
                //选中 的方块移除
                for (var i=0;i<choose.length;i++){
                    (function (i) {
                        table.removeChild(choose[i]);
                        squareSet[choose[i].row][choose[i].col] = null;
                        // flag = true;
                    })(i);
                }
                setTimeout(function () {
                    move();//上面的掉下来
                    setTimeout(function () {
                        var is = isFinish();
                        if (is){ //is==没东西可以消了
                            if (totalScore>targetScore){
                                alert("赢了");
                            } else {
                                alert("游戏失败");
                            }
                        } else {
                            //还有东西可以消
                            choose = [];
                            flag = true;
                            mouseOver(tempSquare)
                        }
                    },300+choose.length*150)
                },choose.length*100)
            }

            squareSet[i][j] = square;
            table.appendChild(square);
        }
    }
    refresh();//所有小方块样式还原
}

window.onload = function () {
    init();
}