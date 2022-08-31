<template>
	<div>
		<div class="top">
			<el-button icon="el-icon-circle-plus-outline" @click="drawer = true"
				>添加审批流程</el-button
			>
		</div>
		<!-- 表格开始 -->
		<el-table :data="tableData" style="width: 100%">
			<el-table-column type="index" label="id" width="55"> </el-table-column>
			<el-table-column prop="name" label="流程名称"> </el-table-column>
			<el-table-column label="状态">
				<template slot-scope="scope">
					<el-tag v-if="scope.row.flag == true" type="success">启用</el-tag>
					<el-tag v-else type="danger">禁用</el-tag>
				</template>
			</el-table-column>
			<el-table-column prop="lastCheckName" label="最后修改人">
			</el-table-column>
			<el-table-column prop="lastCheckDate" label="最后修改日期">
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini">编辑</el-button>
					<el-button size="mini" type="danger">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- 表格结束 -->
		<!-- 抽屉 -->
		<el-drawer
			title="我是标题"
			:visible.sync="drawer"
			:with-header="false"
			size="80%"
		>
			<span class="title">审批流程</span>
			<div class="add">
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item label="活动区域">
						<el-select v-model="form.region" placeholder="请选择活动区域">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
				<el-form-item label="状态" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="启用"></el-radio>
      <el-radio label="禁用"></el-radio>
    </el-radio-group>
  </el-form-item>
					<el-form-item label="活动形式">
						<el-input type="textarea" v-model="form.desc"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">立即创建</el-button>
						<el-button>取消</el-button>
					</el-form-item>
				</el-form>
			</div>
		</el-drawer>
		<!-- 分页 -->
		<mypage
			:data="tableData.length"
			:currentPage="currentPage"
			:pageSize="pageSize"
			@handleSizeChange="handleSizeChange"
			@handleCurrentChange="handleCurrentChange"
		></mypage>
	</div>
</template>

<script>
import mypage from "@/components/myPagination.vue"
export default {
	name: "",
	components: { mypage },
	data() {
		return {
			currentPage: 1,
			pageSize: 5,
			tableData: [
				{
					name: "请假流程",
					flag: false,
					lastCheckName: "admin",
					lastCheckDate: "2022年8月20日14:01:28"
				},
				{
					name: "请假流程",
					flag: false,
					lastCheckName: "admin",
					lastCheckDate: "2022年8月20日14:01:28"
				}
			],
			drawer: false,
			form: {
				name: "",
				region: "",
				date1: "",
				date2: "",
				delivery: false,
				type: [],
				resource: "",
				desc: ""
			},
			ruleForm:{
				 resource: '',
			}
		}
	},
	created() {},
	mounted() {},
	methods: {
		handleSizeChange(val) {
			this.pageSize = val
		},
		handleCurrentChange(val) {
			this.currentPage = val
		},
		onSubmit() {
			console.log("submit!")
		}
	}
}
</script>

<style scoped lang="scss">
.title{
	width: 100px;
	height: 80px;
	text-align: center;
	line-height: 80px;
	font-size: 15px;
	// background-color: aqua;
	display: inline-block;
}
.add{
	width: 80%;
	height: 80%;
	margin-top: 30px;
	margin-left: 20px;
}
</style>
