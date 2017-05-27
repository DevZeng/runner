//共享组件


//网址Logo
var Logo = React.createClass({displayName: "Logo",
  render: function(){
    return(
      React.createElement("div", {className: "logo"}, 
          React.createElement("img", {src: this.props.linkTo}), 
          React.createElement("span", null, "青春不老，城市慢跑")
      )
    )
  }
});

//导航列表
var NavList = React.createClass({displayName: "NavList",
  render: function() {
    return (
        React.createElement("div", {className: "nav"}, 
            React.createElement("ul", {className: "top-nav"}, 
                
                React.Children.map(this.props.children, function (child) {
                  return React.createElement("li", null, child);
                })
              
          )
        )
    );
  }
});

//定义头部组件合成
var Header = React.createClass({displayName: "Header",

    componentDidMount: function(){
        var link = React.findDOMNode(this.refs.link),
            me = this;

        link.addEventListener('click', function(e){
            me.props.clickFn(e);
        })
    },
    render: function(){
        return(
            React.createElement("header", null, 
                React.createElement("div", {className: "header container"}, 
                    React.createElement(Logo, {linkTo: "public/index/img/logo.png"}), 
                    React.createElement(NavList, {ref: "link"}, 
                        React.createElement("div", null, React.createElement("a", {className: "active", href: "index.php", id: "toIndex"}, "首页")), 
                        React.createElement("div", null, React.createElement("a", {href: "index.php?controller=index&method=runner", id: "toRun"}, "约跑"), 
                            React.createElement("ul", {className: "drop"}, 
                                React.createElement("li", null, React.createElement("a", {href: "index.php?controller=index&method=runall"}, "全部活动"))
                                /*<li><a href="javascript:;">活动展示</a></li>*/
                            )
                        ), 
                        React.createElement("div", null, React.createElement("a", {href: "index.php?controller=index&method=article", id: "toHealthy"}, "健康科普"), 
                            React.createElement("ul", {className: "drop"}
                                /*<li><a href="javascript:;">媒体新闻</a></li>
                                <li><a href="javascript:;">用户文章</a></li>*/
                            )
                        ), 
                        React.createElement("div", null, React.createElement("a", {href: "index.php?controller=index&method=share", id: "toShare"}, "日常分享"), 
                            React.createElement("ul", {className: "drop guanshui"}, 
                                React.createElement("li", null, React.createElement("a", {href: "javascript:;"}, "灌水区"))
                            )
                        )
                        /*<div><a href="rcd.html" id='toRcd'>设备推荐</a>
                            <ul className="drop tuijian">
                            <li><a href="javascript:;">运动衣装</a></li>
                                <li><a href="javascript:;">运动鞋</a></li>
                                <li><a href="javascript:;">智能设备</a></li>
                                <li><a href="javascript:;">其他设备</a></li>
                                <li><a href="javascript:;">专题推荐</a></li>
                            </ul>
                        </div>*/
                    ), 
                    React.createElement(HeaderSearch, null)
                ), 
                React.createElement(HeaderUserInfo, null)
            )

        );
    }
})

//首页搜索组件
var HeaderSearch = React.createClass({displayName: "HeaderSearch",
    getInitialState: function() {
        return {searchInput: ''};
    },
    haveChange: function(){
        this.setState({searchInput: e.target.value});
    },
  render: function(){
    return(
            React.createElement("div", {className: "header-search"}, 
          React.createElement("form", null, 
                    React.createElement("div", {className: "search-bg"}, 
                        React.createElement("div", {className: "input-group"}, 
                            React.createElement("input", {type: "text", className: "form-control", ref: "searchInput", placeholder: "", value: this.state.searchInput, onChange: this.haveChange}), 
                            React.createElement("span", {className: "input-group-btn"}, 
                                React.createElement("button", {className: "btn btn-default", type: "button"}, React.createElement("span", {className: "glyphicon glyphicon-search"}))
                            )
                        )
                    )
                )
            )
    );
  }
});

//头部个人信息显示
var HeaderUserInfo = React.createClass({displayName: "HeaderUserInfo",
     getInitialState: function() {
        return {name: sessionStorage.user,check:false};
    },
    componentDidMount: function() {
       $.ajax({
            type: "GET",
            url: "index.php",
            data:{
                controller:"api",
                method:"getNumber"
            },
            datatype: "JSONP",
            success: function (data,status) {
               var _type = data;
                   // user = (_type.username == "visitor") ? "游客" : _type.username;
                   console.log(data);
                   if(_type.username == "visitor"){
                        this.setState({name:"游客",check:false});
                   }else{
                        this.setState({name:_type.username,check:true});
                        sessionStorage.user = _type.username;
                   }
               
            }.bind(this),
            error: function(xhr, type){
                console.log('ajax error');
               }
        });
    }, 
    render: function(){
        return(
            React.createElement("div", {className: "header-info"}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "info-bg"}, 
                        React.createElement("div", {className: "welcome"}, "下午好，", this.state.name), 
                        React.createElement("div", {className: "links"}, React.createElement(ToMe, {check: this.state.check}), "丨", React.createElement("a", {href: "#"}, "联系我们")), 
                        React.createElement("div", {className: "place"}, "定位城市：", React.createElement("span", null, localStorage.place), React.createElement("a", {href: "index.php?controller=index&method=checklocation"}, "切换", React.createElement("span", {className: "glyphicon glyphicon-transfer"})))
                    )
                 )
            )
        );
    }
});

var ToMe = React.createClass({displayName: "ToMe",
    render:function(){
        var info = {};
        if(!this.props.check){
            info = {
                url : "index.php?controller=index&method=login",
                text : "请登陆"
            }
        }else{
            info = {
                url : "index.php?controller=index&method=personal",
                text : "我的世界"
            }
        }
        return(
            React.createElement("a", {href: info.url}, info.text)
        )
    }
})

//定义banner组件
var Banner = React.createClass({displayName: "Banner",
    componentDidMount : function(){
        $('.bxslider').bxSlider();
    },
    render: function(){
        return(
            React.createElement("div", {className: "m"}, 
                React.createElement("ul", {className: "bxslider"}, 
                  React.createElement("li", null, React.createElement("img", {src: "public/index/img/banner/banner.png"})), 
                  React.createElement("li", null, React.createElement("img", {src: "public/index/img/banner/banner2.jpg"})), 
                  React.createElement("li", null, React.createElement("img", {src: "public/index/img/banner/banner3.jpg"})), 
                  React.createElement("li", null, React.createElement("img", {src: "public/index/img/banner/banner4.jpg"})), 
                  React.createElement("li", null, React.createElement("img", {src: "public/index/img/banner/banner5.jpg"}))
                )
            )
        )
    }
})

//定义内容块标题
var CtrTitle = React.createClass({displayName: "CtrTitle",
    render: function(){
        return(
            React.createElement("div", {className: "ctr-title container-fluid"}, 
                React.createElement("hr", {className: "hr-left"}), 
                React.createElement("div", {className: "icon"}, 
                    React.createElement("p", {className: "i-left"}, this.props.leftText), 
                    React.createElement("p", {className: "i-right"}, this.props.rightText)
                ), 
                React.createElement("hr", {className: "hr-right"})
            )
        )
    }
})

//页脚
var Footer = React.createClass({displayName: "Footer",
    render: function(){
        return(
            React.createElement("div", {className: "footer"}, 
                React.createElement("hr", {className: "fo-l"}), 
                React.createElement("span", null, "联系我们"), 
                React.createElement("hr", {className: "fo-r"}), 
                React.createElement("div", {className: "three-part container"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "foot-icon col-md-4"}, 
                            React.createElement("img", {src: "public/index/img/phone.png"}), 
                            React.createElement("p", null, "手机：18819438113")
                        ), 
                        React.createElement("div", {className: "foot-icon col-md-4"}, 
                            React.createElement("img", {src: "public/index/img/email.png"}), 
                            React.createElement("p", null, "邮箱：cikie100@163.com")
                        ), 
                        React.createElement("div", {className: "foot-icon col-md-4"}, 
                            React.createElement("img", {src: "public/index/img/address.png"}), 
                            React.createElement("p", null, "地址：广州大学华软软件学院")
                        )
                    )
                )
            )
        )
    }
})
