<template>
  <div>
    <h1>params: {{ $route.params.keyword }} and {{ keyword }}</h1>
    <h1>query: {{ $route.query.k }} and {{ k }}</h1>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['keyword', 'k']
}
</script>

<style>
</style>