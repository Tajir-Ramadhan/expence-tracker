<template>
    <div>
        <Header/>

        <div class="container">
            <Balance />
            <IncomeExpences />
            <TransactionList />
            <AddTransaction />
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import Balance from '../components/Balance.vue';
    import IncomeExpences from '../components/IncomeExpences.vue';
    import TransactionList from '../components/TransactionList.vue';
    import AddTransaction from '../components/AddTransaction.vue';



    export default {
        components: {
            Header,
            Balance,
            IncomeExpences,
            TransactionList,
            AddTransaction
        }
    }
</script>

<style lang="scss" scoped>

</style>