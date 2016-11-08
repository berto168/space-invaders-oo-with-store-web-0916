// const crewMember = (function createCrewMember() {
//   let id = 1
//   return class {
//     constructor(position) {
//       this.position = position;
//       this.id = id++;
//       let newObj = Object.assign({}, {coordinates: [...store().coordinates], robots: [...(store().robots), this]})
//       stores.push(newObj)
//     }
//   }
// }())


class CrewMember {
  constructor(obj) {
    this.position = obj['position'];
    this.id = obj['id'];
    this.ship_id = undefined;
    this.currentShip = 'Looking for a Rig';
    Store.data.crewMembers.push(this)
  }
  // function checkId(spaceship) {
  //   return spaceship.id === this.ship_id;
  // }
  // assignShip(spaceship) {
  //   return Store.data.spaceships.filter((ship) => {
  //     return ship.id === this.ship_id;
  //   })
  // }


  engageWarpDrive() {
    if (this.ship_id === undefined) {
      return 'had no effect'
    // } else (this.position === 'pilot') {
    //   (return Store.data.spaceships.filter(ship) => {
    //     return ship.id === this.ship_id;)[0].warpDrive
    //   }
    }
  }


}
