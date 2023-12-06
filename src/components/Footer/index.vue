<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footerList">
        <div class="footerItem">
          <h4>Guide</h4>
          <ul class="footerItemCon">
            <li>Shopping Process</li>
            <li>Members Introduction</li>
            <li>Group Buying</li>
            <li>Common Problem</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>Delivery Method</h4>
          <ul class="footerItemCon">
            <li>Home Pickup</li>
            <li>Delivery Service Inquiry</li>
            <li>Delivery Fee Standards</li>
            <li>Overseas Delivery</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>Payment Method</h4>
          <ul class="footerItemCon">
            <li>Cash On Delivery</li>
            <li>Online Payment</li>
            <li>Hire Purchase</li>
            <li>Company Transfer</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>After-sale Service</h4>
          <ul class="footerItemCon">
            <li>After Sales Policy</li>
            <li>Price Protection</li>
            <li>Refund Instructions</li>
            <li>Cancel Order</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>Special Services</h4>
          <ul class="footerItemCon">
            <li>Happy Dogs</li>
            <li>Fancy Cats</li>
            <li>Cute Ducks</li>
            <li>Funny Monkeys</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>WeChat</h4>
          <img src="./images/wechat.jpg" />
        </div>
      </div>
      <div class="copyright">
        <ul class="helpLink">
          <li>
            About Us
            <span class="space"></span>
          </li>
          <li>
            Contact Us
            <span class="space"></span>
          </li>
          <li>
            Merchant Settlement
            <span class="space"></span>
          </li>
          <li>
            Market Center
            <span class="space"></span>
          </li>
          <li>Friendly Link</li>
        </ul>
        <p>Address: SDU QD Campus</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.footer {
  background-color: #eaeaea;

  .footer-container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    .footerList {
      padding: 20px;
      border-bottom: 1px solid #e4e1e1;
      border-top: 1px solid #e4e1e1;
      overflow: hidden;
      padding-left: 40px;

      .footerItem {
        width: 16.6666667%;
        float: left;

        h4 {
          font-size: 14px;
        }

        .footerItemCon {
          li {
            line-height: 18px;
          }
        }

        &:last-child img {
          width: 100px;
        }
      }
    }

    .copyright {
      padding: 20px;

      .helpLink {
        text-align: center;

        li {
          display: inline;

          .space {
            border-left: 1px solid #666;
            width: 1px;
            height: 13px;
            background: #666;
            margin: 8px 10px;
          }
        }
      }

      p {
        margin: 10px 0;
        text-align: center;
      }
    }
  }
}
</style>