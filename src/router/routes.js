import Home from '../views/Home.vue'
import Index from '../views/index/index.vue'
import travelReimbursement from '../views/costManage/travelReimbursement/travelReimbursement.vue'
const routes =[
    {
        path: '/',
        name: 'Home',
        redirect: '/index',
        component: Home,
        meta: { title: '首页' },
        children: [
            {
              path: '/index',
              name: 'index',
              component: Index,
              meta: { title: '首页',moduleName:'首页'},
            },
        ]
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: '流程管理' },
        children: [
            {
              path: '/Index1',
              name: 'Index1',
              component: Index,
              meta: { title: '流程管理1',moduleName:'流程管理'},
            },
        ]
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: '项目管理' },
        children: [
            {
              path: '/Index2',
              name: 'Index2',
              component: Index,
              meta: { title: '项目管理1',moduleName:'项目管理'},
            },
        ]
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: '发票管理' },
        children: [
            {
              path: '/Index3',
              name: 'Index3',
              component: Index,
              meta: { title: '发票管理1',moduleName:'发票管理'},
            },
        ]
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: '产品定价' },
        children: [
            {
              path: '/Index4',
              name: 'Index4',
              component: Index,
              meta: { title: '产品定价1',moduleName:'产品定价'},
            },
        ]
    },
    {
        path: '/costManage',
        name: 'costManage',
        component: Home,
        meta: { title: '费用管理' },
        children: [
            {
              path: '/travelReimbursement',
              name: 'travelReimbursement',
              component: travelReimbursement,
              meta: { title: '差旅报销',moduleName:'费用管理'},
            },
            {
              path: '/travelReimbursement',
              name: 'travelReimbursement',
              component: travelReimbursement,
              meta: { title: '费用报销',moduleName:'费用管理'},
            },
            {
              path: '/travelReimbursement',
              name: 'travelReimbursement',
              component: travelReimbursement,
              meta: { title: '借款',moduleName:'费用管理'},
            },
            {
              path: '/travelReimbursement',
              name: 'travelReimbursement',
              component: travelReimbursement,
              meta: { title: '费用统计分析',moduleName:'费用管理'}
            }
        ]
    },
]
export default routes