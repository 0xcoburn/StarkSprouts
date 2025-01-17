import { useDojo } from "@/dojo/useDojo";
import { useComponentValue } from "@dojoengine/react";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import type { GardenCellType } from "@/types";
import { getGardenPositionByCell } from "@/utils/gridHelper";
import { Plant } from "@/gameComponents/Plant";
import { Rock } from "@/gameComponents/Rock";

export type GardenCellProps = {
  cell: GardenCellType;
};

export const GardenCellTile = ({ cell }: GardenCellProps) => {
  const position = getGardenPositionByCell(cell.cell_index);

  if (cell.plant.plant_type) {
    return (
      <Plant
        key={cell.cell_index}
        plantType={cell.plant.plant_type}
        position={[position[0], position[1]]}
        cellIndex={cell.cell_index}
      />
    );
  }

  if (cell.has_rock) {
    return (
      <Rock
        key={cell.cell_index}
        position={[position[0], position[1]]}
        cellIndex={cell.cell_index}
      />
    );
  }
};
