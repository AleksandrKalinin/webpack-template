<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-sheet class="ma-2 pa-2">
          <v-card class="mx-auto" max-width="344">
            <v-card-title>Title</v-card-title>
            <v-card-subtitle>Subtitle</v-card-subtitle>
            <v-card-actions>
              <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `{
            characters{
              results{
                id,name, gender, location {
                  name
                }, image
              }
            }
          }`
    })
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.data.characters.results)
    })
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>
