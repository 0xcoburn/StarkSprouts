import { Button } from "../components/ui/Button";
import { useDojo } from "@/dojo/useDojo";
import type { Account } from "starknet";
import { useComponentValue } from "@dojoengine/react";
import { getEntityIdFromKeys } from "@dojoengine/utils";

export default function TestPage() {
  const {
    setup: {
      systemCalls: {
        initializeGarden,
        refreshGarden,
        removeRock,
        removeDeadPlant,
        waterPlant,
        plantSeed,
        harvestPlant,
      },
      clientComponents: { GardenCell },
    },
    account: { account, isDeploying, list },
  } = useDojo();

  if (isDeploying) {
    return <div>Deploying...</div>;
  }

  if (!account) {
    return <div>No account</div>;
  }

  const handleInitGarden = () => {
    console.log("Init World");
    initializeGarden(account);
  };
  const handleRefreshGarden = () => {
    console.log("Refresh World");
    refreshGarden(account);
  };
  const handleRemoveRock = () => {
    console.log("Remove Rock");
    removeRock(account, 1);
  };
  const handleRemoveDeadPlant = () => {
    console.log("Remove Dead Plant");
    removeDeadPlant(account, 1);
  };
  const handleWaterPlant = () => {
    console.log("Water Plant");
    waterPlant(account, 1);
  };
  const handlePlantSeed = () => {
    console.log("Plant Seed");
    plantSeed(account, 1, 2, 3);
  };
  const handleHarvestPlant = () => {
    console.log("Harvest Plant");
    harvestPlant(account, 1);
  };

  const gardenCells = useComponentValue(
    GardenCell,
    getEntityIdFromKeys([BigInt(account.address)])
  );
  console.log("gardenCells", gardenCells);

  return (
    <div className="relative w-screen h-screen flex flex-col">
      <main className="flex flex-col left-0 relative top-0 overflow-hidden grow">
        <div>
          <Button label="Init Garden" onPress={handleInitGarden} />
          <Button label="Refresh Garden" onPress={handleRefreshGarden} />
          <Button label="Remove Rock" onPress={handleRemoveRock} />
          <Button label="Remove Dead Plant" onPress={handleRemoveDeadPlant} />
          <Button label="Water Plant" onPress={handleWaterPlant} />
          <Button label="Plant Seed" onPress={handlePlantSeed} />
          <Button label="Harvest Plant" onPress={handleHarvestPlant} />
        </div>
      </main>
    </div>
  );
}
