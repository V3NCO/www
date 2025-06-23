<!-- JS Part -->


<script>
    import LinksPage from '$lib/right_content/links.svelte';
    import KeysPage from '$lib/right_content/keys.svelte';
    import FriendsPage from '$lib/right_content/friends.svelte';
    import { dev } from '$app/environment';
    let name = 'Venco'; // In case i want to change my username basically everywhere i guess
    let gravatarsrc = 'https://gravatar.com/avatar/9f5b5ad2d2cd1bca67ec2702f8cbabf38bf1d10140bd7266ab15fdd4b2311fda?s=128';
    let termInput = '';
    let termHistory = ["<p class='command'>Welcome to Venco's website, Type 'help' to list commands.</p> <style>.command { color: #DDD; }</style>"];
    let currentPage = null;
    let hosttext = "Github Pages"

    const pageComponents = {
        'links': LinksPage,
        'keys': KeysPage,
        'friends': FriendsPage
    };

    // Grabbed from https://github.com/prplwtf/www/blob/main/components/AgeCounter.vue 
    const birthTimestamp = new Date('2010-01-30T02:00:00Z').getTime(); // Replace with your actual birth date
    const calculateAge = () => {
        const now = Date.now();
        const age = (now - birthTimestamp) / (1000 * 60 * 60 * 24 * 365.25);
        return age;
    };

    function formatUptime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        
        const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
        const days = Math.floor((totalSeconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;
        
        const parts = [];
        
        if (years > 0) parts.push(`${years} year${years !== 1 ? 's' : ''}`);
        if (days > 0) parts.push(`${days} day${days !== 1 ? 's' : ''}`);
        if (hours > 0) parts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
        if (minutes > 0) parts.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
        if (seconds > 0 || parts.length === 0) parts.push(`${seconds} second${seconds !== 1 ? 's' : ''}`);
        
        return parts.join(' ');
    }


    // I'll be honest i used copilot for this part, i have no idea of how it works
    import { onMount, onDestroy } from 'svelte';
                    let age = calculateAge();

                    let interval;
                    onMount(() => {
                        interval = setInterval(() => {
                            age = calculateAge();
                        }, 100);
                    });

                    onDestroy(() => {
                        clearInterval(interval);
                    });


    function handleCommand(e) {
        if (e.key === 'Enter' && termInput.trim()) {        
            termHistory = [...termHistory, `<p class="command">-> ${termInput}</p>`];
            let command = termInput.trim().toLowerCase();
            termInput = '';
            switch (command) {
                case 'help':
                    termHistory = [
                        ...termHistory,
                        "<p class='command'>Available commands:</p>",
                        "<p class='command'>help - show this message</p>",
                        "<p class='command'>clear - clear the terminal</p>",
                        "<p class='command'>keys - show my keys</p>",
                        "<p class='command'>links - show links to various platforms i'm on</p>",
                        "<p class='command'>friends - show links to friends websites</p>",
                        "<p class='command'>88x31 - alias of 'friends'</p>",
                    ];
                    break;
                case 'clear':
                    termHistory = ['<p class="command">Terminal Cleared. Type "help" for available commands.</p> <style>.command { color: #DDD; }</style>'];
                    currentPage = null;
                    break;
                case 'keys':
                    termHistory = [...termHistory, '<p class="command">Here are some of my keys!</p>'];
                    currentPage = 'keys';
                    break;
                case 'whoami':
                    termHistory = [...termHistory, '<p class="command">Great question. Who are you ?</p>'];
                    break;
                case 'links':
                    termHistory = [...termHistory, '<p class="command">Here are some of my profiles on platforms!</p>'];
                    currentPage = 'links';
                    break;
                case 'awesome':
                    termHistory = [...termHistory, '<p class="command">Awesome !</p> <style>keyframes Color{0%{color:#A0D468;}20%{color:#4FC1E9;}40%{color:#FFCE54;}60%{color:#FC6E51;}80%{color:#ED5565;}100%{color:#AC92EC;}}@-moz-keyframes Color{0%{color:#A0D468;}20%{color:#4FC1E9;}40%{color:#FFCE54;}60%{color:#FC6E51;}80%{color:#ED5565;}100%{color:#AC92EC;}}@-webkit-keyframes Color{0%{color:#A0D468;}20%{color:#4FC1E9;}40%{color:#FFCE54;}60%{color:#FC6E51;}80%{color:#ED5565;}100%{color:#AC92EC;}} .command{animation: Color 4s linear infinite; -webkit-animation: Color 4s ease-in-out infinite;}</style>'];
                    break;
                case 'mobile':
                    termHistory = [...termHistory, "<p class='command'>I have no idea of how I am going to implement mobile to this considering I'm struggling with desktop</p>"];
                    break;
                case 'friends':
                    termHistory = [...termHistory, "<p class='command'>Here are some of my friends 88x31's!</p>"];
                    currentPage = 'friends';
                    break;
                case '88x31':
                    termHistory = [...termHistory, "<p class='command'>Here are some of my friends 88x31's!</p>"];
                    currentPage = 'friends';
                    break;
                case 'ls':
                    termHistory = [...termHistory, "<p class='command'>For some reason I have this weird reflex where everytime I'm in a terminal I type ls instantly</p>"];
                    break;
                case 'hyfetch':
                    termHistory.pop()
                    termInput = 'hyfetch rainbow';
                    handleCommand({ key: 'Enter' });
                    break;
                case 'vencord':
                    termHistory = [...termHistory, "<a href='https://discord.com/channels/1063548024825057451/1192848123387707462/1384626216774012978'><img src='/images/vencord.png'/></a>"];
                    break;
                default:
                    if(command.indexOf('hyfetch ') === 0) {
                        const hyfetchArgs = command.replace('hyfetch ', '').trim();
                        if (dev) {
                            hosttext = "Svelte Dev Server";
                        }
                        termHistory = [
                            ...termHistory,
                            `<p class='ascii'>venco@www</p>`, // found these quotation marks, very useful since they are kinda uncommon
                            `<p class='ascii'>────────────────</p>`,
                            `<p class='ascii'>OS: ${window.navigator.platform}</p>`, // Didn't find any good alternative so sticking with this
                            `<p class='ascii'>Host: ${hosttext}</p>`, // I have no idea if it works on gh pages since i wont test it until hyfetch is fully done
                            `<p class='ascii'>Kernel: SvelteKit</p>`,
                            `<p class='ascii'>Uptime: ${formatUptime(performance.now())}</p>`,
                            `<p class='ascii'>Shell: <a href="https://github.com/V3NCO/www/blob/feffcfde0b7f280982a6aa32a170a7d868fb737b/src/routes/%2Bpage.svelte#L10C2-L10C3">Venco's very advanced shell trust</a></p>`,
                            `<p class='ascii'>Display: ${window.screen.availWidth}x${window.screen.availHeight}</p>`,
                            `<p class='ascii'>WM: <a href="https://github.com/V3NCO/www/blob/feffcfde0b7f280982a6aa32a170a7d868fb737b/src/routes/%2Bpage.svelte#L30">HTML+CSS Fixed tiling window manager</a></p>`,                            
                            `<p class='ascii'>Terminal: <a href="https://github.com/V3NCO/www/blob/feffcfde0b7f280982a6aa32a170a7d868fb737b/src/routes/%2Bpage.svelte#L44">Venco's very advanced terminal trust</a></p>`,
                            `<p class='ascii'>Font : JetBrains Mono</p>`,
                            `<p class='ascii'>Locale : en_US.UTF-8</p>`
                        ];
                    } else {
                    termHistory = [...termHistory, `<p class='error'>Unknown command: ${command}</p> <style>.error { color: red; }</style>`];
                    }
                    break;
            }
        }
    }
</script>


<!-- HTML Part -->


<div class="tl">
    <div class="box">
        <div class="image-container">
            <img src={gravatarsrc} alt="{name}'s profile picture : Basil from omori with happy emotion in combat state" width="128" height="128" class="pfp"/>
            <div class="presentation">
                <p class="jb-mono">Hi, I'm <strong>{name}</strong>, I'm <span style="color: #AAA;"><strong>{age.toFixed(8)}</strong></span> years old</p>
                <p class="jb-mono">~~ Welcome to my corner of the internet! ~~</p>
                <p class="jb-mono"> This website is still under construction</p>
                <p class="jb-mono"> and i'm doing this to learn web development.</p>
            </div>
        </div>
    </div>
</div>
<div class="r">
    <div class="box">
        {#if pageComponents[currentPage]}
            <svelte:component this={pageComponents[currentPage]} />
        {:else}
            <p class="jb-mono" style="margin: 20px; color: #DDD;">Use the terminal to display content here.</p>
        {/if}
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




<!-- CSS Part -->



<style>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
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
        padding: 15px;
        box-sizing: border-box;
    }
    .r {
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        padding: 15px;
        box-sizing: border-box;
    }
    .bl {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%;
        height: 80%;
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
        font-family: 'JetBrains Mono', monospace;
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
        padding-bottom: 60px;
        width: 100%;
        box-sizing: border-box;
    }
    .term-line {
        line-height: 1.8;
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
        font-family: 'Jetbrains Mono', monospace;
        flex-grow: 1;
        outline: none;
        font-size: 1em;
    }
    .jb-mono {
        font-family: 'JetBrains Mono', monospace;
        color: #ffffff;
    }
    .presentation {
        line-height: 1.8;
        color: #DDD;
    }
    .ascii {
        white-space: pre;
        line-height: 0.4 !important;
    }

/* Why do the fonts look so bad on chromium :heavysob: ?? */
</style>