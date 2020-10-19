<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12">
      <!--
        /////////////////
        Default Inputs
        /////////////////
      -->
      <vs-card>
        <h3 class="card-title d-flex">
          Default Inputs
        </h3>
        <h3 class="card-title d-flex">
          Input Label
          <vs-button class="ml-auto p-0" @click="inputlabel=true" type="line">
            <vs-icon icon="code"></vs-icon>
          </vs-button>
        </h3>
        <p class="card-subtitle">
          Add a label to the input with the property
          <code>label</code>.
        </p>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: "input",
  data: () => ({
    title: "Input",
    defaulinputs: false,
    value1: "",
    value2: "",
    inputlabel: false,
    fname: "",
    password: "",
    inputlabelplace: false,
    lp1: "",
    lp2: "",
    inputicon: false,
    inputicon1: "",
    inputicon2: "",
    inputicon3: "",
    inputicon4: "",
    inputicon5: "",
    inputicon6: "",
    inputicon7: "",
    inputcolor: false,
    colorinput1: "",
    colorinput2: "",
    colorinput3: "",
    colorinput4: "",
    colorinput5: "",
    colorinput6: "",
    colorinput7: "",
    inputvalidation: false,
    inputsize: false,
    inputsize1: "",
    inputsize2: "",
    inputsize3: ""
  })
};
</script>


