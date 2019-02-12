<template>
<div>
    
    <div class="backdrop"></div>
    <div class="popup">
        <nav class="demo"> <div class="icon" @click="$emit('close')"><img src="../assets/back-icon.svg" alt="back"></div></nav>
        <h1 class="demo-greeting">Hey Visitor,</h1>
        <p class="demo-message">
            Welcome to <strong>PRspective</strong>: a news curation site that allows users to quickly absorb and validate what is happening in the world today. Click on the purple bubbles next to each opinion to explore it in more depth. This prototype was created on February 2 and 3 for SLOHacks 2019. 
We hope you enjoy the demo! 
        </p>
        <p class="credits">
            <p class="credit">Page design: Victoria Plumb and John Waidhofer</p>
	        <p class="credit">Frontend: John Waidhofer</p>
	        <p class="credit">Backend: Arvin Lin</p>

        </p>
    </div>
</div>
    
</template>



<script>
export default {
    
}
</script>

<style>
    .backdrop {
        top:0;
        left:0;
        width: 100%;
        height:100%;
        background: rgba(0, 0, 0, 0.2);
        position: fixed;
    }

    .popup {
        position: fixed;
        top: 50%;
        left:50%;
        transform: translate(-50%, -50%);
        width: 700px;
        height: 470px;
        padding: 20px;
        background: white;
        border-radius: 14px;

        
    }

    .demo {
        padding-top: 10px;
        padding-left: 10px;
        text-align: left;
    }

    .demo-greeting {
        text-align: left;
        margin-left: 15%;
        font-size: 50px;
    }

    .demo-message {
        text-align: left;
        margin-left: 15%;
        width: 70%;
        font-size: 20px;
    }

    .credits {
        padding: 20px;
        
        
        font-size: 17px;
        font-style: italic;

    }

    .credit {
        text-align: left;
        margin-left: 20%;
        width: 70%;
        font-size: 17px;
    }


</style>


