<template>
  <div class="field">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<style>
.field {
  display: flex;
  gap: 4px;
  border: 1px solid #4059d9;
  border-radius: 3px;
  padding: 4px 8px;
}
.icon {
}

.text {
  color: #5a5a5a;
}
</style>
