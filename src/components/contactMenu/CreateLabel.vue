<template>
<div class="container mx-auto">
    <div class=" label-form ">
        <form>
            <div style="font-size: 16px;">Create Label</div>
            <div class="form-group my-5">
                <input type="text" id="text" class="form-control">
            </div>
            <div class="row m-3">
                <div class="col-6"></div>
                <div class="col-2">
                    <div class="text-primary mr-4">Cancel</div>
                </div>
                <div class="col-4 text-right">
                    <div class="text-primary">Save</div>
                </div>   
            </div>
        </form>
    </div>
</div>
</template>

<style scoped>
    .label-form {
        border: 1px solid #ccc;
        border-radius: 10px;
        width: 30%;
        margin-top: 150px;
        margin-left: 250px;
    }
    form {
        padding: 15px;
    }
   input {
       font-size: 11px;
       border: none;
       outline: none;
       border-bottom: 1px solid blue;
    }
</style>