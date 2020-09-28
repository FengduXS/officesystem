<template>
    <div class="home">
        <div class="topBar">
            <div>
                <span class="projectName">道普协同办公平台</span>
                <span v-for="(item,index) in menuData" :key="index" class="title" @click="selectMoudle(item)">{{item.meta.title}}</span>
            </div>
            <div class="user">
                <img src="./../assets/avater.jpg" alt="" srcset="" class="avater">
                <el-dropdown>
                    <span class="userName">
                        韩孟洁<i class="el-icon-arrow-down"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>修改个人信息</el-dropdown-item>
                        <el-dropdown-item>退出登陆</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <el-row>
            <el-col :span="2">
                <div class="menu">
                    <div class="moduleName"><span style="margin-left:20px">{{moduleName}}</span></div>
                    <div class="disactive-menuName" v-for="(item,index) in menu" :key="index">
                        <i class="el-icon-s-operation menuIcon"></i><span>{{item.meta?item.meta.title:''}}</span>
                    </div>
                </div>
            </el-col>
            <el-col :span="22">
                <div class="router">
                    <router-view/>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import menuData from '../router/routes'
export default {
    name: 'Home',
    data(){
        return{
            menuData:menuData,
            menu:[],
        }
    },
    computed:{
        'moduleName': function(){
            return this.$store.state.selectedMoudle.meta.title
        }
    },
    mounted(){
        
    },
    methods:{
        selectMoudle(item){
            if(item.meta.title == '首页'){
                this.menu = []
                this.$router.push({path: item.path})
            }else{
                this.menu = item.children
                this.$router.push({path: item.children[0].path})
            }
        }
    }
}
</script>
<style scoped>
.topBar{
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(32, 160, 255);
}
.projectName{
    color: white;
    font-size: 20px;
    font-weight: 500;
    margin: 0 20px;
}
.title{
    color: white;
    margin-left: 20px;
    cursor: pointer;
}
.user{
    float: right;
    display: flex;
    align-items: center;
}
.userName{
    color: white;
    cursor: pointer;
    margin-right: 25px;
}
.avater{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 15px;
}
.menu{
    width: 100%;
    height: calc(100vh - 50px);
    background-color: white;
}
.moduleName{
    color: #909399;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px dashed #909399;
}
.active-menuName{
    width: 100%;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    background-color: rgb(236, 245, 255);
    color: #66b1ff;
}
.disactive-menuName{
    width: 100%;
    height: 40px;
    color: #909399;
    line-height: 40px;
    cursor: pointer;
}
.disactive-menuName:hover{
    background-color: rgb(236, 245, 255);
    color: #66b1ff;
}
.menuIcon{
    margin: 0 10px 0 20px;
}
</style>

