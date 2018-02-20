// 引入react
import React, { Component } from 'react'
import { connect } from "react-redux";
import { Tabs } from 'antd-mobile';
import LazyLoad from 'react-lazyload';
import Header from "./header";
import Recommend from '../components/Home/recommend'
import Ranking from '../components/Home/ranking'
import PlayList from '../components/Home/playList'
import '../styles/home.less'

const TabPane = Tabs.TabPane;

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return(
            <div>
                <Header />
                <Tabs defaultActiveKey="1" swipeable={false} >
                    <TabPane tab="Recommender" key="1">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
                            <LazyLoad height={200}>
                                <Recommend/>
                            </LazyLoad>
                        </div>
                    </TabPane>
                    <TabPane tab="Songs" key="2">
                        <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'center',  backgroundColor: '#fff' }}>
                            <LazyLoad height={200}>
                                <PlayList/>
                            </LazyLoad>
                        </div>
                    </TabPane>
                    <TabPane tab="Ranks" key="3">
                        <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'center',  backgroundColor: '#fff' }}>
                            <LazyLoad height={200}>
                                <Ranking/>
                            </LazyLoad>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

function select(state){
    return{

    }
}

export default connect(select) (Home);
