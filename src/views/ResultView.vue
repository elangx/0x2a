<template>
    <div class="my-container">
      <div class="search-container" id="searchContainer">
        <div>
          <a href="/">
            <img src="@/assets/logo.png" style="height:33px;"/>
          </a>
        </div>
        <div class="gcse-searchbox"></div>
      </div>
      <div class="search-result-zone">
        <div class="gcse-searchresults" data-linkTarget="_blank" data-refinementStyle="link"></div>
      </div>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
  import Footer from "@/components/footer.vue"
  export default {
    name: 'SearchPage',
    props: ['query'],
    components:{
      Footer
    },
    mounted() {
      this.setupGoogleResultsRenderedCallback();  // 注册渲染结果回调函数
      if (!this.query) {
        this.goHome();
      }
    },
    methods: {
      setTitle() {
        var inputContent = document.getElementsByName('search')[0].value;
        document.title = inputContent + ' - 0x2a'
      },
      goHome() {
        // 使用 window.location.href 跳转到根路径
        window.location.href = '/';
      },
      setupGoogleResultsRenderedCallback() {
        // 定义一个渲染回调函数，用于移除不需要的属性
        const googleRenderedCallback = () => {
          const titleLinks = document.querySelectorAll('a.gs-title');
          titleLinks.forEach((element) => {
            // 移除 'data-cturl' 和 'data-ctorig' 属性
            element.removeAttribute('data-cturl');
            element.removeAttribute('data-ctorig');
          });

          const imgLinks = document.querySelectorAll('a.gs-image');
          imgLinks.forEach((element) => {
            element.removeAttribute('data-cturl');
            element.removeAttribute('data-ctorig');
          })
  
          // 设置搜索标题，多页签时更好切换
          this.setTitle();
        };
  
        // 将回调注册到 Google Custom Search 引擎对象
        window.__gcse || (window.__gcse = {});
        window.__gcse.searchCallbacks = {
          web: {
            rendered: googleRenderedCallback,
          },
        };
      }
    }
  };
  </script>
<style scoped>
.search-container{
  display: flex !important;
  align-items: center !important;
  margin-top: 40px;
  margin-left: 60px;
  div{
    margin-right: 60px;
  }
}
.gcse-searchbox{
  margin-left: 40px;
}

</style> 