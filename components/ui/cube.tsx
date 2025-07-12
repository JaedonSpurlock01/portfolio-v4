"use client";

import { useTheme } from "next-themes";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

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
    const currentMount = mountRef.current;

    if (!currentMount) return;

    // @ts-expect-error No need to check
    if (currentMount.children.length > 0) {
      // @ts-expect-error No need to check
      currentMount.innerHTML = "";
    }

    const width = 400;
    const height = 400;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;
    // @ts-expect-error No need to check
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
    // @ts-expect-error No need to check
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    // @ts-expect-error No need to check
    rendererRef.current = renderer;

    // OrbitControls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.minDistance = 3;
    controls.maxDistance = 15;
    // @ts-expect-error No need to check
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
    // @ts-expect-error No need to check
    cubeRef.current = cubeGroup;

    // @ts-expect-error No need to check
    currentMount.appendChild(renderer.domElement);

    const animate = () => {
      // @ts-expect-error No need to check
      animationRef.current = requestAnimationFrame(animate);

      if (controlsRef.current) {
        // @ts-expect-error No need to check
        controlsRef.current.update();
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        // @ts-expect-error No need to check
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }

      if (controlsRef.current) {
        // @ts-expect-error No need to check
        controlsRef.current.dispose();
        controlsRef.current = null;
      }

      if (
        currentMount &&
        rendererRef.current &&
        // @ts-expect-error No need to check
        rendererRef.current.domElement
      ) {
        // @ts-expect-error No need to check
        if (currentMount.contains(rendererRef.current.domElement)) {
          // @ts-expect-error No need to check
          currentMount.removeChild(rendererRef.current.domElement);
        }
      }

      if (cubeRef.current) {
        // @ts-expect-error No need to check
        cubeRef.current.traverse((child) => {
          if (child.geometry) {
            child.geometry.dispose();
          }
          if (child.material) {
            if (Array.isArray(child.material)) {
              // @ts-expect-error No need to check
              child.material.forEach((material) => material.dispose());
            } else {
              child.material.dispose();
            }
          }
        });

        if (sceneRef.current) {
          // @ts-expect-error No need to check
          sceneRef.current.remove(cubeRef.current);
        }
        cubeRef.current = null;
      }

      if (rendererRef.current) {
        // @ts-expect-error No need to check
        rendererRef.current.dispose();
        rendererRef.current = null;
      }

      if (sceneRef.current) {
        // @ts-expect-error No need to check
        sceneRef.current.clear();
        sceneRef.current = null;
      }

      cameraRef.current = null;
    };
  }, [theme]);

  return (
    <div className="hidden sm:inline-block -z-[10] -translate-x-10">
      <div
        ref={mountRef}
        style={{
          width: "400px",
          height: "400px",
        }}
      />
    </div>
  );
};
