<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <img src="https://images.rbxcdn.com/9281912c23312bc0d08ab750afa588cc.png" alt="404"  width="512">

      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">Take me home.</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got a leak.`,
  `Someone divided by zero.`,
  `That's Un-Four-unate.`,
  `We cannot find what you are looking for so instead we show you this blank page.`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
