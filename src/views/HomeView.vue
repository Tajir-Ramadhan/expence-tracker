<template>
    <div>
        <Header/>

        <div class="container">
            <Balance />
            <IncomeExpences />
            <TransactionList :transactions="transactions"/>
            <AddTransaction />
        </div>
    </div>
</template>

<script setup>
    import Header from '../components/Header.vue';
    import Balance from '../components/Balance.vue';
    import IncomeExpences from '../components/IncomeExpences.vue';
    import TransactionList from '../components/TransactionList.vue';
    import AddTransaction from '../components/AddTransaction.vue';

    import { ref } from 'vue';

    const transactions = ref([

        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ])
    const sum = computed( () => {
        return transactions.value.reduce( (acc, transaction) => {
            return acc + transaction.amount
        }, 0)
    })
</script>

<style lang="scss" scoped>

</style>