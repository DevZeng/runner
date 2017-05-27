var Leftform = React.createClass({displayName: "Leftform",
    render:function(){
        return(
            React.createElement("div", {className: "left-form"}, 
                React.createElement("form", null, 
                    React.createElement("div", {className: "form-title form-horizontal"}, 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {className: "col-sm-2 control-label"}, "活动名称"), 
                            React.createElement("div", {className: "col-sm-10"}, React.createElement("input", {type: "text", className: "form-control", id: "", placeholder: "请输入活动名称"}))
                        )
                    ), 
                    React.createElement("div", {className: "form-ctr"}, 
                        React.createElement("div", {className: "form-horizontal form-itd"}, 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {for: "", className: "col-sm-2 control-label"}, "活动地点"), 
                                React.createElement("div", {className: "col-sm-4 "}, 
                                    React.createElement("input", {type: "", className: "form-control", id: "", placeholder: ""})
                                ), 
                                React.createElement("label", {className: "col-sm-2 control-label min-label"}, "区"), 
                                React.createElement("div", {className: "col-sm-4"}, 
                                    React.createElement("input", {type: "text", className: "form-control", id: "", placeholder: ""})
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {for: "", className: "col-sm-2 control-label"}, "活动时间"), 
                                React.createElement("div", {className: "col-sm-4 input-append date", "data-date": "12-02-2012", "data-date-format": "dd-mm-yyyy"}, 
                                    React.createElement("input", {type: "text", className: "form-control", id: "", placeholder: "格式: 2016-01-22"})
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {for: "", className: "col-sm-2 control-label"}, "报名时间"), 
                                React.createElement("div", {className: "col-sm-4"}, 
                                    React.createElement("input", {type: "", className: "form-control", id: "", placeholder: "格式: 2016-01-22"})
                                ), 
                                React.createElement("label", {className: "col-sm-2 control-label min-label"}, "至"), 
                                React.createElement("div", {className: "col-sm-4"}, 
                                    React.createElement("input", {type: "", className: "form-control", id: "", placeholder: "格式: 2016-01-22"})
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {for: "", className: "col-sm-2 control-label"}, "集合地点"), 
                                React.createElement("div", {className: "col-sm-4"}, 
                                    React.createElement("input", {type: "", className: "form-control", id: "", placeholder: ""})
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {for: "", className: "col-sm-2 control-label"}, "人数限制"), 
                                React.createElement("div", {className: "col-sm-4"}, 
                                    React.createElement("input", {type: "", className: "form-control", id: "", placeholder: ""})
                                ), 
                                React.createElement("label", {className: "col-sm-2 control-label min-label"}, "人数")
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {for: "", className: "col-sm-2 control-label"}, "总里程"), 
                                React.createElement("div", {className: "col-sm-4"}, 
                                    React.createElement("input", {type: "", className: "form-control", id: "", placeholder: ""})
                                ), 
                                React.createElement("label", {className: "col-sm-2 control-label min-label"}, "公里")
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {for: "", className: "col-sm-2 control-label"}, "活动奖励"), 
                                React.createElement("div", {className: "col-sm-10"}, 
                                    React.createElement("input", {type: "", className: "form-control", id: "", placeholder: ""})
                                )
                            ), 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("label", {for: "", className: "col-sm-2 control-label"}, "封面图")
                            )
                        )
                    )
                )
            )
        )
    }
});

var RightEdit = React.createClass({displayName: "RightEdit",
    componentDidMount: function(){

    },
    render:function(){
        return(
            React.createElement("div", {className: "right-edit"}, 
                React.createElement("script", {id: "editor", type: "text/plain", style: "width:100%;height:500px;"})
            )
        )
    }
});



var Container = React.createClass({displayName: "Container",
    render:function(){
        return(
            React.createElement("div", {className: "container run-launch"}, 
                React.createElement(Leftform, null), 
                React.createElement(RightEdit, null)
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
  React.createElement(Header, null),
  document.getElementById('header')
);

React.render(
    React.createElement(Footer, null),
    document.getElementById('footer')
);
