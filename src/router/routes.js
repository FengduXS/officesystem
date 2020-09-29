import Home from '../views/Home.vue'
import Index from '../views/index/index.vue'
//费用管理
import travelReimbursement from '../views/costManage/travelReimbursement/travelReimbursement.vue'
import costReimbursement from '../views/costManage/costReimbursement/costReimbursement.vue'
import loan from '../views/costManage/loan/loan.vue'
import costAnalysis from '../views/costManage/costAnalysis/costAnalysis.vue'
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
            path: '/costReimbursement',
            name: 'costReimbursement',
            component: costReimbursement,
            meta: { title: '费用报销',moduleName:'费用管理'},
          },
          {
            path: '/loan',
            name: 'loan',
            component: loan,
            meta: { title: '借款',moduleName:'费用管理'},
          },
          {
            path: '/costAnalysis',
            name: 'costAnalysis',
            component: costAnalysis,
            meta: { title: '费用统计分析',moduleName:'费用管理'}
          }
      ]
    },
    {
      path: '/contractManage',
      name: 'contractManage',
      component: Home,
      meta: { title: '合同管理' },
      children: [
          {
            path: '/receiveContract',
            name: 'receiveContract',
            component: travelReimbursement,
            meta: { title: '收款合同',moduleName:'合同管理'},
          },
          {
            path: '/payContract',
            name: 'payContract',
            component: travelReimbursement,
            meta: { title: '付款合同',moduleName:'合同管理'},
          },
          {
            path: '/otherFee',
            name: 'otherFee',
            component: travelReimbursement,
            meta: { title: '不涉及款',moduleName:'合同管理'},
          },
          {
            path: '/contractCase',
            name: 'contractCase',
            component: travelReimbursement,
            meta: { title: '合同案例',moduleName:'合同管理'}
          },
          {
            path: '/contractAnalysis',
            name: 'contractAnalysis',
            component: travelReimbursement,
            meta: { title: '合同统计分析',moduleName:'合同管理'}
          }
      ]
    },
    {
      path: '/projectManage',
      name: 'projectManage',
      component: Home,
      meta: { title: '项目管理' },
      children: [
          {
            path: '/Index25',
            name: 'Index25',
            component: Index,
            meta: { title: '项目列表',moduleName:'项目管理'},
          },
          {
            path: '/Index23',
            name: 'Index23',
            component: Index,
            meta: { title: '我的任务',moduleName:'项目管理'},
          },
          {
            path: '/Index24',
            name: 'Index24',
            component: Index,
            meta: { title: '待我评价的项目',moduleName:'项目管理'},
          },
          {
            path: '/Index245',
            name: 'Index245',
            component: Index,
            meta: { title: '项目统计分析',moduleName:'项目管理'},
          },
      ]
    },
    {
      path: '/invoiceManage',
      name: 'invoiceManage',
      component: Home,
      meta: { title: '发票管理' },
      children: [
          {
            path: '/Index33',
            name: 'Index345',
            component: Index,
            meta: { title: '待开发票',moduleName:'发票管理'},
          },
          {
            path: '/Index333',
            name: 'Index345',
            component: Index,
            meta: { title: '已开发票',moduleName:'发票管理'},
          },
          {
            path: '/Index3453',
            name: 'Index345',
            component: Index,
            meta: { title: '我申请的',moduleName:'发票管理'},
          },
          {
            path: '/Index334',
            name: 'Index3454',
            component: Index,
            meta: { title: '废弃发票',moduleName:'发票管理'},
          },
          {
            path: '/Index3335',
            name: 'Index3453',
            component: Index,
            meta: { title: '回款列表',moduleName:'发票管理'},
          },
      ]
    },
    {
      path: '/productPrice',
      name: 'productPrice',
      component: Home,
      meta: { title: '产品定价' },
      children: [
          {
            path: '/Index44',
            name: 'Index4',
            component: Index,
            meta: { title: '报价审批列表',moduleName:'产品定价'},
          },
          {
            path: '/Index34',
            name: 'Index44',
            component: Index,
            meta: { title: '报价统计分析',moduleName:'产品定价'},
          },
      ]
    },
    {
      path: '/archivesManage',
      name: 'archivesManage',
      component: Home,
      meta: { title: '档案管理' },
      children: [
          {
            path: '/Index3455',
            name: 'Index344',
            component: Index,
            meta: { title: '收款合同',moduleName:'档案管理'},
          },
          {
            path: '/Index332',
            name: 'Index4333',
            component: Index,
            meta: { title: '付款合同',moduleName:'档案管理'},
          },
          {
            path: '/Index399',
            name: 'Index34',
            component: Index,
            meta: { title: '不涉及合同',moduleName:'档案管理'},
          },
      ]
    },
    {
      path: '/processManage',
      name: 'processManage',
      component: Home,
      meta: { title: '流程管理' },
      children: [
          {
            path: '/Index31',
            name: 'Index31',
            component: Index,
            meta: { title: '待办',moduleName:'流程管理'},
          },
          {
            path: '/Index41',
            name: 'Index41',
            component: Index,
            meta: { title: '我的请求',moduleName:'流程管理'},
          },
          {
            path: '/Index51',
            name: 'Index51',
            component: Index,
            meta: { title: '抄送给我',moduleName:'流程管理'},
          },
          {
            path: '/Index61',
            name: 'Index61',
            component: Index,
            meta: { title: '已办',moduleName:'流程管理'},
          },
          {
            path: '/Index71',
            name: 'Index71',
            component: Index,
            meta: { title: '办结',moduleName:'流程管理'},
          },
      ]
    },
    {
      path: '/journalManage',
      name: 'journalManage',
      component: Home,
      meta: { title: '日志' },
      children: [
          {
            path: '/Index341',
            name: 'Index341',
            component: Index,
            meta: { title: '日志',moduleName:'日志'},
          },
          {
            path: '/Index241',
            name: 'Index241',
            component: Index,
            meta: { title: '日志统计',moduleName:'日志'},
          },
      ]
    },
]
export default routes