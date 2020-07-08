<template>
  <div>
      <headPart></headPart>
      <div style="position:relative">
      <note></note>
      <sidebar></sidebar>
      </div>
  </div>
</template>

<script>
import headPart from '@/components/headPart'
import note from '@/components/note'
import sidebar from '@/components/sidebar'
export default {
    components: {
        note,
        sidebar,
        headPart
    }
}

</script>
<style>
</style>