<script setup>
import SimpleKeyboard from "../components/SimpleKeyboard.vue";
import WordRow from "../components/WordRow.vue"
import {reactive, onMounted, computed } from "vue";

const state = reactive({
    //set answer here
    solution: "panda",
    guesses: ["", "", "", "","",""],
    currentGuessIndex: 0,
    guessedLetters: {
        miss: [],
        found: [],
        hint: [],
    },
});

const wonGame = computed(
    () =>
      state.guesses[state.currentGuessIndex - 1] === state.solution
);

const lostGame = computed(() => !wonGame.value 
  && state.currentGuessIndex >=6
);

const handleInput = (key) => {
    if (state.currentGuessIndex >= 6 || wonGame.value) {
        return;
    }
    const currentGuess = state.guesses[state.currentGuessIndex];
    if (key == "{enter}") {
        //send guess
        if (currentGuess.length == 5){
            state.currentGuessIndex++;
            for (var i = 0; i < currentGuess.length; i++){
                let c = currentGuess.charAt(i);
                if (c == state.solution.charAt(i)) {
                    state.guessedLetters.found.push(c);
                } else if (state.solution.indexOf(c) != -1) {
                    state.gueessedLetters.hint.push(c);
                } else {
                    state.guessedLetters.miss.push(c);
                }
            }
        }
    } else if (key == "{bksp}") {
        //remove last letter
        state.guesses[state.currentGuessIndex] = 
        currentGuess.slice(0,-1);
    } else if (currentGuess.length<5) {
        //add letter if alpahbetical
        const alphaRegex = /[a-zA-Z]/;
        if (alphaRegex.test(key)) {
            state.guesses[state.currentGuessIndex] +=key;
        }
        }
    };

onMounted(() => {
    window.addEventListener("keyup", (e) => {
        e.preventDefault();
        let key =
        e.keyCode ==13
            ? "{enter}"
            : e.keyCode == 8
            ? "{bksp}"
            : String.fromCharCode(e.keyCode).toLowerCase();
            handleInput(key);
    });
});
</script>

<template>
    <body class="bg-lime-100">
    <div class="flex flex-col h-screen max-w-md mx-auto justify-evenly bg-lime-100" style='background-image: url("../assets/foodbg1.jpg");'>
        <div class="p-6">
        <h2 class="text-center text-rose-900 text-5xl font-bold p-3">Pandle</h2>
           <word-row
           v-for="(guess,i) in state.guesses"
           :key="i"
           :value="guess"
           :solution="state.solution"
           :submitted="i<state.currentGuessIndex"
           /> 
        </div>
        <div v-if="wonGame" class="text-center border-solid border- p-2">
            <p class="text-2xl font-bold text-rose-800">
                Congrats you solved it!<br>
            You earned a discount for your next purchase
            </p>
            <button class="bg-rose-900 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded-full">
                Redeem
            </button>
        </div>
        <div v-else-if="lostGame" class="text-center">
            Out of tries.
            <!-- <button class="bg-rose-900 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded-full">
                Retry
            </button> -->
        </div>
        <simple-keyboard 
        @onKeyPress="handleInput"
        :guessedLetters="state.guessedLetters"
        />
    </div>
</body>
</template>
