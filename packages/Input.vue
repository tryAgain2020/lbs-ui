<template>
  <div class="lbs-input" :class="{'lbs-input--suffix':showSuffix}">
    <!-- input为密码框时，判断自身的passwaordVisible值，切换属性 -->
    <input
      class="lbs-input__inner"
      :class="{'is-disabled':disabled}"
      :type="showPassword?(passwaordVisible?'text':'password'):type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
      @mouseenter="iconShow"
      @mouseleave="iconHide"
    />
    <span @mouseenter="iconShow" @mouseleave="iconHide" class="lbs-input__suffix" v-if="showSuffix">
      <i @click="clear" class="lbs-input__icon lbs-icon-circle-close" v-show="showclearable"></i>
      <i @click="handlePassword" class="lbs-input__icon lbs-icon-view" v-show="isShowPassword"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'lbs-input',
  data() {
    return {
      // 输入框被选中
      check: false,

      // 是否显示密码框内的密码
      passwaordVisible: false,
    }
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      defaule: '',
    },
    // 可清空属性
    clearable: {
      type: Boolean,
      default: false,
    },
    // 密码框显示
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // 组件实现双向绑定
    handleInput(e) {
      this.$emit('input', e.target.value)
    },

    // 清空输入框
    clear() {
      this.$emit('input', '')
    },

    // 显示图标
    iconShow() {
      this.check = true
    },
    // 隐藏图标
    iconHide() {
      this.check = false
    },

    // 显示密码
    handlePassword() {
      // 用于控制是否显示密码框
      this.passwaordVisible = !this.passwaordVisible
    },
  },
  // 计算属性
  computed: {
    // 是否带有小图标
    showSuffix() {
      return this.clearable || this.showPassword
    },

    // 是否显示清空按钮
    showclearable() {
      return this.clearable && this.check && this.value
    },

    // 是否显示可见密码按钮
    isShowPassword() {
      return this.showPassword && this.value
    },
  },
}
</script>

<style>
.lbs-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
}
.lbs-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  z-index: 100;
}
input {
  cursor: pointer;
}
.lbs-input__inner:focus {
  outline: none;
  border-color: #409eff;
}

/* 禁用状态 */
.is-disabled.lbs-input__inner {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}

/* 如果带小图标，就有lbs-input--suffi类 */
.lbs-input--suffix .lbs-input__inner {
  padding-right: 30px;
}
.lbs-input__suffix {
  position: absolute;
  height: 100%;
  right: 10px;
  top: 0;
  line-height: 40px;
  text-align: center;
  color: #c0c4cc;
  transition: all 0.3s;
  z-index: 900;
}
.lbs-input__suffix i {
  color: #c0c4cc;
  font-size: 14px;
  cursor: pointer;
}
</style>