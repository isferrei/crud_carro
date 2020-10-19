<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12">
       <div class="default-input d-flex card-login">
          <vs-input label="Name" class="inputx" placeholder="Placeholder" v-model="fname"/><br>
          <vs-input
            type="password"
            label="Password"
            class="inputx"
            placeholder="Password"
            v-model="password"
          />
        </div>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    title: "login",
    password: "",
    fname: ""
  }),
};
</script>
<style scoped>
*{
  align-items: center;
}
.card-login{
  display: flex !important;
  flex-direction: column;
}
.vs-input{
  border-radius: 10px;
}

</style>

