//设备推荐内容

var RcdContainer = React.createClass({
    render: function(){
        return(
            <div id="rcd">
                <CtrTitle leftText="专题" rightText="SPECIAL"></CtrTitle>
                <Special></Special>
            </div>
        )
    }
})

var Special = React.createClass({
    render: function(){
        return(
            <div>
                <ul className="three-btn container">
                    <li>
                      <a href="javascript:;">
                        <h1>2016春夏慢跑装备新品推荐</h1>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <h1>2016春夏慢跑装备新品推荐</h1>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <h1>2016春夏慢跑装备新品推荐</h1>
                      </a>
                    </li>
                  </ul>

              <div className="more to-more">
                <hr className="fo-l" />
                <a className="more-text" href="#">查看更多专题</a>
                <hr className="fo-r" />
              </div>

              <div className="hot">
                <div className="container">
                 
                  <div className="near">
                    <div className="hot-img">
                      <div className="mask"></div>
                      <img src="img/t-2.png" />
                      <div className="money"><p>SPIbelt - 防水腰包<br />官网价：￥130</p></div>
                    </div>
                    <div className="hot-img">
                      <div className="mask"></div>
                      <img src="img/t-3.png" />
                      <div className="money"><p>SPIbelt - 防水腰包<br />官网价：￥130</p></div>
                    </div>
                    <div className="hot-img">
                      <div className="mask"></div>
                      <img src="img/t-7.png" />
                      <div className="money"><p>SPIbelt - 防水腰包<br />官网价：￥130</p></div>
                    </div>
                   <div className="hot-img">
                      <div className="mask"></div>
                      <img src="img/t-8.png" />
                      <div className="money"><p>SPIbelt - 防水腰包<br />官网价：￥130</p></div>
                    </div>
                  </div>
                  <div className="middle">
                    <div className="hot-img">
                      <div className="mask"></div>
                      <img src="img/t-4.png" />
                      <div className="money"><p>SPIbelt - 防水腰包<br />官网价：￥130</p></div>
                    </div>
                  </div>
                  <div className="near">
                    <div className="hot-img">
                      <div className="mask"></div>
                      <img src="img/t-5.png" />
                      <div className="money"><p>SPIbelt - 防水腰包<br />官网价：￥130</p></div>
                    </div>
                   <div className="hot-img">
                      <div className="mask"></div>
                      <img src="img/t-6.png" />
                      <div className="money"><p>SPIbelt - 防水腰包<br />官网价：￥130</p></div>
                    </div>
                    <div className="hot-img">
                      <div className="mask"></div>
                      <img src="img/t-9.png" />
                      <div className="money"><p>SPIbelt - 防水腰包<br />官网价：￥130</p></div>
                    </div>
                    <div className="hot-img">
                      <div className="mask"></div>
                      <img src="img/t-10.png" />
                      <div className="money"><p>SPIbelt - 防水腰包<br />官网价：￥130</p></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="kind-title">
                <div className="container">
                  <div className="icon">
                    <p className="i-left">分类</p>
                    <p className="i-right">SOFT</p>
                  </div>
                  <ul className="c-kind">
                    <li className="kind-yf">
                      <div><a href="#"><img src="img/yifu.png" />运动衣装</a></div>
                      <ul className="drop">
                        <li><a href="#">分类一</a></li>
                        <li><a href="#">分类一</a></li>
                        <li><a href="#">分类一</a></li>
                        <li><a href="#">分类一</a></li>
                        <li><a href="#">分类一</a></li>
                      </ul>
                    </li>
                    <li className="kind-xz">
                      <div><a href="#"><img src="img/xiezi.png" />运动鞋</a></div>
                      <ul className="drop">
                        <li><a href="#">分类一</a></li>
                        <li><a href="#">分类一</a></li>
                        <li><a href="#">分类一</a></li>
                        <li><a href="#">分类一</a></li>
                        <li><a href="#">分类一</a></li>
                      </ul>
                    </li>
                    <li className="kind-sb">
                      <div><a href="#"><img src="img/shebei2.png" />智能设备</a></div>
                      <ul className="drop">
                        <li><a href="#">分类一</a></li>
                        <li><a href="#">分类一</a></li>
                        <li><a href="#">分类一</a></li>
                        <li><a href="#">分类一</a></li>
                        <li><a href="#">分类一</a></li>
                      </ul>
                    </li>
                    <li className="kind-qt">
                      <div><a href="#"><img src="img/qita.png" />其他</a></div>
                      <ul className="drop">
                        <li><a href="#">分类一</a></li>
                        <li><a href="#">分类一</a></li>
                        <li><a href="#">分类一</a></li>
                        <li><a href="#">分类一</a></li>
                        <li><a href="#">分类一</a></li>
                      </ul>
                    </li>
                  </ul>

                  <div className="search">
                    <form>
                      <input type="text" />
                      <button>搜索</button>
                    </form>
                  </div>
                </div>
              </div>

              <ul className="kind container">
                
                <li>
                  <div className="k-title">
                    <div className="kt">
                      <p>运动<br />衣装</p>
                      <p className="kt-en">Sports<br />Clothes</p>
                    </div>
                  </div>
                  <div className="s-goods">
                    <div className="s-box">
                      <div className="box-img">
                        <div className="mask">NIKE炫彩跑鞋</div>
                        <img src="img/t-11.png" />
                      </div>
                      <p>官网价：￥1,599</p>
                    </div>
                    <div className="s-box">
                      <div className="box-img">
                        <div className="mask">NIKE炫彩跑鞋</div>
                        <img src="img/t-11.png" />
                      </div>
                      <p>官网价：￥1,599</p>
                    </div>
                    <div className="s-box">
                      <div className="box-img">
                        <div className="mask">NIKE炫彩跑鞋</div>
                        <img src="img/t-11.png" />
                      </div>
                      <p>官网价：￥1,599</p>
                    </div>
                    <div className="s-box">
                      <div className="box-img">
                        <div className="mask">NIKE炫彩跑鞋</div>
                        <img src="img/t-11.png" />
                      </div>
                      <p>官网价：￥1,599</p>
                    </div>
                  </div>
                  <div className="show"><img src="img/t-12.png" /></div>
                  <div className="more-goods">
                    <a href="more-btn">更多新品</a>
                  </div>
                </li>
                
                <li>
                  <div className="k-title">
                    <div className="kt">
                      <p>运动<br />鞋</p>
                      <p className="kt-en">Sports<br />Shoes</p>
                    </div>
                  </div>
                  <div className="s-goods">
                    <div className="s-box">
                      <div className="box-img">
                        <div className="mask">NIKE炫彩跑鞋</div>
                        <img src="img/t-11.png" />
                      </div>
                      <p>官网价：￥1,599</p>
                    </div>
                    <div className="s-box">
                      <div className="box-img">
                        <div className="mask">NIKE炫彩跑鞋</div>
                        <img src="img/t-11.png" />
                      </div>
                      <p>官网价：￥1,599</p>
                    </div>
                    <div className="s-box">
                      <div className="box-img">
                        <div className="mask">NIKE炫彩跑鞋</div>
                        <img src="img/t-11.png" />
                      </div>
                      <p>官网价：￥1,599</p>
                    </div>
                    <div className="s-box">
                      <div className="box-img">
                        <div className="mask">NIKE炫彩跑鞋</div>
                        <img src="img/t-11.png" />
                      </div>
                      <p>官网价：￥1,599</p>
                    </div>
                  </div>
                  <div className="show"><img src="img/t-13.png" /></div>
                  <div className="more-goods">
                    <a href="more-btn">更多新品</a>
                  </div>
                </li>
                <li>
                  <div className="k-title">
                    <div className="kt">
                      <p>智能<br />设别</p>
                      <p className="kt-en">intelligent<br />device</p>
                    </div>
                  </div>
                  <div className="s-goods">
                    <div className="s-box">
                      <div className="box-img">
                        <div className="mask">NIKE炫彩跑鞋</div>
                        <img src="img/t-11.png" />
                      </div>
                      <p>官网价：￥1,599</p>
                    </div>
                    <div className="s-box">
                      <div className="box-img">
                        <div className="mask">NIKE炫彩跑鞋</div>
                        <img src="img/t-11.png" />
                      </div>
                      <p>官网价：￥1,599</p>
                    </div>
                    <div className="s-box">
                      <div className="box-img">
                        <div className="mask">NIKE炫彩跑鞋</div>
                        <img src="img/t-11.png" />
                      </div>
                      <p>官网价：￥1,599</p>
                    </div>
                    <div className="s-box">
                      <div className="box-img">
                        <div className="mask">NIKE炫彩跑鞋</div>
                        <img src="img/t-11.png" />
                      </div>
                      <p>官网价：￥1,599</p>
                    </div>
                  </div>
                  <div className="show"><img src="img/t-14.png" /></div>
                  <div className="more-goods">
                    <a href="more-btn">更多新品</a>
                  </div>
                </li>
                
                <li>
                  <div className="k-title">
                    <div className="kt">
                      <p>其他</p>
                      <p className="kt-en">others</p>
                    </div>
                  </div>
                  <div className="s-goods">
                    <div className="s-box">
                      <div className="box-img">
                        <div className="mask">NIKE炫彩跑鞋</div>
                        <img src="img/t-11.png" />
                      </div>
                      <p>官网价：￥1,599</p>
                    </div>
                    <div className="s-box">
                      <div className="box-img">
                        <div className="mask">NIKE炫彩跑鞋</div>
                        <img src="img/t-11.png" />
                      </div>
                      <p>官网价：￥1,599</p>
                    </div>
                    <div className="s-box">
                      <div className="box-img">
                        <div className="mask">NIKE炫彩跑鞋</div>
                        <img src="img/t-11.png" />
                      </div>
                      <p>官网价：￥1,599</p>
                    </div>
                    <div className="s-box">
                      <div className="box-img">
                        <div className="mask">NIKE炫彩跑鞋</div>
                        <img src="img/t-11.png" />
                      </div>
                      <p>官网价：￥1,599</p>
                    </div>
                  </div>
                  <div className="show"><img src="img/t-15.png" /></div>
                  <div className="more-goods">
                    <a href="more-btn">更多新品</a>
                  </div>
                </li>
              </ul>
            </div>
        )
    }
})


//二级约跑内容
var BodyContainer = React.createClass({
    render: function(){
        return(
            <div id='share'>
                <Header/>
                <Banner />
                <RcdContainer />
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