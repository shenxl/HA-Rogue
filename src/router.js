import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Main from './routes/Main.js';
import Dashboard from './routes/Dashboard.js';
import NotFound from './routes/NotFound.js';

import Gov from './routes/dashboard/Gov.js';

import Droplayout from "./routes/Droplayout.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route name="home" path="/" breadcrumbName="首页" component={Main} >
        <IndexRoute breadcrumbName="欢迎页面" component={Dashboard} />
        <Route name="dashboard" path="dashboard" breadcrumbName="汇总数据">
          <Route name="monthly" path="monthly" breadcrumbName="月报活分析" component={Gov} />
          <Route name="daily" path="daily" breadcrumbName="日报活分析" component={Gov} />
          <Route name="version" path="version" breadcrumbName="版本分析" component={Gov} />
        </Route>
        <Route name="activity" path="activity" breadcrumbName="分析" component={IndexPage} />
        <Route name="notFound" path="*" breadcrumbName="未知页面" component={NotFound} />
      </Route>
      <Route path="/droplayout" component={Droplayout} />
    </Router>
  );
}

export default RouterConfig;
