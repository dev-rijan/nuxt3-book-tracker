<template>
  <n-config-provider>
    <n-message-provider>
      <n-dialog-provider>
        <NuxtLayout>
          <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
          <NuxtPage />
        </NuxtLayout>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>
<script lang="ts" setup>
import { NConfigProvider, NMessageProvider, NDialogProvider } from 'naive-ui'
</script>
