var Tabtitle = React.createClass({
    render:function(){
        return(
            <div className="tab-title">
                <ul className="nav nav-tabs">
                  <li role="presentation" className="active"><a href="#">全部活动</a></li>
                  <li role="presentation"><a href="#">热门</a></li>
                  <a className="fb-btn pull-right" href="#"><span className="glyphicon glyphicon-edit"></span>发布活动</a>
                </ul>
            </div>
        )
    }
})

var Tabctr = React.createClass({
    render:function(){
        return(
            <ul className="tab-ctr">
                <li className="tab-line">
                    <TabBox />
                    <TabBox />
                    <TabBox />
                </li>
                <li className="tab-line">
                    <TabBox />
                    <TabBox />
                </li>
                <li className="tab-line">
                    <TabBox />
                    <TabBox />
                    <TabBox />
                </li>
                <li className="tab-line">
                    <TabBox />
                    <TabBox />
                </li>
                <li className="tab-line">
                    <TabBox />
                    <TabBox />
                    <TabBox />
                </li>
            </ul>
        )
    }
})

var TabBox = React.createClass({
    render:function(){
        return(
            <div className="tab-box">
                <img src="img/all-two.png" />
                <h1><a href="run-detail.html">广州市花都区粤海酒店“爱青春”晨跑活动</a></h1>
                <div className="line-bg">
                    <div className="line"></div>
                </div>
                <div className="num">
                    <span className="l-num">0</span>
                    <span className="r-num">还差40人</span>
                </div>
            </div>
        )
    }
})

var Container = React.createClass({
    render:function(){
        return(
            <div className="container">
                <Tabtitle />
                <Tabctr />
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
