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
        }
      ]
    },

    // table展示
    table: {
      columns: [{
        field: 'dealerName', 
        title: '经销商'
      }, {
        field: 'insuredType', 
        title: '业务类型', 
        formatter: [
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
      }, {
        field: 'companyName', 
        title: '保险公司'
      },{
        field: 'insuranceType', 
        title: '险种类型', 
        formatter: [
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
      },{
        field: 'commisionRate', 
        title: '佣金率(%)'
      },{
        field: 'startDate', 
        title: '生效日期'
      },{
        field: 'endDate', 
        title: '终止日期'
      },{
        field: 'isAvailable', 
        title: '状态'
      }]
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
        labelWidth: '120px',
        visible: false,
        formData: {},
        listUrl: '',
        confirmUrl: '/carins/commission/add',
        formRules: {
          dealerCode: [{
            required: true, 
            message: '请选择经销商',
            trigger: 'blur'
          }],
          insuredType: [{
            required: true, 
            message: '请选择业务类型',
            trigger: 'blur'
          }],
          companyName: [{
            required: true, 
            message: '请选择保险公司',
            trigger: 'blur'
          }]
          ,
          insuranceType: [{
            required: true, 
            message: '请选择险种类型',
            trigger: 'blur'
          }]
          ,
          commisionRate: [{
            required: true, 
            message: '请输入佣金率(%)',
            trigger: 'blur'
          }]
          ,
          startDate: [{
            required: true, 
            message: '请选择生效日期',
            trigger: 'blur'
          }]
          ,
          endDate: [{
            required: true, 
            message: '请选择终止日期',
            trigger: 'blur'
          }]
          ,
          isAvailable: [{
            required: true, 
            message: '请选择状态',
            trigger: 'blur'
          }]
        },
        columns: [{
          field: 'dealerCode', 
          title: '经销商', 
          type: 'select'
        }, {
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
        }, {
          field: 'companyCode', 
          title: '保险公司', 
          type: 'select'
        }, {
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
        }, {
          field: 'startDate', 
          title: '生效日期', 
          type: 'date'
        }, {
          field: 'endDate', 
          title: '终止日期', 
          type: 'date'
        }, {
          field: 'commisionRate', 
          title: '佣金率(%)', 
          type: 'number',
          option: {
            min: 0,
            max: 100
          }
        }, {
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
        }, {
          field: 'remark', 
          title: '说明', 
          type: 'textarea'
        }]
      }
    }, {
      name: 'edit',
      title: '编辑',
      type: 'editDialog',
      theme: 'primary',
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
        labelWidth: '120px',
        formRules: {
          dealerCode: [{
            required: true, 
            message: '请选择经销商',
            trigger: 'blur'
          }],
          insuredType: [{
            required: true, 
            message: '请选择业务类型',
            trigger: 'blur'
          }],
          companyName: [{
            required: true, 
            message: '请选择保险公司',
            trigger: 'blur'
          }]
          ,
          insuranceType: [{
            required: true, 
            message: '请选择险种类型',
            trigger: 'blur'
          }]
          ,
          commisionRate: [{
            required: true, 
            message: '请输入佣金率(%)',
            trigger: 'blur'
          }]
          ,
          startDate: [{
            required: true, 
            message: '请选择生效日期',
            trigger: 'blur'
          }]
          ,
          endDate: [{
            required: true, 
            message: '请选择终止日期',
            trigger: 'blur'
          }]
          ,
          isAvailable: [{
            required: true, 
            message: '请选择状态',
            trigger: 'blur'
          }]
        },
        columns: [{
          field: 'dealerCode', 
          title: '经销商', 
          type: 'select'
        }, {
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
        }, {
          field: 'companyCode', 
          title: '保险公司', 
          type: 'select'
        }, {
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
        }, {
          field: 'startDate', 
          title: '生效日期', 
          type: 'date'
        }, {
          field: 'endDate', 
          title: '终止日期', 
          type: 'date'
        }, {
          field: 'commisionRate', 
          title: '佣金率(%)', 
          type: 'number',
          option: {
            min: 0,
            max: 100
          }
        }, {
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
        }, {
          field: 'remark', 
          title: '说明', 
          type: 'textarea'
        }]
      }
    }, {
      name: 'delete',
      title: '删除',
      type: 'deleteConfirm',
      theme: 'danger',
      icon: 'el-icon-delete',
      mini: true,
      place: 'tableCell',
      dialog: {
        listUrl: '',
        confirmUrl: '/carins/commission/delete'
      }
    }, {
      name: 'deactivate',
      title: '停用',
      type: 'confirm',
      theme: 'danger',
      icon: 'el-icon-delete',
      mini: true,
      place: 'tableCell',
      dialog: {
        listUrl: '',
        confirmUrl: '/carins/commission/deactivate'
      }
    }]
  }
}