module.exports = {
  pageId: 1,
  pageType: 0,
  pageName: '佣金率管理',
  pageCode: 'commissionManager',
  pageData: {

    formArea: [
      {
        label: '用户信息', 
        value: 'userInfo', 
        fields: [
          {
            field: 'dealerCode',
            title: '经销商',
            span: 12,
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
          }
        ]
      }, {
        label: '其他信息', 
        value: 'otherInfo', 
        fields: [
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
          }, 
          {
            field: 'type', 
            title: '活动性质', 
            type: 'checkbox', 
            span: 24,
            options: [
              {
                label: '美食/餐厅线上活动', 
                value: 'ms'
              },{
                label: '地推活动', 
                value: 'dt'
              },{
                label: '线下主题活动', 
                value: 'xx'
              },{
                label: '单纯品牌曝光', 
                value: 'dc'
              }
            ]
          }, {
            field: 'age', 
            title: '年龄',
            type: 'number', 
            option: {
              min: 1, 
              max: 10
            }
          }, {
            field: 'isMarry', 
            title: '是否已婚',
            type: 'switch'
          }, {
            field: 'spendToday', 
            title: '今日消费', 
            span: 24,
            type: 'slider'
          }
        ]
      }
    ]
  }
}