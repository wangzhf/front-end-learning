module.exports = {
  pageId: 1,
  pageType: 0,
  pageName: '佣金率管理',
  pageCode: 'commissionManager',
  pageData: {
    // 搜索
    searchArea: {
      url: '/carins/endorsement/list',
      columns: [
        {
          field: 'policyNO', 
          title: '保单号', 
          type: 'input'
        }, 
        {
          field: 'endorseNO', 
          title: '批改单号', 
          type: 'input'
        },
        {
          field: 'vin', 
          title: '车架号(VIN)', 
          type: 'input'
        },
        {
          field: 'insurerName', 
          title: '被保人姓名',
          type: 'input'
        },
        {
          field: 'insuranceCompanyName',
          title: '承保公司', 
          type: 'select'
        },
        {
          field: 'dealerName', 
          title: '机构/经销商', 
          type: 'selectTree'
        },
        {
          field: 'signStartDate', 
          title: '签单开始时间', 
          span: 8,
          type: 'date'
        },
        {
          field: 'signEndDate', 
          title: '签单结束时间', 
          span: 8,
          type: 'date'
        }
      ]
    },

    // table展示
    table: {
      columns: [
        {
          field: 'policyNO', 
          title: '保单号'
        }, 
        {
          field: 'endorseNO', 
          title: '批改单号'
        },
        {
          field: 'vin', 
          title: '车架号(VIN)'
        },
        {
          field: 'insurerName', 
          title: '被保险人'
        },
        {
          field: 'endorseType', 
          title: '批改类型', 
          formatter: [
            {
              label: '批增',
              value: '1'
            }, {
              label: '批减', 
              value: '2'
            }, {
              label: '批退', 
              value: '3'
            }
          ]
        },
        {
          field: 'endorsePremium', 
          title: '批改保费'
        },
        {
          field: 'endorseCommission', 
          title: '批改手续费'
        }
      ], 
      childColumns: [
        {
          field: 'insuranceCompanyName',
          title: '承保公司'
        }, {
          field: 'dealerName', 
          title: '机构/经销商'
        }, {
          field: 'endorseSignDate', 
          title: '签单日期'
        }, {
          field: 'endorseWorkedDate', 
          title: '批单生效日期'
        }, {
          field: 'feeConfirmDate', 
          title: '收费确认日期'
        }, {
          field: 'createDealer', 
          title: '录入经销商'
        }, {
          field: 'endorseContent', 
          title: '批文'
        }, {
          field: 'createTime', 
          title: '录入日期'
        }
      ]
    },

    // 操作
    actions: [{
      name: 'add',
      title: '新增',
      type: 'addDialog',
      icon: 'el-icon-plus',
      theme: 'primary',
      mini: false,
      place: 'toolbar',
      dialog: {
        title: '新增',
        type: 'form',
        labelWidth: '140px',
        visible: false,
        formData: {},
        listUrl: '',
        confirmUrl: '/carins/commission/add',
        formRules: {
          policyNO: [
          {
            required: true, 
            message: '请输入保单号',
            trigger: 'blur'
          }],
          endorseNO: [{
            required: true, 
            message: '请输入批改单号',
            trigger: 'blur'
          }],
          endorseType: [{
            required: true, 
            message: '请选择批改类型',
            trigger: 'blur'
          }],
          endorsePremium: [{
            required: true, 
            message: '请输入批改保费',
            trigger: 'blur'
          }],
          endorseCommissionRate: [{
            required: true, 
            message: '请输入批改手续费率',
            trigger: 'blur'
          }],
          endorseCommission: [{
            required: true, 
            message: '请输入批改手续费',
            trigger: 'blur'
          }],
          endorseSignDate: [{
            required: true, 
            message: '请选择批单签单日期',
            trigger: 'blur'
          }],
          feeConfirmDate: [{
            required: true, 
            message: '请选择收费确认日期',
            trigger: 'blur'
          }],
          endorseWorkedDate: [{
            required: true, 
            message: '请选择批单生效日期',
            trigger: 'blur'
          }]
        },
        columns: [
        {
          field: 'policyNO', 
          title: '保单号', 
          type: 'input'
        },
        {
          field: 'endorseNO', 
          title: '批改单号',
          type: 'input'
        },
        {
          field: 'endorseType', 
          title: '批改类型',
          type: 'select', 
          source: [
            {
              label: '批增',
              value: '1'
            }, {
              label: '批减', 
              value: '2'
            }, {
              label: '批退', 
              value: '3'
            }
          ]
        },
        {
          field: 'endorseSignDate', 
          title: '批单签单日期',
          type: 'date'
        },
        {
          field: 'feeConfirmDate', 
          title: '收费确认日期',
          type: 'date'
        },
        {
          field: 'endorseWorkedDate', 
          title: '批单生效日期',
          type: 'date'
        },
        {
          field: 'endorsePremium', 
          title: '批改保费',
          type: 'number'
        },
        {
          field: 'endorseCommissionRate', 
          title: '批改手续费率(%)',
          type: 'number'
        },
        {
          field: 'endorseCommission', 
          title: '批改手续费',
          type: 'number'
        },
        {
          field: 'endorseContent', 
          title: '批文',
          type: 'textarea'
        }
        ]
      }
    }, {
      name: 'edit',
      title: '编辑',
      type: 'editDialog',
      theme: 'text',
      icon: 'el-icon-edit',
      mini: true,
      place: 'tableCell',
      dialog: {
        title: '编辑',
        visible: false,
        formData: {},
        listUrl: '',
        confirmUrl: '/carins/commission/edit',
        type: 'form',
        labelWidth: '140px',
        formRules: {
          policyNO: [
          {
            required: true, 
            message: '请输入保单号',
            trigger: 'blur'
          }],
          endorseNO: [{
            required: true, 
            message: '请输入批改单号',
            trigger: 'blur'
          }],
          endorseType: [{
            required: true, 
            message: '请选择批改类型',
            trigger: 'blur'
          }],
          endorsePremium: [{
            required: true, 
            message: '请输入批改保费',
            trigger: 'blur'
          }],
          endorseCommissionRate: [{
            required: true, 
            message: '请输入批改手续费率',
            trigger: 'blur'
          }],
          endorseCommission: [{
            required: true, 
            message: '请输入批改手续费',
            trigger: 'blur'
          }],
          endorseSignDate: [{
            required: true, 
            message: '请选择批单签单日期',
            trigger: 'blur'
          }],
          feeConfirmDate: [{
            required: true, 
            message: '请选择收费确认日期',
            trigger: 'blur'
          }],
          endorseWorkedDate: [{
            required: true, 
            message: '请选择批单生效日期',
            trigger: 'blur'
          }]
        },
        columns: [
        {
          field: 'policyNO', 
          title: '保单号', 
          type: 'input'
        },
        {
          field: 'endorseNO', 
          title: '批改单号',
          type: 'input'
        },
        {
          field: 'endorseType', 
          title: '批改类型',
          type: 'select', 
          source: [
            {
              label: '批增',
              value: '1'
            }, {
              label: '批减', 
              value: '2'
            }, {
              label: '批退', 
              value: '3'
            }
          ]
        },
        {
          field: 'endorseSignDate', 
          title: '批单签单日期',
          type: 'date'
        },
        {
          field: 'feeConfirmDate', 
          title: '收费确认日期',
          type: 'date'
        },
        {
          field: 'endorseWorkedDate', 
          title: '批单生效日期',
          type: 'date'
        },
        {
          field: 'endorsePremium', 
          title: '批改保费',
          type: 'number'
        },
        {
          field: 'endorseCommissionRate', 
          title: '批改手续费率(%)',
          type: 'number'
        },
        {
          field: 'endorseCommission', 
          title: '批改手续费',
          type: 'number'
        },
        {
          field: 'endorseContent', 
          title: '批文',
          type: 'textarea'
        }
        ]
      }
    }, {
      name: 'delete',
      title: '删除',
      type: 'deleteConfirm',
      theme: 'text',
      icon: 'el-icon-delete',
      mini: true,
      place: 'tableCell',
      dialog: {
        listUrl: '',
        confirmUrl: '/carins/commission/delete'
      }
    }]
  }
}