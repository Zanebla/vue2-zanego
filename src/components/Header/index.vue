<template>
  <header class="header">
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>🛍 Welcome to Zanego!</p>
          <p v-if="!userName">
            <router-link to="/login">Log In</router-link>
            <router-link class="register" to="/register"
              >Free Signup</router-link
            >
          </p>
          <p v-else>
            <a>{{ userName }}</a>
            <a class="register" @click="logout">Log out</a>
          </p>
        </div>
        <div class="typeList">
          <a href="###">My Order</a>
          <a href="###">My Shopping Cart</a>
          <a href="###">My Zanego</a>
          <a href="###">My Zanego VIP</a>
          <a href="###">Enterprise Procurement</a>
          <a href="###">Follow Zanego</a>
          <a href="###">Merchant Backend</a>
        </div>
      </div>
    </div>

    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" title="Zanego" to="/home">
          <img src="./images/logo.jpg" alt="" />
        </router-link>
      </h1>

      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "",
  data () {
    return {
      keyword: ''
    }
  },
  mounted () {
    this.$bus.$on("clear", () => {
      this.keyword = ''
    })
  },
  methods: {
    goSearch () {

      let location = {
        name: "search",
        params: { keyword: this.keyword || undefined },
      }

      if (this.$route.query) {
        location.query = this.$route.query
      }

      this.$router.push(location)
    },
    async logout () {
      try {
        await this.$store.dispatch('userLogout')
        this.$router.push('/home')
      } catch (error) {
        alert(error.message)
      }
    }
  },
  computed: {
    userName () {
      return this.$store.state.user.userInfo.name
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 85px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>