$(document).ready(function () {
    $('#eye').click(function () {
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if ($(this).hasClass('open')) {
            $(this).prev().attr('type', 'text');
        } else {
            $(this).prev().attr('type', 'password');
        }
    });
});
function login(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (user == null) {
        alert("vui lòng đăng nhập tài khoản và mật khẩu")
    }
    else if (username == data.username && password == data.password) {
        alert(" đăng nhập thành công")
        window.location.href = "TRANGCHU.html"
    }
    else {
        alert("đăng nhập thất bại")
    }
}


