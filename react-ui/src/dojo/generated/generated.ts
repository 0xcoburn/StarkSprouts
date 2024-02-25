// NOTE: in the future this file should be generated, but right now it's manually created

import { Account } from "starknet";
import { DojoProvider } from "@dojoengine/core";

export type IWorld = Awaited<ReturnType<typeof setupWorld>>;

export async function setupWorld(provider: DojoProvider) {
  function actions() {
    const contract_name = "actions";

    const updateGarden = async ({ account }: { account: Account }) => {
      try {
        return await provider.execute(
          account,
          contract_name,
          "update_garden",
          []
        );
      } catch (error) {
        console.error("Error updating garden:", error);
        throw error;
      }
    };

    const removeRock = async ({
      account,
      cellIndex,
    }: {
      account: Account;
      cellIndex: number;
    }) => {
      try {
        return await provider.execute(account, contract_name, "remove_rock", [
          cellIndex,
        ]);
      } catch (error) {
        console.error("Error removing rock:", error);
        throw error;
      }
    };

    const removeDeadPlant = async ({
      account,
      cellIndex,
    }: {
      account: Account;
      cellIndex: number;
    }) => {
      try {
        return await provider.execute(
          account,
          contract_name,
          "remove_dead_plant",
          [cellIndex]
        );
      } catch (error) {
        console.error("Error removing dead plant:", error);
        throw error;
      }
    };

    const waterPlants = async ({
      account,
      cellIndexes,
    }: {
      account: Account;
      cellIndexes: number[];
    }) => {
      try {
        return await provider.execute(account, contract_name, "water_plants", [
          ...cellIndexes,
        ]);
      } catch (error) {
        console.error("Error watering plants:", error);
        throw error;
      }
    };

    const plantSeeds = async ({
      account,
      seeds,
      cellIndexes,
    }: {
      account: Account;
      seeds: number[];
      cellIndexes: number[];
    }) => {
      try {
        return await provider.execute(account, contract_name, "plant_seeds", [
          ...seeds,
          ...cellIndexes,
        ]);
      } catch (error) {
        console.error("Error planting seeds:", error);
        throw error;
      }
    };

    const harvestPlants = async ({
      account,
      cellIndexes,
    }: {
      account: Account;
      cellIndexes: number[];
    }) => {
      try {
        return await provider.execute(
          account,
          contract_name,
          "harvest_plants",
          [...cellIndexes]
        );
      } catch (error) {
        console.error("Error harvesting plants:", error);
        throw error;
      }
    };

    return {
      updateGarden,
      removeRock,
      removeDeadPlant,
      waterPlants,
      plantSeeds,
      harvestPlants,
    };
  }
  return {
    actions: actions(),
  };
}