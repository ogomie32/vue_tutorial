<template>
    <div class="top-nav" :class="{sideMenuBox: xShow}">
        <div class="d-flex">
            <div @click="showMenu" class="text-muted menu-icon"><i class="material-icons" style="padding-right: 20px" title="contacts">menu</i></div>
            <div class="text-primary menu-icon"><i class="material-icons" style="font-size: 40px; padding-right: 20px" title="contacts-logo">account_circle</i></div>
            <div class="contact-txt text-muted">Contacts</div>
        </div>
        <div class="d-block" style="position: relative">
            <div 
                class="search-box"
                @click="txtClicked = true"
                :class="{white: txtClicked}">
                    <div><i class="material-icons text-muted">search</i></div>
                    <input
                        @focus="txtClicked = true"
                        @blur="txtClicked = false"
                        type="text" 
                        placeholder="Search" 
                        class="contact-search dropdown-toggle"
                        v-model="text"
                    />
                    <div>
                        <i class="material-icons text-muted clearBtn" v-if="text.length > 0" @click="cancelBtn()">clear</i>
                    </div>
            </div>
            <div v-if="text.length > 0" class="filterContacts" v-on-clickaway="away">
                <div class="row pb-2 filtrow" v-for="filteredArray in filteredArrays" :key="filteredArray.name" @click="showSearchData(filteredArray)">
                    <div class="col-6">
                        <div class="color-circle">{{ filteredArray.name.charAt(0) }}</div>
                        <span>{{ filteredArray.name }}</span>
                    </div>
                    <div class=" col-6 pt-2 pl-4">{{ filteredArray.email }}</div>
                </div>
            </div>
        </div>
        
        <div class="side-icon">
            <div ><i class="material-icons text-muted p-3 menu-icon" title="Help Menu">help_outline</i></div>
            <div><i class="material-icons text-muted p-3 menu-icon" title="Setting Menu">settings</i></div>
            <div class="app-icon"><i class="material-icons text-muted p-3 pl-5  menu-icon">apps</i></div>
            <div><i class="material-icons text-muted p-3">info</i></div>
        </div>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
    export default {
        mixins: [ clickaway ],
        data() {
            return {
                txtClicked: false,
                text: '',
                color: 'white',
                xShow: true
            }
        },
        computed: {
            filteredArrays(){
                return this.$store.getters.getFilteredContacts;
            }
        },
        watch: {
            text(){
                this.filterSearch();
            }
        },
        methods: {
            showSearchData(contact){
                this.text = "";
                this.$store.commit('SET_SEARCH_CONTACT', contact);
                this.$router.push({ name: 'search-contact' });
            },
            away(){
                this.text = "";
            },
            showMenu() {
                this.xShow = !this.xShow;
                this.$store.commit('SET_SHOW_SIDE_MENU', !this.xShow);
            },
            cancelBtn() {
                this.text = "";
            },
            filterSearch() {
                if(this.text.length < 1){
                   
                }
                this.$store.commit('FILTER_SEARCH', this.text);

            }
        },
    }
</script>


<style scoped>
    .top-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
     .search-box {
        border: 0px solid #ccc;
        border-radius: 12px;
        padding: 8px;
        background: rgb(235, 235, 235);
        display: flex;
        align-items: center;
        width: 750px;
        transition: 500ms all;
    }
    .menu-icon {
        cursor: pointer;
    }
    .contact-txt {
        font-size: 20px;
    }
    .contact-search {
        padding: 5px 7px;
        background: none;
        border: none;
        outline: none;
        width: 700px;
    }
    .side-icon {
        display: flex;
        justify-content: end;
    }
    .white {
        background: white;
        border: 1px solid rgb(230, 229, 229);
        box-shadow: 0 1px 1px 0 silver, 0 4px 3px 0px silver;
        border-radius: none;
    }
    .clearBtn {
        cursor: pointer;
    }
    .filterContacts {
        position: absolute;
        background: white;
        box-shadow: 0 1px 1px 0 silver, 0 4px 3px 0px silver;
        z-index: 1;
        padding: 20px;
        width: 100%;
        border-radius: 10px;
        cursor: pointer;
    }
    .filtrow:hover {
        background: rgb(245, 244, 244);
        padding: 0;

    }
    .color-circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: darkgreen;
        color: white;
        display: inline-flex;
        justify-content: center;
        align-items: center; 
        margin-right: 10px;
    }
    a {
        text-decoration: none;
        color: black;
    }
    
</style>