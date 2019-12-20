<template>
    <div>
        <!-- <router-view ></router-view> -->
        <table class="table pl-3 w-100 table-borderless table-hover">
            <thead>
                <tr class="text-muted border-bottom">
                    <th style="width: 25%">Name</th>
                    <th style="width: 18%">Email</th>
                    <th style="width: 15%">Phone Number</th>
                    <th style="width: 15%">Job Title & Company</th>
                    <th style="width: 20%">Labels</th>
                    <th style="width: 5%"><i class="material-icons pl-5" title="List Settings">more_vert</i></th>
                </tr>
            </thead>
            <div class="text-muted p-2 d-flex" style="font-size: 11px;" >
                 <div class="pr-2">CONTACTS</div>
                 <div class="d-flex"> ({{sortedContacts.length}}) </div>
            </div>
            <app-contact v-for="contact in contacts" :key="contact.id" :contact="contact"></app-contact>
        </table>
    </div>
</template>

<script>
import Contact from './Contact.vue';

export default {
    data(){
       return {
           show: false,
       };
    },
    components: {
        appContact: Contact,
    },
    computed: {
        contacts() {
            return this.$store.state.contacts;
        },
        sortedContacts() {
            return this.$store.getters.sortedContacts;
            this.contacts.sort(function(a,b){
                if (a.name < b.name){
                    return -1 
                }
                if (a.name > b.name){
                    return 1
                }
                return 0
            })
        }
    },
}
</script>

<style scoped>
    .table {
        font-size: 14px;
    }
</style>