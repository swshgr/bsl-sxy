<template>
	<div class="box">
		<div class="box1">
			<span class="text">OA系统登录</span>
			<div>
				<el-form ref="form" :model="form" label-width="100px" class="form">
					<el-form-item>
						<input
							class="shuru"
							v-model="form.name"
							placeholder="请输入用户名"
						/>

						<span class="nameicon el-icon-user"> </span>

						<input class="shuru" v-model="form.pawe" placeholder="请输入密码" />
					</el-form-item>
					<span class="wanji" @click="dialogFormVisible = true"
						>忘记密码？</span
					>
					<span class="nameicon1 el-icon-lock"> </span>
					<el-form-item>
						<span class="zuo">
							<input
								class="verify"
								v-model="form.pawe"
								placeholder="请输入验证码"
							/>
						</span>
						<span class="you">
							<el-button round>验证码图片 </el-button>
						</span>
					</el-form-item>

					<el-form-item>
						<el-button class="denglu" @click="dialog" round>登录</el-button>
					</el-form-item>
				</el-form>

				<el-dialog title="修改密码" :visible.sync="dialogFormVisible">
					<el-form :model="form1">
						<el-form-item label="用户名" :label-width="formLabelWidth">
							<el-input v-model="form1.name" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="新密码" :label-width="formLabelWidth">
							<el-input v-model="form1.name" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="再次输入" :label-width="formLabelWidth">
							<el-input v-model="form1.name" autocomplete="off"></el-input>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="dialogFormVisible = false" round
							>取 消</el-button
						>
						<el-button type="primary" @click="dialogFormVisible = false" round
							>确 定</el-button
						>
					</div>
				</el-dialog>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: '',
				pawe: ''
			},
			dialogFormVisible: false,
			form1: {
				name: ''
			},
			formLabelWidth: '120px'
		};
	},
	methods: {
		dialog: {}
	}
};
</script>

<style scoped>
.box {
	background-image: url(/public/login.png);
	width: 100%;
	height: 100%;
	background-size: 100% 100%;
	box-sizing: border-box;
	padding-top: 200px;
}
* {
	margin: 0;
	padding: 0;
}
.box1 {
	width: 500px;
	height: 400px;
	background-color: white;
	margin: auto;
	border-radius: 25px 25px 25px 25px;
	padding-top: 20px;
	/* margin-top:300px; */
	text-align: center;
}
.text {
	line-height: 10px;
	font-size: 25px;
}
.form {
	width: 450px;
	height: 300px;
	margin: auto;
	text-align: center;
	margin-left: -40px;

	margin-top: 15px;
	/* position: relative; */
}
.el-form-item {
	/* line-height: 20px; */
	margin-top: 20px;
	position: relative;
}
.shuru {
	width: 400px;
	height: 50px;
	border-radius: 20px;
	border: 0.5px solid rgba(0, 0, 0, 0.282);
	padding-left: 30px;
}
.denglu {
	width: 300px;
	height: 50px;
	margin-left: 20px;
	background-color: #d9bffb;
	color: white;
}
.verify {
	width: 200px;
	height: 50px;
	border-radius: 20px;
	border: 0.5px solid rgba(0, 0, 0, 0.282);
	padding-left: 30px;
}
.you {
	margin-left: 30px;
}
.wanji {
	color: #f6c472;
	font-size: 15px;
	margin: 0px -450px 0px 30px;
}
.nameicon {
	display: block;
	width: 20px;
	height: 20px;
	position: absolute;
	top: 17px;
	left: 12px;
}
.shuru[data-v-b631fc7c] {
	margin-bottom: 20px !important;
}
.nameicon1 {
	display: block;
	width: 20px;
	height: 20px;
	position: absolute;
	top: 17px;
	left: 12px;
}
</style>
