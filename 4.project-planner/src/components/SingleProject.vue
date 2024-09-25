<template>
  <div class="project">
    <div class="actions">
      <h3 @click="toggleDetails">
        {{ project.title }}
      </h3>
      <div class="icons">
        <span class="material-icons">edit</span>
        <span class="material-icons" @click="deleteProject">delete</span>
        <span class="material-icons">done</span>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDetails: false,
      uri: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  props: ["project"],
  methods: {
    toggleDetails() {
      //! means set the showDetails to the opposite of what it is.
      this.showDetails = !this.showDetails;
    },
    deleteProject() {
      //delete request takes a secon argument: an objects object
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id))
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
</style>
