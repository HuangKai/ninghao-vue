<template>
    <h3>{{ name }}</h3>
    {{ processStatus }}
    <button v-on:click="resetName">重置</button>
    <button @click="setName">设置</button>
    <div v-for="(post, index) in postList" :key="post.id">
        {{ index + 1 }} {{ post.content }} - <small>{{ post.author }}</small>
    </div>
    <hr>
    <div v-if="visible">隐藏的内容！</div>
    <button @click="visible = !visible">{{ visible ? '隐藏' : '显示' }}</button>
</template>

<script>
export default {
    data() {
        return {
            name: 'NINGHAO',
            postList: [
                {
                    id: 1,
                    content: '故人西辞黄鹤楼，烟花三月下扬州',
                    author: '李白'
                }, {
                    id: 2,
                    content: '好雨知时节，当春乃发生',
                    author: '杜甫'
                }, {
                    id: 3,
                    content: '浔阳江头夜送客，枫叶荻花秋瑟瑟',
                    author: '白居易'
                },
            ],
            visible: true,
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