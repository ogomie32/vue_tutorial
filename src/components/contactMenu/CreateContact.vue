<template>
    <div class=" contact-form mx-auto">
        <form>
            <h5>Create Contact</h5>
            <hr>
            <div class="row ">
                <div class="col-2  text-muted p-0 d-flexbox text-center">
                    <div class="row">
                        <div class="col-12">
                            <div><i class="material-icons form-icon" style="font-size: 50px;" title="contacts-logo">account_circle</i></div>
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col-12">
                            <div><i class="material-icons form-icon"  style="font-size: 20px;" title="contacts-logo">business</i></div>
                        </div>
                    </div>
                    <div class="row pt-4">
                        <div class="col-12">
                            <div><i class="material-icons form-icon" style="font-size: 20px;" title="contacts-logo">mail_outline</i></div>
                        </div>
                    </div>
                    <div class="row pt-4">
                        <div class="col-12">
                            <div><i class="material-icons form-icon" style="font-size: 20px;" title="contacts-logo">call</i></div>
                        </div>
                    </div>
                    <div class="row pt-4">
                        <div class="col-12">
                            <div><i class="material-icons form-icon" style="font-size: 20px;" title="contacts-logo">note</i></div>
                        </div>
                    </div>
                </div>
                <div class="col-10 p-0">
                    <div class="row pb-2" @mouseover="hover('fname', 'lname')" @mouseleave="hover(null)">
                        <div class="col-5">
                            <div class="form-group ">
                                <input
                                        type="text"
                                        id="fname"
                                        placeholder="First Name"
                                        class="form-control"
                                        v-model="users.fname"
                                        >
                            </div>
                        </div>
                        <div class="col-5">
                             <div class="form-group ">
                                <input
                                        type="text"
                                        id="lname"
                                        placeholder="Last Name"
                                        class="form-control"
                                        v-model="users.lname"
                                        >
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="pointer"
                                    @click="cancelBtn('fname','lname')" 
                                    v-if="isHovered('fname', 'lname')|| this.users.fname.length > 0 || this.users.lname.length > 0"
                                    ><i class="material-icons text-muted">cancel</i>
                            </div> 
                        </div>
                    </div> 
                    <div class="row pb-2" @mouseover="hover('company')" @mouseleave="hover(null)">
                        <div class="col-5">
                            <div class="form-group">
                                <input
                                        type="text"
                                        id="company"
                                        placeholder="Company"
                                        class="form-control"
                                        v-model="users.company"
                                        >
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="form-group">
                                <input
                                        type="text"
                                        id="job_title"
                                        placeholder="Job Title"
                                        class="form-control"
                                        v-model="users.job_title"
                                        >
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="pointer"
                                    @click="cancelBtn('company', 'job_title')" 
                                    v-if="isHovered('company') || this.users.company.length > 0 || this.users.job_title.length > 0"
                                    ><i class="material-icons text-muted">cancel</i>
                            </div>
                        </div>
                    </div>   
                    <div class="row pb-2" @mouseover="hover('email')" @mouseleave="hover(null)">
                        <div class="col-10">
                            <div class="form-group">
                                <input
                                        type="text"
                                        id="email"
                                        placeholder="Email"
                                        class="form-control"
                                        v-model="users.email"
                                        >
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="pointer"
                                    @click="cancelBtn('email')" 
                                    v-if="isHovered('email') || this.users.email.length > 0"
                                    ><i class="material-icons text-muted">cancel</i> 
                            </div>
                        </div>
                    </div>   
                    <div class="row pb-2" @mouseover="hover('tel')" @mouseleave="hover(null)">
                        <div class="col-10">
                            <div class="form-group">
                                <input
                                        type="text"
                                        id="tel"
                                        placeholder="Phone"
                                        class="form-control"
                                        v-model="users.tel"
                                        >
                            </div>
                        </div>
                        <div class="col-2">
                            <div  class="pointer"
                                    @click="cancelBtn('tel')" 
                                    v-if="isHovered('tel') || this.users.tel.length > 0"
                                    ><i class="material-icons text-muted">cancel</i>
                            </div> 
                        </div>
                    </div>  
                    <div class="row pb-2" @mouseover="hover('note')" @mouseleave="hover(null)">
                        <div class="col-10">
                            <div class="form-group">
                                <input
                                        type="text"
                                        id="note"
                                        placeholder="Notes"
                                        class="form-control"
                                        v-model="users.note"
                                        >
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="pointer"
                                    @click="cancelBtn('note')" 
                                    v-if="isHovered('note') || this.users.note.length > 0"
                                    ><i class="material-icons text-muted">cancel</i>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
            <hr class="m-0">
            <div class=" d-flex justify-content-between my-3 mx-5">
                <div class="text-primary pointer form-btn">Show more</div>
                <div class="d-flex">
                    <div class="text-primary mr-3 form-btn" @click.prevent="deleted" >Cancel</div>
                    <div class="text-muted ml-4 form-btn" @click.prevent="submitContacts">Save</div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    data() {
        return {
            hoveredform: null,
            users: {
                fname: '',
                lname: '',
                company: '',
                job_title: '',
                email: '',
                tel: '',
                note: ''
            },
        }
    },
    methods: {
        cancelBtn(field1, field2) {

            this.users[field1] = "";
            this.users[field2] = "";
        },
        hover(field){
            this.hoveredform = field;
        },
        isHovered(field){
            return this.hoveredform === field;
        },
         ...mapActions({
            SumbitForm: 'submitContacts'
        }),
        submitContacts() {
            const order = {
                contactsId: this.id,
                contactsName: this.users.fname +  '\t' + this.users.lname,
                contactsEmail: this.users.email,
                contactsTel: this.users.tel
            }
            this.$store.dispatch('submitContacts', order);
            this.users.fname = '',
            this.users.lname = '',
            this.users.email = '',
            this.users.tel = ''

            this.$router.push({name: 'home'});
           
        },
        deleted() {
            this.users = {
                fname: '',
                lname: '',
                company: '',
                job_title: '',
                email: '',
                tel: '',
                note: ''
            };

            this.$router.push({name: 'home'});
        }

    }
    
}
</script>

<style scoped>
    .contact-form {
        border: 1px solid #ccc;
        border-radius: 20px;
        width: 50%;
        margin-top: 100px;

    }
    .form-icon {
        cursor: pointer;
    }
    form {
        padding: 10px;
    }
   input {
       font-size: 11px;
       border: none;
       border-bottom: 1px solid #ccc;
   }
   .info-form {
       width: 250px;
       padding-right: 20px;
       padding-top: 10px;
   }
   .form-btn:hover{
       cursor: pointer;
       color: rgb(3, 28, 80);
       background: rgba(74, 161, 243, 0.096);
   }
   .blue {
       border-bottom: 1px solid blue;
   }
</style>