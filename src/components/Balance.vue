<template>
    <div>
        <h4>Your Balance</h4>
        <h1 id="balance">${{ sum }}</h1>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        sum:{
            type: Number,
            required: true
        }
    })

    console.log(total)
</script>