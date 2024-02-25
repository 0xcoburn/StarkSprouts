import React, { useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { AssetLoader } from "@/gameComponents/AssetLoader";
import { Tile } from "@/gameComponents/Tile";

export const WorldScene = () => {
  // G is grass, P is a garden plot
  const tileMap = `
  GGGGGGGGGGGGGGGGGGGGGGGGGG
  GGGGGGGGGGGGGGGGGGGGGGGGGG
  GGGGGGGGGGGGGGGGGGGGGGGGGG
  GGGGGGGGGGGGGGGGGGGGGGGGGG
  GGGGGGPPPPPPPPPPPPPPPGGGGG
  GGGGGGPPPPPPPPPPPPPPPGGGGG
  GGGGGGPPPPPPPPPPPPPPPGGGGG
  GGGGGGPPPPPPPPPPPPPPPGGGGG
  GGGGGGPPPPPPPPPPPPPPPGGGGG
  GGGGGGPPPPPPPPPPPPPPPGGGGG
  GGGGGGPPPPPPPPPPPPPPPGGGGG
  GGGGGGPPPPPPPPPPPPPPPGGGGG
  GGGGGGPPPPPPPPPPPPPPPGGGGG
  GGGGGGPPPPPPPPPPPPPPPGGGGG
  GGGGGGPPPPPPPPPPPPPPPGGGGG
  GGGGGGPPPPPPPPPPPPPPPGGGGG
  GGGGGGPPPPPPPPPPPPPPPGGGGG
  GGGGGGPPPPPPPPPPPPPPPGGGGG
  GGGGGGPPPPPPPPPPPPPPPGGGGG
  GGGGGGGGGGGGGGGGGGGGGGGGGG
  GGGGGGGGGGGGGGGGGGGGGGGGGG
  GGGGGGGGGGGGGGGGGGGGGGGGGG
  GGGGGGGGGGGGGGGGGGGGGGGGGG`;

  const renderTileMap = () => {
    const rows = tileMap.trim().split("\n");
    return rows.map((row, y) => {
      return row.split("").map((type, x) => {
        return <Tile type={type} position={[x, y]} />;
      });
    });
  };

  return <>{renderTileMap()}</>;
};
