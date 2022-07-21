<template>
  <div class="chat">
    <RobinChat
      logo="https://iili.io/wUVjdG.png"
      api-key="NT-XmIzEmWUlsrQYypZOFRlogDFvQUsaEuxMfZf"
      :users="users"
      :user-token="userToken"
      :keys="keys"
      :user-name="userName"
      channel="private_chat"
      :features="[]"
    >
    </RobinChat>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
type ObjectType = Record<string, any>

export default Vue.extend({
  name: 'Chat',
  data() {
    return {
      userName: '',
      userToken: '',
      users: [] as Array<ObjectType>,
      keys: {
        userToken: 'robin_user_token',
        profileImage: 'profile_photo',
        userName: 'username',
      },
    }
  },
  created() {
    if (localStorage.getItem('data')) {
      const data = JSON.parse(localStorage.getItem('data') || '{}')
      this.userToken = data.user_token
      this.userName = data.user_name
    }
    this.getUsers()
  },
  methods: {
    async getUsers() {
      const promise: Promise<Array<ObjectType>> = new Promise((resolve) => {
        setTimeout(() => {
          const users = [
            {
              _id: '983388d4d769496eb4bc0e42a6c0593a',
              email: 'cryptodegensupport@gmail.com',
              username: 'CryptoDegen Support',
              robin_user_token: 'SxPzdCcGZeyNUGPUZRNIiFXH',
              profile_photo: '',
            },
            {
              _id: 'b990738c18584abfbad077ad90712b56',
              email: 'enoch11@gmail.com',
              username: 'Enoch Chejieh',
              robin_user_token: 'SHkPHNIYqwQIvyaYFaovLlHa',
              profile_photo: '',
            },
          ]

          resolve(users)
        }, 1000)
      })

      const response = await promise
      this.users = [...response]
    },
  },
})
</script>

<style scoped></style>
