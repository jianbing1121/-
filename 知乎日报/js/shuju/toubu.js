Vue.component("toubu",{
    template:`
      <!-- 这个是模板名 -->
      <div class="toubu">
            <ul>
                <li class="sj">
                    <ol class="one">&nbsp{{day}}</ol>
                    <ol class="two">{{month}}</ol>

                </li>

                <li>
                    <h2>知乎日报</h2>
                </li>
                <li @click="txtz"><img src="../9.jpg" alt=""></li>
            </ul>
        </div>
    `,
    props:["month","day","txtz"],
    data(){
      return {
  
      }
       
    }
    
  })