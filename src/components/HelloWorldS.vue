<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
                   rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
                   rel="noopener">eslint</a></li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank"
                   rel="noopener">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
    </div>
</template>

<script>
    import * as THREE from 'three.js'

    export default {
        name: 'HelloWorldS',
        props: {
            msg: String
        },
        mounted() {
            var box_geometry = new THREE.BoxGeometry();
            var sphere_geometry = new THREE.SphereGeometry(0.5, 32, 32);
            var cylinder_geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.5);
            var material = new THREE.MeshLambertMaterial({color: new THREE.Color(0.9, 0.55, 0.4)})
            var box = new THREE.Mesh(box_geometry, material);
            var sphere = new THREE.Mesh(sphere_geometry, material);
            sphere.position.y += 1;
            var cylinder = new THREE.Mesh(cylinder_geometry, material);
            cylinder.position.y += 1.75;
            scene.add(box);
            scene.add(sphere);
            scene.add(cylinder);
            box.scale.multiplyScalar(0.5);
            sphere.scale.multiplyScalar(0.5);
            cylinder.scale.multiplyScalar(0.5);
            var pile = new THREE.Object3D();
            pile.scale.multiplyScalar(0.5);
            pile.add(box);
            pile.add(sphere);
            pile.add(cylinder);
            scene.add(pile);

            var sphere_matrix = new THREE.Matrix4().makeTranslation(0.0, 1.0, 0.0);
            sphere.applyMatrix(sphere_matrix);
            var cylinder_matrix = sphere_matrix.clone(); cylinder_matrix.multiply(new THREE.Matrix4().makeTranslation(0.0, 0.75, 0.0));
            cylinder.applyMatrix(cylinder_matrix);
            box.scale.multiplyScalar(0.5);
            sphere.scale.multiplyScalar(0.5);
            cylinder.scale.multiplyScalar(0.5);
            var pile = new THREE.Object3D();
            pile.scale.multiplyScalar(0.5);
            pile.add(box);
            pile.add(sphere);
            pile.add(cylinder);
            scene.add(pile);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
