<template>
    <div class="home">
      <div class="logo-container">
        <div></div>
        <div class="logo">
          <img src="@/assets/logo.png" style="height: 92px;"/>
        </div>
      </div>
      <div class="search-container">
        <div class="search">
          <div class="gcse-searchbox-only" data-resultsUrl="search"></div>
        </div>
      </div>
      <Footer></Footer> 
    </div>
  </template>
  
  <script>
  import Footer from "@/components/footer.vue"
  export default {
    components:{
      Footer
    },
    mounted() {
      const script = document.createElement('script');
      script.src = `https://cse.google.com/cse.js?cx=${import.meta.env.VITE_GOOGLE_CSE_CX}`;
      script.async = true;
      document.body.appendChild(script);
      window.onload = function (){
        document.getElementById("gsc-i-id1").focus();
      }
    }
  };
  </script>
<style scoped>

.logo{
  text-align: center;
  height:92px;
  width: auto;
  margin-top:auto;
}
.home{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 92px;
  height:calc(100% - 560px);
  max-height: 290px;
}
.search-container{
  padding: 20px;
  text-align: center;
  flex-grow: 1;
}
.search{
  padding-top: 6px;
}
</style>