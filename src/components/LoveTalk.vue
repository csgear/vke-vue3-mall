<template>
  <div class="loveTalk">
    <h2>Love Talk</h2>
    <button @click="GetMoreTalk">Get More</button>
    <ul>
      <li v-for="talk in loveTalkStore.talkList" :key="talk.id">
        {{ talk.value }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import axios from 'axios'
import { nanoid } from 'nanoid'
import { useLoveTalkStore } from '@/store/loveTalk'

let loveTalkStore = useLoveTalkStore()

async function GetMoreTalk() {
  let {
    data: { content: value },
  } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
  loveTalkStore.talkList.unshift({
    id: nanoid(),
    value,
  })
}
</script>

<style scoped>
.loveTalk {
  margin-top: 20px;
  background-color: yellowgreen;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
