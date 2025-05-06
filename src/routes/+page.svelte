<script lang="ts">
    let name = 'Venco'; // In case i want to change my username basically everywhere i guess
    let gravatarsrc = 'https://gravatar.com/avatar/9f5b5ad2d2cd1bca67ec2702f8cbabf38bf1d10140bd7266ab15fdd4b2311fda?s=128';
</script>
<div class="container">
    <div class="tl"></div>
    <div class="r"></div>
    <div class="bl"></div>
</div>

<style>
    .container {
        display: flex;
        width: 100%;
        height: 100vh;
        gap: 20px;
        padding: 20px;
    }
    .tl {
        justify-content: flex-start;
        flex: 1;
        align-items: flex-start;
        background-color: blue;
    }
    .r {
        flex: 1;
        background-color: rgb(255, 0, 64);
        justify-content: flex-end;
        border: 2px solid black;
    }
    .bl {
        flex: 1;
        justify-content: flex-start;
        align-items: flex-end;
        background-color: rgb(0, 255, 76);
    }
</style>