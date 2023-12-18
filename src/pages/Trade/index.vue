<template>
  <div class="trade-container">
    <h3 class="title">Fill In and Verify Order Information</h3>
    <div class="content">
      <h5 class="receive">Recipient Information</h5>
      <div
        class="address clearFix"
        v-for="address in addressInfo"
        :key="address.id"
      >
        <span class="username" :class="{ selected: address.isDefault == 1 }">{{
          address.consignee
        }}</span>
        <p @click="changeDefault(address, addressInfo)">
          <span class="s1">{{ address.fullAddress }}</span>
          <span class="s2">{{ address.phoneNum }}</span>
          <span class="s3" v-show="address.isDefault == 1"
            >Default Address</span
          >
        </p>
      </div>
      <div class="line"></div>
      <h5 class="pay">Payment Method</h5>
      <div class="address clearFix">
        <span class="username selected">Online payment</span>
        <span class="username" style="margin-left: 5px">Cash on delivery</span>
      </div>
      <div class="line"></div>
      <h5 class="pay">Delivery list</h5>
      <div class="way">
        <h5>Delivery method</h5>
        <div class="info clearFix">
          <span class="s1">Zanebla Express</span>
          <p>
            Delivery time: Expected to arrive on Wednesday, August 10th from
            09:00 to 15:00
          </p>
        </div>
      </div>
      <div class="detail">
        <h5>Commodity List</h5>
        <ul class="list clearFix">
          <li>
            <img src="./images/goods.png" alt="" />
          </li>
          <li>
            <p>
              Apple iPhone 6s (A1700) 64G 玫瑰金色
              移动联通电信4G手机硅胶透明防摔软壳 本色系列
            </p>
            <h4>7天无理由退货</h4>
          </li>
          <li>
            <h3>￥5399.00</h3>
          </li>
          <li>X1</li>
          <li>有货</li>
        </ul>
        <ul class="list clearFix">
          <li>
            <img src="./images/goods.png" alt="" />
          </li>
          <li>
            <p>
              Apple iPhone 6s (A1700) 64G 玫瑰金色
              移动联通电信4G手机硅胶透明防摔软壳 本色系列
            </p>
            <h4>7天无理由退货</h4>
          </li>
          <li>
            <h3>￥5399.00</h3>
          </li>
          <li>X1</li>
          <li>有货</li>
        </ul>
      </div>
      <div class="bbs">
        <h5>Buyer message:</h5>
        <textarea
          placeholder="Suggest communicating and confirming with the merchant before leaving a message..."
          class="remarks-cont"
        ></textarea>
      </div>
      <div class="line"></div>
      <div class="bill">
        <h5>Invoice Information :</h5>
        <div>Personal details of ordinary invoice (electronic) :</div>
        <h5>Use discounts/deductions :</h5>
      </div>
    </div>
    <div class="money clearFix">
      <ul>
        <li>
          <b><i>1</i> items, total item amount : </b>
          <span>¥5399.00</span>
        </li>
        <li>
          <b>Redemption : </b>
          <span>0.00</span>
        </li>
        <li>
          <b>Freight : </b>
          <span>0.00</span>
        </li>
      </ul>
    </div>
    <div class="trade">
      <div class="price">Payable Amount:　<span>¥5399.00</span></div>
      <div class="receiveInfo">
        Sent to -
        <span>{{ userDefaultAddress.fullAddress }} | </span> Consignee:<span
          >{{ userDefaultAddress.consignee }} |
        </span>
        <span>{{ userDefaultAddress.phoneNum }}</span>
      </div>
    </div>
    <div class="sub clearFix">
      <router-link class="subBtn" to="/pay">submit the order</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Trade',
  mounted () {
    this.$store.dispatch('getUserAddress')
    this.$store.dispatch('getOrderInfo')
  },
  computed: {
    ...mapState({
      addressInfo: state => state.trade.address,
      orderInfo: state => state.trade.orderInfo
    }),
    userDefaultAddress () {
      return this.addressInfo.find(item => item.isDefault == 1) || {}
    },
  },
  methods: {
    changeDefault (address, addressInfo) {
      addressInfo.forEach(item => item.isDefault = 0)
      address.isDefault = 1
    }
  }
}
</script>

<style lang="less" scoped>
.trade-container {
  .title {
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 21px;
  }

  .content {
    width: 1200px;
    margin: 10px auto 0;
    border: 1px solid rgb(221, 221, 221);
    padding: 25px;
    box-sizing: border-box;

    .receive,
    .pay {
      line-height: 36px;
      margin: 18px 0;
    }

    .address {
      padding-left: 20px;
      margin-bottom: 15px;

      .username {
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ddd;
        position: relative;
      }

      .username::after {
        content: "";
        display: none;
        width: 6px;
        height: 6px;
        position: absolute;
        right: 0;
        bottom: 0;
        // background: url(./images/choosed.png) no-repeat;
        background: #c81623;
      }

      .username.selected {
        border-color: #e1251b;
      }

      .username.selected::after {
        display: block;
      }

      p {
        width: 610px;
        float: left;
        line-height: 30px;
        margin-left: 10px;
        padding-left: 5px;
        cursor: pointer;

        .s1 {
          float: left;
        }

        .s2 {
          float: left;
          margin: 0 5px;
        }

        .s3 {
          float: left;
          width: 100px;
          height: 24px;
          line-height: 24px;
          margin-left: 10px;
          background-color: #878787;
          color: #fff;
          margin-top: 3px;
          text-align: center;
        }
      }

      p:hover {
        background-color: #ddd;
      }
    }

    .line {
      height: 1px;
      background-color: #ddd;
    }

    .way {
      width: 1080px;
      height: 110px;
      background: #f4f4f4;
      padding: 15px;
      margin: 0 auto;

      h5 {
        line-height: 50px;
      }

      .info {
        margin-top: 20px;

        .s1 {
          float: left;
          border: 1px solid #ddd;
          width: 120px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          margin-right: 10px;
        }

        p {
          line-height: 30px;
        }
      }
    }

    .detail {
      width: 1080px;

      background: #feedef;
      padding: 15px;
      margin: 2px auto 0;

      h5 {
        line-height: 50px;
      }

      .list {
        display: flex;
        justify-content: space-between;

        li {
          line-height: 30px;

          p {
            margin-bottom: 20px;
          }

          h4 {
            color: #c81623;
            font-weight: 400;
          }

          h3 {
            color: #e12228;
          }
        }
      }
    }

    .bbs {
      margin-bottom: 15px;

      h5 {
        line-height: 50px;
      }

      textarea {
        width: 100%;
        border-color: #e4e2e2;
        line-height: 1.8;
        outline: none;
        resize: none;
      }
    }

    .bill {
      h5 {
        line-height: 50px;
      }

      div {
        padding-left: 15px;
      }
    }
  }

  .money {
    width: 1200px;
    margin: 20px auto;

    ul {
      width: 220px;
      float: right;

      li {
        line-height: 30px;
        display: flex;
        justify-content: space-between;

        i {
          color: red;
        }
      }
    }
  }

  .trade {
    box-sizing: border-box;
    width: 1200px;
    padding: 10px;
    margin: 10px auto;
    text-align: right;
    background-color: #f4f4f4;
    border: 1px solid #ddd;

    div {
      line-height: 30px;
    }

    .price span {
      color: #e12228;
      font-weight: 700;
      font-size: 14px;
    }

    .receiveInfo {
      color: #999;
    }
  }

  .sub {
    width: 1200px;
    margin: 0 auto 10px;

    .subBtn {
      float: right;
      width: 164px;
      height: 56px;
      font: 700 18px "微软雅黑";
      line-height: 56px;
      text-align: center;
      color: #fff;
      background-color: #e1251b;
    }
  }
}
</style>