Vue.component("title-list", {
    template: `
      <!-- 这个是模板名 -->
      <div class="title">
            <ul>
                <li v-for="item in latest.stories" @click="$emit('linum',item.id)">
                    <div class="left">
                        <h3>{{item.title}}</h3>
                        <span>{{item.hint}}</span>
                    </div>
                    <div>
                        <img v-bind:src="item.images" alt="">
                    </div>

                </li>

            </ul>
        </div>
    `,
    props:["latest"],
    data() {
        return {
            
        }

    }

})