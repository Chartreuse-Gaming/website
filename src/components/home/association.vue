<template>
  <article>
    <Description />

    <Members />

    <Timeline />
  </article>
</template>

<script>
import Description from "@/components/home/association/description";
import Members from "@/components/home/association/members";
import Timeline from "@/components/home/association/timeline";

export default {
  name: "associationComponent",
  components: {
    Description,
    Members,
    Timeline,
  },
};
</script>
