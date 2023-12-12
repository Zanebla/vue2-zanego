<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        Register A New User
        <span class="go">
          Have an account? TO <a href="login.html" target="_blank"> Log In</a>
        </span>
      </h3>
      <div class="content">
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Please enter your phone number"
          v-model="phone"
        />
        <span class="error-msg">错误提示信息</span>
      </div>
      <div class="content">
        <label>Verification Code</label>
        <input
          type="text"
          placeholder="Please enter your verification code"
          v-model="code"
        />
        <button style="width: 110px; height: 38px" @click="getCode">
          Obtain Verification Code
        </button>
        <span class="error-msg">错误提示信息</span>
      </div>
      <div class="content">
        <label>Login password</label>
        <input
          type="password"
          placeholder="Please enter your login password"
          v-model="password"
        />
        <span class="error-msg">错误提示信息</span>
      </div>
      <div class="content">
        <label>Confirm password</label>
        <input
          type="password"
          placeholder="Please enter the confirmation password"
          v-model="passwordVerify"
        />
        <span class="error-msg">错误提示信息</span>
      </div>
      <div class="controls">
        <input name="m1" type="checkbox" :checked="agree" />
        <span> Agree To The Zanego User Agreement and Register</span>
        <span class="error-msg">错误提示信息</span>
      </div>
      <div class="btn">
        <button>Complete Registration</button>
      </div>
    </div>

    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">Address: SDU QingDao</div>
      <div class="beian">Phoenix Residence</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      phone: '',
      code: '',
      password: '',
      passwordVerify: '',
      agree: true
    }
  },
  methods: {
    async getCode () {
      try {
        const { phone } = this
        phone && (await this.$store.dispatch('getCode', phone))
        this.code = this.$store.state.user.code
      } catch (error) {
        alert(error.message)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>