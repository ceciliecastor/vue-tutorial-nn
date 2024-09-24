<template>
    <div>
    <div v-if="job">
        <h1>{{job.title}}</h1>
        <p>{{ job.details }}</p>
        <p>The job ID is {{ id }}</p>
    </div>
    <div v-else>
        <p>Loading job details...</p>
    </div>
</div>

</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
            job: null
        }
    },
    mounted() {
        //gets the ID from the prop I'm passing
        fetch('http://localhost:3000/jobs/' + this.id)
            .then((res) => res.json()) 
            .then(data => this.job = data)
            .catch(err => console.log(err.message))
    }

}
</script>
<style>
    
</style>