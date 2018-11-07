module.exports = {
  pageId: 1,
  pageType: 0,
  pageName: '佣金率管理',
  pageCode: 'commissionManager',
  pageData: {
    // 搜索
    searchArea: {
      url: '/carins/commission/list',
      columns: [{
          field: 'dealerCode',
          title: '经销商',
          type: 'select'
        },
        {
          field: 'insuredType', 
          title: '业务类型',
          type: 'select', 
          source: [
            {
              label: '全部', 
              value: ''
            }, 
            {
              label: '新保',
              value: 'INS_NEW'
            }, 
            {
              label: '续保', 
              value: 'INS_RENEWAL'
            }
          ]
        },
        {
          field: 'companyCode',
          title: '保险公司', 
          type: 'select'
        },
        {
          field: 'insuranceType',
          title: '险种类型', 
          type: 'select',
          source: [
            {
              label: '请选择',
              value: ''
            }, {
              label: '交强险',
              value: 'compulsory'
            }, {
              label: '商业险', 
              value: 'commercial'
            }
          ]
        },
        {
          field: 'isAvailable', 
          title: '状态',
          type: 'select', 
          source: [
            {
              label: '启用', 
              value: '1'
            }, {
              label: '停用', 
              value: '0'
            }
          ]
        }, 
        {
          field: 'sex', 
          title: '性别',
          type: 'radio', 
          options: [{
            label: '男',
            value: 1
          }, {
            label: '女',
            value: 0
          }]
        }
      ]
    }
  }
}