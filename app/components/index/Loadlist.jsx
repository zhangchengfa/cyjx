import React from 'react'
import 'whatwg-fetch'
import { Router, Route,Link, browserHistory, IndexRoute } from 'react-router'
import service from '../common/config.jsx'

export default class LoadList extends React.Component {
    constructor() {
        super();
        this.state = {
            renderArr: [],
            searchMode: false,
            keyWord: '',
            pageIndex: 1,
            pageCount: 0,
            bottomTxt: '',
        };
    }
    loadList = () => {
        var _this = this;
        console.log("地址："+service.SERVICE.COURSE.FREE_PARTS);
        fetch("http://sandbox.api.cyjx.com/1/course/free_parts")
        .then(function(response){
           console.log("结果1："+JSON.stringify(response.json));
        });
        fetch(service.SERVICE.COURSE.FREE_PARTS, {
            method: 'POST',
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: JSON.stringify({
                "page": _this.state.pageIndex,
                "rows":10
            })
        })
        .then(function (response) {
            console.log("结果："+JSON.stringify(response));
            //return response.json()
        })
        .then(function (result) {
            console.log("结果："+result);
            /*
            var res = result.data;
            _this.pageCount = Math.ceil(res.result.totalNum/10);
            console.log(res);
            _this.setState({pageCount: _this.pageCount})
            if(_this.state.pageIndex == 1){
                _this.setState({renderArr: res.result.searchData})
            }else{
                _this.setState({renderArr: _this.state.renderArr.concat(res.result.searchData)})
            }
            _this.setState({pageIndex: _this.state.pageIndex+1},function(){
                console.log("pageIndex",_this.state.pageIndex);})
            */
        });
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }
    componentDidMount() {
        this.loadList();
        document.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        var _this = this;
        var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
        var clientHeight = document.documentElement.clientHeight;
        if(scrolltop + clientHeight==document.body.clientHeight){
            if (_this.state.pageIndex <= _this.state.pageCount){
                _this.loadList();
            }else{
                _this.setState({bottomTxt: '到底儿了~'});
            }
        }
    }
    render() {
        var _this = this;
        var repoList = this.state.renderArr.map(function (repo,index) {
            return (
                <li key={index}>

                    { index==0 || index==1 || index==2 ? <img className="hot-icon" src={require('../../img/hot.png')} alt="" width="35" /> : null }

                    <Link to={{pathname:"/course-details",query:{id:repo.id}}}>{repo.serviceName}</Link>

                </li>
            );
        });
        return(
            <div className="list">
                <ul>{repoList}</ul>
                { _this.state.bottomTxt?<div className="loadmore">{_this.state.bottomTxt}</div>:null }
            </div>
        )
  }
}
