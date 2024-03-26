<template>
    <div>
        <Header/>

        <div class="container">
            <Balance :total="+total"/>
            <IncomeExpences :income="+income" :expences="+expences"/>
            <TransactionList  :transactions="transactions" @transactionDeleted="handleTransactionDeleted" />
            <AddTransaction @transactionSubmitted="handleTransactionSumbitted" />
        </div>
        
    </div>
</template>

<script setup>
    import Header from '../components/Header.vue';
    import Balance from '../components/Balance.vue';
    import IncomeExpences from '../components/IncomeExpences.vue';
    import TransactionList from '../components/TransactionList.vue';
    import AddTransaction from '../components/AddTransaction.vue';

    import {useToast} from 'vue-toastification'

    import { computed, ref, onMounted} from 'vue';

    onMounted( () => {
        const savedTransactions = JSON.parse(localStorage.getItem('transactions'))

        if(savedTransactions) {
            transactions.value = savedTransactions;
        }
    })

    const toast = useToast()

    const transactions = ref([
        // { id: 1, text: 'Flower', amount: 237.98 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 }
    ])

    //total
    const total = computed( () => {
        return transactions.value.reduce( (acc, transaction) => {
            return acc + transaction.amount
        },0)
    })
   
   //income
   const income = computed( () => {
        return transactions.value.filter( (transaction) => transaction.amount > 0)
        .reduce( (acc, transaction) => {
            return acc + transaction.amount
        },0).toFixed(2)
    })
    console.log(income.value)

    //expences
    const expences = computed( () => {
        return transactions.value.filter( (transaction) => transaction.amount < 0)
        .reduce( (acc, transaction) => {
            return acc + transaction.amount
        },0).toFixed(2)
    })

    //handle transaction
    const handleTransactionSumbitted = (transactionData) => {

        transactions.value.push({
            id: generateUniqueId(),
            text: transactionData.text,
            amount: transactionData.amount
        })
        
        saveTransactionToLocalStorage()
        toast.success('Transaction added sucessfuly')
    }

    //delete transaction

    const handleTransactionDeleted = (id) => {
        transactions.value = transactions.value.filter( (transaction) => transaction.id !== id)

        toast.success('Transaction deleted')

        saveTransactionToLocalStorage()
        
    }

    //generate unique ID
    const generateUniqueId = () => {
        return Math.floor(Math.random() * 1000000)
    }
    

    //add to local storage
    const saveTransactionToLocalStorage = () => {
        localStorage.setItem('transactions', JSON.stringify(transactions.value))
    }
</script>

<style lang="scss" scoped>

</style>