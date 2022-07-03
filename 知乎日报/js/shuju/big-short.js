Vue.component("big-short",{
    template:`
      <!-- 这个是模板名 -->

      <div>
      <br>
      <br>

        <div class="short-comments">
                <span>{{extra.comments}}条评论</span>
            </div>


            <div class="big-short" v-for="item in short">



                <div class="center">
                    <div class="left">
                        <img :src="item.avatar" alt="">
                    </div>
                    <div class="right">
                        <h3>{{item.author}} <span>···</span></h3>
                        <p>{{item.content}}</p>
                        <div class="gongneng">
                            <span>{{month}}-{{day}}</span>
                            <p>
                                <img @click="addid(item.id)"
                                    :src="pldianzan(item.id) ? './img/dianzan2.jpg  ' : './img/dianzan1.jpg ' ">
                                <img @click="addid1(item.id)"   
                                    :src="plshoucang(item.id) ? './img/shoucang1.jpg ' : './img/shoucang.jpg '">
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    `,
    props:["short","pldianzan","plshoucang","month","day","addid","addid1"],
    data(){
      return {
        extra: {
            "long_comments": 1,
            "popularity": 129,
            "short_comments": 2,
            "comments": 3
          }
      }
       
    }
    
  })