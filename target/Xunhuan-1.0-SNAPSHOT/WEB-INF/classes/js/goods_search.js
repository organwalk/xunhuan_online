$('#search-form').submit(function(event) {
    event.preventDefault(); // 阻止表单提交的默认行为
    var searchTerm = $('#search-input').val(); // 获取搜索关键字
    var type = document.querySelector('input[name=type]:checked').value;
    $('.bigsearch').stop().animate({
        'margin-top': '20px'
    }, 1000);
    $('.ctype').hide()
    $('#search-input').click(function() {
        $('.ctype').slideDown();
    });
    $.ajax({
        url: 'http://localhost:8080/Xunhuan_war_exploded/searchgoods', // 请求的 URL
        type: 'GET', // 请求的类型
        dataType: 'json', // 返回的数据类型
        data: {
            thing_name: encodeURIComponent(searchTerm),
            type: type
        },
        success: function(results) {
            $('#search-results .loading').hide();
            $('#search-input').blur();
            $('#search-results').empty(); // 清空旧的搜索结果
            let jsonmgoods = eval(results);
            console.log(jsonmgoods)
            // 设置每页显示的记录数
            const pageSize = 9;
            const numPages = Math.ceil(jsonmgoods.length / pageSize);
            let currentPage = 1;
            displayPage(currentPage);

            function displayPage(page) {
                // 隐藏所有记录
                $('.glist').hide();
                $('#pagination-control button').css('background-color', '#9e9e9e');
                // 将当前按钮的背景颜色设置为 #333
                $('#pagination-control button:contains(' + page + ')').css('background-color', '#333');
                // 滚动到顶部
                window.scrollTo(0, 0);
                // 显示当前页的记录
                const startIndex = (page - 1) * pageSize;
                const endIndex = startIndex + pageSize;
                for (let i = startIndex; i < endIndex && i < jsonmgoods.length; i++) {
                    let item = jsonmgoods[i];
                    console.log(item)
                    if (item.type_id==1){
                        console.log(jsonmgoods)
                    let searchResult =
                        '<div class="glist" >' +
                        '<img src="..' + item.cover + '">' +
                        '<div class="glist_content">' +
                        '<h2 >' + item.thing_name + '</h2>' +
                        '<button >成色:' + item.new_old + '</button>' +
                        '<br><br>' +
                        '<div class="date"><a>MoneyTrade</a></div>' +
                        '<div class="condition"><a>Price</a><p >' + item.price + '</p></div><br><br><br>' +
                        '<div class="icon"><img src="..' + item.photo + '" ></div>' +
                        '<div class="text"><a >' + item.name + '</a>' +
                        '<p >' + item.account + '</p></div>' +
                        '<div class="add"><button onclick="window.location=\'http://localhost:8080/Xunhuan_war_exploded/goods_detail?_id='+item._id+'&&account='+item.account+'\'">View Details</button></div></div></div></div>';
                    $(searchResult).appendTo('#search-results').fadeIn(5000);
                    }else{
                        let searchResult =
                            '<div class="glist" id="glist">' +
                            '<img src="..' + item.cover + '">' +
                            '<div class="glist_content">' +
                            '<h2 id="thing_name">' + item.thing_name + '</h2>' +
                            '<button id="new_old">成色:' + item.new_old + '</button>' +
                            '<br><br>' +
                            '<div class="date"><a>NeedsTrade</a></div>' +
                            '<div class="condition"><a>Price</a><p id="price">' + item.price_low +'-'+item.price_high+'</p></div><br><br><br>' +
                            '<div class="icon"><img src="..' + item.photo + '" id="photo"></div>' +
                            '<div class="text"><a id="name">' + item.name + '</a>' +
                            '<p id="account">' + item.account + '</p></div>' +
                            '<div class="add"><button onclick="window.location=\'http://localhost:8080/Xunhuan_war_exploded/needs_detail?_id='+item._id+'&&account='+item.account+'\'">View Details</button></div></div></div></div>';
                        $(searchResult).appendTo('#search-results').fadeIn(5000);
                    }
                }
            }
            window.displayPage = displayPage;
                // 显示分页控件
                let paginationControl = '<div id="pagination-control">';
                for (let i = 1; i <= numPages; i++) {
                    paginationControl += '<button onclick="displayPage(' + i + ')" style="border: 0; border-radius: 50%; width: 35px; height: 35px; background-color: ' + (i === currentPage ? '#333' : '#9e9e9e') + '; color: #fff; font-family: "Microsoft Yahei", sans-serif; font-weight: bold;">' + i + '</button>';

                }
                paginationControl += '</div>';
                $('#pagination-control').remove();
                $(paginationControl).appendTo('#footer');
            }
})
})
