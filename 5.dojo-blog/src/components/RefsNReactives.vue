<template>
  <div class="tut-ref">
    Home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">add 1</button>
    <input type="text" v-model="name" />
    <h2>refs</h2>
    <p>{{ ninjaOne.nameTwo }} - {{ ninjaOne.ageTwo }}</p>
    <button @click="updateNinjaOne">Update Ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Hehehe</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Home",
  setup() {
    // ---- REF EXAMPLE ----
    // the ref-object is a constant, the value can change
    const name = ref("mario");
    const age = ref(30);

    const handleClick = () => {
      name.value = "luigi"; // Corrected assignment
    };
    //ref 'ninjaOne' har a value of an object
    const ninjaOne = ref({ nameTwo: "heidi", ageTwo: 30 });

    const updateNinjaOne = () => {
      ninjaOne.value.ageTwo = 40;
    };

    //---- REACTIVE EXAMPLE ----
    //can't use primitive values with reactive
    const ninjaTwo = reactive({ name: "luigi", age: 35 });

    const updateNinjaTwo = () => {
      //don't need to use .value when using 'reactive'
      ninjaTwo.age = 2;
    };

    return {
      name,
      age,
      handleClick,
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
    };
  },
};
</script>
