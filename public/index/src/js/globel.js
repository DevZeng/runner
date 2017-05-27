//共享组件


//网址Logo
var Logo = React.createClass({
  render: function(){
    return(
      <div className="logo">
          <img src={this.props.linkTo} />
          <span>青春不老，城市慢跑</span>
      </div>
    )
  }
});

//导航列表
var NavList = React.createClass({
  render: function() {
    return (
        <div className='nav'>
            <ul className="top-nav">
                {
                React.Children.map(this.props.children, function (child) {
                  return <li>{child}</li>;
                })
              }
          </ul>
        </div>
    );
  }
});

//定义头部组件合成
var Header = React.createClass({

    componentDidMount: function(){
        var link = React.findDOMNode(this.refs.link),
            me = this;

        link.addEventListener('click', function(e){
            me.props.clickFn(e);
        })
    },
    render: function(){
        return(
            <header>
                <div className='header container'>
                    <Logo linkTo="img/logo.png"></Logo>
                    <NavList ref="link">
                        <div><a className="active" href="index.html" id='toIndex'>首页</a></div>
                        <div><a href="run.html" id='toRun'>约跑</a>
                            <ul className="drop">
                                <li><a href="run-all.html">全部活动</a></li>
                                {/*<li><a href="javascript:;">活动展示</a></li>*/}
                            </ul>
                        </div>
                        <div><a href="healthy.html" id='toHealthy'>健康科普</a>
                            <ul className="drop">
                                {/*<li><a href="javascript:;">媒体新闻</a></li>
                                <li><a href="javascript:;">用户文章</a></li>*/}
                            </ul>
                        </div>
                        <div><a href="share.html" id='toShare'>日常分享</a>
                            <ul className="drop guanshui">
                                <li><a href="javascript:;">灌水区</a></li>
                            </ul>
                        </div>
                        {/*<div><a href="rcd.html" id='toRcd'>设备推荐</a>
                            <ul className="drop tuijian">
                            <li><a href="javascript:;">运动衣装</a></li>
                                <li><a href="javascript:;">运动鞋</a></li>
                                <li><a href="javascript:;">智能设备</a></li>
                                <li><a href="javascript:;">其他设备</a></li>
                                <li><a href="javascript:;">专题推荐</a></li>
                            </ul>
                        </div>*/}
                    </NavList>
                    <HeaderSearch></HeaderSearch>
                </div>
                <HeaderUserInfo></HeaderUserInfo>
            </header>

        );
    }
})

//首页搜索组件
var HeaderSearch = React.createClass({
    getInitialState: function() {
        return {searchInput: ''};
    },
    haveChange: function(){
        this.setState({searchInput: e.target.value});
    },
  render: function(){
    return(
            <div className="header-search">
          <form>
                    <div className="search-bg">
                        <div className="input-group">
                            <input type="text" className="form-control" ref="searchInput" placeholder="" value={this.state.searchInput} onChange={this.haveChange}/>
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span></button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
    );
  }
});

//头部个人信息显示
var HeaderUserInfo = React.createClass({
    render: function(){
        return(
            <div className="header-info">
                <div className="container">
                    <div className="info-bg">
                        <div className="welcome">下午好，游客</div>
                        <div className="links"><a href="#">我的世界</a>丨<a href="#">联系我们</a></div>
                        <div className="place">定位城市：<span>{localStorage.place}</span><a href="location.html">切换<span className="glyphicon glyphicon-transfer"></span></a></div>
                    </div>
                 </div>
            </div>
        );
    }
});

//定义banner组件
var Banner = React.createClass({
    componentDidMount : function(){
        $('.bxslider').bxSlider();
    },
    render: function(){
        return(
            <div className="m">
                <ul className="bxslider">
                  <li><img src="img/banner/banner.png" /></li>
                  <li><img src="img/banner/banner2.jpg" /></li>
                  <li><img src="img/banner/banner3.jpg" /></li>
                  <li><img src="img/banner/banner4.jpg" /></li>
                  <li><img src="img/banner/banner5.jpg" /></li>
                </ul>
            </div>
        )
    }
})

//定义内容块标题
var CtrTitle = React.createClass({
    render: function(){
        return(
            <div className="ctr-title container-fluid">
                <hr className="hr-left" />
                <div className="icon">
                    <p className="i-left">{this.props.leftText}</p>
                    <p className="i-right">{this.props.rightText}</p>
                </div>
                <hr className="hr-right" />
            </div>
        )
    }
})

//页脚
var Footer = React.createClass({
    render: function(){
        return(
            <div className="footer">
                <hr className="fo-l" />
                <span>联系我们</span>
                <hr className="fo-r" />
                <div className="three-part container">
                    <div className="row">
                        <div className="foot-icon col-md-4">
                            <img src="img/phone.png" />
                            <p>手机：18819438113</p>
                        </div>
                        <div className="foot-icon col-md-4">
                            <img src="img/email.png" />
                            <p>邮箱：cikie100@163.com</p>
                        </div>
                        <div className="foot-icon col-md-4">
                            <img src="img/address.png" />
                            <p>地址：广州大学华软软件学院</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})
