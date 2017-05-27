//首页内容

//定义首页四个图标导航
var FourBtnNav = React.createClass({
    render : function(){

        var btnInfo = [
            {name:'约跑',imgSrc:'img/run.png',linkTo:'yuepao.html',text:'快来这里找到一起在夕阳下奔跑的小伙伴吧~'},
            {name:'健康科普',imgSrc:'img/healthy.png',linkTo:'yuepao.html',text:'良好的习惯保持健康持续的阅读扩展视野'},
            {name:'日常分享',imgSrc:'img/richang.png',linkTo:'yuepao.html',text:'这是一个自由分享生活点滴和愉快聊天的生活区'},
            {name:'设备推荐',imgSrc:'img/shebei.png',linkTo:'yuepao.html',text:'好设备能保证慢跑的质量我们为您精心挑选美好'},
        ];

        return(
            <div className="container four-modules">
                <div className="Four-modules row">
                    <IndexFourButton info={btnInfo}></IndexFourButton>
                </div>
            </div>
        )
    }
})

var IndexFourButton = React.createClass({
    render : function(){
        var navInfo = this.props.info.map(function (info) {
            return(
                <div className="col-xs-6 col-md-3 four-btn">
                    <img src={info.imgSrc} />
                    <a href = {info.linkTo}>{info.name}</a>
                    <p>{info.text}</p>
                </div>
            )
        });

        return(
            <div className="col-md-10 col-md-offset-1 modules-ctr row">
                {navInfo}
            </div>
        )
    }
})


//定义首页地图
var IndexMap = React.createClass({
    render:function(){

        var runInfo = [
            {text:'您曾经参与过约跑次数',times:'15'},
            {text:'您曾经发起约跑要请次数',times:'15'},
            {text:'您曾经跑过的城市数量',times:'15'}
        ];

        var atPlace = '广东省广州市';
        return(
            <div className="container">
                <div className="m-map">
                    <UseMap></UseMap>
                    <div className="tips">
                        <div className="t-tips">
                            <div className="t-img">
                                <img src="img/sign.png" />
                            </div>
                            <p>关注城市标志</p>
                        </div>
                        <div  className="t-tips">
                            <div className="t-img">
                                <img src="img/blue.png" />
                            </div>
                            <p>城市标志点</p>
                        </div>
                        <div className="t-tips">
                            <div className="t-img">
                                <img src="img/yellow.png" />
                            </div>
                            <p>已点亮约跑城市</p>
                        </div>
                    </div>
                    <p className="region">您当前关注的区域：{atPlace}</p>
                </div>
                <MapInfo info={runInfo}></MapInfo>
            </div>
        )
    }
})

var UseMap = React.createClass({
    componentDidMount: function() {

    },
    render: function(){
        return(
            <div>
                <img src="img/map.png" />
            </div>
        )
    }
});

var MapInfo = React.createClass({
    render: function(){

        var runInfo = this.props.info.map(function (info) {
            return(
                <div className="n-num">
                    <p>{info.text}</p>
                    <span>{info.times}</span>
                </div>
            )
        });

        return(
            <div>
                <div className="numb">
                    <div className="numb-n">
                        {runInfo}
                    </div>
                </div>
                <div className="province">
                    <p>您曾参与过约跑的区域</p>
                    <span>广东省</span>
                </div>
            </div>
        )
    }
})

//首页广告
var IndexRed = React.createClass({
    render : function(){
        return(
            <div className="recommend">
                <a href="#"><img src="img/recommend.png" /></a>
           </div>
        );
    }
})

//首页底部图片区域
var IndexPic = React.createClass({
    render: function(){
        return(
            <div className="picture">
                <div id="ban">
                    <div className="p-l-1">
                        <img src="img/picture-1.png" />
                    </div>
                    <div className="p-l-2">
                        <img src="img/picture-2.png" />
                    </div>
                    <div className="p-m"><img src="img/picture-3.png" /></div>
                    <div className="p-r-1">
                        <img src="img/picture-4.png" />
                    </div>
                    <div className="p-r-2">
                        <img src="img/picture-5.png" />
                    </div>
                </div>
                <div className="dis" id="dis">
                    <div className="showImg">
                        <img src="img/picture-1.png" />
                        <img src="img/picture-2.png" />
                        <img src="img/picture-3.png" />
                        <img src="img/picture-4.png" />
                        <img src="img/picture-5.png" />
                    </div>
                    <a href="#" className="back glyphicon glyphicon-chevron-left" id="back"></a>
                    <a href="#" className="next glyphicon glyphicon-chevron-right" id="next"></a>
                    <span className="mark1" id="markclose"></span>
                </div>
                <div className="p-text">
                    <hr className="r-left" />
                    <p>青春不老——城市慢跑</p>
                    <hr className="r-right" />
                </div>
            </div>
        )
    }
})

//首页内容
var BodyContainer = React.createClass({
    componentWillMount:function(){
        if (!localStorage.haveLocation) {
            window.location.href="location.html";
        }else{
            console.log(localStorage.place);
        }
    },
    render: function(){
        return(
            <div id='index'>
                <Header/>
                <Banner />
                <FourBtnNav></FourBtnNav>
                <CtrTitle leftText="地图" rightText="Maps"></CtrTitle>
                <IndexMap></IndexMap>
                <IndexRed></IndexRed>
                <CtrTitle leftText="美图" rightText="Pictures"></CtrTitle>
                <IndexPic></IndexPic>
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
