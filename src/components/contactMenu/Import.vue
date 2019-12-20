<template>
<div class="container mx-auto">
    <div class=" import-form ">
        <form>
            <div class="p-2" style="font-size: 15px; font-weight: 500">Import contacts</div>
            <div class="p-2">To import contacts, select CSV and vCard file. <a href="#">Learn more</a></div>
            <div class="p-2">
                <button class="btn btn-primary px-3">Select file</button>
            </div>
            <div class="row m-3">
                <div class="col-6"></div>
                <div class="col-2">
                    <div class="text-primary mr-4">Cancel</div>
                </div>
                <div class="col-4 text-right">
                    <div class="text-muted">Import</div>
                </div>   
            </div>
        </form>
    </div>
</div>
</template>

<style scoped>
    .import-form {
        border: 1px solid #ccc;
        border-radius: 10px;
        width: 40%;
        margin-top: 150px;
        margin-left: 250px;
        font-size: 14px;
    }
    form {
        padding: 15px;
    }
    button {
        border-radius: 5px;
        padding: 10px;
        font-size: 14px;
    }
</style>