<template>
<div class="container mx-auto">
    <div class=" export-form ">
        <form>
            <div class="p-2" style="font-size: 16px; font-weight: 500">Export contacts 
                <i class="material-icons text-muted  pl-3 text-center" style="font-size: 20px">help_outline</i>
            </div>
            <div class="form-group">
                <label for="male">
                    <input
                            type="radio"
                            id="male"
                            value="Male"
                            v-model="contacts"> Selected contacts
                </label>
            </div>
             <div class="form-group">
                <label for="male">
                    <input
                            type="radio"
                            id="contact"
                            value="Contacts"
                            v-model="contacts"> Contacts
                </label>
            </div>
            <div class="pb-3" style="font-size: 14px; font-weight: bold">Export as</div>
            <div class="form-group ">
                <label for="male">
                    <input
                            type="radio"
                            id="contact"
                            value="Contacts"
                            name="exportcsv"
                            v-model="csv"> Google CSV
                </label>
            </div>
            <div class="form-group">
                <label for="male">
                    <input
                            type="radio"
                            id="outlook"
                            value="outlook"
                            name="exportcsv"
                            v-model="outlook"> Outlook CVS
                </label>
            </div>
            <div class="form-group">
                <label for="male">
                    <input
                            type="radio"
                            id="vCard"
                            value="vCard"
                            name="exportcsv"
                            v-model="vcard"> vCard (for iOS contacts)
                </label>
            </div>
            <div class="row m-3">
                <div class="col-6"></div>
                <div class="col-2">
                    <div class="text-primary mr-4">Cancel</div>
                </div>
                <div class="col-4 text-right">
                    <div class="text-primary">Export</div>
                </div>   
            </div>
        </form>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            contacts: 'Contacts',
            csv: 'Google CSV'
        }
    }
}
</script>

<style scoped>
    .export-form {
        border: 1px solid #ccc;
        border-radius: 10px;
        width: 40%;
        margin-top: 150px;
        margin-left: 250px;
        font-size: 15px;
    }
    form {
        padding: 15px;
    }
    button {
        border-radius: 5px;
        padding: 10px;
        font-size: 14px;
    }
    .form-group {
        margin-bottom: 5px;
    }
</style>