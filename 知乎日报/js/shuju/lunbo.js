Vue.component("lunbo",{
    template:`
      <!-- 这个是模板名 -->
        <div>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
                <van-swipe-item v-for="item in top_stories" @click="bian(item.id)">
                     
                     <h2>{{item.title}}</h2>
                    <h6 >{{item.hint}}</h6>
                    <img v-bind:src="item.image" >
                </van-swipe-item>   
                
                
            </van-swipe>
        </div>
    `,
    props:["top_stories","bian"],
    data(){
      return {
  
      }
       
    }
    
  })