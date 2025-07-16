<script>
  import { onMount } from 'svelte';
  let data = null;

  onMount(async () => {
    const res = await fetch(`https://pronouns.page/api/profile/get-id/01K05FJ39YFXB2553MHSV88WAP?version=2&lprops[en]=names,links,opinions,pronouns,links,flags,words,timezone,circle`);
    data = await res.json();
    console.log(`Received data from Pronouns page ! Here it is :`, data)
  });
  import Icon from '@iconify/svelte';
</script>

<style>
  .pronouns-container {
      margin: 2.5%;
      width: 100%;
  }
  
  
  .profile-section {
      display: flex;
      align-items: flex-start;
      gap: 15px;
  }
  
  .pro_pfp {
      border-radius: 100%;
      flex-shrink: 0;
  }
  
  .user-info {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 40px;
  }
  
  .uname {
      font-family: 'JetBrains Mono', monospace;
      font-size: 32px;
      color: #DDD;
      margin: 0;
  }
  
  .flags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
  }
  
  .flag {
      height: 24px;
      border-radius: 4px;
  }
  
  .cols1 {
      display: flex;
      flex-direction: row;
      width: 100%;
      flex-wrap: wrap;
  }
  
  .cols2 {
      display: flex;
      flex-direction: row;
      width: 100%;
      flex-wrap: wrap;
  }
  
  .names {
      flex: 1 1 auto;
  }
  
  .pronouns {
      flex: 1 1 auto;
  }
  
  .links {
      flex: 1 1 auto;
  }
  
  .yes {
      color: #FF63CB;
      font-size: 20px;
      font-family: 'JetBrains Mono', monospace;
  }
  
  .okay {
      color: #DDD;
      font-size: 20px;
      font-family: 'JetBrains Mono', monospace;
  }
  
  .jokingly {
      color: #E4A26A;
      font-size: 20px;
      font-family: 'JetBrains Mono', monospace;
  }
  
  .pronounciation {
      color: #AFB3B7;
      font-size: 16px;
      font-family: 'JetBrains Mono', monospace;
      margin-left: 7px;
  }
  
  .inline-icon {
      display:inline-flex;
      align-items:center;
      margin-right: 7px;
  }
  
  .thing {
      flex: 1 1 auto;
  }
</style>

{#if data}
    <div class="pronouns-container">
        <h1 style="font-family: 'JetBrains Mono', monospace; font-size: 32px; color: #DDD; margin-bottom: 20px;">Pronouns.page</h1>
        <div class="profile-section">
            <img src={data.avatar} alt="Venco's pfp" height=96 width=96 class="pro_pfp"/>
            <div class="user-info">
                <p class="uname">@{data.username}</p>
                {#if data.profiles.en.flags && data.profiles.en.flags.length > 0}
                    <div class="flags-container">
                        {#each data.profiles.en.flags as flag}
                            <img src={`/images/pride-flags/${flag.toLowerCase()}.png`} alt={flag} title={flag} class="flag"/>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>
        <div class="lists">
            <section class="cols1">
                {#if data.profiles.en.names && data.profiles.en.names.length > 0}
                    <div class="names">
                        <h1 style="font-family:'JetBrains Mono'; font-size:32px; color:#DDD; margin-bottom:7.5px;"><span class="inline-icon"><Icon icon="fa-solid:signature" width="32"/></span>Names</h1>
                        {#each data.profiles.en.names as name}
                            {#if name.opinion == "yes"}
                                <p class="yes"><span class="inline-icon" title="Yes"><Icon icon="fa-solid:heart" width="16"/></span><b>{name.value}</b>{#if name.pronunciation != null} <span class="pronounciation">{name.pronunciation}</span>{/if}</p>
                            {/if}
                            {#if name.opinion == "meh"}
                                <p class="okay"><span class="inline-icon" title="Okay"><Icon icon="fa6-regular:thumbs-up" width="16"/></span>{name.value}{#if name.pronunciation != null} <span class="pronounciation">{name.pronunciation}</span>{/if}</p>
                            {/if}
                        {/each}
                    </div>
                {/if}
                {#if data.profiles.en.pronouns && data.profiles.en.pronouns.length > 0}
                    <div class="pronouns">
                        <h1 style="font-family:'JetBrains Mono'; font-size:32px; color:#DDD; margin-bottom:7.5px;"><span class="inline-icon"><Icon icon="fa-solid:tags" width="32"/></span>Pronouns</h1>
                        {#each data.profiles.en.pronouns as pronoun}
                            {#if pronoun.opinion == "yes"}
                                <p class="yes"><span class="inline-icon" title="Yes"><Icon icon="fa-solid:heart" width="16"/></span><b>{pronoun.value}</b></p>
                            {/if}
                            {#if pronoun.opinion == "meh"}
                                <p class="okay"><span class="inline-icon" title="Okay"><Icon icon="fa6-regular:thumbs-up" width="16"/></span>{pronoun.value}</p>
                            {/if}
                        {/each}
                    </div>
                {/if}
                {#if data.profiles.en.links && data.profiles.en.links.length > 0}
                    <div class="links">
                        <h1 style="font-family:'JetBrains Mono'; font-size:32px; color:#DDD; margin-bottom:7.5px;"><span class="inline-icon"><Icon icon="fa-solid:link" width="28"/></span>Links</h1>
                        {#each data.profiles.en.links as link}
                            <p class="yes"><span class="inline-icon" style="color: #DDD;" title="Link"><Icon icon="fa-solid:globe" width="16"/></span><a href={link}>{link.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]}</a></p>
                        {/each}
                    </div>
                {/if}
            </section>
            {#if data.profiles.en.words && data.profiles.en.words.length > 0}
                <h1 style="font-family:'JetBrains Mono'; font-size:32px; color:#DDD; margin-bottom:7.5px;"><span class="inline-icon"><Icon icon="fa6-solid:scroll" width="28"/></span>Words</h1>
                <section class="cols2">          
                    {#each data.profiles.en.words as words}
                        <div class="thing">
                            <p class="okay"><b>{words.header}</b></p>
                            {#each words.values as word}
                                {#if word.opinion == "yes"}
                                    <p class="yes"><span class="inline-icon" title="Yes"><Icon icon="fa-solid:heart" width="16"/></span><b>{word.value}</b></p>
                                {/if}
                                {#if word.opinion == "meh"}
                                    <p class="okay"><span class="inline-icon" title="Okay"><Icon icon="fa6-regular:thumbs-up" width="16"/></span>{word.value}</p>
                                {/if}
                                {#if word.opinion == "jokingly"}
                                    <p class="jokingly"><span class="inline-icon" title="Jokingly"><Icon icon="fa6-solid:face-grin-tongue" width="16"/></span>{word.value}</p>
                                {/if}
                            {/each}
                        </div>
                    {/each}
                </section>
            {/if}
        </div>
    </div>
{/if}