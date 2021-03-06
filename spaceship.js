class Spaceship {
  constructor(obj) {
    this.id = obj['id'];
    this.name = obj['name'];
    this.phasers = obj['phasers'];
    this.shields = obj['shields'];
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    this.docked = true
    Store.data.spaceships.push(this)
  }
  crewMembers() {
    return Store.data.crewMembers.filter((member) => {
      return member.ship_id === this.id;
    })
  }




}
