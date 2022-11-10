<script>
import axios from "axios";
export default {
    data () {
        return {
        transactions:[]
        };
    },

    async created(){

        await axios.get('transactions/past',
        {
            headers: {
            'Authorization': "Bearer " + localStorage.getItem("token")
            }
        })
        .then((response) => {
        this.transactions = response.data;
        console.log(response.data);
        })
        .catch((error) => {
        console.log(error.message);
        });
    },

};
</script>
<template>

<div class="w-5/6 mt-16 mx-auto">
    <p class="text-2xl font-bold">My Orders</p>
    <div class="overflow-x-auto relative mt-5">
        <table class="w-full border text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Product name
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Status
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Date
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple Crumble
                    </th>
                    <td class="py-4 px-6">
                        <span
                            class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                            <span aria-hidden
                                class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                            <span class="relative">Payment Failed</span>
                        </span>
                    </td>
                    <td class="py-4 px-6">
                        2022-11-9
                    </td>
                    <td class="py-4 px-6">
                        $50
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="transaction in transactions" :key="transaction">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{transaction.foodName}}
                    </th>
                    <td class="py-4 px-6">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span aria-hidden
                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                            <span class="relative">Payment Success</span>
                        </span>
                    </td>
                    <td class="py-4 px-6">
                        {{transaction.transactionDate}}
                    </td>
                    <td class="py-4 px-6">
                        ${{transaction.totalCost}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</div>


</template>