<script>
    import Keys_icon from '$lib/assets/icons/keys-icon.svelte';
    import Yubico_logo from '$lib/assets/icons/yubico.svelte';
    import LaptopBackup from '$lib/assets/icons/laptop-backup.svelte'
</script>

<div class="keys">
    <h2 class="jb-mono"><strong>Keys</strong></h2>
    <div class="key-item" style="margin-top: 5px;">
        <Keys_icon/>
        <span style="font-weight: 250; font-size: 20px; display: flex; width: 100%; justify-content: space-between; align-items: flex-start;">
            <div style="display: flex; flex-direction: column;">
                <a href="/keys/gpg-guardian" target="_blank" style="color: hsl(210, 77%, 53%); text-decoration: none;">Venco &lt;v3nco@v3nco.dev&gt; (Guardian)</a>
                <span style="color: #FFFFFF; font-size: 16px; margin-top: 2px;">6FAA8732F6512AAD6EDC522AE5E0FA4E59297845</span>
            </div>
            <div style="display: flex; align-items: center; gap: 4px;">
                <span class="saveyubitooltip">
                    <Yubico_logo/>
                </span>
                <span class="laptooltip">
                    <LaptopBackup/>
                </span>
                <span style="color: #AAA; align-items: center">GPG</span>
            </div>
        </span>
    </div>
    <hr style="border: 1px solid #9683EC; margin: 10px 0; width: 100%; box-sizing: border-box;">
    <div class="key-item" style="margin-top: 5px;">
        <Keys_icon/>
        <span style="font-weight: 250; font-size: 20px; display: flex; width: 100%; justify-content: space-between; align-items: flex-start;">
            <div style="display: flex; flex-direction: column;">
                <a href="/keys/ssh-sentinel" target="_blank" style="color: hsl(210, 77%, 53%); text-decoration: none;">Sesame</a>
                <span style="color: #FFFFFF; font-size: 16px; margin-top: 2px;">sk-ssh-ed25519@openssh.com</span>
            </div>
            <div style="display: flex; align-items: center; gap: 4px;">
                <span class="useyubitooltip">
                    <Yubico_logo/>
                </span>
                <span style="color: #AAA; align-items: center">SSH</span>
            </div>
        </span>
    </div>
</div>

<style>
    .keys{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 20px;
        width: calc(100% - 40px); /* Subtract the left and right margins */
    }
    .key-item {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 8px;
        align-items: center;
    }
    .key-item a:hover {
        text-decoration: underline;
    }
    .jb-mono {
        font-family: 'JetBrains Mono', monospace;
        color: #ffffff;
    }

    /* Couldnt get tooltips to work via title, so using css */

    .saveyubitooltip {
        position: relative;
        cursor: help;
    }

    .saveyubitooltip:hover::after {
        content: "Saved on Yubikey";
        position: absolute;
        background: #292435d3;
        outline-style: dashed;
        outline-color: #9683EC;
        outline-width: 2px;
        color: white;
        padding: 4px 8px;
        border-radius: 1px;
        font-size: 12px;
        white-space: nowrap;
        top: -35px;
        right: 0;
        z-index: 1000;
    }

    .useyubitooltip {
        position: relative;
        cursor: help;
    }

    .useyubitooltip:hover::after {
        content: "Secured with FIDO2 on Yubikey";
        position: absolute;
        background: #292435d3;
        outline-style: dashed;
        outline-color: #9683EC;
        outline-width: 2px;
        color: white;
        padding: 4px 8px;
        border-radius: 1px;
        font-size: 12px;
        white-space: nowrap;
        top: -35px;
        right: 0;
        z-index: 1000;
    }

    .laptooltip {
        position: relative;
        cursor: help;
    }

    .laptooltip:hover::after {
        content: "Backed up on airgapped laptop";
        position: absolute;
        background: #292435d3;
        outline-style: dashed;
        outline-color: #9683EC;
        outline-width: 2px;
        color: white;
        padding: 4px 8px;
        border-radius: 1px;
        font-size: 12px;
        white-space: nowrap;
        top: -35px;
        right: 0;
        z-index: 1000;
    }

</style>