import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";


//Private
function _draw() {
  // What are we drawing
  let jobs = ProxyState.jobs
  let template = ''
  // if a collection itterate over collection to generate template for each object
  jobs.forEach(job => {
    console.log(job)
    template += job.Template
  })
  // render to page
  document.getElementById('jobs').innerHTML = template
}

//Public
export default class JobsController {
  constructor() {
    // OH oh more magic. you still know.....
    // 1st argument is name of the property in the AppState to 'watch' for changes
    // 2nd argument: name of the function to run when 1st argument property changes
    ProxyState.on('jobs', _draw);

    // manually run draw the on page load
    _draw()
  }


  createJob() {
    // if this method is triggered by an event (submit event) prevent the default action of reloding the page
    window.event.preventDefault()
    // grab the element from html that triggered this event
    const form = window.event.target
    debugger
    let newJob = {
      // @ts-ignore
      company: form.company.value,
      // @ts-ignore
      title: form.title.value,
      // @ts-ignore
      rate: form.rate.value,
      // @ts-ignore  this converts the string to a number
      hours: Number(form.hours.value),
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      imgUrl: form.imgUrl.value
    }
    jobsService.createJob(newJob)

    // @ts-ignore
    form.reset()

    // get the modal and close (using jQuery's "$" selector) 
    $('#new-job-form').modal('hide')
  }

  deleteJob(id) {
    jobsService.deleteJob(id)
  }
}
