import { generateId } from "../Utils/GenerateId.js"
export default class House {
  constructor(bedrooms, bathroom, sqFootage, price, address, imgUrl) {
    this.id = generateId()
    this.bedrooms = bedrooms
    this.bathroom = bathroom
    this.sqFootage = sqFootage
    this.price = price
    this.address = address
    this.imgUrl = imgUrl
  }

  // NOTE 'get' signifies a FAKE property
  // GETters MUST return a value
  get Template() {
    return `
    <div class="col-md-4 mb-3">
      <div class="card shadow">
          <img class="card-img-top" src="${this.imgUrl}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.bedrooms} Bed | ${this.bathroom} Bath | ${this.sqFootage} sqft</h4>
              <p class="card-text">${this.address} - $${this.price.toFixed(2)}</p>
          </div>
          <div class="px-3 pb-3 d-flex justify-content-between">
              <button type="button" class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
              <button type="button" class="btn btn-info" onclick="app.housesController.bid('${this.id}')">Bid</button>
          </div>
      </div>
    </div>
    `
  }
}
