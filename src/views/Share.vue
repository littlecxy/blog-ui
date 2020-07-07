<template>
  <div>
      <headPart></headPart>
      <div style="position:relative">
      <share></share>
      <sidebar></sidebar>
      </div>
  </div>
</template>

<script>
import headPart from '@/components/headPart'
import share from '@/components/share'
import sidebar from '@/components/sidebar'
export default {
    components: {
        share,
        sidebar,
        headPart
    }
}

</script>
<style>
</style>