<template>
    <div class="home">
      <div class="title">
        0x2a
      </div>
      <div class="search-container">
        <div class="gcse-searchbox-only" data-resultsUrl="search"></div>
      </div>
      
      <!-- 添加页脚 -->
      <footer>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const script = document.createElement('script');
      script.src = `https://cse.google.com/cse.js?cx=${import.meta.env.VITE_GOOGLE_CSE_CX}`;
      script.async = true;
      document.body.appendChild(script);
    }
  };
  </script>
<style scoped>
.title{
  text-align: center;
}
</style>