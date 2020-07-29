<template>
  <div>
      <headPart></headPart>
      <div style="position:relative">
        <note></note>
        <sidebar></sidebar>
      </div>
      <bottomBar></bottomBar>
  </div>
</template>

<script>
import headPart from '@/components/headPart';
import note from '@/components/note';
import sidebar from '@/components/sidebar';
import bottomBar from '@/components/bottomBar';
export default {
    components: {
        note,
        sidebar,
        headPart,
        bottomBar
    }
}

</script>
<style>
</style>