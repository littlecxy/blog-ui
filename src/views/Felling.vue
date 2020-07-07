<template>
  <div>
      <headPart></headPart>
      <div style="position:relative">
      <felling></felling>
      <sidebar></sidebar>
      </div>
  </div>
</template>

<script>
import headPart from '@/components/headPart'
import felling from '@/components/felling'
import sidebar from '@/components/sidebar'
export default {
    components: {
        felling,
        sidebar,
        headPart
    }
}

</script>
<style>
</style>