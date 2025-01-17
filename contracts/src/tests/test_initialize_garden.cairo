// #[cfg(test)]
// mod tests {
//     use starknet::class_hash::Felt252TryIntoClassHash;
//     use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
//     use dojo::test_utils::{spawn_test_world, deploy_contract};
//     use stark_sprouts::{
//         models::{
//             garden_cell::{GardenCell, GardenCellImpl, PlotStatus, garden_cell},
//             plant::{Plant, PlantImpl, PlantType},
//             player_stats::{PlayerStats, PlayerStatsImpl, player_stats},
//             token_lookups::{TokenLookups, TokenLookupsImpl, token_lookups},
//         },
//         systems::{actions::{actions, IActionsDispatcher, IActionsDispatcherTrait}},
//     };
//     use debug::PrintTrait;

//     fn setup_world() -> IActionsDispatcher {
//         let mut models = array![
//             garden_cell::TEST_CLASS_HASH,
//             player_stats::TEST_CLASS_HASH,
//             token_lookups::TEST_CLASS_HASH
//         ];

//         let world = spawn_test_world(models);
//         let contract_address = world
//             .deploy_contract('salt', actions::TEST_CLASS_HASH.try_into().unwrap());
//         IActionsDispatcher { contract_address }
//     }

//     #[test]
//     #[available_gas(3000000000)]
//     fn test_initialize_garden() {
//         let player = starknet::contract_address_const::<0x0>();

//         let actions_system = setup_world();
//         actions_system.initialize_garden();
//     }

//     #[test]
//     #[available_gas(3000000000)]
//     fn test_plant_type_default() {
//         // caller
//         let player = starknet::contract_address_const::<0x0>();

//         // models
//         let mut models = array![garden_cell::TEST_CLASS_HASH];

//         // deploy world with models
//         let world = spawn_test_world(models);

//         // deploy systems contract
//         let contract_address = world
//             .deploy_contract('salt', actions::TEST_CLASS_HASH.try_into().unwrap());
//         let actions_system = IActionsDispatcher { contract_address };

//         // call initialize_garden
//         let mut gs = get!(world, (player, 2), (GardenCell,));

//         actions_system.initialize_garden();
//         actions_system.plant_seed(1, 2);

//         let mut gs = get!(world, (player, 2), (GardenCell,));
//         let b: bool = gs.plant.plant_type == PlantType::Bell;
//         b.print();
//     // gs.print();
//     // // call spawn()
//     // actions_system.spawn();

//     // // call move with direction right
//     // actions_system.move(Direction::Right);

//     // // Check world state
//     // let moves = get!(world, caller, Moves);

//     // // casting right direction
//     // let right_dir_felt: felt252 = Direction::Right.into();

//     // // check moves
//     // assert(moves.remaining == 99, 'moves is wrong');

//     // // check last direction
//     // assert(moves.last_direction.into() == right_dir_felt, 'last direction is wrong');

//     // // get new_position
//     // let new_position = get!(world, caller, Position);

//     // // check new position x
//     // assert(new_position.vec.x == 11, 'position x is wrong');

//     // // check new position y
//     // assert(new_position.vec.y == 10, 'position y is wrong');
//     }
// }


