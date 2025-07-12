"use client";

import { useTheme } from "next-themes";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
// Import OrbitControls - this will work in your project
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const Cube = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cubeRef = useRef(null);
  const animationRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);

  const { theme } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    // Fixed dimensions for the cube container
    const width = 400;
    const height = 400;

    // Scene setup
    const scene = new THREE.Scene();
    // Make background transparent
    scene.background = null;
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // Enable alpha channel for transparency
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // OrbitControls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth camera movement
    controls.dampingFactor = 0.05;
    controls.enableZoom = true; // Allow zoom
    controls.enablePan = false; // Disable panning (optional)
    controls.autoRotate = true; // Auto-rotate when not interacting
    controls.autoRotateSpeed = 0.5; // Slow auto-rotation
    controls.minDistance = 3; // Minimum zoom distance
    controls.maxDistance = 15; // Maximum zoom distance

    // Reset camera and controls to default position
    controls.reset();

    controlsRef.current = controls;

    // Create Rubik's cube structure (3x3x3 grid of smaller cubes)
    const cubeGroup = new THREE.Group();
    const cubeSize = 0.9;
    const spacing = 1;

    // Create 3x3x3 grid of cube outlines
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          // Skip the center cube to make it look more like a real Rubik's cube
          if (x === 0 && y === 0 && z === 0) continue;

          // Create solid cube with theme-appropriate faces
          const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
          const faceMaterial = new THREE.MeshBasicMaterial({
            color: theme === "dark" ? 0x131313 : 0xffffff,
            transparent: false,
          });

          const solidCube = new THREE.Mesh(geometry, faceMaterial);
          solidCube.position.set(x * spacing, y * spacing, z * spacing);
          cubeGroup.add(solidCube);

          // Create wireframe edges on top
          const edges = new THREE.EdgesGeometry(geometry);
          const edgeMaterial = new THREE.LineBasicMaterial({
            color: theme === "dark" ? 0xffffff : 0x000000,
            linewidth: 4,
          });

          const wireframe = new THREE.LineSegments(edges, edgeMaterial);
          wireframe.position.set(x * spacing, y * spacing, z * spacing);
          cubeGroup.add(wireframe);
        }
      }
    }

    scene.add(cubeGroup);
    cubeRef.current = cubeGroup;

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      // Update controls (required for damping and auto-rotate)
      if (controlsRef.current) {
        controlsRef.current.update();
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      // Dispose of controls
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }

      if (
        mountRef.current &&
        renderer.domElement &&
        mountRef.current.contains(renderer.domElement)
      ) {
        mountRef.current.removeChild(renderer.domElement);
      }

      // Dispose of Three.js objects
      if (cubeRef.current) {
        cubeRef.current.traverse((child) => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((material) => material.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      }

      if (renderer) {
        renderer.dispose();
      }
    };
  }, [theme]);

  return (
    <div className="hidden sm:inline-block -z-[1] -translate-y-38 -translate-x-10">
      <div
        ref={mountRef}
        style={{
          width: "100%",
          height: "100px",
        }}
      />
    </div>
  );
};
