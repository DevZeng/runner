
var Container = React.createClass({displayName: "Container",
    render:function(){
        return(
            React.createElement("div", {className: "container"}, 
                React.createElement(ArticalTitle, null), 
                React.createElement(ArticalCtr, null)
            )
        );
    }
});

var ArticalTitle = React.createClass({displayName: "ArticalTitle",
    render:function(){
        return(
            React.createElement("div", {className: "title"}, 
                React.createElement("h1", null, "如果跑步能减肥，那有什么意义"), 
                React.createElement("div", {className: "info"}, 
                    React.createElement("span", {className: "time"}, "发表于2016年05年06日 12：00"), 
                    React.createElement("span", {className: "watch"}, React.createElement("span", {className: "glyphicon glyphicon-eye-open"}), "浏览 2140"), 
                    React.createElement("span", {className: "time"}, React.createElement("span", {className: "glyphicon glyphicon-comment"}), "评论 10"), 
                    React.createElement("span", {className: "time"}, React.createElement("span", {className: "glyphicon glyphicon-share"}), "分享"), 
                    React.createElement("span", {className: "time"}, React.createElement("span", {className: "glyphicon glyphicon-star"}), "收藏")
                ), 
                React.createElement("div", {className: "author"}, 
                    React.createElement("div", {className: "on-r"}, React.createElement("img", {src: "public/index/img/run-two.png"})), 
                    React.createElement("div", {className: "on-l"}, 
                        React.createElement("p", null, "跑龄六年"), 
                        React.createElement("h2", {className: "name"}, "爱你还是他")
                    )
                )
            )
        )
    }
})

var ArticalCtr = React.createClass({displayName: "ArticalCtr",
    render:function(){
        return(
            React.createElement("div", {className: "artiacl-ctr"}, 
                React.createElement("img", {src: "public/index/img/example1.png"}), 
                React.createElement("img", {className: "text", src: "public/index/img/run-text.png"})
            )
        )
    }
})


//合成
var BodyContainer = React.createClass({displayName: "BodyContainer",
    render: function(){
        return(
            React.createElement("div", {id: "articalDetail"}, 
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
