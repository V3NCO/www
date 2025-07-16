<script>
    import {Octokit} from "octokit"
</script>

<div class="main_container">
    <div class="repo_container">
        <div class="repo_box">
            <div class="gradient_overlay"></div>
            <div class="repo_content">
                <h3 class="repo_title">Repository Name</h3>
                <p class="repo_description">A brief description of what this repository does</p>
                <div class="repo_stats">
                    <span class="stat">⭐ 10</span>
                    <span class="stat">🍴 10</span>
                    <span class="stat">JavaScript</span>
                </div>
            </div>
        </div>
    </div>
    <div class="repo_container">
        <div class="repo_box">
            <div class="gradient_overlay"></div>
            <div class="repo_content">
                <h3 class="repo_title">Repository Name</h3>
                <p class="repo_description">A brief description of what this repository does</p>
                <div class="repo_stats">
                    <span class="stat">⭐ 10</span>
                    <span class="stat">🍴 10</span>
                    <span class="stat">JavaScript</span>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    /* Add this CSS for your main container */
    .main_container {
        width: 100%;
        max-width: 1200px; /* Adjust this value as needed */
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding: 7.5px
    }

    .repo_container {
        width: 100%;
        height: 22%; /* Change from 22% to fixed height */
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
    
    .repo_box:hover {
        outline-color: #b3a5f1;
        outline-width: 3px;
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(150, 131, 236, 0.3);
    }
    
    /* Smooth gradient overlay for text readability */
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
    
    /* Content positioning and styling */
    .repo_content {
        position: relative;
        z-index: 2;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 65%;
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