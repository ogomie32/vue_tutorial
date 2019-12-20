<template>
    <div  class=" container-fluid mt-5" v-on-clickaway="out">
        <div class=" search-row bg-light"> 
            <div class="row p-4 nameBox">
                <div class="col-5 d-flex align-items-center">
                    <div class="green-circle ">{{ list.name.charAt(0) }}</div>
                    <span class="pl-3">{{ list.name}}</span>
                </div>
                <div class="col-3"></div>
                <div class="col-4  d-flex text-muted pl-5 align-items-center">
                    <div><i class="material-icons pl-2">star</i></div>
                    <div><i class="material-icons pl-2">edit</i></div>
                    <div><i class="material-icons pl-2">more_vert</i></div>
                    <div style="cursor: pointer;"><i class="material-icons pl-2" @click.prevent="del">clear</i></div> 
                </div>
            </div>
            <hr>
            <div class="row m-2" >
                <div class="col-12 m-3 fs">Contacts Details</div>
                <div class="col-12">
                    <div class="row m-2 fs-14">
                        <div class="col-1">
                            <i class="material-icons text-muted fs pr-0 text-right">call_outline</i>
                        </div>
                        <!-- <div class="col-1 p-0 m-0"></div> -->
                        <div class="col-8 d-flex pl-4">
                            <div class="text-primary">{{list.tel}}</div>
                            <div class="pl-2 fs-12 d-flex align-items-center"> . Mobile</div>
                        </div>
                    </div>
                    
                </div>
            </div>
                
        </div>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
    mixins: [ clickaway ],
    computed: {
        list() {
            return this.$store.getters.getSearchContact;
        }
    },
    methods: {
        out(){

            console.log('hello');
            this.$router.push({name: 'home'});
        },
         del() {

            this.$router.push({name: 'home'});
        }
    }
}
</script>

<style scoped>
    .search-row {
        width: 50%;
        margin: 150px;
        color: rgb(94, 92, 92);
        
    }
    .nameBox {
        display: flex;
        justify-content: space-between;
        padding: 40px 10px;
        font-size: 22px;
        
    }
    .green-circle {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: darkgreen;
        color: white;
        font-size: 30px;
        display: inline-flex;
        justify-content: center;
        align-items: center; 
        margin-right: 10px;
    }
    .fs {
        font-size: 18px;
    }
    .fs-12 {
        font-size: 12px;
    }
    .fs-14 {
        font-size: 14px;
    }
    hr {
        margin: 0;
    }
</style>