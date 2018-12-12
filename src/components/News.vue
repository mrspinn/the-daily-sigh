<template>
    <div class="news">
        <div class="topStory">
            <h1>This is a Your Top Story for the Day</h1>
            <div class="imageDiv">
                <div class="image"></div>
                <p class="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab molestiae, eveniet harum voluptatem pariatur maxime, nulla quas, nesciunt cumque impedit beatae nobis minima odio at consequuntur totam quisquam quidem?</p>
            </div>
            <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ad harum. Iusto voluptatum minima ipsum iure eos quidem porro voluptate explicabo alias assumenda dolorum, tenetur deleniti, autem dolor debitis iste.
            Repellendus officiis, amet voluptate saepe repudiandae eos, fugit sequi cum assumenda culpa odio architecto id dolorem neque, laborum recusandae numquam! Laudantium omnis doloremque itaque quos ab saepe eveniet, ducimus ipsam?
            Ipsum autem, consectetur quo maiores voluptatibus atque quidem molestias vel temporibus rem minima magnam! Vitae eum optio obcaecati voluptatem quod amet dignissimos esse a similique pariatur, laborum dolore, at commodi!</div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            topStories: null
        }
    },
    mounted () {
        
        axios
        .get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=4482d9dc32bd470aa61fb2f15b3ad968")
        .then(response => {this.topStories = response.data.results; console.log(response)});
    }
}
</script>

<style>
    .news {
        width: 80%;
        margin: 0 auto;
        border-right: 1px solid #aaa;
        height: 100%;
    }
    .imageDiv {
        float: left;
        width: 40%;
        margin-right: 1rem;
        margin-bottom: 1rem;
    }
    .image {
        background: red; 
        height: 300px;
    }
    .caption {
        font-size: .6rem;
    }
    .content {
        display: inline;
    }
</style>
