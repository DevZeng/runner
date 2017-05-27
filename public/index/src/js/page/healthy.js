//健康科普内容

var HealthyContainer = React.createClass({
    componentDidMount:function(){
        $('.tab-btn').click(function(){
            $('.tab-btn').removeClass('active');
            $(this).addClass('active');
            var oid = $(this).attr('id');
            $('.tab-ctr > li').hide();
            $('#'+oid+'Ctr').show();
        })
    },
    render:function(){
    return(
        <div>
            <div className="tab-bg container">
             <ul className="tab-nav" id="tab-nav">
               <li className="active tab-btn" id="media"><a href="javascript:;">媒体新闻</a></li>
               <li className="tab-btn" id="articles"><a href="javascript:;">用户文章</a></li>
               <li className="tab-btn" id="user"><a href="javascript:;">我的发表</a></li>
             </ul>
             <ul className="tab-ctr" id="tab-ctr">
               
               <li className="media-ctr" id="mediaCtr">
                 <div className="l-ctr">
                   <div className="four-box">
                     <div className="box box-1">
                       <img src="img/media/1.png" />
                       <div className="box-title">跑者的世界天天都是情人节</div>
                     </div>
                      <div className="box">
                          <div className='box-text'>
                               <h1>热点新闻</h1>
                               <ul>
                                 <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                                 <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                                 <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                                 <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                               </ul>
                           </div>
                     </div>
                      <div className="box box-2">
                       <img src="img/media/2.png" />
                       <div className="box-title">跑者的世界天天都是情人节</div>
                     </div>
                      <div className="box box-3">
                       <img src="img/media/3.png" />
                       <div className="box-title">跑者的世界天天都是情人节</div>
                     </div>
                   </div>
                 
                   <div className="other-place">
                     <div className="l-place">
                       <div className="title">
                         <h2>人民日报</h2>
                       </div>
                       <ul>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                       </ul>
                     </div>
                     <div classNameclassName="r-place">
                       <div classNameclassName="title">
                         <h2>南方日报</h2>
                       </div>
                       <ul>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                       </ul>
                     </div>
                   </div>
                  </div>
                  <div className="r-ctr">
                    <div className="media-news">
                      <div className="media-ctr">
                        <div className="news-img"><img src="img/media/4.png" /></div>
                        <div className="news-brief">
                          <h3><a href="#">广州慢跑开始成为流行趋势</a></h3>
                          <p>广州慢跑开始成为流行趋势</p>
                        </div>
                      </div>
                      <div className="media-ctr">
                        <div className="news-img"><img src="img/media/4.png" /></div>
                        <div className="news-brief">
                          <h3><a href="#">广州慢跑开始成为流行趋势</a></h3>
                          <p>广州慢跑开始成为流行趋势</p>
                        </div>
                      </div>
                    </div>
                  </div>
               </li>
               
               <li className="articles-ctr" id="articlesCtr">
                 <div className="t-block">
                   <div className="l-block">
                     <div className="kt">
                      <p>用户<br />文章</p>
                      <p className="kt-en">Sports<br/>Shoes</p>
                    </div>
                    <ul>
                      <li><a href="#">慢跑人生</a></li>
                      <li><a href="#">路线攻略</a></li>
                      <li><a href="#">营养健康</a></li>
                      <li><a href="#">慢跑工具</a></li>
                      <li><a href="#">编辑推荐</a></li>
                      <li><a href="#">国际活动</a></li>
                    </ul>
                    <a className="to-more" href="#">更多</a>
                   </div>
                   <div className="m-block">
                     <div className="new-img"><img src="img/word/p1.png" /></div>
                     <div className="new-img"><img src="img/word/p2.png" /></div>
                     <div className="new-img"><img src="img/word/p3.png" /></div>
                   </div>
                   <div className="r-block">
                      <div className="r-box">
                        <h1><a href="#">论慢跑形成的大概原因</a></h1>
                        <span className="from">来源：宇佐见</span>
                        <p>就算你这么说我也想不出啊啊啊啊啊啊救命啊啊啊啊啊啊给把刀我要报复社会啊啊啊啊啊啊啊啊啊</p>
                        <span className="time">2016-04-14</span>
                      </div>
                      <div className="r-box">
                        <h1><a href="#">论慢跑形成的大概原因</a></h1>
                        <span className="from">来源：宇佐见</span>
                        <p>就算你这么说我也想不出啊啊啊啊啊啊救命啊啊啊啊啊啊给把刀我要报复社会啊啊啊啊啊啊啊啊啊</p>
                        <span className="time">2016-04-14</span>
                      </div>
                      <div className="r-box">
                        <h1><a href="#">论慢跑形成的大概原因</a></h1>
                        <span className="from">来源：宇佐见</span>
                        <p>就算你这么说我也想不出啊啊啊啊啊啊救命啊啊啊啊啊啊给把刀我要报复社会啊啊啊啊啊啊啊啊啊</p>
                        <span className="time">2016-04-14</span>
                      </div>
                   </div>
                 </div>
                 <div className="other">
                    <div className="kind">
                       <div className="title">
                         <h2>慢跑人生</h2>
                         <a className="to-more" href="#">更多</a>
                       </div>
                       <ul>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                       </ul>
                    </div>
                    <div className="kind">
                       <div className="title">
                         <h2>路线攻略</h2>
                         <a className="to-more" href="#">更多</a>
                       </div>
                       <ul>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                       </ul>
                    </div>
                    <div className="kind">
                       <div className="title">
                         <h2>营养健康</h2>
                         <a className="to-more" href="#">更多</a>
                       </div>
                       <ul>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                       </ul>
                    </div>
                    <div className="kind">
                       <div className="title">
                         <h2>慢跑工具</h2>
                         <a className="to-more" href="#">更多</a>
                       </div>
                       <ul>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                         <li><a href="#">广州慢跑开始成为流行趋势</a></li>
                       </ul>
                    </div>
                 </div>
               </li>
               
               <li className="user-ctr" id="userCtr">
                 
                 <div className="three-btn">
                   <a href="#">发表文章</a>
                   <a href="#">全部文章</a>
                   <a href="#">我的积分</a>
                 </div>

                  <div className="ctr-title container">
                    <hr className="hr-left" />
                    <div className="icon">
                        <p className="i-left">最新</p>
                        <p className="i-right">New</p>
                    </div>
                    <hr className="hr-right" />
                 </div>

                 <div className="news">
                   <h1>女性跑步防狼五要素</h1>
                   <div className="brief">
                      <div className="to-left">
                        <span className="kind">跑步人生</span>
                        <span className="data">2016-05-14</span>
                      </div>
                      <div className="to-rigth">
                        <span className="watch"><img src="img/liulan.png" />浏览：30</span>
                        <span className="review"><img src="img/pinglun.png" />评论：30</span>
                        <span className="share"><img src="img/fenxiang.png" />分享</span>
                      </div>
                   </div>
                   <div className="news-img">
                     
                   </div>
                   <div className="news-text">
                     <p>女性跑步需要正确的防卫，能接到南方金额为那结局接耳机</p>
                   </div>
                   <a className="to-more" href="#">查看更多</a>
                 </div>


               </li>
             </ul>
           </div>
        </div>
    )}
})


//二级约跑内容
var BodyContainer = React.createClass({
    render: function(){
        return(
            <div id='healthy'>
                <Header/>
                <Banner />
                <HealthyContainer />
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