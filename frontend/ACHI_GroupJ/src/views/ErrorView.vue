<template>
    <div>
        <h1>
            ERROR NOT FOUND
        </h1>
    </div>
</template>
<script setup lang="ts">
    import { dummyImport } from '../util/axiosUtil.ts'

    const test = dummyImport();
    console.log(test);
    

</script>