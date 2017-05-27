var HdInfo = React.createClass({displayName: "HdInfo",
    render:function(){
        return(
            React.createElement("div", {className: "hd-info"}, 
                React.createElement("div", {className: "hd-img"}, 
                    React.createElement("img", {src: "public/index/img/run-one.png"})
                ), 
                React.createElement("div", {className: "hd-table"}, 
                    React.createElement("table", null, 
                        React.createElement("div", {className: "t-title"}, React.createElement("span", null, "广州市花都区粤海酒店“爱青春”晨跑活动")), 
                        React.createElement("tr", null, 
                            React.createElement("td", {className: "title"}, "活动地点"), 
                            React.createElement("td", {className: "text"}, "花都花都花都花都花都"), 
                            React.createElement("td", {className: "title"}, "活动时间"), 
                            React.createElement("td", {className: "text"}, "2016年十月四号10：00AM")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", {className: "title"}, "结合地点"), 
                            React.createElement("td", {className: "text"}, "花都花都花都花都花都"), 
                            React.createElement("td", {className: "title"}, "集合时间"), 
                            React.createElement("td", {className: "text"}, "2016年十月四号10：00AM")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", {className: "title"}, "报名时间"), 
                            React.createElement("td", {className: "text"}, "花都花都花都花都花都"), 
                            React.createElement("td", {className: "title"}, "总里程"), 
                            React.createElement("td", {className: "text"}, "3公里")
                        ), 
                        React.createElement("tr", null, 
                            React.createElement("td", {className: "title"}, "人数限制"), 
                            React.createElement("td", {className: "text"}, "10"), 
                            React.createElement("td", {className: "title"}, "活动奖励"), 
                            React.createElement("td", {className: "text"}, "无")
                        )
                    )
                )
            )
        )
    }
});

var HdDetial = React.createClass({displayName: "HdDetial",
    render:function(){
        return(
            React.createElement("div", {className: "hd-detail"}, 
                React.createElement(User, null), 
                React.createElement(Hdctr, null)
            )
        )
    }
})

var User = React.createClass({displayName: "User",
    render:function(){
        return(
            React.createElement("div", {className: "user"}, 
                React.createElement("div", {className: "user-img"}, 
                    React.createElement("img", {src: "public/index/img/run-two.png"})
                ), 
                React.createElement("div", {className: "user-info"}, 
                    React.createElement("div", {className: "t-l"}, 
                        React.createElement("h2", {className: "name"}, "爱你还是他", React.createElement("span", {className: "run-age"}, "跑龄：两年")), 
                        React.createElement("p", null, "发表于2016年5月5日")
                    ), 
                    React.createElement("div", {className: "t-r"}, 
                        React.createElement("a", {href: "#"}, React.createElement("span", {className: "glyphicon glyphicon-heart"}), "分享"), 
                        React.createElement("a", {href: "#"}, React.createElement("span", {className: "glyphicon glyphicon-share"}), "收藏")
                    )
                )
            )
        )
    }
})

var Hdctr = React.createClass({displayName: "Hdctr",
    render:function(){
        return(
            React.createElement("div", {className: "Hdctr"}, 
                React.createElement("img", {src: "public/index/img/run-text.png"})
            )
        )
    }
})











var Container = React.createClass({displayName: "Container",
    render:function(){
        return(
            React.createElement("div", {className: "container"}, 
                React.createElement(HdInfo, null), 
                React.createElement(HdDetial, null)
            )
        );
    }
});


//合成
var BodyContainer = React.createClass({displayName: "BodyContainer",
    render: function(){
        return(
            React.createElement("div", null, 
                React.createElement(Header, null), 
                React.createElement(Container, null), 
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
