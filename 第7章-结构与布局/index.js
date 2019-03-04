document.querySelector('.table-width + .table-width div').innerHTML = document.querySelector('.table-width:first-of-type div').innerHTML;

var colors = [
        '#D6E055', // Agave
        '#082323', '#E6E2AF', '#A7A37E', '#EFECCA', '#046380', // Sandy stone beach
        '#1C171D', '#FEE169', '#CDD452', '#F9722E', '#C9313D', // Sushi Maki
        '#2E95A3', '#50B8B4', '#C6FFFA', '#E2FFA8'  // Agave
    ],
    palette = document.querySelector('.palette'),
    template = palette.firstElementChild;

function addColor(template) {
    // cloneNode 拷贝节点
    var li = template.cloneNode(true);
    var color = colors.pop();
    colors.unshift(color);
    li.style.background = color;
    // nextSibling 获取下一个同胞元素
    palette.insertBefore(li, template.nextSibling);
}
// 事件代理
palette.onclick = function(evt) {
    var button = evt.target;

    if (button.className == 'add') {
        addColor(button.parentNode.parentNode);
    }
    else if (button.className == 'delete') {
        var li = button.parentNode.parentNode;
        li.parentNode.removeChild(li);
    }
}
var checkbox = document.getElementById('contents');
var checked = document.getElementById('contents-detail')
checkbox.onchange = function (event) {
    console.log('aaa',checked.style.display)
    let hidden = checked.style.display;
    if (hidden !== 'none') {
        checked.style.display = 'none'
    } else {
        checked.style.display = 'block'
    }
}