//健康科普内容

var HealthyContainer = React.createClass({displayName: "HealthyContainer",
    componentDidMount:function(){
        $('.tab-btn').click(function(){
            $('.tab-btn').removeClass('active');
            $(this).addClass('active');
            var oid = $(this).attr('id');
            $('.tab-ctr > li').hide();
            $('index.php?controller=index&method=articaldetail'+oid+'Ctr').show();
        })
    },
    render:function(){
    return(
        React.createElement("div", null, 
            React.createElement("div", {className: "tab-bg container"}, 
             React.createElement("ul", {className: "tab-nav", id: "tab-nav"}, 
               React.createElement("li", {className: "active tab-btn", id: "media"}, React.createElement("a", {href: "javascript:;"}, "媒体新闻")), 
               React.createElement("li", {className: "tab-btn", id: "articles"}, React.createElement("a", {href: "javascript:;"}, "用户文章")), 
               React.createElement("li", {className: "tab-btn", id: "user"}, React.createElement("a", {href: "javascript:;"}, "我的发表"))
             ), 
             React.createElement("ul", {className: "tab-ctr", id: "tab-ctr"}, 
               
               React.createElement("li", {className: "media-ctr", id: "mediaCtr"}, 
                 React.createElement("div", {className: "l-ctr"}, 
                   React.createElement("div", {className: "four-box"}, 
                     React.createElement("div", {className: "box box-1"}, 
                       React.createElement("img", {src: "public/index/img/media/1.png"}), 
                       React.createElement("div", {className: "box-title"}, "跑者的世界天天都是情人节")
                     ), 
                      React.createElement("div", {className: "box"}, 
                          React.createElement("div", {className: "box-text"}, 
                               React.createElement("h1", null, "热点新闻"), 
                               React.createElement("ul", null, 
                                 React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                                 React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                                 React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                                 React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势"))
                               )
                           )
                     ), 
                      React.createElement("div", {className: "box box-2"}, 
                       React.createElement("img", {src: "public/index/img/media/2.png"}), 
                       React.createElement("div", {className: "box-title"}, "跑者的世界天天都是情人节")
                     ), 
                      React.createElement("div", {className: "box box-3"}, 
                       React.createElement("img", {src: "public/index/img/media/3.png"}), 
                       React.createElement("div", {className: "box-title"}, "跑者的世界天天都是情人节")
                     )
                   ), 
                 
                   React.createElement("div", {className: "other-place"}, 
                     React.createElement("div", {className: "l-place"}, 
                       React.createElement("div", {className: "title"}, 
                         React.createElement("h2", null, "人民日报")
                       ), 
                       React.createElement("ul", null, 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势"))
                       )
                     ), 
                     React.createElement("div", {classNameclassName: "r-place"}, 
                       React.createElement("div", {classNameclassName: "title"}, 
                         React.createElement("h2", null, "南方日报")
                       ), 
                       React.createElement("ul", null, 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势"))
                       )
                     )
                   )
                  ), 
                  React.createElement("div", {className: "r-ctr"}, 
                    React.createElement("div", {className: "media-news"}, 
                      React.createElement("div", {className: "media-ctr"}, 
                        React.createElement("div", {className: "news-img"}, React.createElement("img", {src: "img/media/4.png"})), 
                        React.createElement("div", {className: "news-brief"}, 
                          React.createElement("h3", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                          React.createElement("p", null, "广州慢跑开始成为流行趋势")
                        )
                      ), 
                      React.createElement("div", {className: "media-ctr"}, 
                        React.createElement("div", {className: "news-img"}, React.createElement("img", {src: "public/index/img/media/4.png"})), 
                        React.createElement("div", {className: "news-brief"}, 
                          React.createElement("h3", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                          React.createElement("p", null, "广州慢跑开始成为流行趋势")
                        )
                      )
                    )
                  )
               ), 
               
               React.createElement("li", {className: "articles-ctr", id: "articlesCtr"}, 
                 React.createElement("div", {className: "t-block"}, 
                   React.createElement("div", {className: "l-block"}, 
                     React.createElement("div", {className: "kt"}, 
                      React.createElement("p", null, "用户", React.createElement("br", null), "文章"), 
                      React.createElement("p", {className: "kt-en"}, "Sports", React.createElement("br", null), "Shoes")
                    ), 
                    React.createElement("ul", null, 
                      React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "慢跑人生")), 
                      React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "路线攻略")), 
                      React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "营养健康")), 
                      React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "慢跑工具")), 
                      React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "编辑推荐")), 
                      React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "国际活动"))
                    ), 
                    React.createElement("a", {className: "to-more", href: "index.php?controller=index&method=articaldetail"}, "更多")
                   ), 
                   React.createElement("div", {className: "m-block"}, 
                     React.createElement("div", {className: "new-img"}, React.createElement("img", {src: "public/index/img/word/p1.png"})), 
                     React.createElement("div", {className: "new-img"}, React.createElement("img", {src: "public/index/img/word/p2.png"})), 
                     React.createElement("div", {className: "new-img"}, React.createElement("img", {src: "public/index/img/word/p3.png"}))
                   ), 
                   React.createElement("div", {className: "r-block"}, 
                      React.createElement("div", {className: "r-box"}, 
                        React.createElement("h1", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "论慢跑形成的大概原因")), 
                        React.createElement("span", {className: "from"}, "来源：宇佐见"), 
                        React.createElement("p", null, "就算你这么说我也想不出啊啊啊啊啊啊救命啊啊啊啊啊啊给把刀我要报复社会啊啊啊啊啊啊啊啊啊"), 
                        React.createElement("span", {className: "time"}, "2016-04-14")
                      ), 
                      React.createElement("div", {className: "r-box"}, 
                        React.createElement("h1", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "论慢跑形成的大概原因")), 
                        React.createElement("span", {className: "from"}, "来源：宇佐见"), 
                        React.createElement("p", null, "就算你这么说我也想不出啊啊啊啊啊啊救命啊啊啊啊啊啊给把刀我要报复社会啊啊啊啊啊啊啊啊啊"), 
                        React.createElement("span", {className: "time"}, "2016-04-14")
                      ), 
                      React.createElement("div", {className: "r-box"}, 
                        React.createElement("h1", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "论慢跑形成的大概原因")), 
                        React.createElement("span", {className: "from"}, "来源：宇佐见"), 
                        React.createElement("p", null, "就算你这么说我也想不出啊啊啊啊啊啊救命啊啊啊啊啊啊给把刀我要报复社会啊啊啊啊啊啊啊啊啊"), 
                        React.createElement("span", {className: "time"}, "2016-04-14")
                      )
                   )
                 ), 
                 React.createElement("div", {className: "other"}, 
                    React.createElement("div", {className: "kind"}, 
                       React.createElement("div", {className: "title"}, 
                         React.createElement("h2", null, "慢跑人生"), 
                         React.createElement("a", {className: "to-more", href: "index.php?controller=index&method=articaldetail"}, "更多")
                       ), 
                       React.createElement("ul", null, 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势"))
                       )
                    ), 
                    React.createElement("div", {className: "kind"}, 
                       React.createElement("div", {className: "title"}, 
                         React.createElement("h2", null, "路线攻略"), 
                         React.createElement("a", {className: "to-more", href: "index.php?controller=index&method=articaldetail"}, "更多")
                       ), 
                       React.createElement("ul", null, 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势"))
                       )
                    ), 
                    React.createElement("div", {className: "kind"}, 
                       React.createElement("div", {className: "title"}, 
                         React.createElement("h2", null, "营养健康"), 
                         React.createElement("a", {className: "to-more", href: "index.php?controller=index&method=articaldetail"}, "更多")
                       ), 
                       React.createElement("ul", null, 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势"))
                       )
                    ), 
                    React.createElement("div", {className: "kind"}, 
                       React.createElement("div", {className: "title"}, 
                         React.createElement("h2", null, "慢跑工具"), 
                         React.createElement("a", {className: "to-more", href: "index.php?controller=index&method=articaldetail"}, "更多")
                       ), 
                       React.createElement("ul", null, 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势")), 
                         React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "广州慢跑开始成为流行趋势"))
                       )
                    )
                 )
               ), 
               
               React.createElement("li", {className: "user-ctr", id: "userCtr"}, 
                 
                 React.createElement("div", {className: "three-btn"}, 
                   React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "发表文章"), 
                   React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "全部文章"), 
                   React.createElement("a", {href: "index.php?controller=index&method=articaldetail"}, "我的积分")
                 ), 

                  React.createElement("div", {className: "ctr-title container"}, 
                    React.createElement("hr", {className: "hr-left"}), 
                    React.createElement("div", {className: "icon"}, 
                        React.createElement("p", {className: "i-left"}, "最新"), 
                        React.createElement("p", {className: "i-right"}, "New")
                    ), 
                    React.createElement("hr", {className: "hr-right"})
                 ), 

                 React.createElement("div", {className: "news"}, 
                   React.createElement("h1", null, "女性跑步防狼五要素"), 
                   React.createElement("div", {className: "brief"}, 
                      React.createElement("div", {className: "to-left"}, 
                        React.createElement("span", {className: "kind"}, "跑步人生"), 
                        React.createElement("span", {className: "data"}, "2016-05-14")
                      ), 
                      React.createElement("div", {className: "to-rigth"}, 
                        React.createElement("span", {className: "watch"}, React.createElement("img", {src: "public/index/img/liulan.png"}), "浏览：30"), 
                        React.createElement("span", {className: "review"}, React.createElement("img", {src: "public/index/img/pinglun.png"}), "评论：30"), 
                        React.createElement("span", {className: "share"}, React.createElement("img", {src: "public/index/img/fenxiang.png"}), "分享")
                      )
                   ), 
                   React.createElement("div", {className: "news-img"}
                     
                   ), 
                   React.createElement("div", {className: "news-text"}, 
                     React.createElement("p", null, "女性跑步需要正确的防卫，能接到南方金额为那结局接耳机")
                   ), 
                   React.createElement("a", {className: "to-more", href: "index.php?controller=index&method=articaldetail"}, "查看更多")
                 )


               )
             )
           )
        )
    )}
})


//二级约跑内容
var BodyContainer = React.createClass({displayName: "BodyContainer",
    render: function(){
        return(
            React.createElement("div", {id: "healthy"}, 
                React.createElement(Header, null), 
                React.createElement(Banner, null), 
                React.createElement(HealthyContainer, null), 
                React.createElement(Footer, null)
            )
        )
    }
})

//输出
React.render(
  React.createElement(BodyContainer, null),
  document.body
);