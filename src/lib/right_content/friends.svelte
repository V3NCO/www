<div class="friends">
    <h2 class="jb-mono"><strong>Friends!</strong></h2>
    <div class="friend-grid">
        <a href="https://prpl.wtf" target="_blank"><img src="/88x31/prplwtf.gif" alt="Prpl.wtf's 88x31" class="friend-button"></a>
        <a href="https://auri.lol" target="_blank"><img src="/88x31/aurilol.gif" alt="Auri.lol's 88x31" class="friend-button"></a>

    </div>
</div>

<style>
    .friends{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 20px;
        width: calc(100% - 40px); /* Subtract the left and right margins */
    }

    .jb-mono {
        font-family: 'JetBrains Mono', monospace;
        color: #ffffff;
    }

    .friend-button {
        width: 88px;
        height: 32px;
        object-fit: contain;
        border: 1px solid transparent;
        transition: border-color 0.2s ease;
        image-rendering: crisp-edges;
        image-rendering: -webkit-optimize-contrast;
    }
    
    .friend-button:hover {
        border-color: #9683EC;
        cursor: pointer;
    }

    .friend-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: flex-start;
    }
</style>