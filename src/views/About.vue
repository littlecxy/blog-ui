<template>
  <div class="container">
    <headPart></headPart>
    <div style="position:relative">
      <aboutMe></aboutMe>
      <sidebar></sidebar>
    </div>
    <bottomBar></bottomBar>
  </div>
</template>
<script>
import headPart from '@/components/headPart'
import aboutMe from '@/components/aboutMe';
import sidebar from '@/components/sidebar';
import bottomBar from '@/components/bottomBar';
  export default {
    name: 'About',
    components: {
      headPart,
      sidebar,
      bottomBar,
      aboutMe
    }
  }
</script>

<style scoped>

</style>