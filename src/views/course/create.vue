<template>
    <div class="course-create">
      <el-card>
        <div slot="header">
          <el-steps :active="activeStep" simple>
          <el-step
          v-for=" (item,i) in steps"
          :key="item.id"
          :title="item.title"
          :icon="item.icon"
          @click.native="activeStep = i"
          ></el-step>
        </el-steps>
        </div>
        <!-- 步骤对应的表单结构 -->
        <el-form>
            <div v-show="activeStep === 0">
                基本信息
            </div>
            <div v-show="activeStep === 1">
                课程封面
            </div>
            <div v-show="activeStep === 2">
                销售信息
            </div>
            <div v-show="activeStep === 3">
               秒杀信息
            </div>
            <div v-show="activeStep === 4">
                课程详情
                <el-form-item>
                    <el-button
                    type="primary"
                    >保存
                    </el-button>
                </el-form-item>
            </div>
            <!-- 设置下一步按钮 -->
            <el-form-item v-if="activeStep !== steps.length-1">
                <el-button
                @click="activeStep++"
                >下一步</el-button>
            </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>

<script>
export default {
  name: 'CourseCreate',
  data () {
    return {
      // 步骤的进度
      activeStep: 0,
      // 步骤条的相关信息
      steps: [
        { id: 1, title: '基本信息', icon: 'el-icon-edit' },
        { id: 2, title: '课程封面', icon: 'el-icon-upload' },
        { id: 3, title: '销售信息', icon: 'el-icon-loading' },
        { id: 4, title: '秒杀信息', icon: 'el-icon-house' },
        { id: 5, title: '课程详情', icon: 'el-icon-cherry' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.el-step{
  cursor: pointer;
}
</style>
