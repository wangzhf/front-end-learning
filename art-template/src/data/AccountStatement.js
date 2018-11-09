module.exports = {
  pageId: 1,
  pageType: 0,
  pageName: '佣金率管理',
  pageCode: 'commissionManager',
  pageData: {
    // 搜索
    searchArea: {
      url: '/carins/commission/list',
      labelWidth: '125px',
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
          field: 'insuranceCompanyName',
          title: '承保保险公司', 
          type: 'select'
        },
        {
          field: 'dealerName', 
          title: '机构/经销商', 
          type: 'selectTree'
        },
        {
          field: 'balanceStatus', 
          title: '对账状态', 
          type: 'select', 
          source: [
            {
              label: '未对账', 
              value: '0'
            }, {
              label: '对账成功', 
              value: '1'
            }, {
              label: '对账失败', 
              value: '2'
            }
          ]
        },
        {
          field: 'balanceDate', 
          title: '对账日期', 
          type: 'date'
        },
        {
          field: 'feeSettledStartDate', 
          title: '手续费结算日期', 
          span: 8,
          placeholder: '选择开始时间',
          type: 'date'
        },
        {
          field: 'feeSettledEndDate', 
          title: '手续费结算日期', 
          span: 8,
          placeholder: '选择结束时间',
          type: 'date'
        },
        {
          field: 'issueStartDate', 
          title: '出单开始日期', 
          span: 8,
          type: 'date'
        },
        {
          field: 'issueEndDate', 
          title: '出单结束日期', 
          span: 8,
          type: 'date'
        },
        {
          field: 'settlementID', 
          title: '结算单号', 
          type: 'input'
        }
      ]
    },

    // table展示
    table: {
      columns: [
        {
          field: 'settlementNO', 
          title: '结算单号', 
          width: '100'
        }, 
        {
          field: 'policyNO', 
          title: '保单号', 
          width: '100'
        }, 
        {
          field: 'endorseNO', 
          title: '批改单号', 
          width: '100'
        },
        {
          field: 'endorseType', 
          title: '批改类型', 
          width: '100',
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
          field: 'insuranceCategory', 
          title: '险类', 
          width: '100'
        }, 
        {
          field: 'insuranceKind', 
          title: '险种', 
          width: '100'
        }, 
        {
          field: 'insuranceCompanyName', 
          title: '承保公司', 
          width: '100'
        }, 
        {
          field: 'issueDate', 
          title: '出单日期', 
          width: '100'
        }, 
        {
          field: 'feeSettledDate', 
          title: '手续费结算日期', 
          width: '130'
        }, 
        {
          field: 'receivablePremium', 
          title: '应收保费', 
          width: '100'
        }, 
        {
          field: 'receivedPremium', 
          title: '实收保费', 
          width: '100'
        }, 
        {
          field: 'receivableFeeRate', 
          title: '应收手续费率', 
          width: '130'
        }, 
        {
          field: 'receivedFeeRate', 
          title: '实收手续费率', 
          width: '130'
        }, 
        {
          field: 'receivableFee', 
          title: '应收手续费', 
          width: '130'
        }, 
        {
          field: 'receivedFee', 
          title: '实收手续费', 
          width: '130'
        }, 
        {
          field: 'taxation', 
          title: '税费', 
          width: '100'
        }, 
        {
          field: 'settlementStatus', 
          title: '结算状态', 
          formatter: [
            {
              label: '未结算',
              value: '0'
            }, {
              label: '已结算', 
              value: '1'
            }
          ], 
          width: '100'
        }, 
        {
          field: 'balanceDate', 
          title: '对账日期', 
          width: '100'
        },
        {
          field: 'balanceStatus', 
          title: '对账状态', 
          formatter: [
            {
              label: '未对账', 
              value: '0'
            },
            {
              label: '对账成功', 
              value: '1'
            },
            {
              label: '已对账', 
              value: '2'
            }
          ], 
          width: '100'
        },
        {
          field: 'clerk', 
          title: '业务员', 
          width: '100'
        }
      ]
    },

    // 操作
    actions: [
    {
      name: 'feeStatementImport',
      title: '导入手续费对账单',
      type: 'addDialog',
      icon: 'el-icon-plus',
      theme: 'primary',
      mini: false,
      place: 'toolbar',
      dialog: {
        title: '手续费对账单信息导入',
        type: 'form',
        labelWidth: '140px',
        visible: false,
        width: '500px',
        formData: {},
        listUrl: '',
        confirmUrl: '/carins/commission/add',
        formRules: {
          settlementNO: [
          {
            required: true, 
            message: '请输入结算单号',
            trigger: 'blur'
          }]
        },
        columns: [
        {
          field: 'settlementNO', 
          title: '结算单号', 
          type: 'input'
        }]
      }
    }, 
    {
      name: 'batchEndorse',
      title: '批量手动对账',
      type: 'addDialog',
      icon: 'el-icon-plus',
      theme: 'primary',
      mini: false,
      place: 'toolbar',
      dialog: {
        title: '批量手动对账',
        type: 'form',
        labelWidth: '140px',
        visible: false,
        width: '500px',
        formData: {},
        listUrl: '',
        confirmUrl: '/carins/commission/add',
        formRules: {
          settlementNO: [
          {
            required: true, 
            message: '请输入结算单号',
            trigger: 'blur'
          }]
        },
        columns: [
        {
          field: 'settlementNO', 
          title: '结算单号', 
          type: 'input'
        }]
      }
    }, 
    {
      name: 'addSettlement',
      title: '结算录入',
      type: 'addDialog',
      icon: 'el-icon-plus',
      theme: 'primary',
      mini: false,
      place: 'toolbar',
      dialog: {
        title: '手续费结算信息录入',
        type: 'form',
        labelWidth: '140px',
        visible: false,
        width: '500px',
        formData: {},
        listUrl: '',
        confirmUrl: '/carins/commission/add',
        formRules: {
          feeSettledDate: [
          {
            required: true, 
            message: '请输入手续费结算日期',
            trigger: 'blur'
          }]
        },
        columns: [
        {
          field: 'settlementNO', 
          title: '结算单号', 
          type: 'input'
        }, 
        {
          field: 'feeSettledDate', 
          title: '手续费结算日期', 
          type: 'date'
        }
        ]
      }
    }]
  }
}