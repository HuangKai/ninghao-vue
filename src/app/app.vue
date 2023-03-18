<template>
    <h3>{{ name }}</h3>
    {{ processStatus }}
    <button v-on:click="resetName">重置</button>
    <button @click="setName">设置</button>
</template>

<script>
export default {
    data() {
        return {
            name: 'NINGHAO',
        };
    },
    created() {
        console.log('App 组件已创建！');

        this.setName();

    },
    methods: {
        setName() {
            setTimeout(() => {
                this.name = '宁皓网 🚀';
            }, 3000);
        },
        resetName() {
            this.name = 'NINGHAO';
        },
    },
    computed: {
        processStatus() {
            return this.name === 'NINGHAO' ? "初始化..." : "成功设置了数据！";
        }
    },
    watch: {
        name(newName, oldName) {
            console.log(`name 发生了变化: ${oldName} -> ${newName}`);
        }
    },
};
</script>

<style>
button {
    margin: 4px;
}
</style>