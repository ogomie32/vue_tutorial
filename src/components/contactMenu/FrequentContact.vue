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
                    <th style="width: 5%"><i class="material-icons pl-5">more_vert</i></th>
                </tr>
            </thead>
            <div class="text-muted p-2 d-flex" style="font-size: 11px;" >
                 <div class="pr-2">FREQUENTLY CONTACTED</div>
                 <div class="d-flex"> ({{freqContacted.length}})</div>
            </div>
            <app-contact v-for="contact in freqContacted" :key="contact.id" :contact="contact"></app-contact>
        </table>
    </div>
</template>

<script>
import Contact from '../contacts/Contact.vue';

export default {
    data(){
       return {
           show: false
       };
    },
    components: {
        appContact: Contact
    },
    computed: {
        contacts() {
            return this.$store.state.contacts;
        },
        freqContacted(){
            const newArray = [];
            this.contacts.forEach(contact => {
                if(contact.frequently) {
                    newArray.push(contact);
                } 
            });
            return newArray;
        }
    }
}
</script>

<style scoped>
    .table {
        font-size: 14px;
    }
</style>