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
                        Quantity
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                    </th>
                    <td class="py-4 px-6">
                        <span
                            class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                            <span aria-hidden
                                class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                            <span class="relative">Cancelled</span>
                        </span>
                    </td>
                    <td class="py-4 px-12">
                        7
                    </td>
                    <td class="py-4 px-6">
                        $2999
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Microsoft Surface Pro
                    </th>
                    <td class="py-4 px-6">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span aria-hidden
                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                        <span class="relative">Delivered</span>
                        </span>
                    </td>
                    <td class="py-4 px-12">
                        6
                    </td>
                    <td class="py-4 px-6">
                        $1999
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Mouse 2
                    </th>
                    <td class="py-4 px-6">
                        <span
                            class="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                            <span aria-hidden
                                class="absolute inset-0 bg-blue-200 opacity-50 rounded-full"></span>
                            <span class="relative">Shipping</span>
                        </span>
                    </td>
                    <td class="py-4 px-12">
                        5
                    </td>
                    <td class="py-4 px-6">
                        $99
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</div>


</template>