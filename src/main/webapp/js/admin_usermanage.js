//方法区

//封装UserList--Normal的数据
function userlist_normal(endIndex, jsonalluser) {
    for (let i = 0; i < jsonalluser.length; i++) {
        let item = jsonalluser[i];
        if (item.state == "正常" && item.report_count == 0) {
            let allResult =
                '<tr class="usertr">' +
                '<<td class="ttd"><img class="usericon" src="../' + item.photo + '"></td>' +
                '<td>@' + item.account + '<br>' + item.name + '</td>' +
                '<td>' + item.department + '<br>' + item._class + '</td>' +
                '<td>' + item.mobile + '<br>' + item.wechat + '</td>' +
                '<td>' + item.register_date + '</td>' +
                '<td>' + item.state + '</td>' +
                ' <td class="wtd">无需操作</td></tr>';
            $(allResult).appendTo('.userta').fadeIn(5000);
        }
    }
}

//封装UseList--Reported的数据
function userlist_reported(startIndex, endIndex, jsonalluser) {
    for (let i = startIndex; i < endIndex && i < jsonalluser.length; i++) {
        let item = jsonalluser[i];
        if (item.report_count > 0 && item.state == "正常") {
            let allResult =
                '<tr class="usertr">' +
                '<<td class="ttd"><img class="usericon" src="../' + item.photo + '"></td>' +
                '<td>@' + item.account + '<br>' + item.name + '</td>' +
                '<td>' + item.department + '<br>' + item._class + '</td>' +
                '<td>' + item.mobile + '<br>' + item.wechat + '</td>' +
                '<td>' + item.register_date + '</td>' +
                '<td>被举报' + item.report_count + '次<br>' + item.state + '</td>' +
                ' <td class="wtd"> <button class="warning" data-_id="' + item._id + '">警告</button> <br> <button class="ban" data-state="' + item._id + '">封禁</button></td></tr>'
            $(allResult).appendTo('.userta').fadeIn(5000);
        } else if (item.state == "警告") {
            let allResult =
                '<tr class="usertr">' +
                '<<td class="ttd"><img class="usericon" src="../' + item.photo + '"></td>' +
                '<td>@' + item.account + '<br>' + item.name + '</td>' +
                '<td>' + item.department + '<br>' + item._class + '</td>' +
                '<td>' + item.mobile + '<br>' + item.wechat + '</td>' +
                '<td>' + item.register_date + '</td>' +
                '<td>被举报' + item.report_count + '次<br>' + item.state + '</td>' +
                ' <td class="wtd"><button class="ban" data-state="' + item._id + '">封禁</button></td></tr>'
            $(allResult).appendTo('.userta').fadeIn(5000);
        }
    }
}

//封装UserList--Ban的数据
function userlist_ban(startIndex, endIndex, jsonalluser) {
    for (let i = startIndex; i < endIndex && i < jsonalluser.length; i++) {
        let item = jsonalluser[i];
        if (item.state == "封禁") {
            let allResult =
                '<tr class="usertr">' +
                '<<td class="ttd"><img class="usericon" src="../' + item.photo + '"></td>' +
                '<td>@' + item.account + '<br>' + item.name + '</td>' +
                '<td>' + item.department + '<br>' + item._class + '</td>' +
                '<td>' + item.mobile + '<br>' + item.wechat + '</td>' +
                '<td>' + item.register_date + '</td>' +
                '<td>' + item.state + '</td>' +
                ' <td class="wtd"> <button class="unban" data-state="' + item._id + '">解封</button></td></tr>'
            $(allResult).appendTo('.userta').fadeIn(5000);
        }
    }
}


//事件区

//UserList--点击Normal
$(".allusertab").click(function () {
    $(".dishonest").css("background-color", "#9e9e9e")
    $(".allusertab").css("background-color", "#333333")
    $(".reportedtab").css("background-color", "#9e9e9e")
    $.ajax({
        url: 'http://localhost:8080/Xunhuan_war_exploded/showalluser',
        type: 'GET',
        dataType: 'json',
        success: function (alluserlist) {
            let jsonalluser = eval(alluserlist);
            const pageSize = 6;
            const numPages = Math.ceil(jsonalluser.length / pageSize);
            let currentPage = 1;
            displayPage(currentPage);

            function displayPage(page) {
                // 隐藏所有记录
                $('.usertr').hide();
                $('#pagination-control button').css('background-color', '#9e9e9e');
                // 将当前按钮的背景颜色设置为 #333
                $('#pagination-control button:contains(' + page + ')').css('background-color', '#333');
                // 滚动到顶部
                window.scrollTo(0, 0);
                // 显示当前页的记录
                const startIndex = (page - 1) * pageSize;
                const endIndex = startIndex + pageSize;
                userlist_normal(endIndex, jsonalluser);
            }

            window.displayPage = displayPage;
            // 显示分页控件
            let paginationControl = '<div id="pagination-control">';
            for (let i = 1; i <= numPages; i++) {
                paginationControl += '<button onclick="displayPage(' + i + ')" style="border: 0; border-radius: 50%; width: 20px; height: 20px; margin-left:5px;background-color: ' + (i === currentPage ? '#333' : '#9e9e9e') + '; color: #fff; font-family: "Microsoft Yahei", sans-serif; font-weight: bold;">' + i + '</button>';
            }
            paginationControl += '</div>';
            $('#pagination-control').remove();
            $(paginationControl).appendTo('#footer');
        }
    });
});

//UserList--点击Reported
$(".reportedtab").click(function () {
    $(".reportedtab").css("background-color", "#333333")
    $(".allusertab").css("background-color", "#9e9e9e")
    $(".dishonest").css("background-color", "#9e9e9e")
    $.ajax({
        url: 'http://localhost:8080/Xunhuan_war_exploded/showalluser',
        type: 'GET',
        dataType: 'json',
        success: function (alluserlist) {
            let jsonalluser = eval(alluserlist);
            const pageSize = 6;
            const numPages = Math.ceil(jsonalluser.length / pageSize);
            let currentPage = 1;
            displayPage(currentPage);

            function displayPage(page) {
                // 隐藏所有记录
                $('.usertr').hide();
                $('#pagination-control button').css('background-color', '#9e9e9e');
                // 将当前按钮的背景颜色设置为 #333
                $('#pagination-control button:contains(' + page + ')').css('background-color', '#333');
                // 滚动到顶部
                window.scrollTo(0, 0);
                // 显示当前页的记录
                const startIndex = (page - 1) * pageSize;
                const endIndex = startIndex + pageSize;
                userlist_reported(startIndex, endIndex, jsonalluser)
            }

            window.displayPage = displayPage;
            // 显示分页控件
            let paginationControl = '<div id="pagination-control">';
            for (let i = 1; i <= numPages; i++) {
                paginationControl += '<button onclick="displayPage(' + i + ')" style="border: 0; border-radius: 50%; width: 20px; height: 20px; margin-left:5px;background-color: ' + (i === currentPage ? '#333' : '#9e9e9e') + '; color: #fff; font-family: "Microsoft Yahei", sans-serif; font-weight: bold;">' + i + '</button>';

            }
            paginationControl += '</div>';
            $('#pagination-control').remove();
            $(paginationControl).appendTo('#footer');
        }
    });
});

//UserList--点击Ban
$(".dishonest").click(function () {
    $(".dishonest").css("background-color", "#333333")
    $(".reportedtab").css("background-color", "#9e9e9e")
    $(".allusertab").css("background-color", "#9e9e9e")
    $.ajax({
        url: 'http://localhost:8080/Xunhuan_war_exploded/showalluser',
        type: 'GET',
        dataType: 'json',
        success: function (alluserlist) {
            let jsonalluser = eval(alluserlist);
            const pageSize = 6;
            const numPages = Math.ceil(jsonalluser.length / pageSize);
            let currentPage = 1;
            displayPage(currentPage);

            function displayPage(page) {
                // 隐藏所有记录
                $('.usertr').hide();
                $('#pagination-control button').css('background-color', '#9e9e9e');
                // 将当前按钮的背景颜色设置为 #333
                $('#pagination-control button:contains(' + page + ')').css('background-color', '#333');
                // 滚动到顶部
                window.scrollTo(0, 0);
                // 显示当前页的记录
                const startIndex = (page - 1) * pageSize;
                const endIndex = startIndex + pageSize;
                userlist_ban(startIndex, endIndex, jsonalluser)
            }

            window.displayPage = displayPage;
            // 显示分页控件
            let paginationControl = '<div id="pagination-control">';
            for (let i = 1; i <= numPages; i++) {
                paginationControl += '<button onclick="displayPage(' + i + ')" style="border: 0; border-radius: 50%; width: 20px; height: 20px; margin-left:5px;background-color: ' + (i === currentPage ? '#333' : '#9e9e9e') + '; color: #fff; font-family: "Microsoft Yahei", sans-serif; font-weight: bold;">' + i + '</button>';
            }
            paginationControl += '</div>';
            $('#pagination-control').remove();
            $(paginationControl).appendTo('#footer');
        }
    });
});


//UserList--进行搜索Search
$('#searchoneuser').submit(function (event) {
    event.preventDefault();
    var username = $('#byusername').val();
    $.ajax({
        url: 'http://localhost:8080/Xunhuan_war_exploded/searchuserbyname',
        type: 'GET',
        data: {
            name: encodeURIComponent(username)
        },
        dataType: 'json',
        success: function (nusers) {
            $(".reportedtab").css("background-color", "#9e9e9e")
            $(".allusertab").css("background-color", "#9e9e9e")
            $(".dishonest").css("background-color", "#9e9e9e")
            let jsonnusers = eval(nusers);
            const pageSize = 6;
            const numPages = Math.ceil(jsonnusers.length / pageSize);
            let currentPage = 1;
            displayPage(currentPage);

            function displayPage(page) {
                // 隐藏所有记录
                $('.usertr').hide();
                $('#pagination-control button').css('background-color', '#9e9e9e');
                // 将当前按钮的背景颜色设置为 #333
                $('#pagination-control button:contains(' + page + ')').css('background-color', '#333');
                // 滚动到顶部
                window.scrollTo(0, 0);
                // 显示当前页的记录
                const startIndex = (page - 1) * pageSize;
                const endIndex = startIndex + pageSize;

                for (let i = startIndex; i < endIndex && i < jsonnusers.length; i++) {
                    let item = jsonnusers[i];
                    if (item.report_count > 0 && item.state == "正常") {
                        let allResult =
                            '<tr class="usertr">' +
                            '<<td class="ttd"><img class="usericon" src="../' + item.photo + '"></td>' +
                            '<td>@' + item.account + '<br>' + item.name + '</td>' +
                            '<td>' + item.department + '<br>' + item._class + '</td>' +
                            '<td>' + item.mobile + '<br>' + item.wechat + '</td>' +
                            '<td>' + item.register_date + '</td>' +
                            '<td>被举报' + item.report_count + '次<br>' + item.state + '</td>' +
                            ' <td class="wtd"> <button class="warning" data-_id="' + item._id + '">警告</button> <br> <button class="ban" data-state="' + item._id + '">封禁</button></td></tr>'
                        $(allResult).appendTo('.userta').fadeIn(5000)
                    } else if (item.state == "警告") {

                        let allResult =
                            '<tr class="usertr">' +
                            '<<td class="ttd"><img class="usericon" src="../' + item.photo + '"></td>' +
                            '<td>@' + item.account + '<br>' + item.name + '</td>' +
                            '<td>' + item.department + '<br>' + item._class + '</td>' +
                            '<td>' + item.mobile + '<br>' + item.wechat + '</td>' +
                            '<td>' + item.register_date + '</td>' +
                            '<td>被举报' + item.report_count + '次<br>' + item.state + '</td>' +
                            ' <td class="wtd"><button class="ban" data-state="' + item._id + '">封禁</button></td></tr>'
                        $(allResult).appendTo('.userta').fadeIn(5000);
                    } else if (!item.report_count && item.state == "正常") {

                        let allResult =
                            '<tr class="usertr">' +
                            '<<td class="ttd"><img class="usericon" src="../' + item.photo + '"></td>' +
                            '<td>@' + item.account + '<br>' + item.name + '</td>' +
                            '<td>' + item.department + '<br>' + item._class + '</td>' +
                            '<td>' + item.mobile + '<br>' + item.wechat + '</td>' +
                            '<td>' + item.register_date + '</td>' +
                            '<td>' + item.state + '</td>' +
                            ' <td class="wtd">无需操作</td></tr>'
                        $(allResult).appendTo('.userta').fadeIn(5000);
                    } else {

                        let allResult =
                            '<tr class="usertr">' +
                            '<<td class="ttd"><img class="usericon" src="../' + item.photo + '"></td>' +
                            '<td>@' + item.account + '<br>' + item.name + '</td>' +
                            '<td>' + item.department + '<br>' + item._class + '</td>' +
                            '<td>' + item.mobile + '<br>' + item.wechat + '</td>' +
                            '<td>' + item.register_date + '</td>' +
                            '<td>' + item.state + '</td>' +
                            ' <td class="wtd"><button class="unban" data-state="' + item._id + '">解封</button></td></tr>'
                        $(allResult).appendTo('.userta').fadeIn(5000);
                    }
                }
            }

            window.displayPage = displayPage;
            // 显示分页控件
            let paginationControl = '<div id="pagination-control">';
            for (let i = 1; i <= numPages; i++) {
                paginationControl += '<button onclick="displayPage(' + i + ')" style="border: 0; border-radius: 50%; width: 20px; height: 20px; margin-left:5px;background-color: ' + (i === currentPage ? '#333' : '#9e9e9e') + '; color: #fff; font-family: "Microsoft Yahei", sans-serif; font-weight: bold;">' + i + '</button>';

            }
            paginationControl += '</div>';
            $('#pagination-control').remove();
            $(paginationControl).appendTo('#footer');
        }
    });
})

//点击警告
$(document).on('click', '.warning', function () {
    $(".reportedtab").css("background-color", "#333333")
    $(".allusertab").css("background-color", "#9e9e9e")
    $(".dishonest").css("background-color", "#9e9e9e")
    // 获取 item._id值
    var warnstate = $(this).data('_id');
    console.log(warnstate)
    // 发送 AJAX 请求
    $.ajax({
        url: 'http://localhost:8080/Xunhuan_war_exploded/warninguser',
        type: 'GET',
        data: {
            _id: warnstate
        },
        dataType: 'json',
        success: function (alluserlist) {
            let jsonalluser = eval(alluserlist);
            const pageSize = 6;
            const numPages = Math.ceil(jsonalluser.length / pageSize);
            let currentPage = 1;
            displayPage(currentPage);

            function displayPage(page) {
                // 隐藏所有记录
                $('.usertr').hide();
                $('#pagination-control button').css('background-color', '#9e9e9e');
                // 将当前按钮的背景颜色设置为 #333
                $('#pagination-control button:contains(' + page + ')').css('background-color', '#333');
                // 滚动到顶部
                window.scrollTo(0, 0);
                // 显示当前页的记录
                const startIndex = (page - 1) * pageSize;
                const endIndex = startIndex + pageSize;
                userlist_reported(startIndex, endIndex, jsonalluser)
            }

            window.displayPage = displayPage;
            // 显示分页控件
            let paginationControl = '<div id="pagination-control">';
            for (let i = 1; i <= numPages; i++) {
                paginationControl += '<button onclick="displayPage(' + i + ')" style="border: 0; border-radius: 50%; width: 20px; height: 20px; margin-left:5px;background-color: ' + (i === currentPage ? '#333' : '#9e9e9e') + '; color: #fff; font-family: "Microsoft Yahei", sans-serif; font-weight: bold;">' + i + '</button>';

            }
            paginationControl += '</div>';
            $('#pagination-control').remove();
            $(paginationControl).appendTo('#footer');
        }
    });
})

//点击封禁
$(document).on('click', '.ban', function () {
    $(".dishonest").css("background-color", "#333333")
    $(".allusertab").css("background-color", "#9e9e9e")
    $(".reportedtab").css("background-color", "#9e9e9e")
    // 获取 item._id值
    var banstate = $(this).data('state');
    // 发送 AJAX 请求
    $.ajax({
        url: 'http://localhost:8080/Xunhuan_war_exploded/banuser',
        type: 'GET',
        data: {
            _id: banstate
        },
        dataType: 'json',
        success: function (alluserlist) {
            let jsonalluser = eval(alluserlist);
            const pageSize = 6;
            const numPages = Math.ceil(jsonalluser.length / pageSize);
            let currentPage = 1;
            displayPage(currentPage);

            function displayPage(page) {
                // 隐藏所有记录
                $('.usertr').hide();
                $('#pagination-control button').css('background-color', '#9e9e9e');
                // 将当前按钮的背景颜色设置为 #333
                $('#pagination-control button:contains(' + page + ')').css('background-color', '#333');
                // 滚动到顶部
                window.scrollTo(0, 0);
                // 显示当前页的记录
                const startIndex = (page - 1) * pageSize;
                const endIndex = startIndex + pageSize;
                userlist_ban(startIndex, endIndex, jsonalluser)
            }

            window.displayPage = displayPage;
            // 显示分页控件
            let paginationControl = '<div id="pagination-control">';
            for (let i = 1; i <= numPages; i++) {
                paginationControl += '<button onclick="displayPage(' + i + ')" style="border: 0; border-radius: 50%; width: 20px; height: 20px; margin-left:5px;background-color: ' + (i === currentPage ? '#333' : '#9e9e9e') + '; color: #fff; font-family: "Microsoft Yahei", sans-serif; font-weight: bold;">' + i + '</button>';

            }
            paginationControl += '</div>';
            $('#pagination-control').remove();
            $(paginationControl).appendTo('#footer');
        }
    });
})

//点击解封
$(document).on('click', '.unban', function () {
    $(".reportedtab").css("background-color", "#333333")
    $(".dishonest").css("background-color", "#9e9e9e")
    $(".allusertab").css("background-color", "#9e9e9e")
    // 获取 item._id值
    var unbanstate = $(this).data('state');
    // 发送 AJAX 请求
    $.ajax({
        url: 'http://localhost:8080/Xunhuan_war_exploded/unbanuser',
        type: 'GET',
        data: {
            _id: unbanstate
        },
        dataType: 'json',
        success: function (alluserlist) {
            let jsonalluser = eval(alluserlist);
            const pageSize = 6;
            const numPages = Math.ceil(jsonalluser.length / pageSize);
            let currentPage = 1;
            displayPage(currentPage);

            function displayPage(page) {
                // 隐藏所有记录
                $('.usertr').hide();
                $('#pagination-control button').css('background-color', '#9e9e9e');
                // 将当前按钮的背景颜色设置为 #333
                $('#pagination-control button:contains(' + page + ')').css('background-color', '#333');
                // 滚动到顶部
                window.scrollTo(0, 0);
                // 显示当前页的记录
                const startIndex = (page - 1) * pageSize;
                const endIndex = startIndex + pageSize;
                userlist_reported(startIndex, endIndex, jsonalluser)
            }

            window.displayPage = displayPage;
            // 显示分页控件
            let paginationControl = '<div id="pagination-control">';
            for (let i = 1; i <= numPages; i++) {
                paginationControl += '<button onclick="displayPage(' + i + ')" style="border: 0; border-radius: 50%; width: 20px; height: 20px; margin-left:5px;background-color: ' + (i === currentPage ? '#333' : '#9e9e9e') + '; color: #fff; font-family: "Microsoft Yahei", sans-serif; font-weight: bold;">' + i + '</button>';

            }
            paginationControl += '</div>';
            $('#pagination-control').remove();
            $(paginationControl).appendTo('#footer');
        }
    });
})


//文档加载区

//获取userlist和orderlist数据
$(document).ready(function () {

    ///获取userlist
    $.ajax({
        url: 'http://localhost:8080/Xunhuan_war_exploded/showalluser',
        type: 'GET',
        dataType: 'json',
        success: function (alluserlist) {
            let jsonalluser = eval(alluserlist);
            const pageSize = 6;
            const numPages = Math.ceil(jsonalluser.length / pageSize);
            let currentPage = 1;
            displayPage(currentPage);

            function displayPage(page) {
                // 隐藏所有记录
                $('.usertr').hide();
                $('#pagination-control button').css('background-color', '#9e9e9e');
                // 将当前按钮的背景颜色设置为 #333
                $('#pagination-control button:contains(' + page + ')').css('background-color', '#333');
                // 滚动到顶部
                window.scrollTo(0, 0);
                // 显示当前页的记录
                const startIndex = (page - 1) * pageSize;
                const endIndex = startIndex + pageSize;
                for (let i = startIndex; i < endIndex && i < jsonalluser.length; i++) {
                    let item = jsonalluser[i];
                    if (item.state == "正常" && item.report_count == 0) {
                        let allResult =
                            '<tr class="usertr">' +
                            '<<td class="ttd"><img class="usericon" src="../' + item.photo + '"></td>' +
                            '<td>@' + item.account + '<br>' + item.name + '</td>' +
                            '<td>' + item.department + '<br>' + item._class + '</td>' +
                            '<td>' + item.mobile + '<br>' + item.wechat + '</td>' +
                            '<td>' + item.register_date + '</td>' +
                            '<td>' + item.state + '</td>' +
                            ' <td class="wtd">无需操作</td></tr>'
                        $(allResult).appendTo('.userta').fadeIn(5000);
                    }
                }
            }

            window.displayPage = displayPage;
            // 显示分页控件
            let paginationControl = '<div id="pagination-control">';
            for (let i = 1; i <= numPages; i++) {
                paginationControl += '<button onclick="displayPage(' + i + ')" style="border: 0; border-radius: 50%; width: 20px; height: 20px; margin-left:5px;background-color: ' + (i === currentPage ? '#333' : '#9e9e9e') + '; color: #fff; font-family: "Microsoft Yahei", sans-serif; font-weight: bold;">' + i + '</button>';
            }
            paginationControl += '</div>';
            $('#pagination-control').remove();
            $(paginationControl).appendTo('#footer');
        }
    });

    //获取orderlist
    $.ajax({
        url: 'http://localhost:8080/Xunhuan_war_exploded/showmoneytrade',
        type: 'GET',
        dataType: 'json',
        success: function (tradeorderlist) {
            let jsontradeorderlist = eval(tradeorderlist);
            const pageSize2 = 9;
            const numPages2 = Math.ceil(jsontradeorderlist.length / pageSize2);
            let currentPage2 = 1;
            displayPage2(currentPage2);

            function displayPage2(page2) {
                // 隐藏所有记录
                $('.ordertr').hide();
                $('#pagination-control2 button').css('background-color', '#9e9e9e');
                // 将当前按钮的背景颜色设置为 #333
                $('#pagination-control2 button:contains(' + page2 + ')').css('background-color', '#333');
                // 滚动到顶部
                window.scrollTo(0, 0);
                // 显示当前页的记录
                const startIndex = (page2 - 1) * pageSize2;
                const endIndex = startIndex + pageSize2;
                for (let i = startIndex; i < endIndex && i < jsontradeorderlist.length; i++) {
                    let item = jsontradeorderlist[i];
                    if (item.finished == 0) {
                        var wait = "等待交易"
                    }
                    if (item.finished == 1) {
                        var wait = "正在交易"
                    }
                    if (item.finished == 2) {
                        var wait = "交易完成"
                    }
                    if (!item.buyer_name) {
                        item.buyer_name = "----"
                    } else {
                        item.buyer_name = item.buyer_name
                    }
                    if (!item.finished_date) {
                        item.finished_date = "----"
                    } else {
                        item.finished_date = item.finished_date
                    }
                    let allResult =
                        '<tr class="ordertr">' +
                        '<td>' + item.thing_name + '</td>' +
                        '<td style="display: none">' + item.thing_photo + '</td>' +
                        '<td style="display: none">' + item.memo + '</td>' +
                        '<td>' + item.new_old + '</td>' +
                        '<td style="display: none">' + item.owner_photo + '</td>' +
                        '<td>' + item.owner_name + '</td>' +
                        '<td style="display: none">' + item.owner_account + '</td>' +
                        '<td>' + item.publish_date + '</td>' +
                        '<td style="display: none">' + item.buyer_photo + '</td>' +
                        '<td>' + item.buyer_name + '</td>' +
                        '<td style="display: none">' + item.buyer_account + '</td>' +
                        '<td>' + item.price + '元</td>' +
                        '<td>' + wait + '</td>' +
                        '<td>' + item.finished_date + '</td>' +
                        '<td><a class="moneywatch" href="#">查看</a> | <a class="moneydelete" href="#">删除</a></td>'
                    $(allResult).appendTo('.orderta').fadeIn(5000);
                }
            }
            window.displayPage2 = displayPage2;
            // 显示分页控件
            let paginationControl2 = '<div id="pagination-control2">';
            for (let i = 1; i <= numPages2; i++) {
                paginationControl2 += '<button onclick="displayPage2(' + i + ')" style="border: 0; border-radius: 50%; width: 15px; height: 15px; color:#fff;margin-left:5px;background-color: ' + (i === currentPage2 ? '#333' : '#9e9e9e') + '; font-family: "Microsoft Yahei", sans-serif; font-weight: bold;">' + i + '</button>';
            }
            paginationControl2 += '</div>';
            $('#pagination-control2').remove();
            $(paginationControl2).appendTo('#footer2');

            // 现金交易--点击查看
            $(document).on('click', '.moneywatch', function () {
                // 获取被点击的元素所在的行
                let tr = $(this).closest('tr');
                // 获取行中数据
                let thing_name = tr.find('td:first').text();
                let thing_photo = tr.find('td:nth-child(2)').text();
                let thing_memo = tr.find('td:nth-child(3)').text();
                let owner_photo = tr.find('td:nth-child(5)').text();
                let owner_name = tr.find('td:nth-child(6)').text();
                let owner_account = tr.find('td:nth-child(7)').text();
                let buyer_photo = tr.find('td:nth-child(9)').text();
                let buyer_name = tr.find('td:nth-child(10)').text();
                let buyer_account = tr.find('td:nth-child(11)').text();
                let thing_price = tr.find('td:nth-child(12').text();
                displayModal(thing_name,thing_photo,thing_memo,owner_photo,owner_name,owner_account,buyer_photo,buyer_name,buyer_account,thing_price);
            });

            function displayModal(thing_name,thing_photo,thing_memo,owner_photo,owner_name,owner_account,buyer_photo,buyer_name,buyer_account,thing_price) {
                $('.modal-overlay').show();

                $('.thing_photo').empty();
                let thing_photo_html =
                    ' <img class="modal-body-goods" src="..'+thing_photo+'">'
                $(thing_photo_html).appendTo('.thing_photo').fadeIn(5000);
                $('.thing_name').empty();
                let thing_name_html =
                    ' <p style="color: #9e9e9e;font-size: 10px">商品名称</p>\n' +
                    ' <span style="font-size: 15px">'+thing_name+'</span>'
                $(thing_name_html).appendTo('.thing_name').fadeIn(5000);
                $('.thing_price').empty();
                let thing_price_html =
                    ' <p style="color: #9e9e9e;font-size: 10px">价格</p>\n' +
                    ' <span style="font-size: 15px">'+thing_price+'</span>'
                $(thing_price_html).appendTo('.thing_price').fadeIn(5000);
                $('.thing_memo').empty();
                let thing_memo_html =
                    ' <span style="font-size: 15px">'+thing_memo+'</span>'
                $(thing_memo_html).appendTo('.thing_memo').fadeIn(5000);
                $('.owner_photo').empty();
                let owner_photo_html =
                    ' <img src="..'+owner_photo+'">'
                $(owner_photo_html).appendTo('.owner_photo').fadeIn(5000);
                $('.owner_name').empty();
                let owner_name_html =
                    ' <p style="color: #9e9e9e;font-size: 10px">'+owner_name+'</p>'+
                    '<span style="font-size: 15px">@'+owner_account+'</span>'
                $(owner_name_html).appendTo('.owner_name').fadeIn(5000);
                $('.buyer_photo').empty();
                let buyer_photo_html =
                    ' <img src="..'+buyer_photo+'">'
                $(buyer_photo_html).appendTo('.buyer_photo').fadeIn(5000);
                $('.buyer_name').empty();
                let buyer_name_html =
                    ' <p style="color: #9e9e9e;font-size: 10px">'+buyer_name+'</p>'+
                    '<span style="font-size: 15px">@'+buyer_account+'</span>'
                $(buyer_name_html).appendTo('.buyer_name').fadeIn(5000);
            }

            // 关闭模态框
            $(document).on('click', '.modal-close', function () {
                $('.modal-overlay').hide();
            });
        }
    });

    $("#mySelect").change(function () {
        //获取orderlist--现金交易
        if ($(this).val() == "option1") {
            $.ajax({
                url: 'http://localhost:8080/Xunhuan_war_exploded/showmoneytrade',
                type: 'GET',
                dataType: 'json',
                success: function (tradeorderlist) {
                    let jsontradeorderlist = eval(tradeorderlist);
                    const pageSize2 = 9;
                    const numPages2 = Math.ceil(jsontradeorderlist.length / pageSize2);
                    let currentPage2 = 1;
                    displayPage2(currentPage2);

                    function displayPage2(page2) {
                        // 隐藏所有记录
                        $('.ordertr').hide();
                        $('#pagination-control2 button').css('background-color', '#9e9e9e');
                        // 将当前按钮的背景颜色设置为 #333
                        $('#pagination-control2 button:contains(' + page2 + ')').css('background-color', '#333');
                        // 滚动到顶部
                        window.scrollTo(0, 0);
                        // 显示当前页的记录
                        const startIndex = (page2 - 1) * pageSize2;
                        const endIndex = startIndex + pageSize2;
                        for (let i = startIndex; i < endIndex && i < jsontradeorderlist.length; i++) {
                            let item = jsontradeorderlist[i];
                            if (item.finished == 0) {
                                var wait = "等待交易"
                            }
                            if (item.finished == 1) {
                                var wait = "正在交易"
                            }
                            if (item.finished == 2) {
                                var wait = "交易完成"
                            }
                            if (!item.buyer_name) {
                                item.buyer_name = "----"
                            } else {
                                item.buyer_name = item.buyer_name
                            }
                            if (!item.finished_date) {
                                item.finished_date = "----"
                            } else {
                                item.finished_date = item.finished_date
                            }
                            let allResult =
                                '<tr class="ordertr">' +
                                '<td>' + item.thing_name + '</td>' +
                                '<td style="display: none">' + item.thing_photo + '</td>' +
                                '<td style="display: none">' + item.memo + '</td>' +
                                '<td>' + item.new_old + '</td>' +
                                '<td style="display: none">' + item.owner_photo + '</td>' +
                                '<td>' + item.owner_name + '</td>' +
                                '<td style="display: none">' + item.owner_account + '</td>' +
                                '<td>' + item.publish_date + '</td>' +
                                '<td style="display: none">' + item.buyer_photo + '</td>' +
                                '<td>' + item.buyer_name + '</td>' +
                                '<td style="display: none">' + item.buyer_account + '</td>' +
                                '<td>' + item.price + '元</td>' +
                                '<td>' + wait + '</td>' +
                                '<td>' + item.finished_date + '</td>' +
                                '<td><a class="moneywatch" href="#">查看</a> | <a class="moneydelete" href="#">删除</a></td>'
                            $(allResult).appendTo('.orderta').fadeIn(5000);

                        }
                    }
                    window.displayPage2 = displayPage2;
                    // 显示分页控件
                    let paginationControl2 = '<div id="pagination-control2">';
                    for (let i = 1; i <= numPages2; i++) {
                        paginationControl2 += '<button onclick="displayPage2(' + i + ')" style="border: 0; border-radius: 50%; width: 15px; height: 15px; color:#fff;margin-left:5px;background-color: ' + (i === currentPage2 ? '#333' : '#9e9e9e') + '; font-family: "Microsoft Yahei", sans-serif; font-weight: bold;">' + i + '</button>';
                    }
                    paginationControl2 += '</div>';
                    $('#pagination-control2').remove();
                    $(paginationControl2).appendTo('#footer2');
                    // 现金交易--点击查看
                    $(document).on('click', '.moneywatch', function () {
                        // 获取被点击的元素所在的行
                        let tr = $(this).closest('tr');
                        // 获取行中数据
                        let thing_name = tr.find('td:first').text();
                        let thing_photo = tr.find('td:nth-child(2)').text();
                        let thing_memo = tr.find('td:nth-child(3)').text();
                        let owner_photo = tr.find('td:nth-child(5)').text();
                        let owner_name = tr.find('td:nth-child(6)').text();
                        let owner_account = tr.find('td:nth-child(7)').text();
                        let buyer_photo = tr.find('td:nth-child(9)').text();
                        let buyer_name = tr.find('td:nth-child(10)').text();
                        let buyer_account = tr.find('td:nth-child(11)').text();
                        let thing_price = tr.find('td:nth-child(12').text();
                        displayModal(thing_name,thing_photo,thing_memo,owner_photo,owner_name,owner_account,buyer_photo,buyer_name,buyer_account,thing_price);
                    });

                    function displayModal(thing_name,thing_photo,thing_memo,owner_photo,owner_name,owner_account,buyer_photo,buyer_name,buyer_account,thing_price) {
                        $('.modal-overlay').show();

                        $('.thing_photo').empty();
                        let thing_photo_html =
                            ' <img class="modal-body-goods" src="..'+thing_photo+'">'
                        $(thing_photo_html).appendTo('.thing_photo').fadeIn(5000);
                        $('.thing_name').empty();
                        let thing_name_html =
                            ' <p style="color: #9e9e9e;font-size: 10px">商品名称</p>\n' +
                            ' <span style="font-size: 15px">'+thing_name+'</span>'
                        $(thing_name_html).appendTo('.thing_name').fadeIn(5000);
                        $('.thing_price').empty();
                        let thing_price_html =
                            ' <p style="color: #9e9e9e;font-size: 10px">价格</p>\n' +
                            ' <span style="font-size: 15px">'+thing_price+'</span>'
                        $(thing_price_html).appendTo('.thing_price').fadeIn(5000);
                        $('.thing_memo').empty();
                        let thing_memo_html =
                            ' <span style="font-size: 15px">'+thing_memo+'</span>'
                        $(thing_memo_html).appendTo('.thing_memo').fadeIn(5000);
                        $('.owner_photo').empty();
                        let owner_photo_html =
                            ' <img src="..'+owner_photo+'">'
                        $(owner_photo_html).appendTo('.owner_photo').fadeIn(5000);
                        $('.owner_name').empty();
                        let owner_name_html =
                            ' <p style="color: #9e9e9e;font-size: 10px">'+owner_name+'</p>'+
                            '<span style="font-size: 15px">@'+owner_account+'</span>'
                        $(owner_name_html).appendTo('.owner_name').fadeIn(5000);
                        $('.buyer_photo').empty();
                        let buyer_photo_html =
                            ' <img src="..'+buyer_photo+'">'
                        $(buyer_photo_html).appendTo('.buyer_photo').fadeIn(5000);
                        $('.buyer_name').empty();
                        let buyer_name_html =
                            ' <p style="color: #9e9e9e;font-size: 10px">'+buyer_name+'</p>'+
                            '<span style="font-size: 15px">@'+buyer_account+'</span>'
                        $(buyer_name_html).appendTo('.buyer_name').fadeIn(5000);
                    }

                    // 关闭模态框
                    $(document).on('click', '.modal-close', function () {
                        $('.modal-overlay').hide();
                    });
                }
            });
        }

        //获取orderlist--求购信息
        if ($(this).val() == "option2") {
            $.ajax({
                url: 'http://localhost:8080/Xunhuan_war_exploded/showrequests',
                type: 'GET',
                dataType: 'json',
                success: function (requestsList) {
                    let jsonrequestsList = eval(requestsList);
                    const pageSize2 = 9;
                    const numPages2 = Math.ceil(jsonrequestsList.length / pageSize2);
                    let currentPage2 = 1;
                    displayPage2(currentPage2);

                    function displayPage2(page2) {
                        // 隐藏所有记录
                        $('.ordertr').hide();
                        $('#pagination-control2 button').css('background-color', '#9e9e9e');
                        // 将当前按钮的背景颜色设置为 #333
                        $('#pagination-control2 button:contains(' + page2 + ')').css('background-color', '#333');
                        // 滚动到顶部
                        window.scrollTo(0, 0);
                        // 显示当前页的记录
                        const startIndex = (page2 - 1) * pageSize2;
                        const endIndex = startIndex + pageSize2;
                        for (let i = startIndex; i < endIndex && i < jsonrequestsList.length; i++) {
                            let item = jsonrequestsList[i];
                            if (item.finished == 0) {
                                var wait = "等待回应"
                            }
                            if (item.finished == 1) {
                                var wait = "正在交易"
                            }
                            if (item.finished == 2) {
                                var wait = "求购成功"
                            }
                            if (!item.giver_name) {
                                item.giver_name = "----"
                            } else {
                                item.giver_name = item.giver_name
                            }
                            if (!item.finished_date) {
                                item.finished_date = "----"
                            } else {
                                item.finished_date = item.finished_date
                            }
                            let allResult =
                                '<tr class="ordertr">' +
                                '<td>' + item.thing_name + '</td>' +
                                '<td style="display: none">' + item.cover + '</td>' +
                                '<td style="display: none">' + item.memo + '</td>' +
                                '<td>' + item.new_old + '</td>' +
                                '<td style="display: none">' + item.owner_photo + '</td>' +
                                '<td>' + item.owner_name + '</td>' +
                                '<td style="display: none">' + item.owner_account + '</td>' +
                                '<td>' + item.publish_date + '</td>' +
                                '<td style="display: none">' + item.giver_photo + '</td>' +
                                '<td>' + item.giver_name + '</td>' +
                                '<td style="display: none">' + item.giver_account + '</td>' +
                                '<td>' + item.price_low +'-'+item.price_high+'元</td>' +
                                '<td>' + wait + '</td>' +
                                '<td>' + item.finished_date + '</td>' +
                                '<td><a class="needwatch" href="#">查看</a> | <a class="moneydelete" href="#">删除</a></td>'
                            $(allResult).appendTo('.orderta').fadeIn(5000);
                        }
                    }

                    window.displayPage2 = displayPage2;
                    // 显示分页控件
                    let paginationControl2 = '<div id="pagination-control2">';
                    for (let i = 1; i <= numPages2; i++) {
                        paginationControl2 += '<button onclick="displayPage2(' + i + ')" style="border: 0; border-radius: 50%; width: 15px; height: 15px; color:#fff;margin-left:5px;background-color: ' + (i === currentPage2 ? '#333' : '#9e9e9e') + '; font-family: "Microsoft Yahei", sans-serif; font-weight: bold;">' + i + '</button>';
                    }
                    paginationControl2 += '</div>';
                    $('#pagination-control2').remove();
                    $(paginationControl2).appendTo('#footer2');
                    // 求购--点击查看
                    $(document).on('click', '.needwatch', function () {
                        // 获取被点击的元素所在的行
                        let tr = $(this).closest('tr');
                        // 获取行中数据
                        let thing_name = tr.find('td:first').text();
                        let thing_photo = tr.find('td:nth-child(2)').text();
                        let thing_memo = tr.find('td:nth-child(3)').text();
                        let owner_photo = tr.find('td:nth-child(5)').text();
                        let owner_name = tr.find('td:nth-child(6)').text();
                        let owner_account = tr.find('td:nth-child(7)').text();
                        let giver_photo = tr.find('td:nth-child(9)').text();
                        let giver_name = tr.find('td:nth-child(10)').text();
                        let giver_account = tr.find('td:nth-child(11)').text();
                        let thing_price = tr.find('td:nth-child(12').text();
                        displayModal(thing_name,thing_photo,thing_memo,owner_photo,owner_name,owner_account,giver_photo,giver_name,giver_account,thing_price);
                    });

                    function displayModal(thing_name,thing_photo,thing_memo,owner_photo,owner_name,owner_account,giver_photo,giver_name,giver_account,thing_price) {
                        $('.modal-overlay').show();

                        $('.thing_photo').empty();
                        let thing_photo_html =
                            ' <img class="modal-body-goods" src="..'+thing_photo+'">'
                        $(thing_photo_html).appendTo('.thing_photo').fadeIn(5000);
                        $('.thing_name').empty();
                        let thing_name_html =
                            ' <p style="color: #9e9e9e;font-size: 10px">商品名称</p>\n' +
                            ' <span style="font-size: 15px">'+thing_name+'</span>'
                        $(thing_name_html).appendTo('.thing_name').fadeIn(5000);
                        $('.thing_price').empty();
                        let thing_price_html =
                            ' <p style="color: #9e9e9e;font-size: 10px">价格</p>\n' +
                            ' <span style="font-size: 15px">'+thing_price+'</span>'
                        $(thing_price_html).appendTo('.thing_price').fadeIn(5000);
                        $('.thing_memo').empty();
                        let thing_memo_html =
                            ' <span style="font-size: 15px">'+thing_memo+'</span>'
                        $(thing_memo_html).appendTo('.thing_memo').fadeIn(5000);
                        $('.owner_photo').empty();
                        let owner_photo_html =
                            ' <img src="..'+owner_photo+'">'
                        $(owner_photo_html).appendTo('.owner_photo').fadeIn(5000);
                        $('.owner_name').empty();
                        let owner_name_html =
                            ' <p style="color: #9e9e9e;font-size: 10px">'+owner_name+'</p>'+
                            '<span style="font-size: 15px">@'+owner_account+'</span>'
                        $(owner_name_html).appendTo('.owner_name').fadeIn(5000);
                        $('.buyer_photo').empty();
                        let buyer_photo_html =
                            ' <img src="..'+giver_photo+'">'
                        $(buyer_photo_html).appendTo('.buyer_photo').fadeIn(5000);
                        $('.buyer_name').empty();
                        let buyer_name_html =
                            ' <p style="color: #9e9e9e;font-size: 10px">'+giver_name+'</p>'+
                            '<span style="font-size: 15px">@'+giver_account+'</span>'
                        $(buyer_name_html).appendTo('.buyer_name').fadeIn(5000);
                    }

                    // 关闭模态框
                    $(document).on('click', '.modal-close', function () {
                        $('.modal-overlay').hide();
                    });
                }
            });
        }
    })
});


//图表区
//指定用户查询交易信息
$('#searchoneuser2').submit(function (event) {
    event.preventDefault();
    var iaccount = $('#inputaccount').val();
    $.ajax({
        url: 'http://localhost:8080/Xunhuan_war_exploded/searchusertradebyaccount',
        type: 'GET',
        data: {
            account: encodeURIComponent(iaccount)
        },
        dataType: 'json',
        success: function (raccount) {
            let jsonraccount = eval(raccount);
            $('.pickuser_icon').empty();
            let userinformation =
                '<img src="..' + jsonraccount.searchusertrade[0].photo + '">' +
                '<p>' + jsonraccount.searchusertrade[0].name + '</p>'
            $(userinformation).appendTo('.pickuser_icon').fadeIn(5000);
            $('.totalp_text').empty();
            let paydiv =
                '<h3>共计消费</h3>' +
                '<h1>' + jsonraccount.selectpay[0].pay + '元</h1>\n'
            $(paydiv).appendTo('.totalp_text').fadeIn(5000);
            $('.totalc_text').empty();
            let incomediv =
                '<h3>共计收入</h3>' +
                '<h1>' + jsonraccount.selectincome[0].income + '元</h1>\n'
            $(incomediv).appendTo('.totalc_text').fadeIn(5000);
            $('.totald_text').empty();
            let dishonestdiv =
                '<h3>违约率</h3>' +
                '<h1>' + jsonraccount.selectdishonesty[0].dishonest + '</h1>\n'
            $(dishonestdiv).appendTo('.totald_text').fadeIn(5000);

            //图表
            var months = ['六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
            // 指定用户出售量
            var myChart10 = echarts.init(document.getElementById('usertsell'), null, {
                width: 220,
                // 图表高度
                height: 200
            });
            var option10 = {
                legend: {
                    show: true,
                    right: 25,
                    top: 180,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    show: false,
                    data: months
                },
                series: [{
                    name: '出售量',
                    type: 'line',
                    data: [0, 0, 0, 0, 0, 0, 0],
                    smooth: true,
                    symbol: 'none',

                },
                    {
                        name: '求购量',
                        type: 'line',
                        data: [0, 0, 0, 0, 0, 0, 0],
                        smooth: true,
                        symbol: 'none',

                    }],
                yAxis: {
                    type: 'value',
                    show: false
                },
                grid: {
                    show: false,
                    y: 70
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}<br />{c} 件',
                    textStyle: "#000",
                    backgroundColor: "#FFF",
                    trigger: 'axis',
                    extraCssText: 'box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    itemGap: 5
                },
                title: {
                    // 标题文本
                    text: 'Transaction overview',
                    left: 15,
                    top: 5
                },
                backgroundColor: "#FFF"
            };
            myChart10.setOption(option10);
            for (var i = 0; i < jsonraccount.selectmonth.length; i++) {
                var month = jsonraccount.selectmonth[i].month;
                var count = jsonraccount.selectmonth[i].count;
                option10.series[0].data[month - 6] = count;
                myChart10.setOption(option10);
            }
            for (var j = 0; j < jsonraccount.selectmonth2.length; j++) {
                var month = jsonraccount.selectmonth2[j].month;
                var count = jsonraccount.selectmonth2[j].count;
                option10.series[1].data[month - 6] = count;
                myChart10.setOption(option10);
            }
        }
    })
})
//默认展示用图表
var months = ['六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
// 指定用户出售量
var myChart10 = echarts.init(document.getElementById('usertsell'), null, {
    width: 220,
    // 图表高度
    height: 200
});
var option10 = {
    legend: {
        show: true,
        right: 25,
        top: 180,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        show: false,
        data: months
    },
    series: [{
        name: '出售量',
        type: 'line',
        data: [0, 5, 7, 3, 2, 0, 4],
        smooth: true,
        symbol: 'none',

    },
        {
            name: '求购量',
            type: 'line',
            data: [4, 3, 4, 5, 4, 6, 0],
            smooth: true,
            symbol: 'none',

        }],
    yAxis: {
        type: 'value',
        show: false
    },
    grid: {
        show: false,
        y: 70
    },

    title: {
        // 标题文本
        text: 'Transaction overview',
        left: 15,
        top: 5
    },
    backgroundColor: "#FFF"
};
myChart10.setOption(option10);





