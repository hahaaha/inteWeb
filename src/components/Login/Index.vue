<template>
	<el-row class="login-row">
		<el-col :span="14" :offset="5">
			<el-form
				:model="ruleForm"
				status-icon
				:rules="rules"
				ref="ruleForm"
				label-width="100px"
				class="login-form"
			>
				<el-form-item label="账号" prop="pass">
					<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="checkPass">
					<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</el-col>
	</el-row>
</template>
<script>
export default {
	data() {
		return {
			ruleForm: {
				pass: '',
				checkPass: '',
				age: ''
			},
			rules: {
				pass: [
					{ trigger: 'blur' }
				],
				checkPass: [
					{ trigger: 'blur' }
				]
			}
		}
	},
	methods: {
		submitForm(formName) {
			this.$router.push("/Admin/Home")
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		}
	}
}
</script>
<style>
.login-row {
	display: flex;
	height: 100vh;
	align-items: center;
	background-color: #52616b;
	padding-top: -82px;
}
.el-form-item__label {
	color: rgb(201, 214, 223);
	font-weight: bold;
}
</style>