<template>
  <div>
    <input class="new-reminder" v-model="newReminder">
    <button @click="add">Add Reminder</button>

    <ul v-if="reminders.length">
      <li v-for="(reminder, i) in reminders" :key="i">
        {{ reminder }}
        <button class ="remove" @click="remove(i)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newReminder: '',
      reminders: []
    }
  },

  methods: {
    add () {
      this.reminders.push(this.newReminder)

      this.newReminder = ''
    },
    remove (reminder) {
      this.reminders.splice(reminder, 1)
    }
  }
}
</script>

<style>

</style>
