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
        data() {
            return {
                pile: null,
                renderer: null,
                scene: null,
                camera: null
            }
        },
        methods: {
            init: function() {
                this.scene = new THREE.Scene();
                this.camera = new THREE.PerspectiveCamera(
                    75,
                    window.innerWidth / window.innerHeight,
                    0.1,
                    1000
                );
                this.renderer = new THREE.WebGLRenderer();
                this.renderer.setSize(window.innerWidth, window.innerHeight);
                document.body.appendChild(this.renderer.domElement);

                const box_geometry = new THREE.BoxGeometry();
                const sphere_geometry = new THREE.SphereGeometry(0.5, 32, 32);
                const cylinder_geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.5);
                // const material = new THREE.MeshLambertMaterial({color: new THREE.Color(0.9, 0.55, 0.4)})
                // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
                const material = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.9, 0.55, 0.4) });
                this.box = new THREE.Mesh(box_geometry, material);
                this.sphere = new THREE.Mesh(sphere_geometry, material);
                this.sphere.position.y += 1;
                const cylinder = new THREE.Mesh(cylinder_geometry, material);
                cylinder.position.y += 1.75;

                this.scene.add(this.box);
                this.scene.add(this.sphere);
                this.scene.add(cylinder);
                this.box.scale.multiplyScalar(0.5);
                // sphere.scale.multiplyScalar(0.5);
                // cylinder.scale.multiplyScalar(0.5);
                // this.pile = new THREE.Object3D();
                // this.pile.scale.multiplyScalar(0.5);
                // this.pile.add(this.box);
                // this.pile.add(sphere);
                // this.pile.add(cylinder);
                // this.scene.add(this.pile);

                // const geometry = new THREE.BoxGeometry(1, 1, 1)
                // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
                // this.cube = new THREE.Mesh(geometry, material)
                // this.scene.add(this.cube)

                this.camera.position.z = 5

                const animate = function() {}
            },
            animate: function() {
                requestAnimationFrame(this.animate)

                this.box.rotation.x += 0.01
                this.box.rotation.y += 0.01
                this.box.rotation.z += 0.3

                this.sphere.rotation.x += 0.01
                this.sphere.rotation.y += 0.01
                this.sphere.rotation.z += 0.3

                this.sphere.x += 0.01
                this.sphere.y += 0.01
                this.sphere.z += 0.3

                this.camera.z += 0.3

                this.renderer.render(this.scene, this.camera)
            }
        },

        mounted() {
            this.init()
            this.animate()
        },

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
