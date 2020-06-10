<template>
    <footer class="main-footer bg-light">
        <div class="row">
            <span class="copyright mx-auto"
                >SPA-VUE-STARTER COPYRIGHT © {{ year }}</span
            >
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        };
    }
};
</script>

<style scoped>
.main-footer {
    padding: 20px;
    box-shadow: 0 -0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
</style>
