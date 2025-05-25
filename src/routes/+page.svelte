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
            switch (command) {
                case 'help':
                    termHistory = [...termHistory, "<p class='command'>Available commands: help, about, clear</p> <style>.command { color: #DDD; }</style>"];
                    break;
                case 'about':
                    termHistory = [...termHistory, `<p class='about'></p> <style>.about { color: #9683EC; }</style>`];
                    break;
                case 'clear':
                    termHistory = ['<p class="first">Terminal Cleared. Type "help" for available commands.</p> <style>.first { color: #9683EC; } .command { color: #DDD; }</style>'];
                    break;
                default:
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
    <div class="box terminal-box">
        <div class="terminal">
            <div class="term-history">
                {#each termHistory as line} <!-- Yes, i actually want people to write HTML as wrong command, i think it's funny -->
                    <div class="term-line">{@html line}</div>
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
        box-sizing: border-box;
    }
    .r {
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        background-color: #494949;
        padding: 15px;
        box-sizing: border-box;
    }
    .bl {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%;
        height: 80%;
        background-color: #494949;
        padding: 15px;
        box-sizing: border-box;
    }
    .box {
        display: flex;
        outline: 2px;
        outline-style: solid;
        outline-color: #9683EC;
        background-color: #292435d3;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
    .pfp {
        border: 2px solid #9683EC;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        object-fit: contain;
        height: auto;
        max-width: 100%;
        margin: 20px; 
    }
    .terminal-box {
        flex-direction: column;
        padding: 0;
        overflow: hidden;
        align-items: stretch;
    }
    .terminal {
        font-family: 'Courier New', monospace;
        color: #ffffff;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
    }
    .term-history {
        flex: 1;
        overflow-y: auto;
        padding: 15px;
        padding-bottom: 60px; /* Space for the input field */
        width: 100%;
        box-sizing: border-box;
    }
    .term-line {
        margin-bottom: 5px;
        word-break: break-word;
    }
    .term-input-contain {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 15px;
        background-color: #292435d3;
        border-top: 1px solid rgba(150, 131, 236, 0.3);
        box-sizing: border-box;
    }
    .term-input-line {
        display: flex;
        align-items: center;
        width: 100%;
    }
    .prompt {
        margin-right: 8px;
        color: #DDD;
        font-weight: bold;
    }
    .term-input {
        background: transparent;
        border: none;
        color: #DDD;
        font-family: 'Courier New', monospace;
        flex-grow: 1;
        outline: none;
        font-size: 1em;
    }
</style>