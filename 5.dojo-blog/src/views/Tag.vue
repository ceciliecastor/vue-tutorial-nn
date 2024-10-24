<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postWithTag" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPosts from "@/composables/getPosts";
import PostList from "@/components/PostList.vue";
import TagCloud from "@/components/TagCloud.vue";
import Spinner from "@/components/Spinner.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: { PostList, Spinner, TagCloud },
  setup() {
    const route = useRoute();
    //unpack the data
    const { posts, error, load } = getPosts();

    load();

    //computed property
    const postWithTag = computed(() => {
      //boolean returns value if the post we're itteration returns true to the value in the param
      return posts.value.filter((p) => p.tags.includes(route.params.tag));
    });
    return { error, posts, postWithTag };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
