Vue.component("pinglun", {
  template: `
      <!-- 这个是模板名 -->

 
        <div class="tou">
            <div class="back">
                <img src="./img/fanhui.jpg" alt="" @click="goback()">
            </div>
            <h3>{{extra.comments}}条评论</h3>
            <div>
                <img src="./img/空白.jpg" alt="">
            </div>

        </div>
        
    `,
  props: ["goback"],
  data() {
    return {
      linum:2,
      extra: {
        "long_comments": 1,
        "popularity": 129,
        "short_comments": 2,
        "comments": 3
      }
    }

  }

})