<template>
  <v-layout class="d-block">
    <Header />
    <div>This is a Home view</div>
    <v-footer></v-footer>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header/Header.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    Header
  },

  data() {
    return {}
  },

  methods: {}
})
</script>
