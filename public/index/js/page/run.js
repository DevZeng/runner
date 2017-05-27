//约跑内容

var Runtitle = React.createClass({displayName: "Runtitle",
    render: function(){
        return(
            React.createElement("div", {className: "run-title"}, 
                React.createElement("h2", {className: "text-center"}, "约跑"), 
                React.createElement("p", null, "这里可以发布您的跑步邀请，找到附近的小伙伴，认识周围与你兴趣相似的人，一起在城市的阳光下奔跑吧~")
            )
        )
    }
})

var RunNew = React.createClass({displayName: "RunNew",
    render: function(){
        var runNewInfo = [
            {imgSrc:"public/index/img/picture-1.png",text:"广州市花都区粤海酒店“爱青春"},
            {imgSrc:"public/index/img/picture-1.png",text:"广州市花都区粤海酒店“爱青春"},
            {imgSrc:"public/index/img/picture-1.png",text:"广州市花都区粤海酒店“爱青春"},
            {imgSrc:"public/index/img/picture-1.png",text:"广州市花都区粤海酒店“爱青春"},
            {imgSrc:"public/index/img/picture-1.png",text:"广州市花都区粤海酒店“爱青春"},
            {imgSrc:"public/index/img/picture-1.png",text:"广州市花都区粤海酒店“爱青春"},
            {imgSrc:"public/index/img/picture-1.png",text:"广州市花都区粤海酒店“爱青春"},
            {imgSrc:"public/index/img/picture-1.png",text:"广州市花都区粤海酒店“爱青春"}
        ];

        return(
            React.createElement("div", {className: "container run-new"}, 
                React.createElement(RunNewShow, {info: runNewInfo})
            )
        )
    }
})

var RunNewShow = React.createClass({displayName: "RunNewShow",
    render: function(){
        var newShow = this.props.info.map(function(info){
            return(
                React.createElement("div", {className: "col-md-3 run-new-box"}, 
                    React.createElement("img", {src: info.imgSrc}), 
                    React.createElement("div", {className: "img-rcd"}, React.createElement("p", null, info.text))
                )
            )
        })

        return(
            React.createElement("div", {className: "row"}, 
                newShow
            )
        )

    }
})

var RunHotBox = React.createClass({displayName: "RunHotBox",

    render: function(){
        var hotInfo = [
            {imgSrc:'public/index/img/y1.png',title:'广州市花都区粤海酒店“爱青春”晨跑活动',place:'广州市花都区粤海酒店',time:'2016-09-09',total:'100',lack:'40'},
            {imgSrc:'public/index/img/y2.png',title:'广州市花都区粤海酒店“爱青春”晨跑活动',place:'广州市花都区粤海酒店',time:'2016-09-09',total:'100',lack:'40'},
            {imgSrc:'public/index/img/y3.png',title:'广州市花都区粤海酒店“爱青春”晨跑活动',place:'广州市花都区粤海酒店',time:'2016-09-09',total:'100',lack:'40'},
            {imgSrc:'public/index/img/y4.png',title:'广州市花都区粤海酒店“爱青春”晨跑活动',place:'广州市花都区粤海酒店',time:'2016-09-09',total:'100',lack:'40'}
        ];

        return(
            React.createElement("div", {className: "container"}, 
                React.createElement(RunHotInfo, {info: hotInfo})
            )
        )
    }
})

var RunHotInfo = React.createClass({displayName: "RunHotInfo",
    render : function(){

        var hotInfo = this.props.info.map(function (info) {
            return(
                React.createElement("div", {className: "col-md-6 run-hot clear"}, 
                    React.createElement("div", {className: "info-img"}, React.createElement("img", {src: info.imgSrc})), 
                    React.createElement("div", {className: "run-hot-info clear"}, 
                        React.createElement("h1", null, info.title), 
                        React.createElement("div", {className: "clear"}, 
                            React.createElement("div", {className: "h-lit time"}, 
                                React.createElement("img", {src: "public/index/img/timelist.png"}), 
                                React.createElement("p", null, info.time)
                            ), 
                            React.createElement("div", {className: "h-lit"}, 
                                React.createElement("img", {src: "public/index/img/adr.png"}), 
                                React.createElement("p", null, info.place)
                            )
                        ), 
                        React.createElement("div", {className: "j-poli"}, 
                            React.createElement("div", null)
                        ), 
                        React.createElement("div", {className: "people-num"}, 
                            React.createElement("span", {className: "zero"}, "0"), 
                            React.createElement("span", {className: "letter"}, "还差：", info.lack), 
                            React.createElement("span", {className: "both"}, "共需：", info.total)
                        ), 
                        React.createElement("div", {className: "h-l-btn"}, 
                            React.createElement("a", {href: "index.php?controller=index&method=activitydetail"}, "详情介绍"), 
                            React.createElement("a", {href: "#"}, "我要报名")
                        )
                    )
                )
            )
        });

        return(
            React.createElement("div", {className: "row"}, 
                hotInfo
            )
        )
    }
})

var RunActivity = React.createClass({displayName: "RunActivity",
    render: function(){
        var runActInfo =[
            {kind:'爱青春晨跑活动',title:'广州市花都区粤海酒店“爱青春”晨跑活动',pNum:'100',_states:'完成',rcd:'享受青春，享受阳光，粤海酒店和你一起跑向阳光',bImgSrc:"public/index/img/y5.png",sImgSrc:"public/index/img/example3.png"},
            {kind:'爱青春晨跑活动',title:'广州市花都区粤海酒店“爱青春”晨跑活动',pNum:'100',_states:'完成',rcd:'享受青春，享受阳光，粤海酒店和你一起跑向阳光',bImgSrc:"public/index/img/y6.png",sImgSrc:"public/index/img/example3.png"},
            {kind:'爱青春晨跑活动',title:'广州市花都区粤海酒店“爱青春”晨跑活动',pNum:'100',_states:'完成',rcd:'享受青春，享受阳光，粤海酒店和你一起跑向阳光',bImgSrc:"public/index/img/y7.png",sImgSrc:"public/index/img/example3.png"},
            {kind:'爱青春晨跑活动',title:'广州市花都区粤海酒店“爱青春”晨跑活动',pNum:'100',_states:'完成',rcd:'享受青春，享受阳光，粤海酒店和你一起跑向阳光',bImgSrc:"public/index/img/y8.png",sImgSrc:"public/index/img/example3.png"}
        ];

        return(
            React.createElement("div", {className: "container run-act"}, 
                React.createElement(RunActivityBox, {info: runActInfo})
            )
        )
    }
})

var RunActivityBox = React.createClass({displayName: "RunActivityBox",
    render: function(){
        var runInfo = this.props.info.map(function (info) {
            return(
                React.createElement("div", {className: "box-bg col-md-3"}, 
                  React.createElement("div", {className: "box-img"}, 
                    React.createElement("img", {src: info.bImgSrc}), 
                    React.createElement("div", {className: "s-img"}, 
                      React.createElement("img", {src: info.sImgSrc})
                    )
                  ), 
                  React.createElement("div", {className: "box-text"}, 
                    React.createElement("h1", null, info.kind), 
                    React.createElement("h2", null, info.title), 
                    React.createElement("div", {className: "zt"}, 
                      React.createElement("p", null, "报名人数：", React.createElement("span", null, info.pNum)), 
                      React.createElement("p", null, "状态：", React.createElement("span", null, info._states))
                    ), 
                    React.createElement("p", {className: "brief"}, info.rcd)
                  ), 
                  React.createElement("div", {className: "into-btn"}, 
                    React.createElement("a", {href: "#"}, "查看活动")
                  )
                )
            )
        });
        return(
            React.createElement("div", {className: "row"}, runInfo)
        )
    }
})


//约跑内容
var BodyContainer = React.createClass({displayName: "BodyContainer",
    render: function(){
        return(
            React.createElement("div", {id: "index"}, 
                React.createElement(Header, null), 
                React.createElement(Banner, null), 
                React.createElement(FourBtnNav, null), 
                React.createElement(CtrTitle, {leftText: "地图", rightText: "Maps"}), 
                React.createElement(IndexMap, null), 
                React.createElement(IndexRed, null), 
                React.createElement(CtrTitle, {leftText: "美图", rightText: "Pictures"}), 
                React.createElement(IndexPic, null), 
                React.createElement(Footer, null)
            )
        )
    }
})

//二级约跑内容
var BodyContainer = React.createClass({displayName: "BodyContainer",
    render: function(){
        return(
            React.createElement("div", {id: "run"}, 
                React.createElement(Header, null), 
                React.createElement(Banner, null), 
                React.createElement(Runtitle, null), 
                React.createElement(CtrTitle, {leftText: "最新", rightText: "New"}), 
                React.createElement(RunNew, null), 
                React.createElement(CtrTitle, {leftText: "热门", rightText: "Hot"}), 
                React.createElement(RunHotBox, null), 
                React.createElement(CtrTitle, {leftText: "优秀活动", rightText: "Excellent Activity"}), 
                React.createElement(RunActivity, null), 
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
