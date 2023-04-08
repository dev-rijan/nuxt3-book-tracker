<template>
  <n-config-provider>
    <n-message-provider>
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </n-message-provider>
  </n-config-provider>
</template>
<script lang="ts" setup>
import { NConfigProvider, NMessageProvider } from 'naive-ui'
</script>
