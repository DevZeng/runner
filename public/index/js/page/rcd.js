//设备推荐内容

var RcdContainer = React.createClass({displayName: "RcdContainer",
    render: function(){
        return(
            React.createElement("div", {id: "rcd"}, 
                React.createElement(CtrTitle, {leftText: "专题", rightText: "SPECIAL"}), 
                React.createElement(Special, null)
            )
        )
    }
})

var Special = React.createClass({displayName: "Special",
    render: function(){
        return(
            React.createElement("div", null, 
                React.createElement("ul", {className: "three-btn container"}, 
                    React.createElement("li", null, 
                      React.createElement("a", {href: "javascript:;"}, 
                        React.createElement("h1", null, "2016春夏慢跑装备新品推荐")
                      )
                    ), 
                    React.createElement("li", null, 
                      React.createElement("a", {href: "javascript:;"}, 
                        React.createElement("h1", null, "2016春夏慢跑装备新品推荐")
                      )
                    ), 
                    React.createElement("li", null, 
                      React.createElement("a", {href: "javascript:;"}, 
                        React.createElement("h1", null, "2016春夏慢跑装备新品推荐")
                      )
                    )
                  ), 

              React.createElement("div", {className: "more to-more"}, 
                React.createElement("hr", {className: "fo-l"}), 
                React.createElement("a", {className: "more-text", href: "#"}, "查看更多专题"), 
                React.createElement("hr", {className: "fo-r"})
              ), 

              React.createElement("div", {className: "hot"}, 
                React.createElement("div", {className: "container"}, 
                 
                  React.createElement("div", {className: "near"}, 
                    React.createElement("div", {className: "hot-img"}, 
                      React.createElement("div", {className: "mask"}), 
                      React.createElement("img", {src: "img/t-2.png"}), 
                      React.createElement("div", {className: "money"}, React.createElement("p", null, "SPIbelt - 防水腰包", React.createElement("br", null), "官网价：￥130"))
                    ), 
                    React.createElement("div", {className: "hot-img"}, 
                      React.createElement("div", {className: "mask"}), 
                      React.createElement("img", {src: "img/t-3.png"}), 
                      React.createElement("div", {className: "money"}, React.createElement("p", null, "SPIbelt - 防水腰包", React.createElement("br", null), "官网价：￥130"))
                    ), 
                    React.createElement("div", {className: "hot-img"}, 
                      React.createElement("div", {className: "mask"}), 
                      React.createElement("img", {src: "img/t-7.png"}), 
                      React.createElement("div", {className: "money"}, React.createElement("p", null, "SPIbelt - 防水腰包", React.createElement("br", null), "官网价：￥130"))
                    ), 
                   React.createElement("div", {className: "hot-img"}, 
                      React.createElement("div", {className: "mask"}), 
                      React.createElement("img", {src: "img/t-8.png"}), 
                      React.createElement("div", {className: "money"}, React.createElement("p", null, "SPIbelt - 防水腰包", React.createElement("br", null), "官网价：￥130"))
                    )
                  ), 
                  React.createElement("div", {className: "middle"}, 
                    React.createElement("div", {className: "hot-img"}, 
                      React.createElement("div", {className: "mask"}), 
                      React.createElement("img", {src: "img/t-4.png"}), 
                      React.createElement("div", {className: "money"}, React.createElement("p", null, "SPIbelt - 防水腰包", React.createElement("br", null), "官网价：￥130"))
                    )
                  ), 
                  React.createElement("div", {className: "near"}, 
                    React.createElement("div", {className: "hot-img"}, 
                      React.createElement("div", {className: "mask"}), 
                      React.createElement("img", {src: "img/t-5.png"}), 
                      React.createElement("div", {className: "money"}, React.createElement("p", null, "SPIbelt - 防水腰包", React.createElement("br", null), "官网价：￥130"))
                    ), 
                   React.createElement("div", {className: "hot-img"}, 
                      React.createElement("div", {className: "mask"}), 
                      React.createElement("img", {src: "img/t-6.png"}), 
                      React.createElement("div", {className: "money"}, React.createElement("p", null, "SPIbelt - 防水腰包", React.createElement("br", null), "官网价：￥130"))
                    ), 
                    React.createElement("div", {className: "hot-img"}, 
                      React.createElement("div", {className: "mask"}), 
                      React.createElement("img", {src: "img/t-9.png"}), 
                      React.createElement("div", {className: "money"}, React.createElement("p", null, "SPIbelt - 防水腰包", React.createElement("br", null), "官网价：￥130"))
                    ), 
                    React.createElement("div", {className: "hot-img"}, 
                      React.createElement("div", {className: "mask"}), 
                      React.createElement("img", {src: "img/t-10.png"}), 
                      React.createElement("div", {className: "money"}, React.createElement("p", null, "SPIbelt - 防水腰包", React.createElement("br", null), "官网价：￥130"))
                    )
                  )
                )
              ), 

              React.createElement("div", {className: "kind-title"}, 
                React.createElement("div", {className: "container"}, 
                  React.createElement("div", {className: "icon"}, 
                    React.createElement("p", {className: "i-left"}, "分类"), 
                    React.createElement("p", {className: "i-right"}, "SOFT")
                  ), 
                  React.createElement("ul", {className: "c-kind"}, 
                    React.createElement("li", {className: "kind-yf"}, 
                      React.createElement("div", null, React.createElement("a", {href: "#"}, React.createElement("img", {src: "img/yifu.png"}), "运动衣装")), 
                      React.createElement("ul", {className: "drop"}, 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一"))
                      )
                    ), 
                    React.createElement("li", {className: "kind-xz"}, 
                      React.createElement("div", null, React.createElement("a", {href: "#"}, React.createElement("img", {src: "img/xiezi.png"}), "运动鞋")), 
                      React.createElement("ul", {className: "drop"}, 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一"))
                      )
                    ), 
                    React.createElement("li", {className: "kind-sb"}, 
                      React.createElement("div", null, React.createElement("a", {href: "#"}, React.createElement("img", {src: "img/shebei2.png"}), "智能设备")), 
                      React.createElement("ul", {className: "drop"}, 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一"))
                      )
                    ), 
                    React.createElement("li", {className: "kind-qt"}, 
                      React.createElement("div", null, React.createElement("a", {href: "#"}, React.createElement("img", {src: "img/qita.png"}), "其他")), 
                      React.createElement("ul", {className: "drop"}, 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "分类一"))
                      )
                    )
                  ), 

                  React.createElement("div", {className: "search"}, 
                    React.createElement("form", null, 
                      React.createElement("input", {type: "text"}), 
                      React.createElement("button", null, "搜索")
                    )
                  )
                )
              ), 

              React.createElement("ul", {className: "kind container"}, 
                
                React.createElement("li", null, 
                  React.createElement("div", {className: "k-title"}, 
                    React.createElement("div", {className: "kt"}, 
                      React.createElement("p", null, "运动", React.createElement("br", null), "衣装"), 
                      React.createElement("p", {className: "kt-en"}, "Sports", React.createElement("br", null), "Clothes")
                    )
                  ), 
                  React.createElement("div", {className: "s-goods"}, 
                    React.createElement("div", {className: "s-box"}, 
                      React.createElement("div", {className: "box-img"}, 
                        React.createElement("div", {className: "mask"}, "NIKE炫彩跑鞋"), 
                        React.createElement("img", {src: "img/t-11.png"})
                      ), 
                      React.createElement("p", null, "官网价：￥1,599")
                    ), 
                    React.createElement("div", {className: "s-box"}, 
                      React.createElement("div", {className: "box-img"}, 
                        React.createElement("div", {className: "mask"}, "NIKE炫彩跑鞋"), 
                        React.createElement("img", {src: "img/t-11.png"})
                      ), 
                      React.createElement("p", null, "官网价：￥1,599")
                    ), 
                    React.createElement("div", {className: "s-box"}, 
                      React.createElement("div", {className: "box-img"}, 
                        React.createElement("div", {className: "mask"}, "NIKE炫彩跑鞋"), 
                        React.createElement("img", {src: "img/t-11.png"})
                      ), 
                      React.createElement("p", null, "官网价：￥1,599")
                    ), 
                    React.createElement("div", {className: "s-box"}, 
                      React.createElement("div", {className: "box-img"}, 
                        React.createElement("div", {className: "mask"}, "NIKE炫彩跑鞋"), 
                        React.createElement("img", {src: "img/t-11.png"})
                      ), 
                      React.createElement("p", null, "官网价：￥1,599")
                    )
                  ), 
                  React.createElement("div", {className: "show"}, React.createElement("img", {src: "img/t-12.png"})), 
                  React.createElement("div", {className: "more-goods"}, 
                    React.createElement("a", {href: "more-btn"}, "更多新品")
                  )
                ), 
                
                React.createElement("li", null, 
                  React.createElement("div", {className: "k-title"}, 
                    React.createElement("div", {className: "kt"}, 
                      React.createElement("p", null, "运动", React.createElement("br", null), "鞋"), 
                      React.createElement("p", {className: "kt-en"}, "Sports", React.createElement("br", null), "Shoes")
                    )
                  ), 
                  React.createElement("div", {className: "s-goods"}, 
                    React.createElement("div", {className: "s-box"}, 
                      React.createElement("div", {className: "box-img"}, 
                        React.createElement("div", {className: "mask"}, "NIKE炫彩跑鞋"), 
                        React.createElement("img", {src: "img/t-11.png"})
                      ), 
                      React.createElement("p", null, "官网价：￥1,599")
                    ), 
                    React.createElement("div", {className: "s-box"}, 
                      React.createElement("div", {className: "box-img"}, 
                        React.createElement("div", {className: "mask"}, "NIKE炫彩跑鞋"), 
                        React.createElement("img", {src: "img/t-11.png"})
                      ), 
                      React.createElement("p", null, "官网价：￥1,599")
                    ), 
                    React.createElement("div", {className: "s-box"}, 
                      React.createElement("div", {className: "box-img"}, 
                        React.createElement("div", {className: "mask"}, "NIKE炫彩跑鞋"), 
                        React.createElement("img", {src: "img/t-11.png"})
                      ), 
                      React.createElement("p", null, "官网价：￥1,599")
                    ), 
                    React.createElement("div", {className: "s-box"}, 
                      React.createElement("div", {className: "box-img"}, 
                        React.createElement("div", {className: "mask"}, "NIKE炫彩跑鞋"), 
                        React.createElement("img", {src: "img/t-11.png"})
                      ), 
                      React.createElement("p", null, "官网价：￥1,599")
                    )
                  ), 
                  React.createElement("div", {className: "show"}, React.createElement("img", {src: "img/t-13.png"})), 
                  React.createElement("div", {className: "more-goods"}, 
                    React.createElement("a", {href: "more-btn"}, "更多新品")
                  )
                ), 
                React.createElement("li", null, 
                  React.createElement("div", {className: "k-title"}, 
                    React.createElement("div", {className: "kt"}, 
                      React.createElement("p", null, "智能", React.createElement("br", null), "设别"), 
                      React.createElement("p", {className: "kt-en"}, "intelligent", React.createElement("br", null), "device")
                    )
                  ), 
                  React.createElement("div", {className: "s-goods"}, 
                    React.createElement("div", {className: "s-box"}, 
                      React.createElement("div", {className: "box-img"}, 
                        React.createElement("div", {className: "mask"}, "NIKE炫彩跑鞋"), 
                        React.createElement("img", {src: "img/t-11.png"})
                      ), 
                      React.createElement("p", null, "官网价：￥1,599")
                    ), 
                    React.createElement("div", {className: "s-box"}, 
                      React.createElement("div", {className: "box-img"}, 
                        React.createElement("div", {className: "mask"}, "NIKE炫彩跑鞋"), 
                        React.createElement("img", {src: "img/t-11.png"})
                      ), 
                      React.createElement("p", null, "官网价：￥1,599")
                    ), 
                    React.createElement("div", {className: "s-box"}, 
                      React.createElement("div", {className: "box-img"}, 
                        React.createElement("div", {className: "mask"}, "NIKE炫彩跑鞋"), 
                        React.createElement("img", {src: "img/t-11.png"})
                      ), 
                      React.createElement("p", null, "官网价：￥1,599")
                    ), 
                    React.createElement("div", {className: "s-box"}, 
                      React.createElement("div", {className: "box-img"}, 
                        React.createElement("div", {className: "mask"}, "NIKE炫彩跑鞋"), 
                        React.createElement("img", {src: "img/t-11.png"})
                      ), 
                      React.createElement("p", null, "官网价：￥1,599")
                    )
                  ), 
                  React.createElement("div", {className: "show"}, React.createElement("img", {src: "img/t-14.png"})), 
                  React.createElement("div", {className: "more-goods"}, 
                    React.createElement("a", {href: "more-btn"}, "更多新品")
                  )
                ), 
                
                React.createElement("li", null, 
                  React.createElement("div", {className: "k-title"}, 
                    React.createElement("div", {className: "kt"}, 
                      React.createElement("p", null, "其他"), 
                      React.createElement("p", {className: "kt-en"}, "others")
                    )
                  ), 
                  React.createElement("div", {className: "s-goods"}, 
                    React.createElement("div", {className: "s-box"}, 
                      React.createElement("div", {className: "box-img"}, 
                        React.createElement("div", {className: "mask"}, "NIKE炫彩跑鞋"), 
                        React.createElement("img", {src: "img/t-11.png"})
                      ), 
                      React.createElement("p", null, "官网价：￥1,599")
                    ), 
                    React.createElement("div", {className: "s-box"}, 
                      React.createElement("div", {className: "box-img"}, 
                        React.createElement("div", {className: "mask"}, "NIKE炫彩跑鞋"), 
                        React.createElement("img", {src: "img/t-11.png"})
                      ), 
                      React.createElement("p", null, "官网价：￥1,599")
                    ), 
                    React.createElement("div", {className: "s-box"}, 
                      React.createElement("div", {className: "box-img"}, 
                        React.createElement("div", {className: "mask"}, "NIKE炫彩跑鞋"), 
                        React.createElement("img", {src: "img/t-11.png"})
                      ), 
                      React.createElement("p", null, "官网价：￥1,599")
                    ), 
                    React.createElement("div", {className: "s-box"}, 
                      React.createElement("div", {className: "box-img"}, 
                        React.createElement("div", {className: "mask"}, "NIKE炫彩跑鞋"), 
                        React.createElement("img", {src: "img/t-11.png"})
                      ), 
                      React.createElement("p", null, "官网价：￥1,599")
                    )
                  ), 
                  React.createElement("div", {className: "show"}, React.createElement("img", {src: "img/t-15.png"})), 
                  React.createElement("div", {className: "more-goods"}, 
                    React.createElement("a", {href: "more-btn"}, "更多新品")
                  )
                )
              )
            )
        )
    }
})


//二级约跑内容
var BodyContainer = React.createClass({displayName: "BodyContainer",
    render: function(){
        return(
            React.createElement("div", {id: "share"}, 
                React.createElement(Header, null), 
                React.createElement(Banner, null), 
                React.createElement(RcdContainer, null), 
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