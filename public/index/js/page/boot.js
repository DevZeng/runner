//启动页内容



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