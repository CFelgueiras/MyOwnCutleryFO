import * as THREE from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { GUI } from './dat.gui.module.js';
import axios from 'axios';

const sgrai = function main() {
    document.getElementById("background").remove();

    function postMachine(machine) {
        let res = axios.post('https://mdf3nbgrp5.azurewebsites.net/api/machine/MachineFromSgrai/', machine)
            .then(function(response) {
                if (response.status === 201) {
                    alert('The machine was successfully created.');
                }
            });

        axios.get('https://mdf3nbgrp5.azurewebsites.net/api/Machine/')
            .then(function(response) {
                let machineObj = response.data;
                let str = JSON.stringify(machineObj).split("{");
                let strSize = str.length;
                let mID; // MachineID da nova máquina que será criada

                for (let i = 0; i < strSize; i++) {
                    mID = str[i].split('{').pop().split(',')[0];
                }

                mID = Number(mID.split(':')[1]) + 1;

                /**
                 *  New Machine bender setup
                 * */

                mtlLoader.load('/assets/mats/machine_v1.mtl', function(materials) {
                    materials.preload();
                    objLoader.setMaterials(materials);

                    objLoader.load('/assets/mats/machine_v1.obj', async function(object) {
                        axios.get('https://mdf3nbgrp5.azurewebsites.net/api/Machine/' + mID)
                            .then(function(response) {
                                let mObj = response.data;
                                let str2 = JSON.stringify(mObj.localization).split(";");
                                group.add(object);
                                let machinebend = object;
                                object.name = mObj.identification;
                                object.position.x = str2[1];
                                object.position.y = str2[2];
                                object.position.z = str2[3];
                                machinebend.rotation.x = str2[4];
                                object.scale.set(.05, .05, .05);
                                object.traverse(function(child) { child.castShadow = true });
                                objects.push(object);
                            })
                            .catch(function(error) {
                                console.log(error);
                            })
                    });
                    render();
                });
            });
    };

    main.postMachine = postMachine;

    var objects = [];
    var mixer;
    var clock = new THREE.Clock();
    var listener = new THREE.AudioListener();
    var sound = new THREE.Audio(listener);
    var audioLoader = new THREE.AudioLoader();

    /**
     * Create scene
     * */

    let scene = new THREE.Scene();
    let raycaster = new THREE.Raycaster();

    /**
     * Create camera
     * */

    let camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.05, 1000);

    camera.position.z = 240;
    camera.position.y = 30;
    camera.position.x = -5;
    camera.rotation.x = -0.4;

    /**
     * Create renderer
     * */

    var renderer = new THREE.WebGLRenderer({ canvas: webgl, antialias: true, alpha: false });

    renderer.setClearColor("#b2dadd");
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    renderer.shadowMapType = THREE.BasicShadowMap;
    document.body.appendChild(renderer.domElement);

    var controls = new OrbitControls(camera, renderer.domElement);

    /**
     * Responsive window
     * */

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    /**
     *  Light
     **/
    const light = new THREE.PointLight(0xFFFFFF, 1.3, 125);
    const light2 = new THREE.PointLight(0xFFFFFF, 1.3, 125);

    light.position.set(0, 15, 28);
    light.castShadow = true;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 100;
    light2.position.set(0, 15, 68);
    light2.castShadow = true;
    light2.shadow.camera.near = 0.1;
    light2.shadow.camera.far = 100;
    scene.add(light);
    scene.add(light2);

    /**
     *  Objects variables
     * */

    var machinebend1 = null,
        machinebend2, roller, crate, crate2, fork = null,
        fork2 = null,
        floor, shelf, shelf2, shelf3, robot, spoon, spoon2, machinegrinder;

    const group = new THREE.Group();
    const center = new THREE.Group();

    /**
     *  Loader
     * */

    var loader = new FBXLoader();
    var mtlLoader = new MTLLoader();
    var objLoader = new OBJLoader();

    mtlLoader.load('/assets/mats/floor.mtl', function(materials) {
        materials.preload();

        var objLoader = new OBJLoader();

        objLoader.setMaterials(materials);

        objLoader.load('/assets/mats/floor.obj', function(object) {
            group.add(object);
            floor = object;
            object.name = 'floor';
            object.position.z -= 68;
            object.position.x -= 0;
            object.position.y = -1;
            floor.rotation.x = 4.9;
            object.scale.set(3, 3, 0.05);
            object.traverse(function(child) { child.receiveShadow = true });
            center.add(group);
            scene.add(center);
            group.position.z = 75;
        });
    });

    /**
     *  Machine bender setup
     * */

    mtlLoader.load('/assets/mats/machine_v1.mtl', function(materials) {
        materials.preload();
        objLoader.setMaterials(materials);

        objLoader.load('/assets/mats/machine_v1.obj', async function(object) {
            let machineID = 1;
            axios.get('https://mdf3nbgrp5.azurewebsites.net/api/Machine/' + machineID)
                .then(function(response) {
                    // handle success
                    let machineObj = response.data;
                    let str = JSON.stringify(machineObj.localization).split(";");
                    group.add(object);
                    machinebend1 = object;
                    object.name = machineObj.identification;
                    object.position.x = str[1];
                    object.position.y = str[2];
                    object.position.z = str[3];
                    machinebend1.rotation.x = str[4];
                    object.scale.set(.05, .05, .05);
                    object.traverse(function(child) { child.castShadow = true });
                    objects.push(object);
                })
                .catch(function(error) {
                    // handle error
                    console.log(error);
                })
        });
    });

    /**
     *  Machine bender 2 setup
     * */

    mtlLoader.load('/assets/mats/machine_v1.mtl', function(materials) {
        materials.preload();
        objLoader.setMaterials(materials);

        objLoader.load('/assets/mats/machine_v1.obj', function(object) {
            let machineID = 2;
            axios.get('https://mdf3nbgrp5.azurewebsites.net/api/Machine/' + machineID)
                .then(function(response) {
                    // handle success
                    let machineObj = response.data;
                    let str = JSON.stringify(machineObj.localization).split(";");
                    group.add(object);
                    machinebend2 = object;
                    object.name = machineObj.identification;
                    object.position.x = str[1];
                    object.position.y = str[2];
                    object.position.z = str[3];
                    machinebend2.rotation.x = str[4];
                    object.scale.set(.05, .05, .05);
                    object.traverse(function(child) { child.castShadow = true });
                    objects.push(object);
                })
                .catch(function(error) {
                    // handle error
                    console.log(error);
                })
        });
    });

    /**
     *  Rollers setup
     * */

    loader.load('/assets/mats/roller.fbx', function(object) {
        group.add(object);
        roller = object;
        object.name = 'roller';
        object.position.z = 7;
        object.position.x += 21.6;
        object.position.y = -1;
        roller.rotation.x -= 1.4;
        object.scale.set(.0005, .0005, .0005);
        scene.add(object);
    });

    loader.load('/assets/mats/roller.fbx', function(object) {
        group.add(object);
        roller = object;
        object.name = 'roller';
        object.position.z = 7;
        object.position.x += 13.4;
        object.position.y = -1;
        roller.rotation.x -= 1.4;
        object.scale.set(.0005, .0005, .0005);
        scene.add(object);
    });

    loader.load('/assets/mats/roller.fbx', function(object) {
        group.add(object);
        roller = object;
        object.name = 'roller';
        object.position.z = 7;
        object.position.x += 5.4;
        object.position.y = -1;
        roller.rotation.x -= 1.4;
        object.scale.set(.0005, .0005, .0005);
        scene.add(object);
    });

    loader.load('/assets/mats/roller.fbx', function(object) {
        group.add(object);
        roller = object;
        object.name = 'roller';
        object.position.z = 7;
        object.position.x -= 2.7;
        object.position.y = -1;
        roller.rotation.x -= 1.4;
        object.scale.set(.0005, .0005, .0005);
        scene.add(object);
    });

    loader.load('/assets/mats/roller.fbx', function(object) {
        group.add(object);
        roller = object;
        object.name = 'roller';
        object.position.z = 7;
        object.position.x -= 10.9;
        object.position.y = -1;
        roller.rotation.x -= 1.4;
        object.scale.set(.0005, .0005, .0005);
        scene.add(object);
    });

    loader.load('/assets/mats/roller.fbx', function(object) {
        group.add(object);
        roller = object;
        object.name = 'roller';
        object.position.z = 7;
        object.position.x -= 19.2;
        object.position.y = -1;
        roller.rotation.x -= 1.4;
        object.scale.set(.0005, .0005, .0005);
        scene.add(object);
    });

    /*
      Production line 2
    */

    loader.load('/assets/mats/roller.fbx', function(object) {
        group.add(object);
        roller = object;
        object.name = 'roller';
        object.position.z = 38;
        object.position.x -= 19.2;
        object.position.y = -6.8;
        roller.rotation.x -= 1.4;
        object.scale.set(.0005, .0005, .0005);
        scene.add(object);
    });

    loader.load('/assets/mats/roller.fbx', function(object) {
        group.add(object);
        roller = object;
        object.name = 'roller';
        object.position.z = 38;
        object.position.x -= 11.5;
        object.position.y = -6.8;
        roller.rotation.x -= 1.4;
        object.scale.set(.0005, .0005, .0005);
        scene.add(object);
    });

    loader.load('/assets/mats/roller.fbx', function(object) {
        group.add(object);
        roller = object;
        object.name = 'roller';
        object.position.z = 38;
        object.position.x -= 3.5;
        object.position.y = -6.8;
        roller.rotation.x -= 1.4;
        object.scale.set(.0005, .0005, .0005);
        scene.add(object);
    });

    loader.load('/assets/mats/roller.fbx', function(object) {
        group.add(object);
        roller = object;
        object.name = 'roller';
        object.position.z = 38;
        object.position.x += 4.6;
        object.position.y = -6.8;
        roller.rotation.x -= 1.4;
        object.scale.set(.0005, .0005, .0005);
        scene.add(object);
    });

    loader.load('/assets/mats/roller.fbx', function(object) {
        group.add(object);
        roller = object;
        object.name = 'roller';
        object.position.z = 38;
        object.position.x += 12.5;
        object.position.y = -6.8;
        roller.rotation.x -= 1.4;
        object.scale.set(.0005, .0005, .0005);
        scene.add(object);
    });

    loader.load('/assets/mats/roller.fbx', function(object) {
        group.add(object);
        roller = object;
        object.name = 'roller';
        object.position.z = 38;
        object.position.x += 20.5;
        object.position.y = -6.8;
        roller.rotation.x -= 1.4;
        object.scale.set(.0005, .0005, .0005);
        scene.add(object);
    });

    /**
     *  Robot setup (FBX type)
     */

    loader.load('/assets/mats/robot.fbx', async function(object) {
        let machineID = 4;
        axios.get('https://mdf3nbgrp5.azurewebsites.net/api/Machine/' + machineID)
            .then(function(response) {
                mixer = new THREE.AnimationMixer(object);
                var action = mixer.clipAction(object.animations[0]);
                action.play();
                group.add(object);
                let machineObj = response.data;
                let str = JSON.stringify(machineObj.localization).split(";");
                robot = object;
                object.name = machineObj.identification;
                object.position.x = str[1];
                object.position.y = str[2];
                object.position.z = str[3];
                object.scale.set(.01, .01, .01);

                object.traverse(function(child) {
                    if (child.isMesh) {
                        child.castShadow = true;
                    }
                });

                scene.add(object);

            }).catch(function(error) {
                console.log(error);
            })
    });

    /**
     *  Spoon setup (FBX type)
     */

    loader.load('/assets/mats/spoon.fbx', async function(object) {
        let productID = 1;
        axios.get('https://mdp3nbgrp5.azurewebsites.net/api/Product/' + productID)
            .then(function(response) {
                let productObj = response.data;
                group.add(object);
                spoon = object;
                object.name = productObj.name;
                object.position.z += 39;
                object.position.x += -1;
                object.position.y = -3;
                spoon.rotation.x += 0.1;
                spoon.rotation.z -= 0;
                spoon.rotation.y -= 1.55;
                object.scale.set(0.3, 0.3, 0.3);
                scene.add(object);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
    });

    /**
     *  Spoon 2 setup (FBX type)
     */

    loader.load('/assets/mats/spoon.fbx', function(object) {
        let productID = 2;
        axios.get('https://mdp3nbgrp5.azurewebsites.net/api/Product/' + productID)
            .then(function(response) {
                let productObj = response.data;
                group.add(object);
                spoon2 = object;
                object.name = productObj.name;
                object.position.z += 39;
                object.position.x += 21;
                object.position.y = -3;
                spoon2.rotation.x += 0.1;
                spoon2.rotation.z -= 0;
                spoon2.rotation.y -= 1.55;
                object.scale.set(0.3, 0.3, 0.3);
                scene.add(object);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
    });

    /**
     *  Machine grinder setup (FBX type)
     */

    loader.load('/assets/mats/machine_grinder.fbx', function(object) {
        let machineID = 3;
        axios.get('https://mdf3nbgrp5.azurewebsites.net/api/Machine/' + machineID)
            .then(function(response) {
                // handle success
                let machineObj = response.data;
                let str = JSON.stringify(machineObj.localization).split(";");
                group.add(object);
                machinegrinder = object;
                object.name = machineObj.identification;
                object.position.x = str[1];
                object.position.y = str[2];
                object.position.z = str[3];
                machinegrinder.rotation.x = str[4];
                object.scale.set(.001, .001, .001);
                object.traverse(function(child) { child.castShadow = true });
                scene.add(object);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
    });

    /**
     *  Mouse Tooltip
     */

    var mouse = new THREE.Vector2(); // 2D coordinates of the current mouse position, [0,0] is middle of the screen.

    function updateMouseCoords(event, coordsObj) {
        var rect = renderer.domElement.getBoundingClientRect();

        coordsObj.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        coordsObj.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    }

    function onMouseMove(event) {
        updateMouseCoords(event, mouse);
        raycaster.setFromCamera(mouse, camera); // Update the picking ray with the camera and mouse position

        var intersects = raycaster.intersectObjects(scene.children, true); // Calculate objects intersecting the picking ray

        if (intersects.length > 0) {
            var tooltipElement = document.getElementById("tooltip");

            if (intersects[0].object.parent.name == "floor") {
                tooltipElement.style.visibility = "hidden";
            } else {
                tooltipElement.style.visibility = "visible";
                tooltipElement.innerHTML = intersects[1].object.parent.name;
                tooltipElement.style.left = event.clientX + "px";
                tooltipElement.style.top = event.clientY + "px";
                console.log("selected: " + intersects[0].object.name);
            }
        } else {
            var tooltipElement = document.getElementById("tooltip");

            tooltipElement.style.visibility = "hidden";
            console.log("no hits");
        }
    }

    renderer.domElement.addEventListener('mousemove', onMouseMove, false);

    /**
     *  Crate setup
     * */

    mtlLoader.load('/assets/mats/crate.mtl', function(materials) {
        materials.preload();

        var objLoader = new OBJLoader();

        objLoader.setMaterials(materials);

        objLoader.load('/assets/mats/crate.obj', function(object) {
            group.add(object);
            crate = object;
            object.name = 'crate';
            object.position.z -= 68.5;
            object.position.x -= 26.5;
            object.position.y -= 2.8;
            crate.rotation.x -= 1.4;
            object.scale.set(.05, .05, .05);
        });
    });

    /**
     *  Crate 2 setup
     * */

    mtlLoader.load('/assets/mats/crate.mtl', function(materials) {
        materials.preload();

        var objLoader = new OBJLoader();

        objLoader.setMaterials(materials);

        objLoader.load('/assets/mats/crate.obj', function(object) {
            group.add(object);
            crate2 = object;
            object.name = 'crate2';
            object.position.z -= 38.5;
            object.position.x -= 26.5;
            object.position.y -= 8.5;
            crate2.rotation.x -= 1.4;
            object.scale.set(.05, .05, .05);
        });
    });

    /**
     *  Shelf setup
     **/

    loader.load('/assets/mats/shelf.fbx', function(object) {
        group.add(object);
        shelf = object;
        object.name = 'shelf';
        object.position.z = -9;
        object.position.x = -45;
        object.position.y = 12.7;
        shelf.rotation.x += 3.3;
        object.scale.set(0.0003, 0.0003, 0.0003);
        scene.add(object);
    });

    loader.load('/assets/mats/shelf.fbx', function(object) {
        group.add(object);
        shelf2 = object;
        object.name = 'shelf2';
        object.position.z = -9;
        object.position.x = -41;
        object.position.y = 12.7;
        shelf2.rotation.x += 3.3;
        object.scale.set(0.0003, 0.0003, 0.0003);
        scene.add(object);
    });

    loader.load('/assets/mats/shelf.fbx', function(object) {
        group.add(object);
        shelf3 = object;
        object.name = 'shelf3';
        object.position.z = -9;
        object.position.x = -37;
        object.position.y = 12.7;
        shelf3.rotation.x += 3.3;
        object.scale.set(0.0003, 0.0003, 0.0003);
        scene.add(object);
    });

    /**
     *  Fork setup
     * */

    mtlLoader.load('/assets/mats/Fork.mtl', function(materials) {
        materials.preload();
        objLoader.setMaterials(materials);

        objLoader.load('/assets/mats/Fork.obj', async function(object) {
            let productID = 5;
            axios.get('https://mdp3nbgrp5.azurewebsites.net/api/Product/' + productID)
                .then(function(response) {
                    let productObj = response.data;
                    group.add(object);
                    fork = object;
                    object.name = productObj.name;
                    object.position.z -= 67;
                    object.position.x += 22;
                    object.position.y = 2.7;
                    fork.rotation.x -= 1.4;
                    fork.rotation.z -= 1.55;
                    object.scale.set(0.3, 0.3, 0.3);
                })
                .catch(function(error) {
                    console.log(error);
                })
        });
    });

    /**
     *  Fork2 setup
     * */

    mtlLoader.load('/assets/mats/Fork.mtl', function(materials) {
        materials.preload();
        objLoader.setMaterials(materials);

        objLoader.load('/assets/mats/Fork.obj', async function(object) {
            let productID = 6;
            axios.get('https://mdp3nbgrp5.azurewebsites.net/api/Product/' + productID)
                .then(function(response) {
                    let productObj = response.data;
                    group.add(object);
                    fork2 = object;
                    object.name = productObj.name;
                    object.position.z -= 67;
                    object.position.x += 0;
                    object.position.y = 2.7;
                    fork2.rotation.x -= 1.4;
                    fork2.rotation.z -= 1.55;
                    object.scale.set(0.3, 0.3, 0.3);
                })
                .catch(function(error) {
                    console.log(error);
                })
        });
    });

    document.addEventListener('mousemove', onDocumentMouseMove, false);

    function onDocumentMouseMove(event) {
        event.preventDefault();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    var screenW = window.innerWidth,
        screenH = window.innerHeight;

    var spdx = 0,
        spdy = 0;

    var mouseX = 0,
        mouseY = 0,
        mouseDown = false;

    window.setInterval(function() {
        var scl = 0;
    }, 1000);

    window.addEventListener('DOMMouseScroll', mousewheel, false);
    window.addEventListener('mousewheel', mousewheel, false);

    function mousewheel(e) {
        camera.position.z -= e.wheelDelta * 0.025;
    }


    document.addEventListener('mousemove', function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        spdy = (screenH / 2 - mouseY) / 500;
        spdx = (screenW / 2 - mouseX) / 500;

        if (mouseDown) {
            center.rotation.x = spdy;
            center.rotation.y = spdx;
        }

    }, false);

    document.body.addEventListener("mousedown", function(event) {
        this.mouseDown = true
    }, false);

    document.body.addEventListener("mouseup", function(event) {
        this.mouseDown = false
    }, false);

    /**
     * Dat GUI widget setup for interaction with user
     * @type {{"light intensity": number}}
     */

    class ColorGUIHelper {
        constructor(object, prop) {
            this.object = object;
            this.prop = prop;
        }

        get value() {
            return `#${this.object[this.prop].getHexString()}`;
        }

        set value(hexString) {
            this.object[this.prop].set(hexString);
        }
    }

    /**
     * Drag and drop
     */

    var dragControls = new DragControls(objects, camera, renderer.domElement);

    dragControls.addEventListener('dragstart', function(event) {
        controls.enabled = false;
    });

    dragControls.addEventListener('dragend', function(event) {
        let machineID = 1;
        axios.get('https://mdf3nbgrp5.azurewebsites.net/api/Machine/' + machineID)
            .then(function(response) {
                let machineObj = response.data;

                if (event.object.name == machineObj.identification) {
                    paramsMB1.X_Position = event.object.position.x;
                    paramsMB1.Y_Position = event.object.position.y;
                    paramsMB1.Z_Position = event.object.position.z;
                } else {
                    paramsMB2.X_Position = event.object.position.x;
                    paramsMB2.Y_Position = event.object.position.y;
                    paramsMB2.Z_Position = event.object.position.z;
                }

                gui.updateDisplay();
            });
        controls.enabled = true;
    });

    var paramsMB1 = {
        showMachineBend1: true,
        X_Position: -2.5,
        Y_Position: 0.5,
        Z_Position: -76
    };

    var paramsMB2 = {
        showMachineBend2: true,
        X_Position: 23,
        Y_Position: -1,
        Z_Position: -67
    };

    var paramsMG = {
        showMachineGrinder: true,
        X_Position: 14,
        Y_Position: -6,
        Z_Position: 34
    };

    var paramsSound = {
        enableAudio: false
    };

    function mb1ChangeXPosition(x) {
        if (x >= -21 && x <= 23) {
            machinebend1.position.x = x;
        } else {
            alert("You have exceeded the production line limits. Please choose a value between -21 and 23");
        }

        render();
    };

    function mb1ChangeYPosition(y) {
        machinebend1.position.y = y;
        render();
    };

    function mb1ChangeZPosition(z) {
        machinebend1.position.z = z;
        render();
    };

    function mb2ChangeXPosition(x) {
        if (x >= -21 && x <= 23) {
            machinebend2.position.x = x;
        } else {
            alert("You have exceeded the production line limits. Please choose a value between -21 and 23");
        }

        render();
    };

    function mb2ChangeYPosition(y) {
        machinebend2.position.y = y;
        render();
    };

    function mb2ChangeZPosition(z) {
        machinebend2.position.z = z;
        render();
    };

    function mgChangeXPosition(x) {
        if (x >= -13 && x <= 23) {
            machinegrinder.position.x = x;
        } else {
            alert("You have exceeded the production line limits. Please choose a value between -13 and 23");
        }
        render();
    };

    function mgChangeYPosition(y) {
        machinegrinder.position.y = y;
        render();
    };

    function mgChangeZPosition(z) {
        machinegrinder.position.z = z;
        render();
    };

    function audioChange() {
        if (paramsSound.enableAudio == true) {
            camera.add(listener);

            audioLoader.load('/assets/audio/christmas_song.mp3', function(buffer) {
                sound.setBuffer(buffer);
                sound.setLoop(true);
                sound.setVolume(0.5);
                sound.play();
            }, )
        } else {
            sound.stop();
        }
    };

    const machineChange = function() {
        if (machinebend1) {
            if (paramsMB1.showMachineBend1) {
                machinebend1.visible = true;
                render();
            } else {
                machinebend1.visible = false;
                render();
            }
        }

        if (machinebend2) {
            if (paramsMB2.showMachineBend2) {
                machinebend2.visible = true;
                render();
            } else {
                machinebend2.visible = false;
                render();
            }
        }

        if (machinegrinder) {
            if (paramsMG.showMachineGrinder) {
                machinegrinder.visible = true;
                render();
            } else {
                machinegrinder.visible = false;
                render();
            }
        }
    };

    let h;
    const gui = new GUI();

    h = gui.addFolder("Sound Controls");
    h = gui.add(paramsSound, 'enableAudio').name('Sound On').onChange(audioChange);
    h = gui.addFolder("Light Controls");
    h = gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('light color');
    h = gui.add(light, 'intensity', 0, 2, 0.01).name('light intensity');
    h = gui.add(light, 'distance', 0, 300, 0.1).name('light distance');
    h = gui.addFolder("Object Controls");
    h = gui.add(paramsMB1, 'showMachineBend1').name('MB 1 Visible').onChange(machineChange);
    h = gui.add(paramsMB1, 'X_Position').name('--> X Position').onChange(mb1ChangeXPosition);
    h = gui.add(paramsMB1, 'Y_Position').name('--> Y Position').onChange(mb1ChangeYPosition);
    h = gui.add(paramsMB1, 'Z_Position').name('--> Z Position').onChange(mb1ChangeZPosition);
    h = gui.add(paramsMB2, 'showMachineBend2').name('MB 2 Visible').onChange(machineChange);
    h = gui.add(paramsMB2, 'X_Position').name('--> X Position').onChange(mb2ChangeXPosition);
    h = gui.add(paramsMB2, 'Y_Position').name('--> Y Position').onChange(mb2ChangeYPosition);
    h = gui.add(paramsMB2, 'Z_Position').name('--> Z Position').onChange(mb2ChangeZPosition);
    h = gui.add(paramsMG, 'showMachineGrinder').name('MG Visible').onChange(machineChange);
    h = gui.add(paramsMG, 'X_Position').name('--> X Position').onChange(mgChangeXPosition);
    h = gui.add(paramsMG, 'Y_Position').name('--> Y Position').onChange(mgChangeYPosition);
    h = gui.add(paramsMG, 'Z_Position').name('--> Z Position').onChange(mgChangeZPosition);

    const render = function() {
        controls.update();
        requestAnimationFrame(render);

        var delta = clock.getDelta();

        if (mixer) mixer.update(delta);

        /**
         * Animate fork
         **/

        if (fork) {
            if (fork.position.x < -25) { //ends here
                if (fork.position.y > -0.9) {
                    fork.position.y -= .04;
                    fork.position.x -= .02;
                } else {
                    fork.position.x = 22; //starts here
                    fork.position.y = 2.7;
                }
            } else {
                fork.position.x -= .05;
            }
        }

        /**
         * Animate fork 2
         **/

        if (fork2) {
            if (fork2.position.x < -25) { //ends here
                if (fork2.position.y > -0.9) {
                    fork2.position.y -= .04;
                    fork2.position.x -= .02;
                } else {
                    fork2.position.x = 22; //starts here
                    fork2.position.y = 2.7;
                }
            } else {
                fork2.position.x -= .05;
            }
        }

        /**
         * Animate spoon
         **/

        if (spoon) {
            if (spoon.position.x < -25) { //ends here
                if (spoon.position.y > -5) {
                    spoon.position.y -= .04;
                    spoon.position.x -= .03;
                } else {
                    spoon.position.x = 21; //starts here
                    spoon.position.y = -3;
                }
            } else {
                spoon.position.x -= .05;
            }
        }

        /**
         * Animate spoon2
         **/

        if (spoon2) {
            if (spoon2.position.x < -25) { //ends here
                if (spoon2.position.y > -5) {
                    spoon2.position.y -= .04;
                    spoon2.position.x -= .03;
                } else {
                    spoon2.position.x = 21; //starts here
                    spoon2.position.y = -3;
                }
            } else {
                spoon2.position.x -= .05;
            }
        }

        renderer.render(scene, camera);
    };

    render();

}

export { sgrai };