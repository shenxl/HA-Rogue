import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Main from './routes/Main.js';
import Dashboard from './routes/Dashboard.js';
import NotFound from './routes/NotFound.js';

import Gov from './routes/dashboard/Gov.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route name="home" path="/" breadcrumbName="首页" component={Main} >
        <IndexRoute breadcrumbName="汇总数据" component={Dashboard} />
        <Route name="dashboard" path="dashboard" breadcrumbName="汇总数据">
          <Route name="gov" path="gov" breadcrumbName="政府" component={Gov} />
          <Route name="ep" path="ep" breadcrumbName="企业" component={Gov} />
          <Route name="financial" path="financial" breadcrumbName="金融" component={Gov} />
        </Route>
        <Route name="activity" path="activity" breadcrumbName="分析" component={IndexPage} />
        <Route name="notFound" path="*" breadcrumbName="未知页面" component={NotFound} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
