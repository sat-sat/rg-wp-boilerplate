// class export example --------------------------
export class Fog {
  constructor (name) {
    this.name = name
  }
  say (msg) {
    console.log(this.name + ' says: ' + msg)
  }
}

// function export example -----------------------
// export function Fog (name) {
//   this.name = name
// }

// Fog.prototype.say = function (msg) {
//   console.log(this.name + ' says: ' + msg)
// }
