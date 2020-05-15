<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
  import  KM  from "../../public/KM_SDK_1.0";

export default {
  data(){
    return{
      test:1,
      KM:KM
    }
  },created(){
    console.log(this.KM)
  }
}
</script>