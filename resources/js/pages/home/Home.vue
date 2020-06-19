<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <table class="table mt-5">
          <thead>
            <tr>
              <th scope="col">Tecnologies</th>
              <th scope="col">Version</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.name">
              <th scope="row">{{item.name}}</th>
              <td>{{item.version}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "Laravel", version: "6.2 (LTS)" },
        { name: "Vue", version: "2.5.7" },
        { name: "Vue-router", version: "3.3.2" },
        { name: "Vuex", version: "3.4.0" },
        { name: "Axios", version: "0.19" },
        { name: "JWT", version: "1.0" }
      ]
    };
  }
};
</script>
