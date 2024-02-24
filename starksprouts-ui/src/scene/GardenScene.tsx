import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { getGardenTile } from "@/utils/garden";

export const GardenScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      };

      window.addEventListener("resize", handleResize);

      const scene = new THREE.Scene();

      // camera looks top down
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
      );
      camera.position.set(0, 12, 0);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      containerRef.current.appendChild(renderer.domElement);

      // for loading garden textures
      const loader = new THREE.TextureLoader();

      // create grid of tiles
      const tileSize = 1;
      const gridSize = 15;
      for (let x = -gridSize / 2; x < gridSize / 2; x++) {
        for (let y = -gridSize / 2; y < gridSize / 2; y++) {
          console.log(`X: ${x}, Y: ${y}`);
          const texture = loader.load(getGardenTile({ x, y, gridSize }));
          const geometry = new THREE.PlaneGeometry(tileSize, tileSize);
          const material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide,
          });
          const tile = new THREE.Mesh(geometry, material);
          tile.rotation.x = -Math.PI / 2;
          tile.position.set(x * tileSize, 0, y * tileSize);
          scene.add(tile);
        }
      }

      const renderScene = () => {
        requestAnimationFrame(renderScene);
        renderer.render(scene, camera);
      };

      renderScene();

      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener("resize", handleResize);
        scene.clear();
        renderer.dispose();
        if (containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
      };
    }
  }, []);
  return <div ref={containerRef} />;
};
