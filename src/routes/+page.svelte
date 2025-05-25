<script>
    import { defaultt } from './values.js';
    let name = 'Venco'; // In case i want to change my username basically everywhere i guess
    let gravatarsrc = 'https://gravatar.com/avatar/9f5b5ad2d2cd1bca67ec2702f8cbabf38bf1d10140bd7266ab15fdd4b2311fda?s=128';

    let termInput = '';
    let termHistory = ["<p class='first'>Testing styles !</p> <style>.first { color: #9683EC; } .command { color: #DDD; }</style>"];
    let rightContent = defaultt;

    function handleCommand(e) {
        if (e.key === 'Enter' && termInput.trim()) {        
            termHistory = [...termHistory, `<p class="command">> ${termInput}</p>`];
            let command = termInput.trim().toLowerCase();
            termInput = '';
            /* I'm about to make a bunch of if statements, if someone hates me for it because it isn't the best way, teach me and stop complaining */
            if (command === 'help') {
                termHistory = [...termHistory, "<p class='command'>Available commands:</p> <style>.command { color: #DDD; }</style>"];
            } else if (command === 'about') {
                termHistory = [...termHistory, `<p class='about'>This is ${name}'s terminal. You can type commands to interact with it.</p> <style>.about { color: #9683EC; }</style>`];
            } else if (command === 'clear') {
                termHistory = [];
            } else {
                termHistory = [...termHistory, `<p class='error'>Unknown command: ${command}</p> <style>.error { color: red; }</style>`];
            }
        }
    }

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
        {@html rightContent}
    </div>
</div>
<div class="bl">
    <div class="box">
        <div class="terminal">
            <div class="terminal-history">
                {#each termHistory as line} <!-- Yes, i actually want people to write HTML as wrong command, i think it's funny -->
                    <div class="terminal-line">{@html line}</div>
                {/each}
            </div>
            <div class="term-input-contain">
                <div class="term-input-line">
                    <span class="prompt"></span>
                    <input 
                        type="text" 
                        bind:value={termInput} 
                        on:keydown={handleCommand} 
                        class="term-input"
                        placeholder="Type a command..."
                    />
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .image-container {
        display: flex;
        justify-content: flex-start;
        align-items: center; 
        width: 100%;
        height: 100%; 
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