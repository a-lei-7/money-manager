<template>
  <layout>
    <div class="navBar">
      <Icon class="leftIcon"  name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <Icon class="rightIcon"  name="提交" @click="submit"/>
    </div>
    <div class="form-wrapper">
      <FormItem :value="currentTag.name"
                filed-name="标签名"
                @update:value="update($event)"
                placeholder="请输入标签名"/>
    </div>
    <div class="button">
      <Button @click="remove">删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import FormItem from '@/components/money/FormItem.vue';
  import Button from '@/components/Button.vue';
  @Component({
    components: {Button, FormItem},
  })
  export default class EditLabel extends Vue {
    get currentTag(){
      return this.$store.state.currentTag;
    }
    created() {
      const id = this.$route.params.id;
      this.$store.commit('fetchTags')
      this.$store.commit('setCurrentTag', id);
      if (!this.currentTag) {
        this.$router.replace('/404'); //使用 replace ，以防止跳转 404 不能回退
      }
    }
    update(name: string) {
      if (this.currentTag) {
        this.$store.commit('updateTag',{id:this.currentTag.id,name})
      }
    }
    submit(){
      this.$store.commit('submit')
    }

    remove() {
      if (this.currentTag) {
        this.$store.commit('removeTag',this.currentTag.id)
      }
    }
    goBack(){
      this.$router.back()
    }
  }
</script>

<style scoped lang="scss">
  .navBar {
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background-color: white;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .title {
    }
    > .leftIcon {
      width: 18px;
      height: 18px;
    }
    > .rightIcon {
      height: 18px;
      width: 18px;
    }
    >.rightIcon:active{
      color: #fd6600;

    }
    button {
      background-color: inherit;
      border: none;
    }
  }
  .form-wrapper{
    margin-top: 8px;
  }
  .button{
    display: flex;
    align-items:center;
    justify-content: space-around;
    margin-top: 44px;
  }
  .button>button:active{
    @keyframes changeColor {
      from{
        background-color: inherit;
      }
      to{
        background-color: #fd6600;
      }
    }
    animation:changeColor 100ms linear;
  }
</style>