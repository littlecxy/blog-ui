<template>
  <div>
      <headPart></headPart>
      <div style="position:relative">
        <felling></felling>
        <sidebar></sidebar>
      </div>
      <bottomBar></bottomBar>
  </div>
</template>

<script>
import headPart from '@/components/headPart';
import felling from '@/components/felling';
import sidebar from '@/components/sidebar';
import bottomBar from '@/components/bottomBar';
export default {
    components: {
        felling,
        sidebar,
        headPart,
        bottomBar
    }
}

</script>
<style>
</style>