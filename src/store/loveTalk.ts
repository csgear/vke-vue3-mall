import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'

export const useLoveTalkStore = defineStore('loveTalk', {
  state() {
    return {
      talkList: [
        { id: nanoid(), value: '你知道现在是几点嘛？是我们幸福的起点' },
        { id: nanoid(), value: '情人眼里出什么？西施？不，是出现你。' },
        {
          id: nanoid(),
          value: '你知道我最爱的是什么吗？现在看这句话第一个字就知道了',
        },
      ],
    }
  },
})
