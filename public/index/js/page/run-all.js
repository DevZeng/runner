var Tabtitle = React.createClass({displayName: "Tabtitle",
    render:function(){
        return(
            React.createElement("div", {className: "tab-title"}, 
                React.createElement("ul", {className: "nav nav-tabs"}, 
                  React.createElement("li", {role: "presentation", className: "active"}, React.createElement("a", {href: "#"}, "全部活动")), 
                  React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#"}, "热门")), 
                  React.createElement("a", {className: "fb-btn pull-right", href: "index.php?controller=index&method=addactivity"}, React.createElement("span", {className: "glyphicon glyphicon-edit"}), "发布活动")
                )
            )
        )
    }
})

var Tabctr = React.createClass({displayName: "Tabctr",
    render:function(){
        return(
            React.createElement("ul", {className: "tab-ctr"}, 
                React.createElement("li", {className: "tab-line"}, 
                    React.createElement(TabBox, null), 
                    React.createElement(TabBox, null), 
                    React.createElement(TabBox, null)
                ), 
                React.createElement("li", {className: "tab-line"}, 
                    React.createElement(TabBox, null), 
                    React.createElement(TabBox, null)
                ), 
                React.createElement("li", {className: "tab-line"}, 
                    React.createElement(TabBox, null), 
                    React.createElement(TabBox, null), 
                    React.createElement(TabBox, null)
                ), 
                React.createElement("li", {className: "tab-line"}, 
                    React.createElement(TabBox, null), 
                    React.createElement(TabBox, null)
                ), 
                React.createElement("li", {className: "tab-line"}, 
                    React.createElement(TabBox, null), 
                    React.createElement(TabBox, null), 
                    React.createElement(TabBox, null)
                )
            )
        )
    }
})

var TabBox = React.createClass({displayName: "TabBox",
    render:function(){
        return(
            React.createElement("div", {className: "tab-box"}, 
                React.createElement("img", {src: "public/index/img/all-two.png"}), 
                React.createElement("h1", null, React.createElement("a", {href: "/tpl/index/run-detail.html"}, "广州市花都区粤海酒店“爱青春”晨跑活动")), 
                React.createElement("div", {className: "line-bg"}, 
                    React.createElement("div", {className: "line"})
                ), 
                React.createElement("div", {className: "num"}, 
                    React.createElement("span", {className: "l-num"}, "0"), 
                    React.createElement("span", {className: "r-num"}, "还差40人")
                )
            )
        )
    }
})

var Container = React.createClass({displayName: "Container",
    render:function(){
        return(
            React.createElement("div", {className: "container"}, 
                React.createElement(Tabtitle, null), 
                React.createElement(Tabctr, null)
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
