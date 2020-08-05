<template>
  <button
    class="lbs-button"
    :class="[`lbs-button--${type}`,{
    'is-plain':plain,
    'is-round':round,
    'is-circle':circle,
    'is-disabled':disabled
    }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <!-- 上方：给button注册点击事件 -->
    <!-- icon字体图标 -->
    <i v-if="icon" :class="icon"></i>
    <!-- 通过$slots获取插槽内容 -->
    <!-- 如果没传递插槽内容就不显示span -->
    <span v-if="$slots.default">
      <!-- 插槽 -->
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      num: 555,
    }
  },
  name: 'lbs-button',
  // 封装一个通用的组件，会对props做一个约束，prpos进行校验
  props: {
    // 按钮样式
    type: {
      // 规定type的类型：字符串
      type: String,
      // 默认不写的样式
      default: 'default',
    },

    // 朴素按钮
    plain: {
      type: Boolean,
      default: false,
    },

    // 圆角属性
    round: {
      type: Boolean,
      default: false,
    },

    // 圆型按钮
    circle: {
      type: Boolean,
      default: false,
    },

    // 字体图标
    icon: {
      type: String,
      default: '',
    },

    // 按钮禁用
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    // 往父组件派发点击事件，即触发父组件的点击事件
    handleClick(e) {
      this.$emit('click', e)
    },
  },
  created() {
    // console.log(this.type)
  },
}
</script>

<style lang='scss'>
/* 按钮默认样式 */
.lbs-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  /* 禁止元素的文字被选中（存在兼容性问题）*/
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.lbs-button:hover,
.lbs-button:focus {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

/* 主要按钮：primary */
.lbs-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.lbs-button--primary:hover,
.lbs-button--primary:focus {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}

/* 成功按钮：success */
.lbs-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}
.lbs-button--success:hover,
.lbs-button--success:focus {
  background: #85ce61;
  border-color: #85ce61;
  color: #fff;
}

/* 信息按钮：info */
.lbs-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}
.lbs-button--info:hover,
.lbs-button--info:focus {
  background: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}

/* 警告按钮：warning */
.lbs-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.lbs-button--warning:hover,
.lbs-button--warning:focus {
  background: #ebb563;
  border-color: #ebb563;
  color: #fff;
}

/* 危险按钮：danger */
.lbs-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
.lbs-button--danger:hover,
.lbs-button--danger:focus {
  background: #f78989;
  border-color: #f78989;
  color: #fff;
}

/* 朴素默认按钮：plain */
.lbs-button.is-plan,
.lbs-button.is-plain:focus,
.lbs-button.is-plain:hover {
  background: #fff;
  border-color: #409eff;
  color: #409eff;
}

/* 朴素主要按钮 */
.lbs-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
}
.lbs-button--primary.is-plain:focus,
.lbs-button--primary.is-plain:hover {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
}

/* 朴素成功按钮 */
.lbs-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
}
.lbs-button--success.is-plain:focus,
.lbs-button--success.is-plain:hover {
  background: #67c23a;
  border-color: #67c23a;
  color: #fff;
}

/* 朴素信息按钮 */
.lbs-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
}
.lbs-button--info.is-plain:focus,
.lbs-button--info.is-plain:hover {
  background: #909399;
  border-color: #909399;
  color: #fff;
}

/* 朴素警告按钮 */
.lbs-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
}
.lbs-button--warning.is-plain:focus,
.lbs-button--warning.is-plain:hover {
  background: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
}

/* 朴素危险按钮 */
.lbs-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
}
.lbs-button--danger.is-plain:focus,
.lbs-button--danger.is-plain:hover {
  background: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
}

/* 添加圆角属性：round */
.lbs-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

/* 添加圆形按钮属性：circle */
.lbs-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

/* 默认按钮禁用 */
.lbs-button.is-disabled,
.lbs-button.is-disabled:focus,
.lbs-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}

/* 主要按钮禁用 */
.lbs-button--primary.is-disabled,
.lbs-button--primary.is-disabled:focus,
.lbs-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}

/* 成功按钮禁用 */
.lbs-button--success.is-disabled,
.lbs-button--success.is-disabled:active,
.lbs-button--success.is-disabled:focus,
.lbs-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}

/* 信息按钮禁用 */
.lbs-button--info.is-disabled,
.lbs-button--info.is-disabled:active,
.lbs-button--info.is-disabled:focus,
.lbs-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}

/* 警告按钮禁用 */
.lbs-button--warning.is-disabled,
.lbs-button--warning.is-disabled:active,
.lbs-button--warning.is-disabled:focus,
.lbs-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}

/* 危险按钮禁用 */
.lbs-button--danger.is-disabled,
.lbs-button--danger.is-disabled:active,
.lbs-button--danger.is-disabled:focus,
.lbs-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}

/* 默认朴素按钮禁用 */
.lbs-button.is-disabled.is-plain,
.lbs-button.is-disabled.is-plain:focus,
.lbs-button.is-disabled.is-plain:hover {
  background-color: #fff;
  border-color: #ebeef5;
  color: #c0c4cc;
}

/* 主要朴素按钮禁用 */
.lbs-button--primary.is-plain.is-disabled,
.lbs-button--primary.is-plain.is-disabled:active,
.lbs-button--primary.is-plain.is-disabled:focus,
.lbs-button--primary.is-plain.is-disabled:hover {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}

/* 成功朴素按钮禁用 */
.lbs-button--success.is-plain.is-disabled,
.lbs-button--success.is-plain.is-disabled:active,
.lbs-button--success.is-plain.is-disabled:focus,
.lbs-button--success.is-plain.is-disabled:hover {
  color: #a4da89;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}

/* 信息朴素按钮禁用 */
.lbs-button--info.is-plain.is-disabled,
.lbs-button--info.is-plain.is-disabled:active,
.lbs-button--info.is-plain.is-disabled:focus,
.lbs-button--info.is-plain.is-disabled:hover {
  color: #bcbec2;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
}

/* 警告朴素按钮禁用 */
.lbs-button--warning.is-plain.is-disabled,
.lbs-button--warning.is-plain.is-disabled:active,
.lbs-button--warning.is-plain.is-disabled:focus,
.lbs-button--warning.is-plain.is-disabled:hover {
  color: #f0c78a;
  background-color: #fdf6ec;
  border-color: #faecd8;
}

/* 危险朴素按钮禁用 */
.lbs-button--danger.is-plain.is-disabled,
.lbs-button--danger.is-plain.is-disabled:active,
.lbs-button--danger.is-plain.is-disabled:focus,
.lbs-button--danger.is-plain.is-disabled:hover {
  color: #f9a7a7;
  background-color: #fef0f0;
  border-color: #fde2e2;
}

/* 图标和文字间添加外边距 */
.lbs-button [class*='lbs-icon-'] + span {
  margin-left: 5px;
}
</style>