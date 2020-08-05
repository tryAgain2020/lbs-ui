<template>
  <transition name="dialog-fade">
    <!-- 对话框遮罩 -->
    <div class="lbs-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <!-- 对话框 -->
      <!-- 2.通过width和marginTop控制宽度和位置 -->
      <div class="lbs-dialog" :style="{width:width,marginTop:top}">
        <!-- 对话框头部 -->
        <div class="lbs-dialog__header">
          <!-- 1.注意：利用插槽，传递时可替插槽内标题元素 -->
          <slot name="title">
            <!-- 对话框头部标题 -->
            <span class="lbs-dialog__title">{{title}}</span>
          </slot>
          <!-- 对话框头部按钮 -->
          <button @click="handleClose" class="lbs-dialog__headerbtn">
            <i class="lbs-icon-close"></i>
          </button>
        </div>
        <!-- 对话框内容 -->
        <div class="lbs-dialog__body">
          <!-- 3.默认插槽：控制对话框内容 -->
          <slot></slot>
        </div>
        <!-- 底部按钮组:通过插槽控制显示 -->
        <div v-if="$slots.footer" class="lbs-dialog__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'lbs-dialog',
  props: {
    // 标题属性
    title: {
      type: String,
      default: '提示',
    },

    // 宽度属性
    width: {
      type: String,
      default: '30%',
    },

    // top属性
    top: {
      type: String,
      default: '15vh',
    },

    // visible属性：控制显示隐藏
    visible: {
      type: Boolean,
      defaule: false,
    },
  },
  methods: {
    handleClose() {
      // .sync修饰符的使用：父组件传递的属性添加.sync后，子组件可以通过$emit直接触发'update:属性名'完成数据修改
      this.$emit('update:visible', false)
    },
  },
}
</script>

<style lang="scss">
// 进入动画
.dialog-fade-enter-active {
  animation: fade 0.3s;
}

// 离开动画
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}

// 声明动画
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

/* 外层遮罩 */
.lbs-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
}
/* 对话框 */
.lbs-dialog {
  position: relative;
  margin: 15vh auto 50px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  width: 30%;
}

/* 对话框头部 */
.lbs-dialog__header {
  padding: 20px 20px 10px;
}

/* 对话框头部标题 */
.lbs-dialog__title {
  line-height: 24px;
  font-size: 18px;
  color: #303133;
}

/* 对话框头部按钮 */
.lbs-dialog__headerbtn {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
}

.lbs-icon-close {
  color: #909399;
}

/* 对话框身体 */
.lbs-dialog__body {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}

/* 对话框脚步 */
.lbs-dialog__footer {
  padding: 10px 20px 20px;
  text-align: right;
  box-sizing: border-box;
}
.lbs-dialog__footer {
  padding: 10px 20px 20px;
  text-align: right;
  box-sizing: border-box;
}
</style>