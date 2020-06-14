<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                <div class="layout__main">
                    <Main />
                </div>
            </v-col>
            <v-col cols="9">
                <Detail />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Main from "@/components/Main.vue";
import Detail from "@/components/Detail.vue";

export default {
    name: "Home",
    components: {
        Main,
        Detail
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.layout__main {
    height: 80vh;
    overflow: hidden;
    overflow-y: scroll;
}
.layout__main::-webkit-scrollbar {
    width: 12px;
}

.layout__main::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
}

.layout__main::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 15px #a1a1a1;
    // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}
</style>
