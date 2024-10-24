import { ref } from "vue";

const useTags = (posts) => {
  const tags = ref([]);
  //A Set is like an array but whitout duplicates
  const tagSet = new Set();

  //running a function forEach post
  posts.forEach((item) => {
    //running a function forEach item in each post
    item.tags.forEach((tag) => tagSet.add(tag));
  });
  //UPDATE ARRAY: takes all of the values in the tagSet and spreads them out in the array
  tags.value = [...tagSet];

  return { tags };
};
export default useTags;
