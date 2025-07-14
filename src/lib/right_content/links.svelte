<script>
    import Github_logo from '$lib/assets/icons/github.svelte';
    import HackclubIconMono from '$lib/assets/icons/hackclub-icon-mono.svelte';
    import HackclubIconProgress from '$lib/assets/icons/hackclub-icon-progress.svelte';
    import Steam_logo from '$lib/assets/icons/steam.svelte';
    import Discord_logo from '$lib/assets/icons/discord.svelte';
    import Bluesky_logo from '$lib/assets/icons/bluesky.svelte';
    import Email_icon from '$lib/assets/icons/email.svelte';
</script>


<div class="links">
    <h2 class="jb-mono"><strong>Links</strong></h2>
    <div class="link-item" style="margin-top: 15px;">
        <Github_logo style="color: #FFFFFF;"/>
        <span style="font-weight: 250; font-size: 20px;"><a href="https://github.com/v3nco" target="_blank" style="color: #FFFFFF">GitHub - <span style="color: hsl(210, 77%, 53%)">@v3nco</a></span>
    </div>
    <hr style="border: 1px solid #9683EC; margin: 10px 0; width: 100%; box-sizing: border-box;">
    <div class="link-item" style="margin-top: 5px;">
        <Discord_logo style="color: #FFFFFF;"/>
        <span style="font-weight: 250; font-size: 20px;"><a href="https://discord.com/users/1115935726413041695" target="_blank" style="color: #FFFFFF">Discord - <span style="color: hsl(210, 77%, 53%)">@v3ncodev</a></span>
    </div>
    <hr style="border: 1px solid #9683EC; margin: 10px 0; width: 100%; box-sizing: border-box;">
    <div class="link-item" style="margin-top: 5px;">
        <HackclubIconMono/>
        <span style="font-weight: 250; font-size: 20px;"><a href="https://hackclub.slack.com/team/U08L7671TDG" target="_blank" style="color: #FFFFFF">Hackclub Slack - <span style="color: hsl(210, 77%, 53%)">@Venco</a></span>
    </div>
    <hr style="border: 1px solid #9683EC; margin: 10px 0; width: 100%; box-sizing: border-box;">
    <div class="link-item" style="margin-top: 5px;">
        <Steam_logo/>
        <span style="font-weight: 250; font-size: 20px;"><a href="https://steamcommunity.com/id/V3NCO/" target="_blank" style="color: #FFFFFF">Steam - <span style="color: hsl(210, 77%, 53%)">@V3NCO</a></span>
    </div>
    <hr style="border: 1px solid #9683EC; margin: 10px 0; width: 100%; box-sizing: border-box;">
    <div class="link-item" style="margin-top: 5px;">
        <Bluesky_logo/>
        <span style="font-weight: 250; font-size: 20px;"><a href="https://bsky.app/profile/v3nco.dev" target="_blank" style="color: #FFFFFF">Bluesky - <span style="color: hsl(210, 77%, 53%)">@v3nco.dev</a></span>
    </div>
    <hr style="border: 1px solid #9683EC; margin: 10px 0; width: 100%; box-sizing: border-box;">
    <div class="link-item" style="margin-top: 5px;">
        <Email_icon/>
        <span style="font-weight: 250; font-size: 20px;"><a href="mailto:v3nco@v3nco.dev" target="_blank" style="color: #FFFFFF">Email - <span style="color: hsl(210, 77%, 53%)">v3nco@v3nco.dev</a></span>
    </div>
</div>

<style>
    .links{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 20px;
        width: calc(100% - 40px); /* Subtract the left and right margins */
    }
    .link-item {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 8px;
        align-items: flex-end;
    }
    .link-item a:hover {
        text-decoration: underline;
    }
    .jb-mono {
        font-family: 'JetBrains Mono', monospace;
        color: #ffffff;
    }
</style>