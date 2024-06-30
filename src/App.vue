<template>
    <div>
        <el-menu
            :default-active="routePath"
            class="el-menu-demo"
            mode="horizontal"
            router
        >
            <el-menu-item index="/">{{ $t('home.title') }}</el-menu-item>
            <el-menu-item index="/dashboard">{{
                $t('dashboard.title')
            }}</el-menu-item>
        </el-menu>
        <div>
            <router-view />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const routePath = computed(() => route.path)
</script>

<style scoped></style>
