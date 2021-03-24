<template>
  
  <div>
    <h1>本の一覧</h1>
    <ul>
      <li 
        @click="showBookDetail(book.id)"
        v-for="book in books" 
        :key="book.id" >
        {{book.title}}
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name:'BookList',
  data(){
    return {
      books:[
        {id:1, title:'タイトル１', content:'ほんの内容１'},
        {id:2, title:'タイトル2', content:'ほんの内容2'},
        {id:3, title:'タイトル3', content:'ほんの内容3'},
      ]
    }
  },
  methods:{
    showBookDetail(id){
      this.bookIndex = id -1
       console.log(this.bookIndex)
       this.$router.push({
         name:'Book',
         params:{
           id: this.books[this.bookIndex].id,
           title: this.books[this.bookIndex].title,
           content: this.books[this.bookIndex].content
         }
       })
    }
  }
}
</script>

<style>

</style>