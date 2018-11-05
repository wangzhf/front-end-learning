<!-- eslint-disable -->
<template>
  <div class="content-container">
    <el-row>
      <el-form ref="searchForm" :inline="true" label-width="80px">
        <el-col key="userName" :span="8">
          <el-form-item label="用户姓名">
            <el-input v-model.trim="searchForm['userName']" clearable />
          </el-form-item>
        </el-col>
        <el-col key="userCode" :span="8">
          <el-form-item label="用户代码">
            <el-input v-model.trim="searchForm['userCode']" clearable />
          </el-form-item>
        </el-col>
        <el-col key="province" :span="8">
          <el-form-item label="省">
            <im-select
              url="/common/province/list"
              @select-change="(val) => $set(searchForm, 'province', val)"
            />
          </el-form-item>
        </el-col>
        <el-col key="city" :span="8">
          <el-form-item label="市">
            <im-select
              :dependon-value="searchForm['province'] + ''"
              dependon-key="province"
              :key-props="searchKeyProps"
              url="/common/city/list"
              @select-change="(val) => $set(searchForm, 'city', val)"
            />
          </el-form-item>
        </el-col>
        <el-col key="menu" :span="8">
          <el-form-item label="菜单">
            <im-el-select-tree
              url="/menu/list"
              @select-change="(val) => $set(searchForm, 'menu', val)"
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
        <span key="batchDelete">
          <el-button
            :disabled="disabledBatchBtn"
            type="primary"
            icon="el-icon-delete"
            @click="batchDelete('/user/batchDelete')"
          >批量删除</el-button>
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
      <el-table-column v-if="needExpand" type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="child-table-expand">
            <!-- 遍历显示子列 -->
            <el-form-item
              key="sex"
              :span="childColumnWidth"
              label="性别"
            >
              <span v-text="props.row['sex']" />
            </el-form-item>
            <el-form-item
              key="age"
              :span="childColumnWidth"
              label="年龄"
            >
              <span v-text="props.row['age']" />
            </el-form-item>
            <el-form-item
              key="birthday"
              :span="childColumnWidth"
              label="生日"
            >
              <span v-text="props.row['birthday']" />
            </el-form-item>
            <el-form-item
              key="address"
              :span="childColumnWidth"
              label="地址"
            >
              <span v-text="props.row['address']" />
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column type="selection" align="center" />
      <el-table-column type="index" align="center" label="序号" />
      <!-- 遍历显示普通列 -->
      <el-table-column
        key="userName"
        prop="userName"
        label="用户姓名"
        header-align="center"
        sortable
      />
      <el-table-column
        key="userCode"
        prop="userCode"
        label="用户代码"
        header-align="center"
        sortable
      />
      <el-table-column align="center" label="操作" >
        <template slot-scope="scope">
          <span key="assignUser" style="padding-left: 5px;">
            <el-button
              type="primary"
              icon="el-icon-fa-user-friends"
              class="mini-btn-style"
              @click.stop="handleDialogVisible(scope.$index, scope.row, 'assignUser')"
            ></el-button>
          </span>
          <span key="assignRole" style="padding-left: 5px;">
            <el-button
              type="primary"
              icon="el-icon-fa-users"
              class="mini-btn-style"
              @click.stop="handleDialogVisible(scope.$index, scope.row, 'assignRole')"
            ></el-button>
          </span>
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
              @click.stop="handleDelete(scope.$index, scope.row, 'delete', '/user/delete')"
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
    <div key="assignUser">
      <!-- table dialog -->
      <el-dialog
        v-el-drag-dialog
        :visible.sync="assignUser.visible"
        :close-on-click-modal="false"
        title="关联用户"
        @close="handleDialogClose('assignUser', 'assignUserTableDialog')"
      >
        <im-table
          ref="assignUserTableDialog"
          :should-loading="assignUser.loading"
          :table-columns="assignUser.columnProps"
          url="/user/userList"
        />
        <span slot="footer" class="dialog-footer">
          <el-button @click.native="assignUser.visible = false">取 消</el-button>
          <el-button type="primary" @click="handleDialogConfirm('assignUser', 'assignUserTableDialog')">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <div key="assignRole">
      <!-- tree dialog -->
      <el-dialog
        v-el-drag-dialog
        :visible.sync="assignRole.visible"
        :close-on-click-modal="false"
        title="关联角色"
        @close="handleDialogClose('assignRole', 'assignRoleTreeDialog')"
      >
        <im-tree
          ref="assignRoleTreeDialog"
          :query-data="assignRole.queryData"
          :is-tree-dialog-loading="assignRole.loading"
          :key-props="assignRole.keyProps"
          url="/user/role"
        />
        <span slot="footer" class="dialog-footer">
          <el-button @click.native="assignRole.visible = false">取 消</el-button>
          <el-button type="primary" @click="handleDialogConfirm('assignRole', 'assignRoleTreeDialog')">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <div key="edit">
      <!-- form dialog -->
      <el-dialog
        v-el-drag-dialog
        :visible.sync="edit.visible"
        :close-on-click-modal="false"
        title="编辑"
        @close="handleDialogClose('edit', 'editForm')"
      >
        <el-form
          ref="editForm"
          :model="edit.formData"
          :rules="edit.formRules"
          label-width="80px"
        >
          <el-form-item key="userName" label="用户姓名" prop="userName">
            <el-input
              v-model="edit.formData['userName']"
              auto-complete="off"
            />
          </el-form-item>
          <el-form-item key="userCode" label="用户代码" prop="userCode">
            <el-input
              v-model="edit.formData['userCode']"
              auto-complete="off"
            />
          </el-form-item>
          <el-form-item key="sex" label="性别" prop="sex">
            <el-radio-group v-model="edit.formData['sex']">
              <el-radio 
                key="1" 
                label="1" 
                class="radio"
              >
                男
              </el-radio>
              <el-radio 
                key="0" 
                label="0" 
                class="radio"
              >
                女
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item key="age" label="年龄" prop="age">
            <el-input-number
              v-model="edit.formData['age']"
              :min="0"
              :max="200"
            />
          </el-form-item>
          <el-form-item key="birthday" label="生日" prop="birthday">
            <el-date-picker
              v-model="edit.formData['birthday']"
              type="date"
              placeholder="选择日期"
            />
          </el-form-item>
          <el-form-item key="address" label="地址" prop="address">
            <el-input
              v-model="edit.formData['address']"
              type="textarea"
            />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="edit.visible = false; $refs['editForm'].resetFields();">取消</el-button>
          <el-button type="primary" @click.native="formDialogSubmit('edit')">提交</el-button>
        </div>
      </el-dialog>
    </div>
    <div key="add">
      <!-- form dialog -->
      <el-dialog
        v-el-drag-dialog
        :visible.sync="add.visible"
        :close-on-click-modal="false"
        title="新增"
        @close="handleDialogClose('add', 'addForm')"
      >
        <el-form
          ref="addForm"
          :model="add.formData"
          :rules="add.formRules"
          label-width="80px"
        >
          <el-form-item key="userName" label="用户姓名" prop="userName">
            <el-input
              v-model="add.formData['userName']"
              auto-complete="off"
            />
          </el-form-item>
          <el-form-item key="userCode" label="用户代码" prop="userCode">
            <el-input
              v-model="add.formData['userCode']"
              auto-complete="off"
            />
          </el-form-item>
          <el-form-item key="sex" label="性别" prop="sex">
            <el-radio-group v-model="add.formData['sex']">
              <el-radio 
                key="1" 
                label="1" 
                class="radio"
              >
                男
              </el-radio>
              <el-radio 
                key="0" 
                label="0" 
                class="radio"
              >
                女
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item key="age" label="年龄" prop="age">
            <el-input-number
              v-model="add.formData['age']"
              :min="0"
              :max="200"
            />
          </el-form-item>
          <el-form-item key="birthday" label="生日" prop="birthday">
            <el-date-picker
              v-model="add.formData['birthday']"
              type="date"
              placeholder="选择日期"
            />
          </el-form-item>
          <el-form-item key="address" label="地址" prop="address">
            <el-input
              v-model="add.formData['address']"
              type="textarea"
            />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="add.visible = false; $refs['addForm'].resetFields();">取消</el-button>
          <el-button type="primary" @click.native="formDialogSubmit('add')">提交</el-button>
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
        userName: '',
        userCode: '',
        province: '',
        city: '',
        menu: ''
      },
      blankSpace: '',
      // 遍历所有存储的数据
      // 
      // searchKeyProps: {"pid":"pid"},
      // 
      searchKeyProps: {"pid":"pid"},
      assignUser: {"confirmUrl":"/user/userList","visible":false,"loading":false,"columnProps":[{"propName":"userName","label":"姓名"},{"propName":"userCode","label":"代码"}]},
      assignRole: {"confirmUrl":"/user/role/add","visible":false,"queryData":{},"loading":false,"keyProps":{"children":"children","label":"roleName"}},
      edit: {"confirmUrl":"/user/edit","visible":false,"formData":{},"formRules":{"userName":[{"required":true,"message":"请输入活动名称","trigger":"blur"},{"min":3,"max":5,"message":"长度在 3 到 5 个字符","trigger":"blur"}]}},
      add: {"confirmUrl":"/user/add","visible":false,"formData":{},"formRules":{"userName":[{"required":true,"message":"请输入活动名称","trigger":"blur"},{"min":3,"max":5,"message":"长度在 3 到 5 个字符","trigger":"blur"}]}},
      // 列表默认展开的keys
      expandRowKeys: [],
      childColumnWidth: 4,
      // 分页
      total: 0,
      currentPage: 1,
      pageSize: 10,
      // 是否需要子表格
      needExpand: true,
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
      const searchUrl = '/user/userList'
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
</style>