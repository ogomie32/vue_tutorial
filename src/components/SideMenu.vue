<template>
    <div>
        <div>
            <router-link to="/createcontact" >
                <div class="create-btn">
                    <div ><svg width="36" height="36" viewBox="0 0 36 36"><path fill="#34A853" d="M16 16v14h4V20z"></path><path fill="#4285F4" d="M30 16H20l-4 4h14z"></path><path fill="FBBC05" d="M6 16v4h10l4-4z"></path><path fill="#EA4335" d="M20 16V6h-4v14z"></path><path fill="none" d="M0 0h36v36H0z"></path></svg></div>
                    <div class="text-decoration-none" style="padding-left: 10px;">Create contacts</div>
                </div>
            </router-link>
            <div class="menu-border">
                     <router-link to="/" exact-active-class="is_active">
                        <div class="border-list">
                            <div><i class="material-icons pr-4 pl-4 text-muted">person_outline</i></div>
                            <div>Contacts</div>
                            <div class="pl-5">
                                    {{contactsCount}}
                            </div> 
                        </div>
                    </router-link>
                    <router-link to="/frequentcontact" active-class="is_active">
                        <div class="border-list">
                            <div><i class="material-icons pr-4 pl-4 text-muted ">restore</i></div>
                            <div>Frequently contacted</div> 
                        </div>
                    </router-link>
                
                    <router-link to="/duplicate" active-class="is_active">
                        <div class="border-list">
                            <div><i class="material-icons pr-4 pl-4 text-muted ">note</i></div>
                            <div>Duplicates</div> 
                        </div>
                    </router-link>
                <hr>
                <div class="border-list" @click="isDropdownOpen = !isDropdownOpen">
                    <div><i class="material-icons pr-4 pl-4 text-muted ">keyboard_arrow_up</i></div>
                    <div>Labels</div> 
                </div>
                <router-link to="/createlabel" active-class="is_active">
                    <div class="border-list" v-show="!isDropdownOpen" >
                        <div><i class="material-icons pr-4 pl-4 text-muted ">add</i></div>
                        <div>Create Label</div> 
                    </div>
                </router-link>
                <hr>
                <router-link to="/import" active-class="is_active">
                    <div class="border-list">
                        <div><i class="material-icons pr-4 pl-4 text-muted">search</i></div>
                        <div>Import</div> 
                    </div>
                </router-link>
                <router-link to="/export" active-class="is_active">
                    <div class="border-list">
                        <div><i class="material-icons pr-4 pl-4 text-muted ">backup</i></div>
                        <div>Export</div> 
                    </div>
                </router-link>
                
                <div class="border-list" active-class="is_active">
                    <div><i class="material-icons pr-4 pl-4 text-muted ">print</i></div>
                    <div>Print</div> 
                </div>
                <hr>
                <div class="border-list">
                    <div><i class="material-icons pr-4 pl-4 text-muted ">folder</i></div>
                    <div>Other contacts</div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true,
                isDropdownOpen: false,
                current: false
            }
        },
        computed: {
            contactsCount() {
                return this.$store.getters.contactsCount;
            },
            showSideMenu(){
                return this.$store.getters.getShowSideMenu;
            }
        }
    }
</script>


<style scoped>
    .sideMenuBox {
        display: none;
    }
    .contact-txt {
        font-size: 25px;
        padding: 10px 5px;
    }

    .border-list:hover {
        border: 0px solid silver;
        background: rgb(240, 240, 240);
        border-bottom-right-radius: 20px;
        border-top-right-radius: 20px;
        cursor: pointer;
        width: 100%;
    }
    
    .is_active .border-list{
        background: rgba(75, 131, 236, 0.349);
        border: 0px solid none;
        border-bottom-right-radius: 20px;
        border-top-right-radius: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        color: rgb(75, 131, 236);
        font-size: 14px;
        /* background-color: blue; */
        font-weight: 500;
        /* padding: 5px; */
        margin: 0;
    }
    .is_active .border-list .text-muted{
        color: rgb(75, 131, 236) !important;
    }

    .create-btn{
        width: 200px;
        background: rgb(235, 235, 235);
        font-size: 16px;
        font-weight: 500;
        color: rgb(59, 59, 59);
        margin: 15px 5px;
        padding: 6px;
        border: 0px solid rgb(192, 192, 192);
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.14);
        cursor: pointer;
        text-decoration: none;
    }
    a {
        text-decoration: none;
        color: black;
    }
    .border-list {
        font-size: 14px;
        font-weight: 500;
        padding: 5px;
        margin: 0;
        display: flex;
        align-items: center;
    }
    hr {
        margin: 5px;
    }
</style>

const filterTodos = (terms) => {

    Array.from(list.children)
    .filter((todo)  => !todo.textContent.includes(terms))
    .forEach((todo)  => todo.classList.add('filtered'));

     Array.from(list.children)
    .filter((todo)  => todo.textContent.includes(terms))
    .forEach((todo)  => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(terms);
});