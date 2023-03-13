<template>
  <v-container class="bg-light-blue-2 mt-10">
    <v-row no-gutters>
      <template v-if="isLoaded">
        <v-col cols="12" sm="12">
          <v-table>
            <thead class="bg-blue-darken-2">
              <tr>
                <th class="text-left text-white text-h5"></th>
                <th class="text-left text-white">First Name</th>
                <th class="text-left text-white">Last Name</th>
                <th class="text-left text-white">Email</th>
                <th class="text-left text-white">Department</th>
                <th class="text-left text-white">Position</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="employee in employees" :key="employee.id" class="mb-2">
                <td class="text-left pa-2">
                  <v-img :width="120" aspect-ratio="1" cover :src="employee.profile.avatar"></v-img>
                </td>
                <td class="text-left">{{ employee.profile.first_name }}</td>
                <td class="text-left">{{ employee.profile.last_name }}</td>
                <td class="text-left">{{ employee.email }}</td>
                <td class="text-left">
                  {{ employee.department ? employee.department?.name : '' }}
                </td>
                <td class="text-left">{{ employee.position ? employee.position.name : '' }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </template>
      <template v-else>
        <v-col cols="12" sm="12" v-for="n in 1" :key="n">
          <v-sheet class="ma-2 pa-2">Loading...</v-sheet>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'
const isLoaded = ref(false)
const employees: Ref<any> = ref([])
const token: Ref<string | null> = ref('')

function login() {
  fetch('https://cv-project-js.inno.ws/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `query getUsers($auth: AuthInput!) {
        login(auth: $auth) {
            user {
            email
            }, access_token
        }
    }`,
      variables: {
        auth: {
          email: 'aleksandr_kalinin_1995@mail.ru',
          password: '123456'
        }
      }
    })
  })
    .then((res) => res.json())
    .then((res) => {
      localStorage.setItem('token', res.data.login.access_token)
    })
}

function fetchData() {
  token.value = localStorage.getItem('token')
  fetch('https://cv-project-js.inno.ws/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
      query: `{
              users{
                  id,
                  profile {
                      avatar,
                      first_name,
                      last_name
                  }
                  email,
                  department {
                      name
                  },
                  position {
                      name
                  }
              }
            }`
    })
  })
    .then((res) => res.json())
    .then((res) => {
      employees.value = res.data.users
    })
    .then(() => {
      isLoaded.value = true
    })
    .catch((e) => {
      console.log(e)
    })
}
onMounted(() => {
  fetchData()
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>
