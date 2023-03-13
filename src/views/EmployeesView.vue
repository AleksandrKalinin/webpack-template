<template>
  <v-layout class="d-block">
    <Header />
    <Employees />
    <v-footer></v-footer>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header/Header.vue'
import Employees from '@/components/Employees/Employees.vue'

export default defineComponent({
  name: 'EmployeesView',

  components: {
    Header,
    Employees
  },

  data() {
    return {}
  },

  methods: {}
})
</script>
