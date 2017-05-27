//日常分享内容

var ShareTopWeather = React.createClass({
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
            <div className="top-info container">
                <WeatherLeftInfo></WeatherLeftInfo>
                <WeatherRightInfo Info={this.state}></WeatherRightInfo>
            </div>
        )
    }
})

var WeatherLeftInfo = React.createClass({
    render: function(){
        var getDate = new Date(),
            name = '游客',
            mChick = '10',
            yChick = '100';

        return(
            <div className="l-info col-md-4">
                <div className="day">
                  <div className="data"><p>{getDate.getDate()}</p></div>
                  <div className="month">{getDate.getFullYear()}年{getDate.getMonth() + 1}月</div>
                  <div className="check-in"><a className="check-btn" href="#">来打个卡</a></div>
                </div>
                <div className="bar">
                  <div className="progress"></div>
                </div>
                <div className="user-info">
                  <h2>{name}，下午好</h2>
                  <p>本月已签到次数：{mChick}次</p>
                  <p>今年已签到次数：{yChick}次</p>
                </div>
            </div>
        )
    }
})

var WeatherRightInfo = React.createClass({  
    render: function(){
        var info = this.props.Info;
        return(
            <div className="r-weader col-md-8">
               <div className="t-info">
                 <div className="tem-icon">
                   <img src="img/thermo.png" />
                   <p>当前温度</p>
                 </div>
                 <h1 className="tem">{info.tInfo.tmp}°{info.tInfo.weather}</h1>
                 <p className="suggest">{info.tInfo.tips}</p>
               </div>
               <div className="weader">
                 <WeatherChart info={info.mInfo}></WeatherChart>
               </div>
             </div>
        )
    }
})

var WeatherChart = React.createClass({ 
    render: function(){
        var a = 0;
        console.log(this.props.info);
        var weatherIcon = this.props.info.map(function(info){
            var iconSrc_d = 'img/weather-icon/' + info.cond.code_d + '.png',
                iconSrc_n = 'img/weather-icon/' + info.cond.code_n + '.png';
            return(
                <div className="w-icon" key={a++}>
                    <p className="w-date">{info.date.substr(5)}</p>
                    <p className="w-tmp">{(parseInt(info.tmp.max)+parseInt(info.tmp.min))/2}</p>
                    <p><img src={iconSrc_d} /></p>
                    <p>昼：{info.cond.txt_d}</p>
                    <p><img src={iconSrc_n} /></p>
                    <p>夜：{info.cond.txt_n}</p>
                </div>
            )
        });
        return(
            <div className="weader">
                <div className="weather-icon">{weatherIcon}</div>
            </div>
        )
    }
})

var ShareReplay = React.createClass({
    render: function(){
        return(
            <div className="container replay-ctr">
                <ReplaySort></ReplaySort>
                <ReplayMain></ReplayMain>
                <ReplayAd></ReplayAd>
            </div>
        )
    }
})

var ReplaySort = React.createClass({
    render:function(){
        return(
            <ul className="sort-btn row">
                <li><a href="javascript:;"><span className="glyphicon glyphicon-th-list"></span><br />默认排序</a></li>
                <li><a href="javascript:;">最新发表</a></li>
                <li><a href="javascript:;">最新回复</a></li>
                <li><a href="javascript:;">最多浏览</a></li>
                <li><a href="javascript:;">最多浏览</a></li>
                <li><a href="javascript:;">最多回复</a></li>
                <li className="publish"><a href="javascript:;"><span className="glyphicon glyphicon-edit"></span><br />发表帖子</a></li>
            </ul>
        )
    }
})

var ReplayMain = React.createClass({
    
    render: function(){
        var dataInfo =[
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"img/water/g1.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"img/water/g2.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"img/water/g3.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"img/water/g4.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"img/water/g5.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"img/water/g6.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"img/water/g7.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"img/water/g8.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"img/water/g9.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"img/water/g10.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"img/anthor.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"img/anthor.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"img/anthor.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"img/anthor.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"img/anthor.png",time:'2016-05-07',comment_num:'40','watch':'150'},
            {title:"我觉得今天天气真的和好啊",l_titel:"我觉得今天天气真的和好啊我们一起去跑步吧哇哈哈哈",author:"img/anthor.png",time:'2016-05-07',comment_num:'40','watch':'150'},
        ];

        return(
            <div className="comment">
                <div className="c-title row">
                    <p className="col-md-7">主题</p>
                    <p className="col-md-1">发帖者</p>
                    <p className="col-md-2">发帖时间</p>
                    <p className="col-md-1">评论数</p>
                    <p className="col-md-1">浏览量</p>
                </div>
                <ReplayNodes data={dataInfo}></ReplayNodes>
                <div className="row read-more"><a className="read-more" href="javascript:;">查看更多</a></div>
            </div>
        )
    }
})

var ReplayNodes = React.createClass({
    render: function(){
        var _commnet = this.props.data.map(function(e){
        return(
            <li className="row">
                <div className="f-name col-md-7">
                    <div className="m-ctr">
                        <h1><a href="javascript:;">{e.title}</a></h1>
                        <p>{e.l_titel}</p>
                    </div>
                </div>
                <div className="f-from col-md-1"><div className="m-ctr"><img src={e.author} /></div></div>
                <div className="f-time col-md-2"><p className="m-ctr">{e.time}</p></div>
                <div className="f-reback col-md-1"><p className="m-ctr">{e.comment_num}</p></div>
                <div className="f-read col-md-1"><p className="m-ctr">{e.watch}</p></div>
            </li>
            )
        })

        return(
            <ul className="comment-bg">{_commnet}</ul>
        )
    }
})

var ReplayAd = React.createClass({
    render : function(){
        var imgSrc = [ 
            {src:'img/water/g11.png'},
            {src:'img/water/g12.png'},
            {src:'img/water/g13.png'},
            {src:'img/water/g14.png'}
        ]

        return(
            <div className="replay-ad">
                <AdImg src={imgSrc}></AdImg>
            </div>
        )
    }
})

var AdImg = React.createClass({
    render: function(){
        var _img = this.props.src.map(function(e){
            return(
                <li className="col-md-3"><img src={e.src} /></li>
            )
        })
        return(<ul className="row">{_img}</ul>)
    }
})

//二级约跑内容
var BodyContainer = React.createClass({
    render: function(){
        return(
            <div id='share'>
                <Header/>
                <ShareTopWeather></ShareTopWeather>
                <ShareReplay></ShareReplay>
                <Footer />
            </div>
        )
    }
})

//输出
React.render(
  <BodyContainer></BodyContainer>,
  document.body
);