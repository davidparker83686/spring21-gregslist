

import { generateId } from "../Utils/GenerateId.js"

export default class Job {
  constructor(company, title, rate, hours, description, imgUrl) {
    this.id = generateId()
    this.company = company
    this.title = title
    this.rate = rate
    this.hours = hours
    this.description = description
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
              <h4 class="card-title">${this.company} | ${this.title} </h4>
              <p class="card-text">${this.description}</p>
              <p class="card-text">${this.rate}per hour - ${this.hours}</p>
          </div>
          <div class="px-3 pb-3 d-flex justify-content-between">
              <button type="button" class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
          </div>
      </div>
    </div>
    `
  }
}
