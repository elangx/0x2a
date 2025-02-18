<template>
    <div class="my-container">
      <div class="search-container" id="searchContainer">
        <div class="gcse-searchbox"></div>
      </div>
      <div class="search-result-zone">
        <div class="gcse-searchresults" data-linkTarget="_blank" data-refinementStyle="link"></div>
      </div>
      <footer>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchPage',
    props: ['query'],
    mounted() {
      this.loadGoogleCSE();
      this.setupResultsRenderedCallback();  // 注册渲染结果回调函数
      if (!this.query) {
        this.goHome();
      }
    },
    methods: {
      loadGoogleCSE() {
        const script = document.createElement('script');
        script.src = `https://cse.google.com/cse.js?cx=${import.meta.env.VITE_GOOGLE_CSE_CX}`;
        script.async = true;
        document.head.appendChild(script);
      },
      setTitle() {
        var inputContent = document.getElementsByName('search')[0].value;
        document.title = inputContent + ' - Luxirty Search'
      },
      goHome() {
        // 使用 window.location.href 跳转到根路径
        window.location.href = '/';
      },
      setupResultsRenderedCallback() {
        // 定义一个渲染回调函数，用于移除不需要的属性
        const myWebResultsRenderedCallback = () => {
          const links = document.querySelectorAll('a.gs-title');
  
          links.forEach((anchor) => {
            // 移除 'data-cturl' 和 'data-ctorig' 属性
            anchor.removeAttribute('data-cturl');
            anchor.removeAttribute('data-ctorig');
          });
  
          // 设置搜索标题，多页签时更好切换
          this.setTitle();
        };
  
        // 将回调注册到 Google Custom Search 引擎对象
        window.__gcse || (window.__gcse = {});
        window.__gcse.searchCallbacks = {
          web: {
            rendered: myWebResultsRenderedCallback,
          },
        };
      }
    }
  };
  </script>
<style scoped>
.gsc-search-button{
  margin-left: 0;
}
</style> 