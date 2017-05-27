//日常分享内容

var ShareTopWeather = React.createClass({displayName: "ShareTopWeather",
    getInitialState: function() {
        return {mInfo:[],tInfo:''};
    },
    // getJson : function(){
    //     me.setState(rJson);
    // },
    componentDidMount: function() {
       $.ajax({
          type: 'GET',
          url: ' https://api.heweather.com/x3/weather',
          // data to be added to query string:
          data: { 'cityid' : 'CN101280101',
                  'key' : '60778d60d4fb436eadc192d67d11c604'
                },
          // type of data we are expecting in return:
          dataType: 'json',
          timeout: 300,
          context: $('body'),
          success: function(data,status){
            var rData = data['HeWeather data service 3.0'][0];
            this.setState({ 
                            mInfo : rData.daily_forecast,
                            tInfo:{
                                    'weather': rData.now.cond.txt,
                                    'tmp': rData.now.tmp,
                                    'tips' : rData.suggestion.sport.txt,
                                }
                        });
            console.log(rData.daily_forecast);
            console.log('ajax success');
          }.bind(this),
          error: function(xhr, type){
            console.log('ajax error');
          }
        })
    }, 
    render:function(){
        console.log(this.state);
        return(
            React.createElement("div", {className: "top-info container"}, 
                React.createElement(WeatherLeftInfo, null), 
                React.createElement(WeatherRightInfo, {Info: this.state})
            )
        )
    }
})

var WeatherLeftInfo = React.createClass({displayName: "WeatherLeftInfo",
    render: function(){
        var getDate = new Date(),
            name = '游客',
            mChick = '10',
            yChick = '100';

        return(
            React.createElement("div", {className: "l-info col-md-4"}, 
                React.createElement("div", {className: "day"}, 
                  React.createElement("div", {className: "data"}, React.createElement("p", null, getDate.getDate())), 
                  React.createElement("div", {className: "month"}, getDate.getFullYear(), "年", getDate.getMonth() + 1, "月"), 
                  React.createElement("div", {className: "check-in"}, React.createElement("a", {className: "check-btn", href: "#"}, "来打个卡"))
                ), 
                React.createElement("div", {className: "bar"}, 
                  React.createElement("div", {className: "progress"})
                ), 
                React.createElement("div", {className: "user-info"}, 
                  React.createElement("h2", null, name, "，下午好"), 
                  React.createElement("p", null, "本月已签到次数：", mChick, "次"), 
                  React.createElement("p", null, "今年已签到次数：", yChick, "次")
                )
            )
        )
    }
})

var WeatherRightInfo = React.createClass({displayName: "WeatherRightInfo",  
    render: function(){
        var info = this.props.Info;
        return(
            React.createElement("div", {className: "r-weader col-md-8"}, 
               React.createElement("div", {className: "t-info"}, 
                 React.createElement("div", {className: "tem-icon"}, 
                   React.createElement("img", {src: "public/index/img/thermo.png"}), 
                   React.createElement("p", null, "当前温度")
                 ), 
                 React.createElement("h1", {className: "tem"}, info.tInfo.tmp, "°", info.tInfo.weather), 
                 React.createElement("p", {className: "suggest"}, info.tInfo.tips)
               ), 
               React.createElement("div", {className: "weader"}, 
                 React.createElement(WeatherChart, {info: info.mInfo})
               )
             )
        )
    }
})

var WeatherChart = React.createClass({displayName: "WeatherChart", 
    render: function(){
        var a = 0;
        console.log(this.props.info);
        var weatherIcon = this.props.info.map(function(info){
            var iconSrc_d = 'public/index/img/weather-icon/' + info.cond.code_d + '.png',
                iconSrc_n = 'public/index/img/weather-icon/' + info.cond.code_n + '.png';
            return(
                React.createElement("div", {className: "w-icon", key: a++}, 
                    React.createElement("p", {className: "w-date"}, info.date.substr(5)), 
                    React.createElement("p", {className: "w-tmp"}, (parseInt(info.tmp.max)+parseInt(info.tmp.min))/2), 
                    React.createElement("p", null, React.createElement("img", {src: iconSrc_d})), 
                    React.createElement("p", null, "昼：", info.cond.txt_d), 
                    React.createElement("p", null, React.createElement("img", {src: iconSrc_n})), 
                    React.createElement("p", null, "夜：", info.cond.txt_n)
                )
            )
        });
        return(
            React.createElement("div", {className: "weader"}, 
                React.createElement("div", {className: "weather-icon"}, weatherIcon)
            )
        )
    }
})

var ShareReplay = React.createClass({displayName: "ShareReplay",
    render: function(){
        return(
            React.createElement("div", {className: "container replay-ctr"}, 
                React.createElement(ReplaySort, null), 
                React.createElement(ReplayMain, null), 
                React.createElement(ReplayAd, null)
            )
        )
    }
})

var ReplaySort = React.createClass({displayName: "ReplaySort",
    render:function(){
        return(
            React.createElement("ul", {className: "sort-btn row"}, 
                React.createElement("li", null, React.createElement("a", {href: "javascript:;"}, React.createElement("span", {className: "glyphicon glyphicon-th-list"}), React.createElement("br", null), "默认排序")), 
                React.createElement("li", null, React.createElement("a", {href: "javascript:;"}, "最新发表")), 
                React.createElement("li", null, React.createElement("a", {href: "javascript:;"}, "最新回复")), 
                React.createElement("li", null, React.createElement("a", {href: "javascript:;"}, "最多浏览")), 
                React.createElement("li", null, React.createElement("a", {href: "javascript:;"}, "最多浏览")), 
                React.createElement("li", null, React.createElement("a", {href: "javascript:;"}, "最多回复")), 
                React.createElement("li", {className: "publish"}, React.createElement("a", {href: "javascript:;"}, React.createElement("span", {className: "glyphicon glyphicon-edit"}), React.createElement("br", null), "发表帖子"))
            )
        )
    }
})

var ReplayMain = React.createClass({displayName: "ReplayMain",
    
    render: function(){
        var dataInfo =[
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"public/index/img/water/g1.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"public/index/img/water/g2.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"public/index/img/water/g3.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"public/index/img/water/g4.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"public/index/img/water/g5.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"public/index/img/water/g6.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"public/index/img/water/g7.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"public/index/img/water/g8.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"public/index/img/water/g9.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"public/index/img/water/g10.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"public/index/img/anthor.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"public/index/img/anthor.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"public/index/img/anthor.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"public/index/img/anthor.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"public/index/img/anthor.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"public/index/img/anthor.png",time:'2016-05-07',comment_num:'40','watch':'150'},
        ];

        return(
            React.createElement("div", {className: "comment"}, 
                React.createElement("div", {className: "c-title row"}, 
                    React.createElement("p", {className: "col-md-7"}, "主题"), 
                    React.createElement("p", {className: "col-md-1"}, "发帖者"), 
                    React.createElement("p", {className: "col-md-2"}, "发帖时间"), 
                    React.createElement("p", {className: "col-md-1"}, "评论数"), 
                    React.createElement("p", {className: "col-md-1"}, "浏览量")
                ), 
                React.createElement(ReplayNodes, {data: dataInfo}), 
                React.createElement("div", {className: "row read-more"}, React.createElement("a", {className: "read-more", href: "javascript:;"}, "查看更多"))
            )
        )
    }
})

var ReplayNodes = React.createClass({displayName: "ReplayNodes",
    render: function(){
        var _commnet = this.props.data.map(function(e){
        return(
            React.createElement("li", {className: "row"}, 
                React.createElement("div", {className: "f-name col-md-7"}, 
                    React.createElement("div", {className: "m-ctr"}, 
                        React.createElement("h1", null, React.createElement("a", {href: "javascript:;"}, e.title)), 
                        React.createElement("p", null, e.l_titel)
                    )
                ), 
                React.createElement("div", {className: "f-from col-md-1"}, React.createElement("div", {className: "m-ctr"}, React.createElement("img", {src: e.author}))), 
                React.createElement("div", {className: "f-time col-md-2"}, React.createElement("p", {className: "m-ctr"}, e.time)), 
                React.createElement("div", {className: "f-reback col-md-1"}, React.createElement("p", {className: "m-ctr"}, e.comment_num)), 
                React.createElement("div", {className: "f-read col-md-1"}, React.createElement("p", {className: "m-ctr"}, e.watch))
            )
            )
        })

        return(
            React.createElement("ul", {className: "comment-bg"}, _commnet)
        )
    }
})

var ReplayAd = React.createClass({displayName: "ReplayAd",
    render : function(){
        var imgSrc = [ 
            {src:'public/index/img/water/g11.png'},
            {src:'public/index/img/water/g12.png'},
            {src:'public/index/img/water/g13.png'},
            {src:'public/index/img/water/g14.png'}
        ]

        return(
            React.createElement("div", {className: "replay-ad"}, 
                React.createElement(AdImg, {src: imgSrc})
            )
        )
    }
})

var AdImg = React.createClass({displayName: "AdImg",
    render: function(){
        var _img = this.props.src.map(function(e){
            return(
                React.createElement("li", {className: "col-md-3"}, React.createElement("img", {src: e.src}))
            )
        })
        return(React.createElement("ul", {className: "row"}, _img))
    }
})

//二级约跑内容
var BodyContainer = React.createClass({displayName: "BodyContainer",
    render: function(){
        return(
            React.createElement("div", {id: "share"}, 
                React.createElement(Header, null), 
                React.createElement(ShareTopWeather, null), 
                React.createElement(ShareReplay, null), 
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