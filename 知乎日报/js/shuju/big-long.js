Vue.component("big-long", {
    template: `
      
     <div>
        <div class="big-long" v-for="item in long">

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
                                :src="plshoucang(item.id) ? './img/shoucang1.jpg ' : './img/shoucang.jpg ' ">

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
 

    `,
    props: ["long", "pldianzan", "plshoucang", "month", "day", "addid", "addid1"],
    data() {
        return {

        }

    }

})