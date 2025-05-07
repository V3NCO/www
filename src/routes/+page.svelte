<script lang="ts">
    let name = 'Venco'; // In case i want to change my username basically everywhere i guess
    let gravatarsrc = 'https://gravatar.com/avatar/9f5b5ad2d2cd1bca67ec2702f8cbabf38bf1d10140bd7266ab15fdd4b2311fda?s=128';
</script>

<div class="tl">
    <div class="box">
        <div class="image-container">
            <img src={gravatarsrc} alt="{name}'s profile picture : Basil from omori with happy emotion in combat state" width="128" height="128" class="pfp"/>
        </div>
    </div>
</div>
<div class="r">
    <div class="box">
        
    </div>
</div>
<div class="bl">
    <div class="box">
        
    </div>
</div>

<style>
    .image-container {
        display: flex; /* Make it a flex container */
        justify-content: flex-start; /* Horizontal alignment - keep it left-aligned */
        align-items: center; /* This centers content vertically */
        width: 100%;
        height: 100%; /* Take up full height of parent */
    }
    .tl {
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 20%;
        background-color: #494949;
        padding: 15px;
    }
    .r {
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        background-color: #494949;
        padding: 15px;
    }
    .bl {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%;
        height: 80%;
        background-color: #494949;
        padding: 15px;
    }
    .box {
        display: flex;
        outline: 2px;
        outline-style: solid;
        outline-color: #9683EC;
        background-color: #292435d3;
        align-items: center;
        min-width: 100%;
        min-height: 100%;
    }
    .pfp {
        border: 2px solid #9683EC;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        object-fit: contain;
        height: auto;
        max-width: 100%;
        margin: 20px; 
    }
</style>