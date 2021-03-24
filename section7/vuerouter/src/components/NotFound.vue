<template>
  <div>
     404ページが存在しません
    <button @click="goToHome">ホームに戻る</button>
  </div>
</template>

<script>
export default {
 methods:{
   goToHome(){
     this.$router.push('/')
   }
 }
}
</script>

<style>

</style>