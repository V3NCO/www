<script lang="ts">
    import { onMount } from "svelte";
    import { Octokit } from "octokit";
    import { colors } from "../colors";
    let repos = [];
    let loading = true;
    let error = null;
    let langrepos = {};
    let ignoredRepos = ["wakana"];
    
    const calculateLanguagePercentages = (languages: Record<string, number>) => {
        const total = Object.values(languages).reduce((sum: number, bytes: number) => sum + bytes, 0);
        return Object.entries(languages).map(([lang, bytes]) => ({
            name: lang,
            percentage: (bytes / total * 100).toFixed(1),
            color: getColor(lang)
        }));
    };
    
    
    const getColor = (language: string): string => {
        return colors[language] || "#DDD";
      };
    
    onMount(async () => {
        try {
            const octokit = new Octokit();
            const response = await octokit.request("GET /users/V3NCO/repos", {per_page: 100, sort: "updated"});
            repos = response.data;
            console.log(repos);
            for (const repo of repos) {
                const langresponse = await octokit.request(`GET ${repo.languages_url}`);
                const languages = langresponse.data;
                langrepos[repo.id] = languages;
                console.log(langrepos);
            }
        } catch (e) {
            error = e.message;
        } finally {
            loading = false;
        }
    });
</script>

<div class="main_container">
    {#if loading}
        <p style="color: #DDD; font-family: 'JetBrains Mono', monospace;">
            Loading repositories...
        </p>
    {:else if error}
        <p style="color: #FF3333; font-family: 'JetBrains Mono', monospace;">
            Error: {error}
        </p>
    {:else if repos.length === 0}
        <p style="color: #DDD; font-family: 'JetBrains Mono', monospace;">
            No repos found somehow
        </p>
    {:else}
        {#each repos as repo}
            {#if !ignoredRepos.includes(repo.name)}
                <div class="repo_container">
                    <a class="repo_box" href={repo.html_url} target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">
                        <div class="gradient_overlay"></div>
                        <div class="repo_content">
                            <h3 class="repo_title" style="font-family:'JetBrains Mono';color:#DDD;">
                                {repo.name}
                            </h3>
                            <p class="repo_description" style="color: #BBB;">
                                {repo.description || "No description"}
                            </p>
                            <div class="repo_stats" style="display: flex; gap: 15px; margin-top: 8px;">
                                <span class="stat" style="color: #FFD700;">⭐ {repo.stargazers_count}</span>
                                <span class="stat" style="color: #C0C0C0;">🍴 {repo.forks_count}</span>
                                <span class="stat" style="color: #9cf;">{repo.language || "Unknown"}</span>
                                {#if langrepos[repo.id] && Object.keys(langrepos[repo.id]).length > 0}
                                    <div class="flexible-tag">
                                        <div class="inner-bar">
                                            {#each calculateLanguagePercentages(langrepos[repo.id]) as lang}
                                                <div class="bar-item" style="background-color: {lang.color}; width: {lang.percentage}%;" title="{lang.name}: {lang.percentage}%"></div>
                                            {/each}
                                        </div>
                                    </div>
                                {/if}
                            </div>
                        </div>
                    </a>
                </div>
            {/if}
        {/each}
    {/if}
</div>

<style>
    .main_container {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding: 7.5px
    }

    .repo_container {
        width: 100%;
        height: 22%;
        padding: 9px;
        box-sizing: border-box;
    }
    
    .repo_box {
        position: relative;
        display: flex;
        outline: 2px solid #9683ec;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background-image: url("/images/gh-banners/www.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: left;
        overflow: hidden;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .flexible-tag {
        flex: 1;
        opacity: 0.8;
        padding: 4px 8px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 25px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .inner-bar {
        display: flex;
        height: 100%;
        border-radius: 25px;
        align-items: center;
    }

    .bar-item {
        text-align: center;
        line-height: 50px;
        color: white;
        background-color: var(--itemcolor);
        height: 15px; 
        min-height: 15px; 
    }
    
    .bar-item:first-child {
        border-radius: 15px 0 0 15px;
    }
    
    .bar-item:last-child {
        border-radius: 0 15px 15px 0;
    }
    
    .bar-item:only-child {
        border-radius: 15px;
    }


    .repo_box:hover {
        outline-color: #b3a5f1;
        outline-width: 3px;
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(150, 131, 236, 0.3);
    }
    
    .gradient_overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.6) 30%,
            rgba(0, 0, 0, 0.3) 60%,
            transparent 100%
        );
        z-index: 1;
    }
    
    .repo_content {
        position: relative;
        z-index: 2;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100%;
        color: white;
    }
    
    .repo_title {
        margin: 0 0 8px 0;
        font-size: 1.4rem;
        font-weight: 700;
        text-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.8),
            0 4px 8px rgba(0, 0, 0, 0.4);
        letter-spacing: 0.5px;
        line-height: 1.2;
    }
    
    .repo_description {
        margin: 0 0 12px 0;
        font-size: 0.95rem;
        opacity: 0.9;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
        line-height: 1.4;
        max-width: 90%;
    }

    .stat {
        font-size: 0.85rem;
        opacity: 0.8;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        padding: 4px 8px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .repo_box .gradient_overlay {
        background: radial-gradient(
            ellipse at bottom left,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.6) 50%,
            transparent 100%
        );
    }
</style>