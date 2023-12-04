<script>
export default {
  name: "Home",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass1 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      activeName: "1",
      ruleForm: {
        username: "",
        pass: "",
      },
      rules: {
        username: [{ validator: validatePass1, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <div class="login">
      <h2
        style="width: 100%; height: 80px; line-height: 80px; text-align: center"
      >
        航空货运运输管理系统
      </h2>
      <el-tabs
        class="tabs"
        stretch
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          style="width: 50%; margin-top: 30px; font-weight: bold"
          label="登录"
          name="1"
        >
          <el-form
            style="position: relative; height: 200px"
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            label-position="left"
          >
            <el-form-item
              style="margin-left: 30px; font-weight: bold"
              label-width="60px"
              label="账号:"
              prop="username"
            >
              <el-input
                type="text"
                style="width: 230px"
                v-model="ruleForm.username"
              ></el-input>
            </el-form-item>
            <el-form-item
              style="margin-left: 30px; font-weight: bold"
              label-width="60px"
              label="密码:"
              prop="pass"
            >
              <el-input
                style="width: 230px"
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item style="position: absolute; bottom: 0; left: -78px">
              <el-button
                style="width: 300px"
                type="primary"
                @click="submitForm('ruleForm')"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="2">注册</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  background: url("../assets/plane.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;
  .login {
    width: 350px;
    height: 400px;
    position: absolute;
    top: 23%;
    right: 100px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
    // text-align: center;
    .tabs {
      width: 100%;
      // text-align: center;
      ::v-deep .el-tabs__item {
        font-weight: bold;
      }
      ::v-deep .el-tabs__nav-wrap::after {
        position: static !important;

        /* background-color: #fff; */
      }
      /* 下划线切换高亮 */
      ::v-deep .el-tabs__active-bar {
        background-color: white;
      }
      /* 鼠标选中时样式 */
      ::v-deep .el-tabs__item.is-active {
        color: white;
        opacity: 1;
      }
      /* 鼠标悬浮时样式 */
      ::v-deep .el-tabs__item:hover {
        color: white;
        cursor: pointer;
        opacity: 1;
      }
      ::v-deep .el-form-item__label {
        width: 50px;
        color: black;
      }
    }
  }

  /* 去掉tabs标签栏下的下划线 */
}
</style>
