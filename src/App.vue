<template>
  <ConfigProvider
    :theme="{
      token: {
        colorPrimary: '#00b96b',
      },
    }"
  >
    <RouterView></RouterView>
  </ConfigProvider>
</template>
<script>
import { ConfigProvider } from "ant-design-vue";
</script>
