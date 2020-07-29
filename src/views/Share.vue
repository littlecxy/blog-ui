<template>
  <div>
      <headPart></headPart>
      <div style="position:relative">
        <share></share>
        <sidebar></sidebar>
      </div>
      <bottomBar></bottomBar>
  </div>
</template>

<script>
import headPart from '@/components/headPart';
import share from '@/components/share';
import sidebar from '@/components/sidebar';
import bottomBar from '@/components/bottomBar';
export default {
    components: {
        share,
        sidebar,
        headPart,
        bottomBar
    }
}

</script>
<style>
</style>