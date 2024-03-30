//创建用户相关的小仓库
import { defineStore } from 'pinia'
//引入接口
import { GET_TOKEN } from '@/utils/token'
//引入路由(常量路由)
import { constantRoute } from '@/router/routes'

//引入深拷贝方法
//@ts-expect-error
import cloneDeep from 'lodash/cloneDeep'
import type { UserState } from './types/type'

//创建用户小仓库
const useUserStore = defineStore('User', {
  //小仓库存储数据地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute, //仓库存储生成菜单需要数组(路由)
      username: '',
      avatar: '',
      //存储当前用户是否包含某一个按钮
      buttons: [],
    }
  },
  //异步|逻辑的地方
  actions: {
    async userLogout() {},
  },
  getters: {},
})
//对外暴露获取小仓库方法
export default useUserStore
