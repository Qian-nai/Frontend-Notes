// 早期JavaScript使用方式
function validateForm() {
    var username = document.forms["myForm"]["username"].value;
    if (username == "") {
        alert("用户名不能为空");
        return false;
    }
}

// Ajax请求示例（原生JavaScript）
var xhr = new XMLHttpRequest();
xhr.open('GET', '/api/users', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};
xhr.send();
