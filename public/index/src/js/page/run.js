//约跑内容

var Runtitle = React.createClass({
    render: function(){
        return(
            <div className="run-title">
                <h2 className="text-center">约跑</h2>
                <p>这里可以发布您的跑步邀请，找到附近的小伙伴，认识周围与你兴趣相似的人，一起在城市的阳光下奔跑吧~</p>
            </div>
        )
    }
})

var RunNew = React.createClass({
    render: function(){
        var runNewInfo = [
            {imgSrc:"img/picture-1.png",text:"广州市花都区粤海酒店“爱青春"},
            {imgSrc:"img/picture-1.png",text:"广州市花都区粤海酒店“爱青春"},
            {imgSrc:"img/picture-1.png",text:"广州市花都区粤海酒店“爱青春"},
            {imgSrc:"img/picture-1.png",text:"广州市花都区粤海酒店“爱青春"},
            {imgSrc:"img/picture-1.png",text:"广州市花都区粤海酒店“爱青春"},
            {imgSrc:"img/picture-1.png",text:"广州市花都区粤海酒店“爱青春"},
            {imgSrc:"img/picture-1.png",text:"广州市花都区粤海酒店“爱青春"},
            {imgSrc:"img/picture-1.png",text:"广州市花都区粤海酒店“爱青春"}
        ];

        return(
            <div className="container run-new">
                <RunNewShow info={runNewInfo}></RunNewShow>
            </div>
        )
    }
})

var RunNewShow = React.createClass({
    render: function(){
        var newShow = this.props.info.map(function(info){
            return(
                <div className="col-md-3 run-new-box">
                    <img src={info.imgSrc} />
                    <div className="img-rcd"><p>{info.text}</p></div>
                </div>
            )
        })

        return(
            <div className="row">
                {newShow}
            </div>
        )

    }
})

var RunHotBox = React.createClass({

    render: function(){
        var hotInfo = [
            {imgSrc:'img/y1.png',title:'广州市花都区粤海酒店“爱青春”晨跑活动',place:'广州市花都区粤海酒店',time:'2016-09-09',total:'100',lack:'40'},
            {imgSrc:'img/y2.png',title:'广州市花都区粤海酒店“爱青春”晨跑活动',place:'广州市花都区粤海酒店',time:'2016-09-09',total:'100',lack:'40'},
            {imgSrc:'img/y3.png',title:'广州市花都区粤海酒店“爱吃屎”晨跑活动',place:'广州市花都区粤海酒店',time:'2016-09-09',total:'100',lack:'40'},
            {imgSrc:'img/y4.png',title:'广州市花都区粤海酒店“爱青春”晨跑活动',place:'广州市花都区粤海酒店',time:'2016-09-09',total:'100',lack:'40'}
        ];

        return(
            <div className="container">
                <RunHotInfo info={hotInfo}></RunHotInfo>
            </div>
        )
    }
})

var RunHotInfo = React.createClass({
    render : function(){

        var hotInfo = this.props.info.map(function (info) {
            return(
                <div className="col-md-6 run-hot clear">
                    <div className="info-img"><img src={info.imgSrc} /></div>
                    <div className="run-hot-info clear">
                        <h1>{info.title}</h1>
                        <div className="clear">
                            <div className="h-lit time">
                                <img src="img/timelist.png" />
                                <p>{info.time}</p>
                            </div>
                            <div className="h-lit">
                                <img src="img/adr.png" />
                                <p>{info.place}</p>
                            </div>
                        </div>
                        <div className="j-poli">
                            <div></div>
                        </div>
                        <div className="people-num">
                            <span className="zero">0</span>
                            <span className="letter">还差：{info.lack}</span>
                            <span className="both">共需：{info.total}</span>
                        </div>
                        <div className="h-l-btn">
                            <a href="run-detail.html">详情介绍</a>
                            <a href="#">我要报名</a>
                        </div>
                    </div>
                </div>
            )
        });

        return(
            <div className="row">
                {hotInfo}
            </div>
        )
    }
})

var RunActivity = React.createClass({
    render: function(){
        var runActInfo =[
            {kind:'爱青春晨跑活动',title:'广州市花都区粤海酒店“爱青春”晨跑活动',pNum:'100',_states:'完成',rcd:'享受青春，享受阳光，粤海酒店和你一起跑向阳光',bImgSrc:"img/y5.png",sImgSrc:"img/example3.png"},
            {kind:'爱青春晨跑活动',title:'广州市花都区粤海酒店“爱青春”晨跑活动',pNum:'100',_states:'完成',rcd:'享受青春，享受阳光，粤海酒店和你一起跑向阳光',bImgSrc:"img/y6.png",sImgSrc:"img/example3.png"},
            {kind:'爱青春晨跑活动',title:'广州市花都区粤海酒店“爱青春”晨跑活动',pNum:'100',_states:'完成',rcd:'享受青春，享受阳光，粤海酒店和你一起跑向阳光',bImgSrc:"img/y7.png",sImgSrc:"img/example3.png"},
            {kind:'爱青春晨跑活动',title:'广州市花都区粤海酒店“爱青春”晨跑活动',pNum:'100',_states:'完成',rcd:'享受青春，享受阳光，粤海酒店和你一起跑向阳光',bImgSrc:"img/y8.png",sImgSrc:"img/example3.png"}
        ];

        return(
            <div className="container run-act">
                <RunActivityBox info={runActInfo}></RunActivityBox>
            </div>
        )
    }
})

var RunActivityBox = React.createClass({
    render: function(){
        var runInfo = this.props.info.map(function (info) {
            return(
                <div className="box-bg col-md-3">
                  <div className="box-img">
                    <img src = {info.bImgSrc} />
                    <div className="s-img">
                      <img src = {info.sImgSrc} />
                    </div>
                  </div>
                  <div className="box-text">
                    <h1>{info.kind}</h1>
                    <h2>{info.title}</h2>
                    <div className="zt">
                      <p>报名人数：<span>{info.pNum}</span></p>
                      <p>状态：<span>{info._states}</span></p>
                    </div>
                    <p className="brief">{info.rcd}</p>
                  </div>
                  <div className="into-btn">
                    <a href="#">查看活动</a>
                  </div>
                </div>
            )
        });
        return(
            <div className="row">{runInfo}</div>
        )
    }
})


//约跑内容
var BodyContainer = React.createClass({
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

//二级约跑内容
var BodyContainer = React.createClass({
    render: function(){
        return(
            <div id='run'>
                <Header/>
                <Banner />
                <Runtitle></Runtitle>
                <CtrTitle leftText="最新" rightText="New"></CtrTitle>
                <RunNew></RunNew>
                <CtrTitle leftText="热门" rightText="Hot"></CtrTitle>
                <RunHotBox></RunHotBox>
                <CtrTitle leftText="优秀活动" rightText="Excellent Activity"></CtrTitle>
                <RunActivity></RunActivity>
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
