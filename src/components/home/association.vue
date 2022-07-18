<template>
  <article>
    <Description />

    <Numbers />

    <Members />

    <Timeline />
  </article>
</template>

<script>
import Description from "@/components/home/association/description";
import Numbers from "@/components/home/association/numbers";
import Members from "@/components/home/association/members";
import Timeline from "@/components/home/association/timeline";

export default {
  name: "associationComponent",
  components: {
    Description,
    Numbers,
    Members,
    Timeline,
  },
};
</script>
