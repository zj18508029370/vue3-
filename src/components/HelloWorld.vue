<template>
  <div class="hello"></div>
  <a :href="'tel:' + 110">{{ countRef }}</a>
  <br />
  <span>{{ objectRea.sunmit }}</span>
  <br />

  <span>{{ state.num }}</span
  ><br />
  <!-- <span>{{state1.value}}</span> -->
</template>

<script>
import { getFissionCourseList, getGetrequs, get, post } from "../http/request";
import { ref, reactive, computed } from "vue";
export default {
  setup() {
    const countRef = ref("ref");
    const objectRea = reactive({ sunmit: "btn" });

    const num = ref("老值");
    const state = reactive({ num });
    const num2 = ref(0);
    state.num = num2;
    // setInterval(() => {
    //   state.num++;
    // }, 2000);
    const count = ref(1);
    const plusOne = computed(() => count.value + 1);
    console.log(plusOne);
    return {
      countRef,
      objectRea,
      demo: ref("demo"),
      state,
    };
  },

  props: {
    msg: String,
  },
  data() {
    return {
      data: "",
    };
  },
  mounted() {
    this.getTopics();
  },
  methods: {
    getTopics() {
      get("topics", { page: 0 }).then((res) => {
        // console.log(res);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
