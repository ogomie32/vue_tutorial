<template>
    <tbody>
        <tr class="text-muted" @mouseover="hovered = true" @mouseleave="hovered = false">
            <td class="name-icons">
                <div class="d-flex py-1" v-if="hovered">
                    <div>
                        <i class="material-icons" style="cursor: pointer" @click="addStar(contact.id); clicked= false" v-if="clicked">star_border</i>
                        <i  v-else class="material-icons">star</i>
                    </div>
                    
                    <i class="material-icons">more_vert</i>
                </div>
                <div v-else class="contact-circle">{{ contact.name.charAt(0) }}</div>
                <span>{{ contact.name }}</span>
            </td>
            <td class="mt-3">{{ contact.email }}</td>
            <td>{{ contact.tel }}</td>
            <td></td>
            <td></td>
            <td class="hidden-icons mr-3 d-flex justify-content-start" :class="{'active': !hovered}">
                <div><i class="material-icons">star</i></div>
                <div><i class="material-icons">edit</i></div>
                <div><i class="material-icons">more_vert</i></div>
            </td>
        </tr>
        
    </tbody>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    props: ['contact'],
    data(){
        return{
            hovered: false,
            clicked: true
        }
    },
    methods: {
         ...mapActions({
            onAddStar: 'addStar'
        }),
        addStar(contactsId) {
            const order = {
                contactsId
            }
            this.onAddStar(order);
        },
    }
}
</script>

<style scoped>
    .name-icons {
        display: flex;
        align-items: center;
    }
    .contact-circle {
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
    .contact-circle.active {
        visibility: hidden;
    }
    .hidden-icons.active{
       visibility: hidden;
    }
</style>