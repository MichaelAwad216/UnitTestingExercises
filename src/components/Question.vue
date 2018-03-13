<template>
  <div>
    <div v-if="! editing">
      <h1 v-text="question.title"></h1>
      <div class="body" v-text="question.body"></div>
      <button @click="editing = true" id="edit">Edit</button>
    </div>
    <div v-if="editing">
      <input type="text" name="title" v-model="question.title">
      <textarea name="body" v-text="question.body" v-model="question.body"></textarea>
      <button @click="editing = false" id="update">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataQuestion'],

  data () {
    return {
      question: this.dataQuestion,
      editing: false
    }
  }
}
</script>
