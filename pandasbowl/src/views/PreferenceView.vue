<template>
    <section class="bg-gray-50 dark:bg-gray-900 pb-10 pt-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
                <p class="mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl ">Preferences</p>
                <p class="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">Our main goal is to customise the recipes and food you see here according to your preference. Please choose the diets that you would prefer seeing</p>
            </div>

            <div class="mt-10">
                <dl class="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                <div v-for="feature in features" :key="feature.name" class="relative">
                    <dt>
                    <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                        <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p class="ml-16 text-lg font-medium leading-6 text-gray-900">{{ feature.name }}</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">{{ feature.description }}</dd>
                </div>
                </dl>
            </div>
        </div>

    </section>
</template>