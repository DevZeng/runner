var HdInfo = React.createClass({
    render:function(){
        return(
            <div className="hd-info">
                <div className="hd-img">
                    <img src="img/run-one.png" />
                </div>
                <div className="hd-table">
                    <table>
                        <div className="t-title"><span>广州市花都区粤海酒店“爱青春”晨跑活动</span></div>
                        <tr>
                            <td className="title">活动地点</td>
                            <td className="text">花都花都花都花都花都</td>
                            <td className="title">活动时间</td>
                            <td className="text">2016年十月四号10：00AM</td>
                        </tr>
                        <tr>
                            <td className="title">结合地点</td>
                            <td className="text">花都花都花都花都花都</td>
                            <td className="title">集合时间</td>
                            <td className="text">2016年十月四号10：00AM</td>
                        </tr>
                        <tr>
                            <td className="title">报名时间</td>
                            <td className="text">花都花都花都花都花都</td>
                            <td className="title">总里程</td>
                            <td className="text">3公里</td>
                        </tr>
                        <tr>
                            <td className="title">人数限制</td>
                            <td className="text">10</td>
                            <td className="title">活动奖励</td>
                            <td className="text">无</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
});

var HdDetial = React.createClass({
    render:function(){
        return(
            <div className="hd-detail">
                <User></User>
                <Hdctr></Hdctr>
            </div>
        )
    }
})

var User = React.createClass({
    render:function(){
        return(
            <div className="user">
                <div className="user-img">
                    <img src="img/run-two.png" />
                </div>
                <div className="user-info">
                    <div className="t-l">
                        <h2 className="name">爱你还是他<span className="run-age">跑龄：两年</span></h2>
                        <p>发表于2016年5月5日</p>
                    </div>
                    <div className="t-r">
                        <a href="#"><span className="glyphicon glyphicon-heart"></span>分享</a>
                        <a href="#"><span className="glyphicon glyphicon-share"></span>收藏</a>
                    </div>
                </div>
            </div>
        )
    }
})

var Hdctr = React.createClass({
    render:function(){
        return(
            <div className="Hdctr">
                <img src="img/run-text.png" />
            </div>
        )
    }
})











var Container = React.createClass({
    render:function(){
        return(
            <div className="container">
                <HdInfo />
                <HdDetial />
            </div>
        );
    }
});


//合成
var BodyContainer = React.createClass({
    render: function(){
        return(
            <div>
                <Header />
                <Container />
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
