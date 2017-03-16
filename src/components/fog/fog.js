export class Fog {
  constructor (name) {
    this.name = name
  }
  say (msg) {
    console.log(this.name + ' says: ' + msg)
  }
}