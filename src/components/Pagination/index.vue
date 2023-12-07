<template>
  <div class="pagination">
    <button>Previous</button>
    <button v-show="startNumAndendNum.start > 1">1</button>
    <button v-show="startNumAndendNum.start > 2">···</button>

    <button
      v-for="(page, index) in startNumAndendNum.end"
      :key="index"
      v-show="page >= startNumAndendNum.start"
    >
      {{ page }}
    </button>

    <button v-show="startNumAndendNum.end < totalPage - 1">···</button>
    <button v-show="startNumAndendNum.end < totalPage">{{ totalPage }}</button>
    <button>Next</button>
    <button style="margin-left: 30px">Sum: {{ total }} items</button>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'Pagination',
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalPage () {
      return Math.ceil(this.total / this.pageSize)
    },
    startNumAndendNum () {
      const { continues, pageNo, totalPage } = this
      let start = 0, end = 0
      if (continues > totalPage) {
        start = 1
        end = totalPage
      } else {
        start = pageNo - parseInt(continues / 2)
        end = pageNo + parseInt(continues / 2)
        if (start < 1) {
          start = 1
          end = continues
        }
        if (end > totalPage) {
          start = totalPage - continues + 1
          end = totalPage
        }
      }

      return { start, end }
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>