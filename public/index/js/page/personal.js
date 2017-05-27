
var TableConatiner = React.createClass({displayName: "TableConatiner",
    render:function(){
        return(
            React.createElement("div", {className: "personal-info container"}, 
                React.createElement("div", {className: "l-ctr"}, 
                    React.createElement("div", {className: "user"}, 
                        React.createElement("div", {className: "user-icon"}, React.createElement("img", {src: "public/index/img/touxiang.png"})), 
                        React.createElement("p", null, "周大帅")
                    ), 
                    React.createElement("ul", {className: "l-nav"}, 
                        React.createElement("li", {className: "active"}, React.createElement("a", {href: "#"}, "基本信息")), 
                        React.createElement("li", null, React.createElement("a", {href: "yonghu-gerenjifen.html"}, "个人积分")), 
                        React.createElement("li", null, React.createElement("a", {href: "yonghu-lishiguiji.html"}, "历史轨迹")), 
                        React.createElement("li", null, React.createElement("a", {href: "yonghu-tineng.html"}, "体能展示")), 
                        React.createElement("li", null, React.createElement("a", {href: "yonghu-app.html"}, "app关联"))
                    )
                ), 
                React.createElement("div", {className: "r-ctr", id: ""}, 
                    React.createElement("span", null, "编辑"), 
                    React.createElement(CtrTable, null)
                )
            )
        );
    }
});

var CtrTable = React.createClass({displayName: "CtrTable",
    render:function(){
        return(
            React.createElement("table", null, 
                React.createElement("tr", null, 
                    React.createElement("td", null, "登录名"), 
                    React.createElement("td", null, "ci***00@sina.cn "), 
                    React.createElement("td", null, "注册时间"), 
                    React.createElement("td", null, "XXXX")
                ), 
                React.createElement("tr", null, 
                    React.createElement("td", null, "昵 称"), 
                    React.createElement("td", null, "XXXXX"), 
                    React.createElement("td", null, "联系信息"), 
                    React.createElement("td", null, "XXXXX")
                ), 
                React.createElement("tr", null, 
                    React.createElement("td", null, "真实姓名"), 
                    React.createElement("td", null, "XXXXX"), 
                    React.createElement("td", null, "邮 箱"), 
                    React.createElement("td", null, "XXXXX")
                ), 
                React.createElement("tr", null, 
                    React.createElement("td", null, "所在地"), 
                    React.createElement("td", null, "XXXXX"), 
                    React.createElement("td", null, "QQ"), 
                    React.createElement("td", null, "XXXXX")
                ), 
                React.createElement("tr", null, 
                    React.createElement("td", null, "性 别"), 
                    React.createElement("td", null, "XXXXX"), 
                    React.createElement("td", null, "MSN"), 
                    React.createElement("td", null, "XXXXX")
                ), 
                React.createElement("tr", null, 
                    React.createElement("td", null, "性取向"), 
                    React.createElement("td", null, "XXXXX"), 
                    React.createElement("td", null, "职业信息"), 
                    React.createElement("td", null, "XXXXX")
                ), 
                React.createElement("tr", null, 
                    React.createElement("td", null, "感情状况"), 
                    React.createElement("td", null, "XXXXX"), 
                    React.createElement("td", null, "教育信息"), 
                    React.createElement("td", null, "XXXXX")
                ), 
                React.createElement("tr", null, 
                    React.createElement("td", null, "生 日"), 
                    React.createElement("td", null, "XXXXX")
                ), 
                React.createElement("tr", null, 
                    React.createElement("td", null, "血 型"), 
                    React.createElement("td", null, "XXXXX")
                ), 
                React.createElement("tr", null, 
                    React.createElement("td", null, "博客地址"), 
                    React.createElement("td", null, "XXXXX")
                ), 
                React.createElement("tr", null, 
                    React.createElement("td", null, "简 介"), 
                    React.createElement("td", null, "XXXXX")
                )
            )
        )
    }
})

var FourBlock = React.createClass({displayName: "FourBlock",
    render:function(){
        return(
            React.createElement("div", {className: "container four-block"}, 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-md-3 f-box"}, React.createElement("div", null)), 
                    React.createElement("div", {className: "col-md-3 f-box"}, React.createElement("div", null)), 
                    React.createElement("div", {className: "col-md-3 f-box"}, React.createElement("div", null)), 
                    React.createElement("div", {className: "col-md-3 f-box"}, React.createElement("div", null))
                )
            )
        )
    }
})

var Container = React.createClass({displayName: "Container",
    render:function(){
        return(
            React.createElement("div", null, 
                React.createElement(TableConatiner, null)
            )
        )
    }
})

//合成
var BodyContainer = React.createClass({displayName: "BodyContainer",
    render: function(){
        return(
            React.createElement("div", {id: "personal"}, 
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
