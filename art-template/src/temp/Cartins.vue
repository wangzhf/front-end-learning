<!-- eslint-disable -->
<template>
  <div class="content-container">
    <el-row>
      <el-form ref="searchForm" :inline="true" label-width="80px">
        <el-col key="dealerCode" :span="8">
          <el-form-item label="经销商">
            <im-select
              url=""
              @select-change="(val) => $set(searchForm, 'dealerCode', val)"
            />
          </el-form-item>
        </el-col>
        <el-col key="insuredType" :span="8">
          <el-form-item label="业务类型">
            <im-select
              :source="insuredTypeSource"
              url=""
              @select-change="(val) => $set(searchForm, 'insuredType', val)"
            />
          </el-form-item>
        </el-col>
        <el-col key="companyCode" :span="8">
          <el-form-item label="保险公司">
            <im-select
              url=""
              @select-change="(val) => $set(searchForm, 'companyCode', val)"
            />
          </el-form-item>
        </el-col>
        <el-col key="insuranceType" :span="8">
          <el-form-item label="险种类型">
            <im-select
              :source="insuranceTypeSource"
              url=""
              @select-change="(val) => $set(searchForm, 'insuranceType', val)"
            />
          </el-form-item>
        </el-col>
        <el-col key="isAvailable" :span="8">
          <el-form-item label="状态">
            <im-select
              :source="isAvailableSource"
              url=""
              @select-change="(val) => $set(searchForm, 'isAvailable', val)"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-button :loading="searchLoading" type="primary" icon="el-icon-search" @click="handleSearch">查询</el-button>
        </el-col>
      </el-form>
    </el-row>
    <el-col :span="24">
      <el-button-group>
        <span key="add">
          <el-button
            type="primary"
            icon="el-icon-plus"
            @click="handleAdd('add')"
          >新增</el-button>
        </span>
        <span>
          <el-button v-if="needExpand" :icon="expandBtn.icon" type="primary" @click="handleChildExpand">{{ expandBtn.text }}</el-button>
        </span>
      </el-button-group>
    </el-col>
    <el-table
      ref="multipleTable"
      :data="list"
      :border="true"
      :highlight-current-row="true"
      :expand-row-keys="expandRowKeys"
      row-key="id"
      tooltip-effect="dark"
      class="tab-container"
      @selection-change="handleSelectionChange"
      @row-click="handleRowClick"
      @expand-change="handleRowChange"
    >
      <el-table-column type="selection" align="center" />
      <el-table-column type="index" align="center" label="序号" />
      <!-- 遍历显示普通列 -->
      <el-table-column
        key="dealerName"
        prop="dealerName"
        label="经销商"
        header-align="center"
        sortable
      />
      <el-table-column
        key="insuredType"
        :formatter="(row, column, cellValue, index) => handleTableColumnFormatter(row, column, cellValue, index, 'insuredTypeSource')"
        prop="insuredType"
        label="业务类型"
        header-align="center"
        sortable
      />
      <el-table-column
        key="companyName"
        prop="companyName"
        label="保险公司"
        header-align="center"
        sortable
      />
      <el-table-column
        key="insuranceType"
        :formatter="(row, column, cellValue, index) => handleTableColumnFormatter(row, column, cellValue, index, 'insuranceTypeSource')"
        prop="insuranceType"
        label="险种类型"
        header-align="center"
        sortable
      />
      <el-table-column
        key="commisionRate"
        prop="commisionRate"
        label="佣金率(%)"
        header-align="center"
        sortable
      />
      <el-table-column
        key="startDate"
        prop="startDate"
        label="生效日期"
        header-align="center"
        sortable
      />
      <el-table-column
        key="endDate"
        prop="endDate"
        label="终止日期"
        header-align="center"
        sortable
      />
      <el-table-column
        key="isAvailable"
        prop="isAvailable"
        label="状态"
        header-align="center"
        sortable
      />
      <el-table-column align="center" label="操作" >
        <template slot-scope="scope">
          <span key="edit" style="padding-left: 5px;">
            <el-button
              type="primary"
              icon="el-icon-edit"
              class="mini-btn-style"
              @click.stop="handleEdit(scope.$index, scope.row, 'edit')"
            ></el-button>
          </span>
          <span key="delete" style="padding-left: 5px;">
            <el-button
              type="danger"
              icon="el-icon-delete"
              class="mini-btn-style"
              @click.stop="handleDelete(scope.$index, scope.row, 'delete', '/carins/commission/delete')"
            ></el-button>
          </span>
          <span key="deactivate" style="padding-left: 5px;">
            <el-button
              type="danger"
              icon="el-icon-delete"
              class="mini-btn-style"
              @click.stop="handleConfirm(scope.$index, scope.row, 'deactivate', '/carins/commission/deactivate', '停用')"
            ></el-button>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <div class="page-block">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="10"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        style="float: right;"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <div key="add">
      <!-- form dialog -->
      <el-dialog
        v-el-drag-dialog
        :visible.sync="add.visible"
        :close-on-click-modal="false"
        top="10vh"
        title="新增"
        @close="handleDialogClose('add', 'addForm')"
      >
        <el-scrollbar
          tag="div"
          class="is-empty"
          wrap-class="el-select-dropdown__wrap"
          view-class="el-select-dropdown__list"
        >
          <el-form
            ref="addForm"
            :model="add.formData"
            :rules="add.formRules"
            label-width="120px"
          >
            <el-form-item key="dealerCode" label="经销商" prop="dealerCode">
              <el-col :span="20">
                <im-select
                  url=""
                  @select-change="(val) => $set(add.formData, 'dealerCode', val)"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item key="insuredType" label="业务类型" prop="insuredType">
              <el-col :span="20">
                <im-select
                  :source="addinsuredTypeSource"
                  url=""
                  @select-change="(val) => $set(add.formData, 'insuredType', val)"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item key="companyCode" label="保险公司" prop="companyCode">
              <el-col :span="20">
                <im-select
                  url=""
                  @select-change="(val) => $set(add.formData, 'companyCode', val)"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item key="insuranceType" label="险种类型" prop="insuranceType">
              <el-col :span="20">
                <im-select
                  :source="addinsuranceTypeSource"
                  url=""
                  @select-change="(val) => $set(add.formData, 'insuranceType', val)"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item key="startDate" label="生效日期" prop="startDate">
              <el-col :span="20">
                <el-date-picker
                  v-model="add.formData['startDate']"
                  type="date"
                  placeholder="选择日期"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item key="endDate" label="终止日期" prop="endDate">
              <el-col :span="20">
                <el-date-picker
                  v-model="add.formData['endDate']"
                  type="date"
                  placeholder="选择日期"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item key="commisionRate" label="佣金率(%)" prop="commisionRate">
              <el-col :span="20">
                <el-input-number
                  v-model="add.formData['commisionRate']"
                  :min="0"
                  :max="100"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item key="isAvailable" label="状态" prop="isAvailable">
              <el-col :span="20">
                <im-select
                  :source="addisAvailableSource"
                  url=""
                  @select-change="(val) => $set(add.formData, 'isAvailable', val)"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item key="remark" label="说明" prop="remark">
              <el-col :span="20">
                <el-input
                  v-model="add.formData['remark']"
                  type="textarea"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
          </el-form>
        </el-scrollbar>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="add.visible = false; $refs['addForm'].resetFields();">取消</el-button>
          <el-button type="primary" @click.native="formDialogSubmit('add')">提交</el-button>
        </div>
      </el-dialog>
    </div>
    <div key="edit">
      <!-- form dialog -->
      <el-dialog
        v-el-drag-dialog
        :visible.sync="edit.visible"
        :close-on-click-modal="false"
        top="10vh"
        title="编辑"
        @close="handleDialogClose('edit', 'editForm')"
      >
        <el-scrollbar
          tag="div"
          class="is-empty"
          wrap-class="el-select-dropdown__wrap"
          view-class="el-select-dropdown__list"
        >
          <el-form
            ref="editForm"
            :model="edit.formData"
            :rules="edit.formRules"
            label-width="120px"
          >
            <el-form-item key="dealerCode" label="经销商" prop="dealerCode">
              <el-col :span="20">
                <im-select
                  url=""
                  @select-change="(val) => $set(edit.formData, 'dealerCode', val)"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item key="insuredType" label="业务类型" prop="insuredType">
              <el-col :span="20">
                <im-select
                  :source="editinsuredTypeSource"
                  url=""
                  @select-change="(val) => $set(edit.formData, 'insuredType', val)"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item key="companyCode" label="保险公司" prop="companyCode">
              <el-col :span="20">
                <im-select
                  url=""
                  @select-change="(val) => $set(edit.formData, 'companyCode', val)"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item key="insuranceType" label="险种类型" prop="insuranceType">
              <el-col :span="20">
                <im-select
                  :source="editinsuranceTypeSource"
                  url=""
                  @select-change="(val) => $set(edit.formData, 'insuranceType', val)"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item key="startDate" label="生效日期" prop="startDate">
              <el-col :span="20">
                <el-date-picker
                  v-model="edit.formData['startDate']"
                  type="date"
                  placeholder="选择日期"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item key="endDate" label="终止日期" prop="endDate">
              <el-col :span="20">
                <el-date-picker
                  v-model="edit.formData['endDate']"
                  type="date"
                  placeholder="选择日期"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item key="commisionRate" label="佣金率(%)" prop="commisionRate">
              <el-col :span="20">
                <el-input-number
                  v-model="edit.formData['commisionRate']"
                  :min="0"
                  :max="100"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item key="isAvailable" label="状态" prop="isAvailable">
              <el-col :span="20">
                <im-select
                  :source="editisAvailableSource"
                  url=""
                  @select-change="(val) => $set(edit.formData, 'isAvailable', val)"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item key="remark" label="说明" prop="remark">
              <el-col :span="20">
                <el-input
                  v-model="edit.formData['remark']"
                  type="textarea"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
          </el-form>
        </el-scrollbar>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="edit.visible = false; $refs['editForm'].resetFields();">取消</el-button>
          <el-button type="primary" @click.native="formDialogSubmit('edit')">提交</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import elDragDialog from '@/directive/el-dragDialog' // base on element-ui
import ImSelect from '@/components/Im/Select'
import commonAPI from '@/api/common'
import selectTree from '@/components/Im/SelectTree'
import ImTree from '@/components/Im/Tree'
import ImTable from '@/components/Im/Table'
// import treeter from '@/components/Tree/treeter'
export default {
  name: 'Table',
  directives: { elDragDialog },
  components: {
    ImSelect,
    'im-el-select-tree': selectTree,
    ImTree,
    ImTable
  },
  props: {
    // 页面配置数据
    pageData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      // 列表集合
      list: [],
      searchForm: {
        dealerCode: '',
        insuredType: '',
        companyCode: '',
        insuranceType: '',
        isAvailable: ''
      },
      blankSpace: '',
      // 遍历所有存储的数据
      // 
      insuredTypeSource: [{"label":"全部","value":""},{"label":"新保","value":"INS_NEW"},{"label":"续保","value":"INS_RENEWAL"}],
      insuranceTypeSource: [{"label":"请选择","value":""},{"label":"交强险","value":"compulsory"},{"label":"商业险","value":"commercial"}],
      isAvailableSource: [{"label":"启用","value":"1"},{"label":"停用","value":"0"}],
      add: {"confirmUrl":"/carins/commission/add","visible":false,"formData":{},"formRules":{"dealerCode":[{"required":true,"message":"请选择经销商","trigger":"blur"}],"insuredType":[{"required":true,"message":"请选择业务类型","trigger":"blur"}],"companyName":[{"required":true,"message":"请选择保险公司","trigger":"blur"}],"insuranceType":[{"required":true,"message":"请选择险种类型","trigger":"blur"}],"commisionRate":[{"required":true,"message":"请输入佣金率(%)","trigger":"blur"}],"startDate":[{"required":true,"message":"请选择生效日期","trigger":"blur"}],"endDate":[{"required":true,"message":"请选择终止日期","trigger":"blur"}],"isAvailable":[{"required":true,"message":"请选择状态","trigger":"blur"}]}},
      addinsuredTypeSource: [{"label":"全部","value":""},{"label":"新保","value":"INS_NEW"},{"label":"续保","value":"INS_RENEWAL"}],
      addinsuranceTypeSource: [{"label":"请选择","value":""},{"label":"交强险","value":"compulsory"},{"label":"商业险","value":"commercial"}],
      addisAvailableSource: [{"label":"启用","value":"1"},{"label":"停用","value":"0"}],
      edit: {"confirmUrl":"/carins/commission/edit","visible":false,"formData":{},"formRules":{"dealerCode":[{"required":true,"message":"请选择经销商","trigger":"blur"}],"insuredType":[{"required":true,"message":"请选择业务类型","trigger":"blur"}],"companyName":[{"required":true,"message":"请选择保险公司","trigger":"blur"}],"insuranceType":[{"required":true,"message":"请选择险种类型","trigger":"blur"}],"commisionRate":[{"required":true,"message":"请输入佣金率(%)","trigger":"blur"}],"startDate":[{"required":true,"message":"请选择生效日期","trigger":"blur"}],"endDate":[{"required":true,"message":"请选择终止日期","trigger":"blur"}],"isAvailable":[{"required":true,"message":"请选择状态","trigger":"blur"}]}},
      editinsuredTypeSource: [{"label":"全部","value":""},{"label":"新保","value":"INS_NEW"},{"label":"续保","value":"INS_RENEWAL"}],
      editinsuranceTypeSource: [{"label":"请选择","value":""},{"label":"交强险","value":"compulsory"},{"label":"商业险","value":"commercial"}],
      editisAvailableSource: [{"label":"启用","value":"1"},{"label":"停用","value":"0"}],
      // 列表默认展开的keys
      expandRowKeys: [],
      childColumnWidth: 4,
      // 分页
      total: 0,
      currentPage: 1,
      pageSize: 10,
      // 是否需要子表格
      needExpand: false,
      // 记录多选记录
      multipleSelection: [],
      searchLoading: false
    }
  },
  computed: {
    disabledBatchBtn() {
      return this.multipleSelection.length === 0
    },
    expandBtn() {
      let text = ''
      let icon = ''
      if (this.expandRowKeys && this.expandRowKeys.length > 0) {
        text = '关闭所有行'
        icon = 'el-icon-arrow-down'
      } else {
        text = '展开所有行'
        icon = 'el-icon-arrow-right'
      }
      return {
        text,
        icon
      }
    }
  },
  created() {
    this.load()
  },
  methods: {
    // load the list.
    handleSearch() {
      this.searchLoading = true
      this.load()
    },
    load() {
      const params = {
        ...this.searchForm,
        currentPage: this.currentPage,
        pageSize: this.pageSize
      }
      const searchUrl = '/carins/commission/list'
      commonAPI.Post(searchUrl, params).then(res => {
        this.list = res.data.list
        this.total = res.data.total
        this.searchLoading = false
      }).catch(err => {
        console.log(err)
        this.$message({
          type: 'error',
          message: '数据加载失败，请稍后重试'
        })
        this.searchLoading = false
      })
    },
    handleAdd(type) {
      this[type].visible = true
    },
    handleEdit(index, row, type) {
      this[type].formData = Object.assign({}, row)
      this[type].visible = true
    },
    handleDelete(index, row, type, url) {
      this.$confirm('确认删除该记录吗？', '提示', {
        type: 'warning'
      }).then(() => {
        commonAPI.Post(url, { id: row.id }).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.load()
        })
      }).catch(() => {
        // cancel
      })
    },
    handleConfirm(index, row, type, url, name) {
      this.$confirm('确认'+name+'该记录吗？', '提示', {
        type: 'warning'
      }).then(() => {
        commonAPI.Post(url, { id: row.id }).then(res => {
          this.$message({
            type: 'success',
            message: name + '成功'
          })
          this.load()
        })
      }).catch(() => {
        // cancel
      })
    },
    // 批量删除
    batchDelete(url) {
      const ids = this.multipleSelection.map(item => item.id).toString()
      this.$confirm('确认删除选中记录吗？', '提示', {
        type: 'warning'
      }).then(() => {
        commonAPI.Post(url, { ids: ids }).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
        })
        this.load()
      }).catch(() => {
        // ... cancel
      })
    },
    // other event
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleRowClick(row) {
      if (this.needExpand) {
        this.$refs.multipleTable.toggleRowExpansion(row)
      }
    },
    handleRowChange(row, expandedRows) {
      if (expandedRows.length > 0) {
        this.expandRowKeys = expandedRows.map(function(val) {
          return val.id
        })
      } else {
        this.expandRowKeys = []
      }
    },
    // 分页
    handleSizeChange(val) {
      this.pageSize = val
      this.load()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.load()
    },
    // 展开子表格
    handleChildExpand() {
      if (this.expandRowKeys.length > 0) {
        this.expandRowKeys = []
      } else {
        if (this.list && this.list.length > 0) {
          for (let i = 0; i < this.list.length; i++) {
            this.expandRowKeys.push(this.list[i].id)
          }
        }
      }
    },
    // 编辑提交
    formDialogSubmit(type) {
      const form = type + 'Form'
      console.log(this.$refs)
      this.$refs[form].validate(valid => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            const param = Object.assign({}, this[type].formData)
            commonAPI.Post(this[type].confirmUrl, param).then(res => {
              this.$message({
                type: 'success',
                message: '操作成功'
              })
              this.$refs[form].resetFields()
              this[type].visible = false
              this.load()
            })
          }).catch(() => {
            // cancel
          })
        }
      })
    },
    // dialog 显示
    handleDialogVisible(index, row, type) {
      const dialog = this[type]
      dialog.linkId = row.id
      const param = {
        id: row.id
      }
      dialog.queryData = param
      dialog.loading = true
      dialog.visible = true
    },
    // dialog 确认事件
    handleDialogConfirm(type, ref) {
      const checkedKeys = this.$refs[ref].getSelection().map(item => {
        return item.id
      })
      const dialog = this[type]
      const params = {
        id: dialog.linkId,
        data: checkedKeys
      }
      commonAPI.Post(dialog.confirmUrl, params).then(res => {
        this.$message({
          type: 'success',
          message: '操作成功'
        })
        dialog.visible = false
        dialog.linkId = null
        dialog.loading = false
      })
    },
    handleDialogClose(type, ref) {
      if (this[type]) {
        const action = this[type]
        // if (action.visible) action.visible = false
        if (action.loading) action.loading = false
        if (action.linkId) action.linkId = null
        if (typeof this.$refs[ref].close === 'function') {
          this.$refs[ref].close()
        }
      }
    }, 
    handleTableColumnFormatter(row, column, cellValue, index, type) {
      const allValues = this[type]
      if (allValues && allValues.length > 0) {
        for (let i = 0; i < allValues.length; i++) {
          if (cellValue === allValues[i].value) {
            return allValues[i].label
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.tab-container{
  margin-top: 20px;
}
.page-block {
  padding-right: 20px;
  margin-top: 10px;
  margin-bottom: 30px;
  height: 100px;
}
.child-table-expand {
  font-size: 0;
}
.child-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.child-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.mini-btn-style {
  /deep/ span {
    margin-left: 0px;
  }
}
.el-scrollbar__view {
  .el-form {
    margin-right: 10px;
  }
}
/deep/ .el-scrollbar{
  .el-select-dropdown__wrap.el-scrollbar__wrap {
    max-height: 350px;
  }
}
</style>